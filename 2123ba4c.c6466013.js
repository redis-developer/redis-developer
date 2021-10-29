(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return d})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return u}));var r=t(3),s=t(7),n=(t(0),t(266)),c=t(271),i=t(272),d=(t(267),t(268),{id:"index-redisdatasource",title:"How to add Redis as a datasource in Grafana and build customize dashboards for Analytics",sidebar_label:"Redis Data Source for Grafana",slug:"/explore/redisdatasource"}),o={unversionedId:"explore/redisdatasource/index-redisdatasource",id:"explore/redisdatasource/index-redisdatasource",isDocsHomePage:!1,title:"How to add Redis as a datasource in Grafana and build customize dashboards for Analytics",description:"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs.",source:"@site/docs/explore/redisdatasource/index-redisdatasource.mdx",slug:"/explore/redisdatasource",permalink:"/explore/redisdatasource",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisdatasource/index-redisdatasource.mdx",version:"current",sidebar_label:"Redis Data Source for Grafana",sidebar:"docs",previous:{title:"Installing RedisInsight using Helm",permalink:"/explore/redisinsight/usinghelm"},next:{title:"How to create Grafana Dashboards for Redis Enterprise cluster  in 5 Minutes",permalink:"/explore/redisexplorer"}},l=[{value:"Features and Capabilities",id:"features-and-capabilities",children:[{value:"Further References",id:"further-references",children:[]}]}],b={toc:l};function u(e){var a=e.components,d=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,d,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs."),Object(n.b)("p",null,Object(n.b)("img",{alt:"my image",src:t(486).default})),Object(n.b)("h2",{id:"features-and-capabilities"},"Features and Capabilities"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Grafana 7.1 and later with a new plug-in platform supported.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Data Source can connect to any Redis database. No special configuration is required.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Redis Cluster and Sentinel supported since version 1.2.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Data Source supports:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redistimeseries/"}),"RedisTimeSeries"),": TS.GET, TS.INFO, TS.MRANGE, TS.QUERYINDEX, TS.RANGE"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgears/"}),"RedisGears"),": RG.DUMPREGISTRATIONS, RG.PYEXECUTE, RG.PYSTATS"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/"}),"RedisSearch"),": FT.INFO"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgraph/"}),"RedisGraph"),": GRAPH.QUERY, GRAPH.SLOWLOG")))),Object(n.b)(c.a,{defaultValue:"Using Homebrew",values:[{label:"Using Homebrew",value:"Homebrew"},{label:"Docker",value:"Docker"},{label:"Docker Compose",value:"Docker Compose"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"Using Homebrew",mdxType:"TabItem"},Object(n.b)("h4",{id:"using-homebrew"},"Using Homebrew"),Object(n.b)("h4",{id:"step-1-install-grafana"},"Step 1. Install Grafana"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew install grafana\n")),Object(n.b)("h4",{id:"step-2-install-redis-datasource"},"Step 2. Install Redis Datasource"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," grafana-cli plugins install redis-datasource\n")),Object(n.b)("p",null,"The brew page downloads and untars the files into /usr/local/Cellar/grafana/version."),Object(n.b)("h4",{id:"step-3-start-grafana-service"},"Step 3. Start Grafana service"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew services start grafana\n")),Object(n.b)("h4",{id:"step-4-access-grafana-dashboard"},"Step 4. Access Grafana dashboard"),Object(n.b)("p",null,"Open https://IP:3000 to access grafana. The default username/password is admin/admin."),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(305).default})),Object(n.b)("h4",{id:"step-5-click-configuration"},'Step 5. Click "Configuration"'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(306).default})),Object(n.b)("h4",{id:"step-6-add-redis-as-a-data-source"},"Step 6. Add Redis as a Data Source"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(307).default})),Object(n.b)("h4",{id:"step-7-select-redis-as-data-source-type"},'Step 7. Select "Redis" as data source type'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(308).default})),Object(n.b)("h4",{id:"step-8-add-redis-database-name-endpoint-url-and-password"},"Step 8. Add Redis Database name, Endpoint URL and password"),Object(n.b)("p",null,"Assuming that you already have Redis server and database up and running in your infrastructure.\nYou can also leverage Redis Enterprise Cloud as showcased in the below example."),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(309).default})),Object(n.b)("h4",{id:"step-9-click-import-under-dashboard"},'Step 9. Click "Import" under Dashboard'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(310).default})),Object(n.b)("h4",{id:"step-10access-the-redis-datasource-dashboard"},"Step 10.Access the Redis datasource Dashboard"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(311).default}))),Object(n.b)(i.a,{value:"Docker",mdxType:"TabItem"},Object(n.b)("h4",{id:"using-docker"},"Using Docker"),Object(n.b)("p",null,"You can install and run Grafana using the official Docker image. "),Object(n.b)("h4",{id:"step-1-install-docker"},"Step 1. Install Docker"),Object(n.b)("p",null,"The first step is to install docker for your operating system. Run the docker version command in a terminal window to make sure that docker is installed correctly."),Object(n.b)("p",null,"Note - On Windows and Mac, install docker version 18.03 or higher. You can run docker version to find out your docker version."),Object(n.b)("h4",{id:"step-2-run-grafana-docker-container"},"Step 2. Run Grafana Docker container"),Object(n.b)("p",null,"Pass the plugins you want installed to Docker with the GF_INSTALL_PLUGINS environment variable as a comma-separated list. This sends each plugin name to grafana-cli plugins install ${plugin} and installs them when Grafana starts.\nIn our case, we will be using redis-datasource."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' docker run -d -p 3000:3000 --name=grafana -e "GF_INSTALL_PLUGINS=redis-datasource" grafana/grafana\n')),Object(n.b)("h4",{id:"step-3-accessing-the-grafana-dashboard"},"Step 3. Accessing the grafana dashboard"),Object(n.b)("p",null,"Open https://IP:3000 to access grafana. The default username/password is admin/admin."),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(305).default})),Object(n.b)("h4",{id:"step-4-click-configuration"},'Step 4. Click "Configuration"'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(306).default})),Object(n.b)("h4",{id:"step-5-add-redis-as-a-data-source"},"Step 5. Add Redis as a Data Source"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(307).default})),Object(n.b)("h4",{id:"step-6-select-redis-as-data-source-type"},'Step 6. Select "Redis" as data source type'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(308).default})),Object(n.b)("h4",{id:"step-7-add-redis-database-name-endpoint-url-and-password"},"Step 7. Add Redis Database name, Endpoint URL and password"),Object(n.b)("p",null,"Assuming that you already have Redis server and database up and running in your infrastructure.\nYou can also leverage Redis Enterprise Cloud as showcased in the below example."),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(309).default})),Object(n.b)("h4",{id:"step-8-click-import-under-dashboard"},'Step 8. Click "Import" under Dashboard'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(310).default})),Object(n.b)("h4",{id:"step-9access-the-redis-datasource-dashboard"},"Step 9.Access the Redis datasource Dashboard"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(311).default}))),Object(n.b)(i.a,{value:"Docker Compose",mdxType:"TabItem"},Object(n.b)("h4",{id:"using-docker-compose"},"Using Docker Compose"),Object(n.b)("p",null,"Assuming that Docker Compose is already installed in your system, follow the below steps:"),Object(n.b)("h4",{id:"step-1--clone-the-repository"},"Step 1.  Clone the repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/RedisGrafana/grafana-redis-datasource\n cd grafana-redis-datasource\n")),Object(n.b)("h4",{id:"step-2-execute-the-docker-compose-cli"},"Step 2. Execute the docker-compose CLI"),Object(n.b)("p",null,"Project provides ",Object(n.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," to start Redis with all Redis Labs modules and Grafana."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker-compose up -d\n")),Object(n.b)("h4",{id:"step-3-access-grafana-dashboard"},"Step 3. Access Grafana dashboard"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(305).default})),Object(n.b)("h4",{id:"step-4-click-configuration-1"},'Step 4. Click "Configuration"'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(306).default})),Object(n.b)("h4",{id:"step-5-add-redis-as-a-data-source-1"},"Step 5. Add Redis as a Data Source"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(307).default})),Object(n.b)("h4",{id:"step-6-select-redis-as-data-source-type-1"},'Step 6. Select "Redis" as data source type'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(308).default})),Object(n.b)("h4",{id:"step-7-add-redis-database-name-endpoint-url-and-password-1"},"Step 7. Add Redis Database name, Endpoint URL and password"),Object(n.b)("p",null,"Assuming that you already have Redis server and database up and running in your infrastructure.\nYou can also leverage Redis Enterprise Cloud as showcased in the below example."),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(309).default})),Object(n.b)("h4",{id:"step-8-click-import-under-dashboard-1"},'Step 8. Click "Import" under Dashboard'),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(310).default})),Object(n.b)("h4",{id:"step-9access-the-redis-datasource-dashboard-1"},"Step 9.Access the Redis datasource Dashboard"),Object(n.b)("p",null,Object(n.b)("img",{alt:"grafana",src:t(311).default})))),Object(n.b)("h4",{id:"supported-commands"},"Supported commands"),Object(n.b)("p",null,"Data Source supports various Redis commands using custom components and provides a unified interface to query any command."),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/query.png",alt:"Query"}))),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/LquDQyEncLE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h3",{id:"further-references"},"Further References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/introducing-the-redis-data-source-plug-in-for-grafana/"}),"Introducing the Redis Data Source Plug-in for Grafana")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/"}),"How to Use the New Redis Data Source for Grafana Plug-in")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/3-real-life-apps-built-with-redis-data-source-for-grafana/"}),"3 Real-Life Apps Built with Redis Data Source for Grafana")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/"}),"Real-time observability with Redis and Grafana"))))}u.isMDXComponent=!0},268:function(e,a,t){"use strict";var r=t(0),s=t.n(r),n=t(266),c=t(274);t(267),t(55);a.a=function(e){var a=s.a.useState(!1),t=a[0],r=a[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!t)}})))),t&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(n.a,{components:c.a},e.children)))}},269:function(e,a,t){"use strict";var r=t(0),s=t(270);a.a=function(){var e=Object(r.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},270:function(e,a,t){"use strict";var r=t(0),s=Object(r.createContext)(void 0);a.a=s},271:function(e,a,t){"use strict";var r=t(0),s=t.n(r),n=t(269),c=t(273),i=t(56),d=t.n(i),o=37,l=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(n.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(r.useState)(i),O=g[0],j=g[1],v=r.Children.toArray(e.children);if(null!=u){var w=f[u];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var N=function(e){j(e),null!=u&&h(u,e)},R=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var a=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(c.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return R.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case l:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case o:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(R,e.target,e)},onFocus:function(){return N(a)},onClick:function(){N(a)}},t)}))),a?Object(r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},272:function(e,a,t){"use strict";var r=t(3),s=t(0),n=t.n(s);a.a=function(e){var a=e.children,t=e.hidden,s=e.className;return n.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:s}),a)}},305:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana-daa1bc6bc814c0518497ab7d72266124.png"},306:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource-410ccdbd0e0fe15c88077fc3d214971e.png"},307:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource2-12a726c9875cc3b9223f03a3a9058093.png"},308:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource3-6e427694af670f03e164b95c34244ca4.png"},309:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource4-e13494025dc69749a70d5d4fd1690b6e.png"},310:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource5-25ec9e3ecf7e458baf204761ae31d104.png"},311:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource7-7017aed615ea5fc3773d8686d152bd83.png"},486:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/redis-080746df0190688654cd8b2b3e740853.png"}}]);