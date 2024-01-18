"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8851],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return t?r.createElement(h,i(i({ref:a},p),{},{components:t})):r.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50358:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),o=t(52263);const n="authorByline_VoxI",i="authorLabel_a70t",l="authorProfileImage_URwT";const s=function(e){let{frontMatter:a}=e;const{siteConfig:t}=(0,o.Z)(),s=t.customFields.authors;return r.createElement(r.Fragment,null,a.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),a.authors.map((e=>r.createElement("div",{key:e,className:n},r.createElement("img",{className:l,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),r.createElement("div",null,r.createElement("div",{className:i},"Author:"),r.createElement("div",null,r.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),r.createElement("hr",null)))}},92079:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905)),n=t(50358);const i={id:"index-leaderboard",title:"How to build a Real-Time Leaderboard app Using Redis",sidebar_label:"How to build a Real-Time Leaderboard app Using Redis",slug:"/howtos/leaderboard",authors:["ajeet"]},l=void 0,s={unversionedId:"howtos/leaderboard/index-leaderboard",id:"howtos/leaderboard/index-leaderboard",title:"How to build a Real-Time Leaderboard app Using Redis",description:"The concept of a leaderboard\u2014a scoreboard showing the ranked names and current scores (or other data points) of the leading competitors\u2014is essential to the world of computer gaming, but leaderboards are now about more than just games. They are about gamification, a broader implementation that can include any group of people with a common goal (coworkers, students, sales groups, fitness groups, volunteers, and so on).",source:"@site/docs/howtos/leaderboard/index-leaderboard.mdx",sourceDirName:"howtos/leaderboard",slug:"/howtos/leaderboard",permalink:"/howtos/leaderboard",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/leaderboard/index-leaderboard.mdx",tags:[],version:"current",lastUpdatedAt:1700152680,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{id:"index-leaderboard",title:"How to build a Real-Time Leaderboard app Using Redis",sidebar_label:"How to build a Real-Time Leaderboard app Using Redis",slug:"/howtos/leaderboard",authors:["ajeet"]},sidebar:"docs",previous:{title:"Semantic Image Based Queries Using LangChain (OpenAI) and Redis",permalink:"/howtos/solutions/vector/image-summary-search"},next:{title:"How to build a Rate Limiter using Redis",permalink:"/howtos/ratelimiting"}},d={},p=[{value:"Step 1. Install the below software",id:"step-1-install-the-below-software",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Run docker compose",id:"step-3-run-docker-compose",level:3},{value:"Step 4. Verifying if containers are up and running",id:"step-4-verifying-if-containers-are-up-and-running",level:3},{value:"Step 5. Copy .env.example to create .env",id:"step-5-copy-envexample-to-create-env",level:3},{value:"Step 6. Run the backend",id:"step-6-run-the-backend",level:3},{value:"Step 7. Run the wrapper task",id:"step-7-run-the-wrapper-task",level:3},{value:"Step 8. Perform the build task",id:"step-8-perform-the-build-task",level:3},{value:"Step 9. Run your application",id:"step-9-run-your-application",level:3},{value:"Step 10. Access the leaderboard application",id:"step-10-access-the-leaderboard-application",level:3},{value:"How it works?",id:"how-it-works",level:3},{value:"How the data is stored:",id:"how-the-data-is-stored",level:4},{value:"How the data is accessed:",id:"how-the-data-is-accessed",level:4},{value:"References",id:"references",level:3}],c={toc:p};function u(e){let{components:a,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{frontMatter:i,mdxType:"Authors"}),(0,o.kt)("p",null,"The concept of a leaderboard\u2014a scoreboard showing the ranked names and current scores (or other data points) of the leading competitors\u2014is essential to the world of computer gaming, but leaderboards are now about more than just games. They are about gamification, a broader implementation that can include any group of people with a common goal (coworkers, students, sales groups, fitness groups, volunteers, and so on)."),(0,o.kt)("p",null,"Leaderboards can encourage healthy competition in a group by openly displaying the current ranking of each group member. They also provide a clear way to view the ongoing achievements of the entire team as members move towards a goal. Gamification of tasks and goals via leaderboards is a great way to motivate people by providing them with constant feedback of where they rank in comparison to other group members. Done well, this can lead to healthy competition that builds group cohesion."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My Image",src:t(15620).Z,width:"2878",height:"1576"})),(0,o.kt)("h3",{id:"step-1-install-the-below-software"},"Step 1. Install the below software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker (on mac: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/install/"},"https://docs.docker.com/docker-for-mac/install/"),")"),(0,o.kt)("li",{parentName:"ul"},"Docker Compose")),(0,o.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/basic-redis-leaderboard-demo-java\n")),(0,o.kt)("h3",{id:"step-3-run-docker-compose"},"Step 3. Run docker compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker network create global\ndocker-compose up -d --build\n")),(0,o.kt)("h3",{id:"step-4-verifying-if-containers-are-up-and-running"},"Step 4. Verifying if containers are up and running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," docker-compose ps\n            Name                           Command               State             Ports\n--------------------------------------------------------------------------------------------------\nredis.redisleaderboard.docker   docker-entrypoint.sh redis ...   Up      127.0.0.1:55000->6379/tcp\n")),(0,o.kt)("h3",{id:"step-5-copy-envexample-to-create-env"},"Step 5. Copy .env.example to create .env"),(0,o.kt)("p",null,"Provide the values for environment variables (if needed)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- REDIS_URL: Redis database endpoint URL\n- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),(0,o.kt)("p",null,"If you're using Redis Cloud, you must supply DB endpoint, password, port and the name of the database.\nIn case of local system, the entries look like as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REDIS_URL=\nREDIS_HOST=redis://localhost\nREDIS_PORT=6379\nREDIS_PASSWORD=\nREDIS_DB=\n")),(0,o.kt)("h3",{id:"step-6-run-the-backend"},"Step 6. Run the backend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install gradle")),(0,o.kt)("p",null,"Follow the following link ",(0,o.kt)("a",{parentName:"p",href:"https://gradle.org/install/"},"https://gradle.org/install/")," for your MacOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install gradle\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install JDK")),(0,o.kt)("p",null,"Follow the following link ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"},"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm")," for your MacOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export $(cat .env | xargs)\n")),(0,o.kt)("h3",{id:"step-7-run-the-wrapper-task"},"Step 7. Run the wrapper task"),(0,o.kt)("p",null,"To use Wrapper, we need to generate some particular files. We'll generate these files using the built-in Gradle task called wrapper.\nNote that we need to generate these files only once."),(0,o.kt)("p",null,"Now, let's run the wrapper task in our project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gradle wrapper\n")),(0,o.kt)("p",null,"It should show the below results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Welcome to Gradle 6.8.3!\n\nHere are the highlights of this release:\n - Faster Kotlin DSL script compilation\n - Vendor selection for Java toolchains\n - Convenient execution of tasks in composite builds\n - Consistent dependency resolution\n\nFor more details see https://docs.gradle.org/6.8.3/release-notes.html\n\nStarting a Gradle Daemon (subsequent builds will be faster)\n\nBUILD SUCCESSFUL in 29s\n1 actionable task: 1 executed\n")),(0,o.kt)("h3",{id:"step-8-perform-the-build-task"},"Step 8. Perform the build task"),(0,o.kt)("p",null,"The Gradle Wrapper is now available for building your project. It's time to run the wrapper script to perform the build task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n% ./gradlew build\nDownloading https://services.gradle.org/distributions/gradle-6.8.3-bin.zip\n..........10%..........20%..........30%...........40%..........50%..........60%..........70%...........80%..........90%..........100%\nStarting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details\n\n> Task :test\n2021-03-01 07:08:42.962  INFO 3624 --- [extShutdownHook] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'\n\nBUILD SUCCESSFUL in 1m 13s\n12 actionable tasks: 12 executed\n")),(0,o.kt)("h3",{id:"step-9-run-your-application"},"Step 9. Run your application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew run\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> Task :run\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.4.1)\n\n2021-03-01 07:09:59.610  INFO 3672 --- [  restartedMain] BasicRedisLeaderLoardDemoJavaApplication : Starting BasicRedisLeaderLoardDemoJavaApplication using Java 13.0.2 on Ajeets-MacBook-Pro.local with PID 3672 (/Users/ajeetraina/projects/basic-redis-leaderboard-demo-java/build/classes/java/main started by ajeetraina in /Users/ajeetraina/projects/basic-redis-leaderboard-demo-java)\n2021-03-01 07:09:59.614  INFO 3672 --- [  restartedMain] BasicRedisLeaderLoardDemoJavaApplication : No active profile set, falling back to default profiles: default\n2021-03-01 07:09:59.661  INFO 3672 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable\n2021-03-01 07:09:59.661  INFO 3672 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'\n2021-03-01 07:10:00.481  INFO 3672 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 5000 (http)\n2021-03-01 07:10:00.492  INFO 3672 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2021-03-01 07:10:00.492  INFO 3672 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.41]\n2021-03-01 07:10:00.551  INFO 3672 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2021-03-01 07:10:00.551  INFO 3672 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 889 ms\n2021-03-01 07:10:00.756  INFO 3672 --- [  restartedMain] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'\n2021-03-01 07:10:00.845  INFO 3672 --- [  restartedMain] o.s.b.a.w.s.WelcomePageHandlerMapping    : Adding welcome page: URL [file:/Users/ajeetraina/projects/basic-redis-leaderboard-demo-java/assets/index.html]\n2021-03-01 07:10:00.949  INFO 3672 --- [  restartedMain] .s.s.UserDetailsServiceAutoConfiguration :\n\nUsing generated security password: ea2d5326-b04c-4f93-b771-57bcb53f656e\n\n2021-03-01 07:10:01.016  INFO 3672 --- [  restartedMain] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@583fa06c, org.springframework.security.web.context.SecurityContextPersistenceFilter@524c0386, org.springframework.security.web.header.HeaderWriterFilter@c6e5d4e, org.springframework.security.web.authentication.logout.LogoutFilter@3e1f33e9, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@6790427f, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@40ddf86, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@1412ffa9, org.springframework.security.web.session.SessionManagementFilter@3eb6c20f, org.springframework.security.web.access.ExceptionTranslationFilter@21646e94, org.springframework.security.web.access.intercept.FilterSecurityInterceptor@649e1b25]\n2021-03-01 07:10:01.043  INFO 3672 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729\n2021-03-01 07:10:01.065  INFO 3672 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 5000 (http) with context path ''\n2021-03-01 07:10:01.093  INFO 3672 --- [  restartedMain] BasicRedisLeaderLoardDemoJavaApplication : Started BasicRedisLeaderLoardDemoJavaApplication in 1.937 seconds (JVM running for 2.327)\n<=========----\x3e 75% EXECUTING [17s]\n> :run\n")),(0,o.kt)("h3",{id:"step-10-access-the-leaderboard-application"},"Step 10. Access the leaderboard application"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My Image",src:t(15620).Z,width:"2878",height:"1576"})),(0,o.kt)("h3",{id:"how-it-works"},"How it works?"),(0,o.kt)("h4",{id:"how-the-data-is-stored"},"How the data is stored:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The AAPL's details - market cap of 2.6 triillions and USA origin - are stored in a hash like below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' HSET "company:AAPL" symbol "AAPL" market_cap "2600000000000" country USA\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Ranks of AAPL of 2.6 trillions are stored in a ZSET."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZADD  companyLeaderboard 2600000000000 company:AAPL\n")))),(0,o.kt)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Top 10 companies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZREVRANGE companyLeaderboard 0 9 WITHSCORES\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All companies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZREVRANGE companyLeaderboard 0 -1 WITHSCORES\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bottom 10 companies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZRANGE companyLeaderboard 0 9 WITHSCORES\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Between rank 10 and 15:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZREVRANGE companyLeaderboard 9 14 WITHSCORES\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Show ranks of AAPL, FB and TSLA:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZREVRANGE  companyLeaderBoard company:AAPL company:FB company:TSLA\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adding 1 billion to market cap of FB company:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' ZINCRBY companyLeaderBoard 1000000000 "company:FB"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reducing 1 billion of market cap of FB company:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' ZINCRBY companyLeaderBoard -1000000000 "company:FB"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Companies between 500 billion and 1 trillion:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZCOUNT companyLeaderBoard 500000000000 1000000000000\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Companies over a Trillion:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," ZCOUNT companyLeaderBoard 1000000000000 +inf\n")))),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-leaderboard-demo-nodejs"},"How to build a Real-Time Leaderboard app using Redis & Nodejs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-leaderboard-demo-ruby"},"How to build a Real-Time Leaderboard app using Redis & Ruby")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-leaderboard-demo-python"},"How to build a Real-Time Leaderboard app using Redis & Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-leaderboard-demo-dotnet"},"How to build a Real-Time Leaderboard app using Redis & .NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/basic-redis-leaderboard-demo-go"},"How to build a Real-Time Leaderboard app using Redis & Go"))))}u.isMDXComponent=!0},15620:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/leaderboard-4bb6a429bc363743888354f6b06631b8.png"}}]);