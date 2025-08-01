敲敲云零代码平台
===============

最新版本： 2.1.0（发布日期：2025-07-09） 


[![](https://img.shields.io/badge/Author-北京敲敲云-orange.svg)](https://qiaoqiaoyun.com)
[![](https://img.shields.io/badge/version-2.1.0-brightgreen.svg)](https://github.com/jeecgboot/qiaoqiaoyun)
[![GitHub stars](https://img.shields.io/github/stars/jeecgboot/qiaoqiaoyun.svg?style=social&label=Stars)](https://github.com/jeecgboot/qiaoqiaoyun)
[![GitHub forks](https://img.shields.io/github/forks/jeecgboot/qiaoqiaoyun.svg?style=social&label=Fork)](https://github.com/jeecgboot/qiaoqiaoyun)
[![](https://img.shields.io/badge/blog-免费低代码平台-orange.svg)](https://jeecg.com/download)


项目介绍
-----------------------------------
<h3 align="center">APaaS零代码平台</h3>

敲敲云是一款免费的APaaS零代码平台集成了AI应用开发平台，帮助企业快速搭建个性化业务应用！用户无需任何代码，即可搭建出符合业务需求的个性化应用。敲敲云拥有完善的应用搭建能力、表单引擎、流程引擎、仪表盘引擎，可满足企业的正常需求。

```
专注于开源，打造 “专业 易用 智能” 的企业级零代码平台
开源协议：`功能免费、可以商用、代码不开放`
```

**敲敲云可以做什么？**

 - 【AI应用开发平台+AI知识库+零代码平台】
 - 1.支持集成AI大模型（ChatGPT和DeepSeek）,通过AI建表，快速补充表单字段
 - 2.用它采集数据？像我们一样挂一个工单，收集客户询价信息，用于表单数据采集系统
 - 3.用它解决纸质化办公？原来用Excel记录数据，你可以快速搭建一个系统，填写数据并快速出统计报表
 - 4.用它配置业务系统？例如：财务系统、CRM、进销存、OA、MIS系统等
 - 5.用它配置应用模板？你可以配置CRM、进销存等应用，将应用模板导出卖给他人，支持快速导入
 - 6.可以用它当原型设计软件，在客户现场傻瓜式拖拖拽拽出一个系统
 - 7.可以用它做毕业设计，拖拖拽拽出搭建一个毕业设计


获取部署包
-----------------------------------

#### 1.网盘下载

直接通过 [百度网盘下载](https://pan.baidu.com/s/141_ugZIGfuiDw3t6GvyR1Q?pwd=gdkq)

#### 2.Git LFS下载
> 因为qiaoqiaoyun-start-2.0.jar大于100M，采用Git LFS上传大文件，这会导致你直接下载会发现qiaoqiaoyun-start-2.0.jar只有 1 KB；所以本地需先安装Git LFS.


 安装Git LFS方法
- Windows: 可以从 [Git LFS 的官方网站 ](https://git-lfs.github.com/)下载并安装。
- macOS: 可以使用 Homebrew 安装，在终端中运行命令： `brew install git-lfs`
- Linux: 可以使用包管理器安装，或者从 [Git LFS 的 GitHub 页面](https://github.com/git-lfs/git-lfs/releases) 下载二进制文件。


安装Git LFS后，执行命令：
```
git clone https://gitee.com/jeecg/qiaoqiaoyun.git
```


本地快速部署
-----------------------------------

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

Docker本地构建启动
-----------------------------------
```
- 第一步：下载项目
git clone https://gitee.com/jeecg/qiaoqiaoyun.git

- 第二步： 执行docker命令
前提：先安装Docker Compose，见文档 https://help.qiaoqiaoyun.com/open/base/dockerCompose.html

docker-compose -p qiaoqiaoyun_start up -d

- 第三步：访问系统
 等待1分钟，等所有docker服务启动后，访问nginx地址（如果访问不通，请确认下每个docker的启动日志） 

 访问地址：http://localhost
 账号密码：admin/123456
```


技术交流
-----------------------------------
- 官方网站： https://www.qiaoqiaoyun.com
- 在线体验： https://app.qiaoqiaoyun.com
- 使用手册： https://help.qiaoqiaoyun.com
- QQ交流群： 967780549
- 技术支持： [在线反馈工单Issues](https://github.com/jeecgboot/qiaoqiaoyun/issues/new)



#### 为什么选择 敲敲云零代码?

> 可以免费使用，不用写代码就可以搭建一套应用，它可以帮助企业快速搭建各种个性化业务场景！用户无需任何代码，即可搭建出各种业务系统。

-   敲敲云是一个 APaaS 零代码平台，帮助企业快速搭建个性化业务应用！用户无需任何代码，即可搭建出符合业务需求的个性化应用。
-   敲敲云拥有完善的应用搭建能力、表单引擎、流程引擎、仪表盘引擎，可满足企业的正常需求。
-   平台内的自动化工作流还可以实现审批、填写等控制流程和业务自动化。
-   如果用户企业使用钉钉或企业微信，也可以将平台内搭建的应用直接对接到工作台上。
-   你可以用它采集数据？像我们一样挂一个工单，收集客户询价登记信息
-   你可以用它解决纸质化办公问题？原来用Excel记录数据，你可以快速搭建一个系统，填写数据并快速出统计报表
-   你可以用它配置任何你需要的业务系统？例如：财务系统、CRM、进销存、OA、MIS系统等
-   你可以用它配置搭建应用售卖模板？比如你可以配置一个CRM、进销存应用，将应用导出卖给需要的人，支持快速导入
-   应用快速搭建功能，能够创建应用、表单和门户仪表盘、进行数据存储和数据统计分析
-   类似金数据的数据采集，表单填报（表单能力）
-   搭建门户和仪表盘能力，表单视图支持多种风格
-   具备完善的APP能力，APP、H5、钉钉移动端随时随地可操作




### 敲敲云有什么功能？

- 1.应用管理功能， 应用的基础操作包含创建应用、修改应用、退出/删除应用、排序应用、维护应用、应用回收站、应用分组
- 2.工作表管理，用来管理数据 可以像excel表格一样展示数据，也可以像看板和日历一样展示数据。在工作表中可以设计表单字段；可以添加、编辑、查看、删除数据，也可以分享、打印数据、导入导出。
- 3.工作表视图管理，支持多视图，新建复制视图，视图个性化配置、视图过滤，排序、自定义显示字段，删除视图等，支持不同风格视图：表格视图、日历视图、看板视图
- 4.表格视图： 像Excel表格一样展示数据，每个工作表创建后，都会有一个“全部”表格视图，展示所有数据及所有字段，并且不可删除。
- 5.日历视图： 以日历形式展示数据，可根据日期字段将数据展示在具体日期中。默认为月，可切换为周、日模式来展示数据。
- 6.发布表单，支持配置表单发布模式，提供给其他人填写，进行数据采集
- 7.提供表单设计器，拥有40种控件类型供您使用，基本满足您的大部分的业务场景需求，每个控件都拥有不同的属性配置，根据不同的需求选择不同的控件类型
- 8.表单设计器支持复杂控件，关联记录： 在表单中与其他表单有关联时可以使用关联记录；子表，用于主表中录入多条子表信息；栅格布局： 将一行一列的字段转换成一行多列显示，满足更多的需求；
- 9.提供强大的函数能力，表单控件默认值支持35种系统函数，分别在数学函数、日期函数、文本函数、逻辑函数四个区域内，基本满足大部分场景需求
- 10.提供仪表盘设计器，用于配置门户和报表，在仪表盘中可以设计不同的统计图表，按钮、轮播图等。将数据以各类图表和图形化的方式，以视觉形式来呈现



 **视频介绍**

[![](https://upload.jeecg.com/jeecg/qiaoqiaoyunsite/qqyunvideo.png)](https://www.bilibili.com/video/BV1jUQeYfEM2)



 AI应用平台功能？
 -----------------------------------

 - 1.AI工作流: 在画布上构建和测试功能强大的 AI 工作流程，实现AI自动化业务编排。
 - 2.AI智能问答: 基于聊天的应用程序添加其他功能（如文本转语音）的直观界面，对接知识库和业务只是，提供更好的智能问答交互体验。
 - 3.知识库能力: 广泛的 RAG 功能，涵盖从文档摄入到检索的所有内容，支持从 PDF、PPT 和其他常见文档格式中提取文本和支持手动输入，直接分段等。
 - 4.支持各种大模型，包括本地私有大模型（Deepseek/ Llama 3 / Qwen 2 等）、国内公共大模型（Deepseek/通义千问 / 腾讯混元 / 字节豆包 / 百度千帆 / 智谱 AI / Kimi 等）和国外公共大模型（OpenAI / Claude / Gemini 等）；
 - 5.无缝嵌入：支持零编码快速嵌入到第三方业务系统，让已有系统快速拥有智能问答能力，提高用户满意度。。
 - 6.接口服务: 您可以轻松 调用AI工作流 与你的业务无缝集成。




#### 平台功能效果

##### 应用管理

![](https://oscimg.oschina.net/oscnet/up-59b983dedd8c43f7ea5b784b1584e0a6704.png)

![](https://oscimg.oschina.net/oscnet/up-40655b7b552de38a6b2edaef2959f878466.png)


![](https://oscimg.oschina.net/oscnet/up-9581d65f0114b0722a8ec223f4bb76d82c8.png)

![](https://oscimg.oschina.net/oscnet/up-2b731b7e18698bb9747fc2963deff788cba.png)





##### 表单引擎

> 可视化拖拽设计，控件丰富轻松满足日常业务需求，不需要任何的专业知识拖动组件，像搭积木一样，轻松完成表单的创建，一分钟开始数据收集的工作。

支持自定义表单视图，表单视图支持表格、看板、日历风格


![](https://oscimg.oschina.net/oscnet/up-42541410a7eaccadd1caf2025e1251a0b26.png)


40多种丰富表单控件

![](https://oscimg.oschina.net/oscnet/up-655d3f41e89000fecb55693b64ea155596a.png)

表单引擎拥有丰富布的局方式

![](https://oscimg.oschina.net/oscnet/up-60ed5b69aa79649bd46682e00d3f3faac36.png)

##### 仪表盘

> 实现了多种图表数据可视化的展现，图表、按钮、富文本、轮播图、嵌入URL皆可配置

![](https://oscimg.oschina.net/oscnet/up-ac3f164e60439357fab80fb02fde550d61d.png)

设计界面
![](https://oscimg.oschina.net/oscnet/up-18cd5e9ee2e74d995b2a9e54aaae8f3fbd9.png)


20多种丰富统计图表


![](https://oscimg.oschina.net/oscnet/up-1ece674f91da3ebe2854cfcf68bf69d7725.png)
##### 移动端APP

APP、H5、钉钉移动端随时随地可操作

![](https://oscimg.oschina.net/oscnet/up-68eb5541d5f0d9906c059f32851e877fe6e.png)

##### 流程引擎

> 可视化流程拖拽设计、更加简单，更符合中国国情的流程引擎，任意驳回、委派、跳转。可实现审批、填写、数据处理等流程审批和业务处理，自动流转。

设计界面美观，用户使用体验流畅

![](https://oscimg.oschina.net/oscnet/up-a867e27f5463bc79a273846be957770fac8.png)

25种丰富的流程节点

![](https://oscimg.oschina.net/oscnet/up-8068a15d1c0e07dd6982cbacda66bcdc1be.png)

节点配置丰富，可设置不同审批人，权限和高级配置

![](https://oscimg.oschina.net/oscnet/up-5d6f0aa7275eba273a2777218cf3625385f.png)
