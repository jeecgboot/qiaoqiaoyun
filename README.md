敲敲云零代码平台
===============

最新版本： 2.1.0（发布日期：2025-07-09） 




本地快速部署(敲敲云安装包)
-----------------------------------

解压：敲敲云安装包v2.1.0.zip

```
- 1.本地安装jdk7+
- 2.执行下面的Mysql脚本(自动创建数据库：qiaoqiaoyun)
   qiaoqiaoyun.sql
- 3.修改数据库和redis等配置
   修改 config/application-prod.yml，具体配置见https://help.qiaoqiaoyun.com/open/InstallStart.html
- 4.双击 start.bat 启动后台
- 5.前端采用nginx部署
   把dist部署到nginx中，具体见文档https://help.qiaoqiaoyun.com/open/InstallStart.html
- 6.访问敲敲云
   http://localhost
   账号密码：admin/123456
```

