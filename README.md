敲敲云零代码平台
===============

最新版本： 2.2.0（发布日期：2025-10-28） 




本地快速部署(敲敲云)
-----------------------------------

解压安装包：v2.2.0.zip

```
- 1.本地安装jdk7+
- 2.执行下面的Mysql脚本(自动创建数据库：qiaoqiaoyun)
   qiaoqiaoyun.sql
- 3.修改数据库和redis等配置
   修改 config/application-prod.yml，详见 https://help.qiaoqiaoyun.com/open/simpleStart.html
- 4.双击 start.bat 启动后台
- 5.访问敲敲云
   http://localhost
   账号密码：admin/123456
```

获取部署包
-----------------------------------

### 📋 系统要求

- **Java版本**：JDK 8+ （推荐 JDK 17）
- **内存**：建议 4GB+ RAM
- **数据库**：MySQL 5.7+ 或 8.0+
- **数据库**：MongoDB
- **缓存**：Redis

#### 1.通过 Release 下载（⭐ 推荐）

> **推荐方式**：直接从 Release 页面下载完整安装包

- GitHub Release：[https://github.com/jeecgboot/qiaoqiaoyun/releases](https://github.com/jeecgboot/qiaoqiaoyun/releases)

#### 2.网盘下载

直接通过 [百度网盘下载](https://pan.baidu.com/s/141_ugZIGfuiDw3t6GvyR1Q?pwd=gdkq)

#### 3.Git LFS 克隆下载
> ⚠️ **注意**：因为 qiaoqiaoyun-start-2.2.0.jar 大于 100M，采用 Git LFS 上传大文件。如果直接使用 git clone 下载，会发现 qiaoqiaoyun-start-2.2.0.jar 只有 1 KB。
> 
> **建议**：如果不熟悉 Git LFS，请使用上面的 Release 下载或网盘下载方式，更加简单方便！

安装 Git LFS 方法：
- Windows: 可以从 [Git LFS 的官方网站 ](https://git-lfs.github.com/)下载并安装。
- macOS: 可以使用 Homebrew 安装，在终端中运行命令： `brew install git-lfs`
- Linux: 可以使用包管理器安装，或者从 [Git LFS 的 GitHub 页面](https://github.com/git-lfs/git-lfs/releases) 下载二进制文件。


安装 Git LFS 后，执行命令：
```bash
git clone https://gitee.com/jeecg/qiaoqiaoyun.git
```
