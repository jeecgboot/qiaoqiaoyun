中文 | [English](./README.md)

# 敲敲云 AI零代码平台

最新版本： 2.3.0（发布日期：2026-01-12）

[![](https://img.shields.io/badge/Author-北京国炬信息技术有限公司-orange.svg)](https://www.guojusoft.com)
[![](https://img.shields.io/badge/version-2.3.0-brightgreen.svg)](https://github.com/jeecgboot/qiaoqiaoyun)
[![GitHub stars](https://img.shields.io/github/stars/jeecgboot/qiaoqiaoyun.svg?style=social&label=Stars)](https://github.com/jeecgboot/qiaoqiaoyun)
[![GitHub forks](https://img.shields.io/github/forks/jeecgboot/qiaoqiaoyun.svg?style=social&label=Fork)](https://github.com/jeecgboot/qiaoqiaoyun)
[![](https://img.shields.io/badge/blog-免费低代码平台-orange.svg)](https://jeecg.com/download)

敲敲云是一款 **完全免费** 的零代码应用搭建平台，助力企业快速搭建业务系统和构建AI应用。用户无需编码，即可快速拖拽出复杂业务系统，5分钟可搭建一套CRM系统！她集成了**零代码应用**、**AI应用平台**和**AI知识库**，拥有完善的**表单引擎**、**流程引擎**、**仪表盘引擎**、**大屏&报表**，可满足企业90%以上的业务场景需求。

```
🎯 专注于开源，打造 "专业 易用 智能" 的企业级AI零代码平台
📜 开源协议：功能免费、可以商用、代码不开放
🚀 我们的口号：做简道云/明道云本地化的平替产品
💡 核心优势：支持私有化部署、数据自主可控、永久免费使用
```

**视频介绍**

[![](https://upload.jeecg.com/jeecg/qiaoqiaoyunsite/qqyunvideo.png)](https://www.bilibili.com/video/BV1jUQeYfEM2)

---

## 目录

- [快速开始](#快速开始)
  - [一键命令安装（推荐）](#一键命令安装推荐)
  - [Docker 一键安装](#docker-一键安装)
  - [手动部署](#手动部署)
  - [下载部署包](#下载部署包)
- [核心特性](#核心特性)
- [功能清单](#功能清单)
- [典型应用场景](#典型应用场景)
- [高级功能说明](#高级功能说明)
- [平台功能截图](#平台功能截图)
- [技术交流](#技术交流)

---

## 快速开始

### 一键命令安装（推荐）

只需一条命令，自动完成环境检测、依赖安装和应用部署，全新安装约需 **3 分钟**。

**Linux / macOS**

```bash
curl -fsSL https://www.qiaoqiaoyun.com/install.sh | bash
```

> 支持 TencentOS、Alibaba Cloud Linux、CentOS Stream、Anolis OS、OpenCloudOS、Rocky Linux、RHEL 8+、CentOS 8+ 等 RHEL 系发行版，需 root 权限。

**部署完成后**

| 项目 | 值 |
|------|-----|
| 访问地址 | `http://<服务器IP>` |
| 默认账号 | `admin` |
| 默认密码 | `123456` |
| 安装耗时 | 约 3 分钟 |

**安装前请确认：**

- 开放 80 端口（防火墙）：`firewall-cmd --zone=public --add-port=80/tcp --permanent && firewall-cmd --reload`
- 开放 80 端口（云安全组）：在云服务器控制台的安全组/网络ACL中放行入方向 TCP 80 端口

**常用命令：**

```bash
# 查看日志
tail -f /opt/qiaoqiaoyun/qqyun.log

# 停止服务
kill $(cat /opt/qiaoqiaoyun/qqyun.pid)

# 启动服务
cd /opt/qiaoqiaoyun && nohup bash start.sh >> qqyun.log 2>&1 &
```

### Docker 一键安装

一条命令即可启动敲敲云，自动安装 Docker 环境、拉取镜像并通过 Docker Compose 编排部署。

**Linux / macOS（推荐）**

```bash
curl -fsSL https://www.qiaoqiaoyun.com/docker-install.sh | bash
```

> 自动安装 Docker 和 Docker Compose，支持 TencentOS、OpenCloudOS、Alibaba Cloud Linux、CentOS 等主流发行版。

**部署完成后**

| 项目 | 值 |
|------|-----|
| 访问地址 | `http://<服务器IP>` |
| 默认账号 | `admin` |
| 默认密码 | `123456` |
| 容器管理 | `docker compose` |

**安装前请确认：**

- 开放 80 端口（防火墙）：`firewall-cmd --zone=public --add-port=80/tcp --permanent && firewall-cmd --reload`
- 开放 80 端口（云安全组）：在云服务器控制台的安全组/网络ACL中放行入方向 TCP 80 端口

**常用命令：**

```bash
# 查看日志
docker compose -f /opt/qiaoqiaoyun-docker/docker-compose.yml logs -f

# 停止服务
docker compose -f /opt/qiaoqiaoyun-docker/docker-compose.yml down

# 启动服务
docker compose -f /opt/qiaoqiaoyun-docker/docker-compose.yml up -d
```

> 如自动化脚本安装不成功，可参考 [Docker 手工部署文档](https://help.qiaoqiaoyun.com/open/dockerCloud.html)，通过 Docker Compose 手动完成部署。

### 手动部署

安装手册：https://help.qiaoqiaoyun.com/open/simpleStart.html

```
1. 环境准备
   - 安装 JDK 8+（推荐 JDK 17）
   - 安装 MySQL 5.7+、MongoDB、Redis

2. 数据库初始化
   - 执行 MySQL 脚本：qiaoqiaoyun.sql（自动创建数据库：qiaoqiaoyun）
   - MongoDB 不需要初始化

3. 配置修改
   - 编辑 config/application-prod.yml 配置文件
   - 修改 MySQL 数据库、Redis 和 MongoDB 的配置

4. 启动应用
   - Windows：双击 start.bat
   - Linux/macOS：执行 ./start.sh

5. 访问系统
   - 地址：http://localhost
   - 账号：admin
   - 密码：123456
```

> 💡 首次启动可能需要 1-2 分钟，如遇端口占用可修改配置文件中的端口号。

### 下载部署包

#### 1. 网盘下载（推荐）

直接通过 [百度网盘下载](https://pan.baidu.com/s/141_ugZIGfuiDw3t6GvyR1Q?pwd=gdkq)

#### 2. 通过 Release 下载（推荐）

直接从 Release 页面下载完整安装包：[GitHub Release](https://github.com/jeecgboot/qiaoqiaoyun/releases)

#### 3. Git LFS 克隆下载

> qiaoqiaoyun-start-\*.jar 采用 Git LFS 上传，直接 `git clone` 下载会发现 jar 文件只有 1 KB，需先安装 Git LFS。

- **Windows**：从 [Git LFS 官网](https://git-lfs.github.com/) 下载安装
- **macOS**：`brew install git-lfs`
- **Linux**：使用包管理器安装，或从 [Git LFS GitHub](https://github.com/git-lfs/git-lfs/releases) 下载

安装 Git LFS 后执行：
```bash
git clone https://gitee.com/jeecg/qiaoqiaoyun.git
```

---

## 核心特性

- **🤖 AI智能赋能**：集成 ChatGPT、DeepSeek 等主流大模型，支持 AI 建表、智能问答、工作流编排
- **📊 可视化设计**：拖拽式表单设计、流程设计、仪表盘设计，零代码基础也能快速上手
- **🔄 流程自动化**：强大的流程引擎，支持审批、填写、数据处理（增、删、改、查流程节点）等自动化业务流转
- **📱 多端适配**：支持 Web、APP、H5、钉钉、企业微信等多终端访问
- **🔌 开放集成**：提供完善的 API 接口，支持与第三方系统无缝对接
- **🏢 私有化部署**：支持本地部署，数据完全自主可控，保障企业数据安全
- **📈 数据可视化**：20+ 种统计图表，实时展示业务数据，辅助决策分析
- **🎨 应用模板**：内置丰富的行业应用模板，支持一键导入快速使用

#### 为什么选择敲敲云？

| 优势 | 说明 |
|------|------|
| ✅ 完全免费 | 核心功能永久免费使用，无隐藏收费 |
| ✅ 私有化部署 | 数据完全自主可控，满足企业安全要求 |
| ✅ 零代码门槛 | 拖拽即可完成复杂业务系统搭建 |
| ✅ AI智能加持 | 集成主流大模型，提升开发效率 |
| ✅ 丰富模板 | 覆盖多个行业场景，开箱即用 |
| ✅ 流程引擎 | 支持复杂业务流程自动化 |
| ✅ 技术支持 | 详细文档、活跃社区、专业技术支持 |

---

## 功能清单

1. **应用管理**：创建/修改/删除应用、排序、应用分组、应用回收站
2. **工作表管理**：类似 Excel 表格展示数据，支持看板和日历视图，可设计表单字段，支持数据的增删改查、分享、打印、导入导出
3. **视图管理**：多视图支持（表格视图、日历视图、看板视图），个性化配置、过滤、排序、自定义显示字段
4. **流程引擎**：支持审批、填写、数据处理（增、删、改、查流程节点）等自动化业务流转
5. **日历视图**：以日历形式按日期展示数据，支持月/周/日模式切换
6. **表单发布**：配置表单发布模式，供外部人员填写，进行数据采集
7. **表单设计器**：40+ 种控件类型，每个控件拥有不同的属性配置
8. **复杂控件**：关联记录、子表、栅格布局，支持一行多列显示
9. **函数能力**：35 种系统函数（数学、日期、文本、逻辑），支持表单控件默认值计算
10. **仪表盘设计器**：配置统计图表、按钮、轮播图等，数据可视化呈现

---

## 典型应用场景

| 场景 | 说明 |
|------|------|
| 🔄 **数字化转型** | 帮助传统企业从纸质办公转向数字化，降低门槛，快速响应业务变化 |
| 📝 **数据采集与管理** | 替代 Excel，搭建工单管理、客户登记、问卷调查等系统，自动生成报表 |
| 💻 **业务系统搭建** | CRM、进销存、OA、财务管理、项目管理、MIS 等企业系统 |
| 🎨 **快速原型设计** | 客户现场快速搭建原型，拖拽完成系统设计，支持快速迭代 |
| 📦 **应用模板交易** | 搭建通用业务应用导出为模板，可作为数字产品进行交易和分发 |
| 🎓 **教育培训** | 毕业设计快速搭建、教学演示、实训平台，无需编程基础 |

---

## 高级功能说明

### 关联记录与工作流应用实践

敲敲云平台提供了强大的**关联记录控件**、**计算控件**、**函数表达式**和**工作流引擎**，可以构建智能化的业务系统。

#### 核心技术组件

- **关联记录控件**：实现跨表数据关联，避免重复录入
- **计算控件**：字段自动计算，减少人为错误
- **函数表达式**：复杂逻辑判断和数据处理
- **工作流引擎**：驱动业务自动化流转

#### 典型应用场景

**场景一：采购单自动生成应收款单**
```
采购单（关联供应商/产品） → 自动计算金额 → 工作流触发 → 自动生成应收款单
```

**场景二：入库单自动更新库存**
```
入库单（关联产品） → 计算入库数量 → 工作流触发 → 自动更新库存数量
```

#### 工作流节点说明

| 节点类型 | 功能说明 | 使用场景 |
|----------|----------|----------|
| 增（Create） | 新建记录 | 自动生成单据、创建库存记录 |
| 查（Query） | 查询数据 | 检查数据存在性、获取基础信息 |
| 改（Update） | 更新记录 | 库存累加、状态更新 |
| 循环（Loop） | 批量处理 | 遍历明细行、批量操作 |

#### 业务价值

- 🔗 **数据互联**：打破信息孤岛，实现数据自动关联
- 🤖 **自动计算**：减少手工错误，提高数据准确性
- ⚡ **流程自动化**：消除重复操作，提升业务效率
- 📊 **实时更新**：库存、财务数据实时同步
- 🔄 **业务闭环**：完整的自动化业务流程

> 📋 详细的实践指南请参考 [关联记录与工作流应用.md](./关联记录与工作流应用.md)

---

## 平台功能截图

### 应用管理

![](https://oscimg.oschina.net/oscnet/up-59b983dedd8c43f7ea5b784b1584e0a6704.png)

![](https://oscimg.oschina.net/oscnet/up-40655b7b552de38a6b2edaef2959f878466.png)

![](https://oscimg.oschina.net/oscnet/up-9581d65f0114b0722a8ec223f4bb76d82c8.png)

![](https://oscimg.oschina.net/oscnet/up-2b731b7e18698bb9747fc2963deff788cba.png)

### 表单引擎

> 可视化拖拽设计，控件丰富轻松满足日常业务需求，像搭积木一样轻松完成表单创建。

支持自定义表单视图（表格、看板、日历）

![](https://oscimg.oschina.net/oscnet/up-42541410a7eaccadd1caf2025e1251a0b26.png)

40+ 种丰富表单控件

![](https://oscimg.oschina.net/oscnet/up-655d3f41e89000fecb55693b64ea155596a.png)

丰富的布局方式

![](https://oscimg.oschina.net/oscnet/up-60ed5b69aa79649bd46682e00d3f3faac36.png)

### 仪表盘

> 多种图表数据可视化展现，图表、按钮、富文本、轮播图、嵌入 URL 皆可配置。

![](https://oscimg.oschina.net/oscnet/up-ac3f164e60439357fab80fb02fde550d61d.png)

设计界面

![](https://oscimg.oschina.net/oscnet/up-18cd5e9ee2e74d995b2a9e54aaae8f3fbd9.png)

20+ 种统计图表

![](https://oscimg.oschina.net/oscnet/up-1ece674f91da3ebe2854cfcf68bf69d7725.png)

### 移动端 APP

APP、H5、钉钉移动端随时随地可操作

![](https://oscimg.oschina.net/oscnet/up-68eb5541d5f0d9906c059f32851e877fe6e.png)

### 流程引擎

> 可视化流程拖拽设计，更符合中国国情的流程引擎，任意驳回、委派、跳转，实现审批、填写、数据处理等自动流转。

设计界面

![](https://oscimg.oschina.net/oscnet/up-a867e27f5463bc79a273846be957770fac8.png)

25 种丰富的流程节点

![](https://oscimg.oschina.net/oscnet/up-8068a15d1c0e07dd6982cbacda66bcdc1be.png)

节点配置丰富，可设置不同审批人、权限和高级配置

![](https://oscimg.oschina.net/oscnet/up-5d6f0aa7275eba273a2777218cf3625385f.png)

---

## 技术交流

| 渠道 | 链接 |
|------|------|
| 官方网站 | https://www.qiaoqiaoyun.com |
| 在线体验 | https://app.qiaoqiaoyun.com |
| 使用手册 | https://help.qiaoqiaoyun.com |
| QQ交流群 | 967780549 |
| 技术支持 | [在线反馈工单 Issues](https://github.com/jeecgboot/qiaoqiaoyun/issues/new) |
