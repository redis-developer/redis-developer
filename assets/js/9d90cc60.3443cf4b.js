"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[134],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(k,s(s({ref:n},c),{},{components:t})):r.createElement(k,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50358:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),i=t(52263);const o="authorByline_VoxI",s="authorLabel_a70t",a="authorProfileImage_URwT";const l=function(e){let{frontMatter:n}=e;const{siteConfig:t}=(0,i.Z)(),l=t.customFields.authors;return r.createElement(r.Fragment,null,n.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),n.authors.map((e=>r.createElement("div",{key:e,className:o},r.createElement("img",{className:a,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:s},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},44427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905)),o=t(50358);const s={id:"index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",sidebar_label:"Node.js, Nginx, Redis and Docker",slug:"/create/docker/nodejs-nginx-redis",authors:["ajeet"]},a=void 0,l={unversionedId:"create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis",id:"create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",description:"Thanks to Node.js - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.",source:"@site/docs/create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",sourceDirName:"create/docker/nodejs-nginx-redis",slug:"/create/docker/nodejs-nginx-redis",permalink:"/create/docker/nodejs-nginx-redis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",sidebar_label:"Node.js, Nginx, Redis and Docker",slug:"/create/docker/nodejs-nginx-redis",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/create/docker/"},next:{title:"Overview",permalink:"/create/kubernetes/"}},d={},c=[{value:"What do you need?",id:"what-do-you-need",level:3},{value:"Project structure",id:"project-structure",level:3},{value:"Prerequisite:",id:"prerequisite",level:3},{value:"Step 1. Create a Docker compose file",id:"step-1-create-a-docker-compose-file",level:3},{value:"Step 2. Create an nginx directory and add the below files:",id:"step-2-create-an-nginx-directory-and-add-the-below-files",level:3},{value:"File: nginx/nginx.conf",id:"file-nginxnginxconf",level:4},{value:"File: Dockerfile",id:"file-dockerfile",level:4},{value:"Step 3. Create a web directory and add the below files:",id:"step-3-create-a-web-directory-and-add-the-below-files",level:3},{value:"File: web/Dockerfile",id:"file-webdockerfile",level:4},{value:"File: web/package.json",id:"file-webpackagejson",level:4},{value:"File: web/server.js",id:"file-webserverjs",level:4},{value:"Step 4. Creating a web1 directory and add the below files:",id:"step-4-creating-a-web1-directory-and-add-the-below-files",level:3},{value:"File: Dockerfile",id:"file-dockerfile-1",level:4},{value:"File: server.js",id:"file-serverjs",level:4},{value:"File: package.json",id:"file-packagejson",level:4},{value:"Step 5. Deploy the application",id:"step-5-deploy-the-application",level:3},{value:"Expected result",id:"expected-result",level:4},{value:"Step 6. Testing the app",id:"step-6-testing-the-app",level:3},{value:"Step 7. Monitoring Redis keys",id:"step-7-monitoring-redis-keys",level:3},{value:"Further References",id:"further-references",level:3}],p={toc:c};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{frontMatter:s,mdxType:"Authors"}),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.dev/"},"Node.js")," - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nginx-node",src:t(57022).Z,width:"1890",height:"1422"})),(0,i.kt)("p",null,"In this quickstart guide, you will see how to build a Node.js application (visitor counter) using Nginx, Redis and Docker."),(0,i.kt)("h3",{id:"what-do-you-need"},"What do you need?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node.js"),": An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nginx"),": An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker"),": a containerization platform for developing, shipping, and running applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker Compose"),": A tool for defining and running multi-container Docker applications.")),(0,i.kt)("h3",{id:"project-structure"},"Project structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 redis\n\u251c\u2500\u2500 nginx\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u2514\u2500\u2500 nginx.conf\n\u251c\u2500\u2500 web1\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.js\n\u2514\u2500\u2500 web2\n    \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 package.json\n    \u2514\u2500\u2500 server.js\n\n")),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite:"),(0,i.kt)("p",null,"\u2013 Install Docker Desktop"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"https://docs.docker.com/desktop/mac/install/")," to setup Docker Desktop for Mac or Windows on your local system."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kgrkqga3c78h693vy33p.png",alt:"Image1"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Docker Desktop comes with Docker compose installed by default, hence you don't need to install it separately.")),(0,i.kt)("h3",{id:"step-1-create-a-docker-compose-file"},"Step 1. Create a Docker compose file"),(0,i.kt)("p",null,'Create an empty file with the below content and save it by name - "docker-compose.yml"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"version: '3.9'\nservices:\n  redis:\n    image: 'redis:alpine'\n    ports:\n      - '6379:6379'\n  web1:\n    restart: on-failure\n    build: ./web1\n    ports:\n      - '81:5000'\n  web2:\n    restart: on-failure\n    build: ./web2\n    ports:\n      - '82:5000'\n  nginx:\n    build: ./nginx\n    ports:\n    - '80:80'\n    depends_on:\n    - web1\n    - web2\n")),(0,i.kt)("p",null,"The compose file defines an application with four services ",(0,i.kt)("inlineCode",{parentName:"p"},"redis"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"web1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"web2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),".\nWhen deploying the application, docker-compose maps port 80 of the web service container to port 80 of the host as specified in the file."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, Redis runs on port 6379. Make sure you don't run another instance of Redis on your system or port 6379 on the host is not being used by another container, otherwise the port should be changed.")),(0,i.kt)("h3",{id:"step-2-create-an-nginx-directory-and-add-the-below-files"},"Step 2. Create an nginx directory and add the below files:"),(0,i.kt)("h4",{id:"file-nginxnginxconf"},"File: nginx/nginx.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"upstream loadbalancer {\n  server web1:5000;\n  server web2:5000;\n}\n\nserver {\n  listen 80;\n  server_name localhost;\n  location / {\n    proxy_pass http://loadbalancer;\n  }\n}\n")),(0,i.kt)("h4",{id:"file-dockerfile"},"File: Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM nginx\nRUN rm /etc/nginx/conf.d/default.conf\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n")),(0,i.kt)("h3",{id:"step-3-create-a-web-directory-and-add-the-below-files"},"Step 3. Create a web directory and add the below files:"),(0,i.kt)("h4",{id:"file-webdockerfile"},"File: web/Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'FROM node:alpine\n\nWORKDIR /usr/src/app\n\nCOPY ./package.json ./\nRUN npm install\nCOPY ./server.js ./\n\nCMD ["npm","start"]\n')),(0,i.kt)("h4",{id:"file-webpackagejson"},"File: web/package.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n  "name": "web",\n  "version": "1.0.0",\n  "description": "Running Node.js and Express.js on Docker",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.17.2",\n    "redis": "3.1.2"\n  },\n  "author": "",\n  "license": "MIT"\n}\n')),(0,i.kt)("h4",{id:"file-webserverjs"},"File: web/server.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const express = require('express');\nconst redis = require('redis');\nconst app = express();\nconst redisClient = redis.createClient({\n  host: 'redis',\n  port: 6379\n});\n\napp.get('/', function(req, res) {\n    redisClient.get('numVisits', function(err, numVisits) {\n        numVisitsToDisplay = parseInt(numVisits) + 1;\n        if (isNaN(numVisitsToDisplay)) {\n            numVisitsToDisplay = 1;\n        }\n        res.send('Number of visits is: ' + numVisitsToDisplay);\n        numVisits++;\n        redisClient.set('numVisits', numVisits);\n    });\n});\n\napp.listen(5000, function() {\n    console.log('Web application is listening on port 5000');\n});\n")),(0,i.kt)("h3",{id:"step-4-creating-a-web1-directory-and-add-the-below-files"},"Step 4. Creating a web1 directory and add the below files:"),(0,i.kt)("h4",{id:"file-dockerfile-1"},"File: Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'FROM node:alpine\n\nWORKDIR /usr/src/app\n\nCOPY ./package*.json ./\nRUN npm install\nCOPY ./server.js ./\n\nCMD ["npm","start"]\n\n')),(0,i.kt)("h4",{id:"file-serverjs"},"File: server.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const express = require('express');\nconst redis = require('redis');\nconst app = express();\nconst redisClient = redis.createClient({\n  host: 'redis',\n  port: 6379\n});\n\n\napp.get('/', function(req, res) {\n    redisClient.get('numVisits', function(err, numVisits) {\n        numVisitsToDisplay = parseInt(numVisits) + 1;\n        if (isNaN(numVisitsToDisplay)) {\n            numVisitsToDisplay = 1;\n        }\n        res.send('web1: Total number of visits is: ' + numVisitsToDisplay);\n        numVisits++;\n        redisClient.set('numVisits', numVisits);\n    });\n});\n\napp.listen(5000, function() {\n    console.log('Web app is listening on port 5000');\n});\n")),(0,i.kt)("h4",{id:"file-packagejson"},"File: package.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "web1",\n  "version": "1.0.0",\n  "description": "Running Node.js and Express.js on Docker",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.17.2",\n    "redis": "3.1.2"\n  },\n  "author": "",\n  "license": "MIT"\n}\n')),(0,i.kt)("h3",{id:"step-5-deploy-the-application"},"Step 5. Deploy the application"),(0,i.kt)("p",null,"Let us deploy the full-fledged app using docker-compose"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker-compose up -d\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Creating nginx-nodejs-redis_redis_1 ... done\nCreating nginx-nodejs-redis_web1_1  ... done\nCreating nginx-nodejs-redis_web2_1  ... done\nCreating nginx-nodejs-redis_nginx_1 ... done\n")),(0,i.kt)("h4",{id:"expected-result"},"Expected result"),(0,i.kt)("p",null,"Listing containers must show three containers running and the port mapping as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose ps\n           Name                        Command              State           Ports\n------------------------------------------------------------------------------------------\nnginx-nodejs-redis_nginx_1   /docker-entrypoint.sh ngin     Up      0.0.0.0:80->80/tcp\n                             ...\nnginx-nodejs-redis_redis_1   docker-entrypoint.sh redis     Up      0.0.0.0:6379->6379/tcp\n                             ...\nnginx-nodejs-redis_web1_1    docker-entrypoint.sh npm       Up      0.0.0.0:81->5000/tcp\n                             start\nnginx-nodejs-redis_web2_1    docker-entrypoint.sh npm       Up      0.0.0.0:82->5000/tcp\n                             start\n")),(0,i.kt)("h3",{id:"step-6-testing-the-app"},"Step 6. Testing the app"),(0,i.kt)("p",null,"After the application starts, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:80")," in your web browser or run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl localhost:80\ncurl localhost:80\nweb1: Total number of visits is: 1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl localhost:80\nweb1: Total number of visits is: 2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl localhost:80\nweb2: Total number of visits is: 3\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl localhost:80\nweb2: Total number of visits is: 4\n")),(0,i.kt)("h3",{id:"step-7-monitoring-redis-keys"},"Step 7. Monitoring Redis keys"),(0,i.kt)("p",null,"If you want to monitor the Redis keys, you can use monitor command. Install redis-client in your Mac system using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install redis")," and then directly connect to Redis container by issuing the below command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'% redis-cli\n127.0.0.1:6379> monitor\nOK\n1646485507.290868 [0 172.24.0.2:34330] "get" "numVisits"\n1646485507.309070 [0 172.24.0.2:34330] "set" "numVisits" "5"\n1646485509.228084 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.241762 [0 172.24.0.2:34330] "set" "numVisits" "6"\n1646485509.619369 [0 172.24.0.4:52082] "get" "numVisits"\n1646485509.629739 [0 172.24.0.4:52082] "set" "numVisits" "7"\n1646485509.990926 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.999947 [0 172.24.0.2:34330] "set" "numVisits" "8"\n1646485510.270934 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.286785 [0 172.24.0.4:52082] "set" "numVisits" "9"\n1646485510.469613 [0 172.24.0.2:34330] "get" "numVisits"\n1646485510.480849 [0 172.24.0.2:34330] "set" "numVisits" "10"\n1646485510.622615 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.632720 [0 172.24.0.4:52082] "set" "numVisits" "11"\n')),(0,i.kt)("h3",{id:"further-references"},"Further References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ajeetraina/awesome-compose/tree/master/nginx-nodejs-redis"}," Complete Source Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/docker/"},"How to Deploy and Run Redis in a Docker container"))))}u.isMDXComponent=!0},57022:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/docker_nginx-4bdad5f42822101967723d4b04c363aa.png"}}]);