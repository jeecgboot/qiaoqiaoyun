## 免费敲敲云零代码

敲敲云是一个APaaS零代码平台，帮助企业快速搭建个性化业务应用！用户无需任何代码，即可搭建出符合业务需求的个性化应用。敲敲云拥有完善的应用搭建能力、表单引擎、流程引擎、仪表盘引擎，可满足企业的正常需求。

 **敲敲云可以做什么？**
 
 - 1.用它采集数据？像我们一样挂一个工单，收集客户询价信息，用于表单数据采集系统
 - 2.用它解决纸质化办公？原来用Excel记录数据，你可以快速搭建一个系统，填写数据并快速出统计报表
 - 3.用它配置业务系统？例如：财务系统、CRM、进销存、OA、MIS系统等
 - 4.用它配置应用模板？你可以配置CRM、进销存等应用，将应用模板导出卖给他人，支持快速导入


### 安装源下载

下载地址： https://github.com/jeecgboot/qiaoqiaoyun

![](https://oscimg.oschina.net/oscnet/up-af24689f19386ba17ca0d1ab3c108ccc9dc.png)

## 快速安装启动文档

###  一、基础软件安装


* mysql 5.7+
* mogodb 6.0.2+
* redis
* jdk8/17


###  二、数据库创建


- 3.1 使用mysql数据库，执行初始化脚本qiaoqiaoyun.sql，会自动创建数据库qiaoqiaoyun

![](https://oscimg.oschina.net/oscnet/up-7500e8431957f58607cb39bf59530e90b17.png)


- 3.2 在mogodb中创建数据库 qiaoqiaoyun即可，无需执行初始化SQL

![](https://oscimg.oschina.net/oscnet/up-fc0b424b9929b19d2aa2cf860d11e9202e8.png)

###  三、启动项目配置文件修改

请修改文件 ` config/application-prod.yml`，设置`mysql`和`mogodb`的数据库、redis、云存储、阿里大鱼短信 等配置。

### 3.1 修改mysql数据库配置

![](https://oscimg.oschina.net/oscnet/up-73ab2d3b1ebd4de392b6c91c2e28678747f.png)

### 3.2 修改mongo数据库配置


![](https://oscimg.oschina.net/oscnet/up-3b7087b3524186977736ee0139c86109db4.png)

### 3.3 修改redis配置

![](https://oscimg.oschina.net/oscnet/up-40dc478d7c8c93f8debf9c44a5e176efd5a.png)

### 3.4 阿里云存储配置

![](https://oscimg.oschina.net/oscnet/up-74f1940f9ac3cea390c8aa4b79a48e0c566.png)

### 3.5 阿里大鱼短信配置

![](https://oscimg.oschina.net/oscnet/up-5f04ead1b63455a351f7d813f5b3add067a.png)

###  四、项目部署与启动

#### 4.1 启动后台JAVA服务

> 先解压出`qiaoqiaoyun-start-2.0.jar`，注意qiaoqiaoyun-start-2.0.jar要与config在同一级目录

![](https://oscimg.oschina.net/oscnet/up-d5adfe7788f79285a2c9025c0d2d2f6bd6c.png)

- 启动命令
```
java -javaagent:qiaoqiaoyun-start-2.0.jar="-pwd 5eez3Vqil97n" -jar qiaoqiaoyun-start-2.0.jar
```

- 启动成功界面

![](https://oscimg.oschina.net/oscnet/up-77cf956d12dbd68f679e42b2914c099ce26.png)

![](https://oscimg.oschina.net/oscnet/up-0ced8f8c6fe0284ca3a300bc210eeca8947.png)

#### 4.2 前端采用nginx部署

#####   4.2.1 Nginx部署
将dist.zip的内容解压到目录，通过nginx访问

```
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        try_files $uri $uri/ /index.html;
        #前端dist解压到此目录
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #映射后台接口地址
    location  /qiaoqiaoyun {
        proxy_pass         http://192.168.1.11:8080/;
    }

}
```

**注意：** proxy_pass配置的后台地址，必须用具体IP，不能使用127.0.0.1或者localhost，不然验证码会404.

#####   4.2.2  前端解压效果图

![](https://oscimg.oschina.net/oscnet/up-aeff064d6e2f31a18bc60279013fe4b7f54.png)

#####  4.2.3 配置后端接口
 修改dist.zip解压后的文件_app.config.js

![](https://oscimg.oschina.net/oscnet/up-738bdbc9a18937d654698fdbbc91624a300.png)

![](https://oscimg.oschina.net/oscnet/up-bbcf58c69710cc69c5182578e048f9c29e2.png)

#####  4.2.4 访问系统

- 登录系统( 默认账号admin,密码123456)

 访问地址：http://localhost

![](https://oscimg.oschina.net/oscnet/up-59b983dedd8c43f7ea5b784b1584e0a6704.png)

 - 进入平台效果

 ![](https://oscimg.oschina.net/oscnet/up-40655b7b552de38a6b2edaef2959f878466.png)
