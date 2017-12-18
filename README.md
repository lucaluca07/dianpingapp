这个项目是利用空闲时间做的一个实战小demo
主要是练手
### 技术栈

react + redux + react-router-dom
mock数据使用的是 koa + koa-router

### 配置
npm start 启动本地服务

npm run build 编译打包

npm run server 启动mock数据

### 项目结构
├── app &emsp;&emsp;    #项目主目录  
│  ├── index.jsx &emsp;&emsp;    # 项目的入口index  
│  ├── index.tmpl.html &emsp;&emsp;    # html生成模板  
│  ├── actions   &emsp;&emsp;        # redux action  
│  ├── component   &emsp;&emsp;    # 组件文件夹（木偶组件）  
│  ├── config      
│  ├── contianer  &emsp;&emsp;  # 组件文件夹（智能组件）  
│  │  ├── index.jsx         
│  │  ├── 404.jsx   &emsp;&emsp;    # 404页面  
│  │  ├── City   &emsp;&emsp;    # 选择城市  
│  │  ├── Detail   &emsp;&emsp;  # 商户详情页  
│  │  ├── Home  &emsp;&emsp;  # 首页  
│  │  ├── Login &emsp;&emsp;    # 登录页  
│  │  ├── Search &emsp;&emsp;   # 搜索结果页  
│  │  └── User  &emsp;&emsp;  # 用户中心页   
│  ├── fetch &emsp;&emsp;   # 请求服务API  
│  ├── config      
│  ├── reducers     
│  ├── router  &emsp;&emsp;  #路由配置  
│  ├── static &emsp;&emsp;   # 静态文件  
│  ├── store      
│  └── util  &emsp;&emsp;  # 工具方法  
├── docs      
├── mock &emsp;&emsp;   # mock数据  
│  ├── server.js    
│  └── ...   
└── test  

