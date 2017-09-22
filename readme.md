# HT UI 插件示例工程

## 为何需要此工程

插件的开发工作只需要按照 `UI` 产品包中的 `class` 手册进行就可以了，按照 `class` 手册开发出来的是一个一个的 `js` 文件；
但是完整的插件通常需要将多个 `js` 文件合并成一个文件，并且生成 `API` 文档和使用手册，因此我们提供了这样一个示例工程来完成这部分功能

## 工程介绍

此工程将 `class` 手册组件交互章节中的例子复制到了 `src` 目录下，然后修改了一些配置文件，它是一个完备的工程

打包过程中，源代码文件被放到一个闭包内部：

* `src/start.js` 闭包文件头
* `src/end.js` 闭包文件尾
* `src/core.js` 闭包内全局变量

完整目录结构如下：

* `build` 临时打包目录
* `src` 源代码目录
* `guide` 使用手册
* `grunt-tasks` `grunt` 相关任务
* `ide-support` 类结构及 `API` 注释
* `jsdoc` 根据 `ide-support` 生成的文档
* `lib` 打包类库(`ht.js` 和 `ht-ui.js` 也可以复制到这里，方便运行 `guide` 目录中的例子)


## 初始化工程(安装环境依赖)

    npm install

## 打包工程

    // 打包 debug 版本，在 build 目录中生成 ht-ui-example-debug.js
    grunt default

    // 打包 release 版，在 release 目录中生成 ht-ui-example.zip
    // 压缩文件内包含类库、API 文档、使用手册
    grunt release

## 修改成自己的插件

开发者可以修改此工程作为自己的插件工程，需要做的修改工作如下：

1. 使用 `GitHub` 的 `Download Zip` 功能下载 `zip` 压缩包并解压
2. 修改 `package.json` 将 `name` 字段改为插件名
3. 删除 `src/CustomView.js` 和 `src/CustomViewInteractor.js` 并放入插件的源代码
4. 删除 `ide-support/zh/CustomView.js`，放入插件的 `API` 说明
5. 修改 `grunt-tasks/plugin.js` 中源代码和 `API` 文件的路径和文件名
6. 修改 `guide/zh/build/header.html`，将 `HT CustomView 手册` 修改为 `HT XXX 手册`，注意有两处需要修改
7. 修改 `guide/zh/build/guide.md` 内容

**注意：如果插件工程上传到 `GitHub` 等代码托管网站，不要将 `ht.js` 和 `ht-ui.js` 上传**

如果您开发出非常优秀的插件并且希望与其他用户分享，欢迎发送邮件至 service@hightopo.com，我们非常期待您的创意
