(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1243:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"},1244:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image2-f3a6222e54a918c05530ff96edcacebd.png"},1245:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image3-919d7475ee20ee46df4b3143ad960dd4.png"},1246:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image4-e69bf12df47612c5ccbcc0511297d1f1.png"},1247:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image5-f6fb2ce7888f516ffb8bc4ba21bb498f.png"},300:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(364)),o={id:"index-ratelimitinggo",title:"Deploy a Redis Rate Limiting app on Heroku",sidebar_label:"How to deploy a Redis Rate Limiting application on Heroku",slug:"/create/heroku/ratelimiting-go",authors:["ajeet"]},s={unversionedId:"create/heroku/ratelimiting-go/index-ratelimitinggo",id:"create/heroku/ratelimiting-go/index-ratelimitinggo",isDocsHomePage:!1,title:"Deploy a Redis Rate Limiting app on Heroku",description:"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. Building a rate limiter with Redis is easy because of two commands INCR and EXPIRE. The basic concept is that you want to limit requests to a particular service in a given time period. Let\u2019s say we have a service that has users identified by an API key. This service states that it is limited to 20 requests in any given minute.",source:"@site/docs/create/heroku/ratelimiting-go/index-ratelimitinggo.mdx",slug:"/create/heroku/ratelimiting-go",permalink:"/create/heroku/ratelimiting-go",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/ratelimiting-go/index-ratelimitinggo.mdx",version:"current",lastUpdatedAt:1652503195,sidebar_label:"How to deploy a Redis Rate Limiting application on Heroku",sidebar:"docs",previous:{title:"Deploy a Python app on Heroku using Redis",permalink:"/create/heroku/herokupython"},next:{title:"Deploy a Ruby app on Heroku using Redis",permalink:"/create/heroku/herokuruby"}},c=[{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the app",id:"step-8-accessing-the-app",children:[]},{value:"How it works",id:"how-it-works",children:[{value:"Cookies",id:"cookies",children:[]},{value:"Redis Commands",id:"redis-commands",children:[]},{value:"Code for Rate Limiting",id:"code-for-rate-limiting",children:[]},{value:"Response",id:"response",children:[]},{value:"Available commands",id:"available-commands",children:[]},{value:"References",id:"references",children:[]}]}],l={toc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. Building a rate limiter with Redis is easy because of two commands ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/incr"}),"INCR")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/expire"}),"EXPIRE"),". The basic concept is that you want to limit requests to a particular service in a given time period. Let\u2019s say we have a service that has users identified by an API key. This service states that it is limited to 20 requests in any given minute."),Object(i.b)("p",null,"In this tutorial, we will see how to deploy Rate Limiting using Redis and Go."),Object(i.b)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(i.b)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"this link")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For a limited time, use ",Object(i.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(i.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(i.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"recloud",src:r(1243).default})),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),Object(i.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(i.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:r(1244).default})),Object(i.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," brew install heroku\n")),Object(i.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n")),Object(i.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(i.b)("p",null,"For this demonstration, we will be using a Simple Rate Limiting application using Go."),Object(i.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/basic-redis-rate-limiting-demo-go-lang\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," heroku create\n\n Creating app... done, \u2b22 powerful-fortress-83061\n\n https://powerful-fortress-83061.herokuapp.com/ | https://git.heroku.com/powerful-fortress-83061.git\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:r(1245).default})),Object(i.b)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),Object(i.b)("p",null,'Go to the Heroku dashboard, click "Settings" and set REDIS_HOST, REDIS_PORT and REDIS_PASSWORD under the Config Vars. Refer to Step 1 for the correct values to use.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:r(1246).default})),Object(i.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),Object(i.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(i.b)("p",null,"Heroku generates a random name (in this case ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://powerful-fortress-83061.herokuapp.com/"}),"powerful-fortress-83061"),") for your app, or you can pass a parameter to specify your own app name. Now deploy your code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git push heroku\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," Enumerating objects: 171, done.\n Counting objects: 100% (171/171), done.\n Delta compression using up to 12 threads\n Compressing objects: 100% (86/86), done.\n Writing objects: 100% (171/171), 5.65 MiB | 2.18 MiB/s, done.\n Total 171 (delta 74), reused 171 (delta 74), pack-reused 0\n remote: Compressing source files... done.\n remote: Building source:\n remote: **       **\n remote: **       Installed the following binaries:**\n remote: **             ./bin/basic-redis-rate-limiting-demo-go-lang**\n remote: **       **\n remote: **       Created a Procfile with the following entries:**\n remote: **             web: bin/basic-redis-rate-limiting-demo-go-lang**\n remote: **       **\n remote: **       If these entries look incomplete or incorrect please create a Procfile with the required entries.**\n remote: **       See https://devcenter.heroku.com/articles/procfile for more details about Procfiles**\n remote: **       **\n remote: -----\x3e Discovering process types\n remote:        Procfile declares types -> web\n remote: \n remote: -----\x3e Compressing...\n remote:        Done: 9.6M\n remote: -----\x3e Launching...\n remote:        Released v7\n remote:        https://powerful-fortress-83061.herokuapp.com/ deployed to Heroku\n remote: \n remote: Verifying deploy... done.\nTo https://git.heroku.com/powerful-fortress-83061.git\n\n * [new branch]      master -> master\n\nIf your app doesn point to the right repository, you can manually add it:\n\n```bash\n heroku git:remote -a powerful-fortress-83061\n")),Object(i.b)("h3",{id:"step-8-accessing-the-app"},"Step 8. Accessing the app"),Object(i.b)("p",null,"Open ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://powerful-fortress-83061.herokuapp.com/"}),"https://powerful-fortress-83061.herokuapp.com/")," to see your application."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:r(1247).default})),Object(i.b)("h2",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,"This app will block connections from a client after surpassing certain amount of requests (default: 10) per time period (default: 10 sec). The application returns the following headers in response to each request. The values of these headers tell the user how many requests they have remaining before they reach the limit. On the 10th run the server should return an HTTP status code of ",Object(i.b)("strong",{parentName:"p"},"429 Too Many Requests")),Object(i.b)("h3",{id:"cookies"},"Cookies"),Object(i.b)("p",null,"The application uses cookies to identify users.  On the first request, the user will receive a cookie back from the server if one didn't previously exist.\n",Object(i.b)("inlineCode",{parentName:"p"},"CookieName: user-limiter"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"CookieValue: md5(<current time>)"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"<current time>")," - request time in a format: ",Object(i.b)("inlineCode",{parentName:"p"},"2006-01-02 15:04:05.999999999 -0700 MST")),Object(i.b)("h3",{id:"redis-commands"},"Redis Commands"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Read requests for user by ",Object(i.b)("inlineCode",{parentName:"li"},"user-limiter")," cookie: ",Object(i.b)("inlineCode",{parentName:"li"},"GET requests.<USER_IDENTIFIER>")," - get ",Object(i.b)("inlineCode",{parentName:"li"},"USER_IDENTIFIER")," from request cookie",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g ",Object(i.b)("inlineCode",{parentName:"li"},"GET requests.0cbc6611f5540bd0809a388dc95a615b")))),Object(i.b)("li",{parentName:"ul"},"Set request counter with expired 10 sec if not exist in ",Object(i.b)("inlineCode",{parentName:"li"},"requests.<USER_IDENTIFIER>"),": ",Object(i.b)("inlineCode",{parentName:"li"},"SETEX requests.<USER_IDENTIFIER> 10 0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g ",Object(i.b)("inlineCode",{parentName:"li"},"SETEX requests.0cbc6611f5540bd0809a388dc95a615b 10 0")))),Object(i.b)("li",{parentName:"ul"},"Increment requests counter for each of user request: ",Object(i.b)("inlineCode",{parentName:"li"},"INC requests.<USER_IDENTIFIER>"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g ",Object(i.b)("inlineCode",{parentName:"li"},"INC requests.0cbc6611f5540bd0809a388dc95a615b")))),Object(i.b)("li",{parentName:"ul"},"Get requests number for user: ",Object(i.b)("inlineCode",{parentName:"li"},"GET requests.<USER_IDENTIFIER>"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g ",Object(i.b)("inlineCode",{parentName:"li"},"GET requests.0cbc6611f5540bd0809a388dc95a615b"))))),Object(i.b)("h3",{id:"code-for-rate-limiting"},"Code for Rate Limiting"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Go"}),'func (c Controller) AcceptedRequest(user string, limit int) (int, bool) {\n    key := c.key(user)\n\n    if _, err := c.r.Get(key); err == redis.Nil {\n        err := c.r.Set(key, "0", time.Second * time.Duration(limit))\n        if err != nil {\n            log.Println(err)\n            return 0, false\n        }\n    }\n\n    if err := c.r.Inc(key); err != nil {\n        log.Println(err)\n        return 0, false\n    }\n\n    requests, err := c.r.Get(key)\n    if err != nil {\n        log.Println(err)\n        return 0,false\n    }\n    requestsNum, err := strconv.Atoi(requests)\n    if err != nil {\n        log.Println(err)\n        return 0, false\n    }\n\n    if requestsNum > limit {\n        return requestsNum, false\n    }\n\n    return requestsNum, true\n }\n')),Object(i.b)("p",null,"Where ",Object(i.b)("inlineCode",{parentName:"p"},"c")," corresponds to the active controller and ",Object(i.b)("inlineCode",{parentName:"p"},"c.r")," is a Redis client."),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("h4",{id:"status-codes"},"Status codes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"200 - OK")," - responded ",Object(i.b)("inlineCode",{parentName:"li"},"PONG")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"406 - Not Acceptable")," - could not read cookie from request, returned when cookies are not allowed on the client side"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"429 - Too Many Requests")," - user send more than 10 requests / 10sec")),Object(i.b)("h4",{id:"headers"},"Headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X-RateLimit-Limit: 10")," - allowed number of limits per 10sec"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"X-RateLimit-Remaining: 9")," - number of left request in 10sec window")),Object(i.b)("h3",{id:"available-commands"},"Available commands"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/commands/setex"}),"SETEX")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/commands/get"}),"GET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/commands/del"}),"DEL")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/commands/incr"}),"INCR"))),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/create/heroku/herokujava"}),"Deploy a Java app on Heroku using Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/create/heroku/herokunodejs"}),"Deploy a NodeJS app on Heroku using Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/create/heroku/herokupython"}),"Deploy a Python app on Heroku using Redis"))))}p.isMDXComponent=!0},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);