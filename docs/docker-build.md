# Docker 本地构建镜像部署

用本仓库里的 `docker-compose.yml` 和 `docker/Dockerfile.*` 在本地构建镜像并启动，适合需要自定义配置、或者想自己打包镜像的场景。只想快速装好用的话，推荐 [Docker 一键安装](../README.md#docker-一键安装)。

## 前提

- 已安装 Docker 和 Docker Compose（[安装说明](https://help.qiaoqiaoyun.com/open/base/dockerCompose.html)）
- 已下载完整项目，根目录下要有 `qiaoqiaoyun-start-2.4.0.jar` 和 `qiaoqiaoyun.sql`（jar 包较大，GitHub 网络不好时从 [百度网盘](https://pan.baidu.com/s/141_ugZIGfuiDw3t6GvyR1Q?pwd=gdkq) 或 [Release](https://github.com/jeecgboot/qiaoqiaoyun/releases) 下载）

## 目录结构

```
├── docker-compose.yml              # 编排文件
├── qiaoqiaoyun-start-2.4.0.jar     # 后端程序
├── qiaoqiaoyun.sql                 # 数据库初始化脚本（MySQL 首次启动时自动导入）
├── qiaoqiaoyun_app_h5.zip          # 移动端 H5 静态包（打进 H5 镜像）
└── docker
    ├── Dockerfile.javax            # 后端镜像
    ├── Dockerfile.h5               # 移动端 H5 镜像（nginx）
    ├── Dockerfile.mysql            # MySQL 镜像（内置初始化脚本）
    ├── Dockerfile.mongo            # MongoDB 镜像（内置建用户脚本）
    └── config
        ├── application-prod.yml    # 后端配置（打进后端镜像）
        ├── init-mongo.js           # MongoDB 初始化脚本
        ├── nginx-h5.conf           # H5 的 nginx 配置
        └── h5-config.sh            # H5 启动时按环境变量生成 _app.config.js
```

## 构建并启动

在项目根目录执行：

```bash
docker-compose -p qiaoqiaoyun_start up -d
```

第一次执行会先尝试从阿里云拉取镜像，拉不到时自动在本地构建。启动顺序如下：

1. MySQL、Redis、MongoDB 先启动，MySQL 首次启动会导入 `qiaoqiaoyun.sql`，耗时 1~3 分钟
2. MySQL 健康检查通过（能查到 `sys_user` 表）后，后端 `qiaoqiaoyun-system` 才会启动
3. 后端启动约需 1 分钟

查看状态，`qiaoqiaoyun-mysql` 显示 `(healthy)` 后再等后端启动完成：

```bash
docker ps
docker logs -f qiaoqiaoyun-system    # 出现 Application QiaoQiaoYun is running! 即启动成功
```

访问 `http://localhost`，账号 `admin`，密码 `123456`。

移动端 H5 会一起启动，用手机访问 `http://<服务器IP>:8051`，账号密码和 PC 端一样。

## 镜像与端口

| 服务 | 镜像 | 宿主机端口 |
|------|------|-----------|
| qiaoqiaoyun-system | registry.cn-hangzhou.aliyuncs.com/jeecgdocker/qiaoqiaoyun-system:2.4.0 | 80 |
| qiaoqiaoyun-h5 | registry.cn-hangzhou.aliyuncs.com/jeecgdocker/qiaoqiaoyun-h5:2.4.0 | 8051 |
| qiaoqiaoyun-mysql | registry.cn-hangzhou.aliyuncs.com/jeecgdocker/qiaoqiaoyun-mysql:2.4.0 | 13306 |
| qiaoqiaoyun-mongo | registry.cn-hangzhou.aliyuncs.com/jeecgdocker/qiaoqiaoyun-mongo:2.4.0 | 17017 |
| qiaoqiaoyun-redis | registry.cn-hangzhou.aliyuncs.com/jeecgdocker/redis:5.0 | 不对外暴露 |

服务之间通过内部网络 `qiaoqiaoyun` 互相访问，宿主机端口只是给外部工具（如 Navicat）连接用。端口冲突时改 `docker-compose.yml` 里 `ports` 左边的数字即可，不影响程序运行。

## 自定义配置

**方式一：传环境变量（推荐，不需要重新构建）**

在 `docker-compose.yml` 的 `qiaoqiaoyun-system` 下加 `environment`：

```yaml
  qiaoqiaoyun-system:
    ...
    environment:
      JEECG_DOMAIN_URL_PC: http://<服务器IP>
      JEECG_DOMAIN_URL_APP: http://<服务器IP>:8051
      JEECG_UPLOAD_TYPE: alioss
      OSS_ACCESS_KEY: your-access-key
      OSS_SECRET_KEY: your-secret-key
```

然后执行 `docker-compose -p qiaoqiaoyun_start up -d` 生效。全部参数见 [参数说明](https://help.qiaoqiaoyun.com/open/docker.html)。

移动端 H5 默认请求「访问 H5 时用的主机 + 80 端口」上的后端，后端用默认 80 端口时不需要配置。后端换了端口、用了域名或 HTTPS 时，在 `qiaoqiaoyun-h5` 下传环境变量：

```yaml
  qiaoqiaoyun-h5:
    ...
    environment:
      API_BASE_URL: https://api.example.com     # 后端接口地址
      SHARE_URL: https://app.example.com        # H5 访问地址（分享链接用）
```

**方式二：改配置文件（需要重新构建）**

修改 `docker/config/application-prod.yml` 后执行：

```bash
docker-compose -p qiaoqiaoyun_start up -d --build
```

## 常用命令

```bash
# 查看日志
docker logs -f qiaoqiaoyun-system

# 停止服务
docker-compose -p qiaoqiaoyun_start down

# 更新 jar 包或配置后，重新构建并启动
docker-compose -p qiaoqiaoyun_start up -d --build

# 清空数据重新初始化（会删除 MySQL、MongoDB 的全部数据，慎用）
docker-compose -p qiaoqiaoyun_start down -v
docker-compose -p qiaoqiaoyun_start up -d --build
```

## 注意事项

- **数据保存在数据卷里**：MySQL、MongoDB 的数据存放在 Docker 数据卷中，`down`、重建容器都不会丢数据。也因为这样，`qiaoqiaoyun.sql` 和 `init-mongo.js` 只在第一次启动时执行，之后修改它们不会生效；需要重新初始化时用 `down -v`。
- **后端固定使用 prod 配置**：后端镜像设置了 `SPRING_PROFILES_ACTIVE=prod`，读取的是 `docker/config/application-prod.yml`。
- **升级 jar 版本**：替换 jar 后，要同步修改 `docker/Dockerfile.javax` 里的 jar 文件名，以及 `docker-compose.yml` 里的镜像版本号。
- **更新 H5**：替换 `qiaoqiaoyun_app_h5.zip` 后执行 `docker-compose -p qiaoqiaoyun_start up -d --build qiaoqiaoyun-h5`。
- **H5 里的分享、消息跳转链接**：后端的 `JEECG_DOMAIN_URL_APP` 默认是 `http://localhost:8051`，部署到服务器后要改成 `http://<服务器IP>:8051`（见上面的「传环境变量」）。
