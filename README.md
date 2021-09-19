# 项目文档

## 1.基本介绍

> 因正在学习Vue，就想着用业余时间开发一个音乐项目，尽可能的以手写还原样式，萌新第一次写完整项目，会在后续学习进步后中使用TS重构整个模块。数据是真实的网易云音乐的数据，利用[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)提供的node.js版接口！感谢Binaryify的付出！



## 2.技术栈

vue3 + vuex + vue-router + axios + vant + sass



## 3.项目运行

### 安装后台服务器

```
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

# 进入后台服务文件夹
cd NeteaseCloudMusicApi

# 安装依赖
npm install

# 启动后台服务
node app.js
```

### 安装vue项目

```
git clone https://github.com/swanine/swanine-music.git

# 进入web文件夹
cd swanine-music

# 安装依赖
npm install

# 启动web项目
npm run dev (在浏览器访问本项目，建议开发者工具切换至移动端查看)
```



## 4.目录结构

```
	└─web                 		（前端文件）
        ├─ public         		（index）
        └─ src            		（源码包）
            ├── api       		（向后台发送ajax的封装层）
            ├── assets	  		（静态文件）
            │   ├── icon	  	（图标图片）
            │   └── styles   	（通用样式文件）
            ├── components		（组件）
            │	├── Player		（播放器核心）
            │   └── ……	  		（功能组件）
            ├── router	  		（前端路由）
            ├── store     		（vuex 状态管理仓）
            ├── utils     		（前端工具库）
            └── view      		（前端页面）
```



## 5.目标功能

- 页面开发
  - 推荐主页&emsp;&emsp;-------- 完成
  - 推荐详情&emsp;&emsp;-------- 完成
  - 侧边左页&emsp;&emsp;-------- 完成
  - 搜索主页&emsp;&emsp;-------- 完成
  - 排行榜页&emsp;&emsp;-------- 完成
  - 排行详情&emsp;&emsp;-------- 完成
  - 歌单广场&emsp;&emsp;-------- 完成
  - 歌单详情&emsp;&emsp;-------- 完成
  - 播放器页&emsp;&emsp;-------- 完成
  - 播放列表&emsp;&emsp;-------- 完成
  - 歌手页面&emsp;&emsp;-------- 开发中
  - 歌手详情&emsp;&emsp;-------- 开发中
  - ……

- 功能开发
  - 播放，暂停&emsp;-------- 完成
  - 歌曲进度显示-------- 完成
  - 歌曲切换&emsp;&emsp;-------- 完成
  - 搜索歌曲&emsp;&emsp;-------- 开发中
  - 歌词显示&emsp;&emsp;-------- 开发中
  - 视频功能&emsp;&emsp;-------- 开发中

## 6.项目截图

<img src=".\src\assets\image\1.png" style="zoom:50%;" /><img src=".\src\assets\image\7.png" style="zoom:50%;" /><img src=".\src\assets\image\3.png" style="zoom:50%;" />

------

<img src=".\src\assets\image\5.png" style="zoom:50%;" /><img src=".\src\assets\image\2.png" style="zoom:50%;" /><img src=".\src\assets\image\4.png" style="zoom:50%;" />