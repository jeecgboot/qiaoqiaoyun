# 移动端 H5 部署

部署包中的 `qiaoqiaoyun_app_h5.zip` 是移动端 APP 的 H5 版本（纯静态文件），手机浏览器、钉钉、企业微信里都可以直接访问。需要先把后端服务部署好（参考 [README 快速开始](../README.md#快速开始)）。

**1. 解压到服务器**

```bash
mkdir -p /opt/qiaoqiaoyun-h5
unzip qiaoqiaoyun_app_h5.zip -d /opt/qiaoqiaoyun-h5
```

**2. 修改后端接口地址**

编辑 `/opt/qiaoqiaoyun-h5/_app.config.js`，把 `API_BASE_URL` 改成你的后端地址，`SHARE_URL` 改成 H5 的访问地址：

```js
window._appConfig = {"API_BASE_URL":"http://<服务器IP>","SHARE_URL":"http://<服务器IP>:8051"};
```

**3. 配置 Nginx**

H5 的资源用的是根路径（`/static/...`），必须单独占一个端口或域名，不能放在子目录下：

```nginx
server {
    listen       8051;
    server_name  localhost;
    root         /opt/qiaoqiaoyun-h5;
    index        index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

执行 `nginx -s reload` 后，用手机访问 `http://<服务器IP>:8051`，账号密码和 PC 端一样。

**4. 修改后端配置中的 H5 地址**

编辑后端 `config/application-prod.yml`，把 `jeecg.domainUrl.app` 改成 H5 的访问地址（Docker 部署可以直接传环境变量 `JEECG_DOMAIN_URL_APP`），然后重启后端：

```yaml
jeecg:
  domainUrl:
    app: http://<服务器IP>:8051
```

> 记得在防火墙和云安全组里放行 8051 端口。
