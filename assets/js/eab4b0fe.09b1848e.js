"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9398],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(i),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return i?r.createElement(h,a(a({ref:t},p),{},{components:i})):r.createElement(h,a({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var d=2;d<s;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},50358:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(67294),n=i(52263);const s="authorByline_VoxI",a="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,n.Z)(),l=i.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:s},r.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:a},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},71327:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(87462),n=(i(67294),i(3905)),s=i(50358);const a={id:"index-redistimeseries",title:"Manage Redis time-series data using the RedisInsight Browser Tool",sidebar_label:"Manage Redis time-series data using the RedisInsight Browser Tool",slug:"/explore/redisinsight/redistimeseries",authors:["ajeet"]},o=void 0,l={unversionedId:"explore/redisinsight/redistimeseries/index-redistimeseries",id:"explore/redisinsight/redistimeseries/index-redistimeseries",title:"Manage Redis time-series data using the RedisInsight Browser Tool",description:"If you want to visualize a time series data structure to your Redis database then download RedisInsight.",source:"@site/docs/explore/redisinsight/redistimeseries/index-redistimeseries.mdx",sourceDirName:"explore/redisinsight/redistimeseries",slug:"/explore/redisinsight/redistimeseries",permalink:"/explore/redisinsight/redistimeseries",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redistimeseries/index-redistimeseries.mdx",tags:[],version:"current",lastUpdatedAt:1688164724,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"index-redistimeseries",title:"Manage Redis time-series data using the RedisInsight Browser Tool",sidebar_label:"Manage Redis time-series data using the RedisInsight Browser Tool",slug:"/explore/redisinsight/redistimeseries",authors:["ajeet"]},sidebar:"docs",previous:{title:"Write Your Serverless Redis function using RedisInsight Browser Tool",permalink:"/explore/redisinsight/redisgears"},next:{title:"Perform Database Search and Analytics using Redis Search Browser Tool",permalink:"/explore/redisinsight/redisearch"}},d={},p=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",level:2},{value:"Step 4. Execute the Python script",id:"step-4-execute-the-python-script",level:2},{value:"Step 5. Execute the script",id:"step-5-execute-the-script",level:2},{value:"Step 6. Query a range across one or multiple time-series",id:"step-6-query-a-range-across-one-or-multiple-time-series",level:2},{value:"Step 7 . Displaying the JSON view",id:"step-7--displaying-the-json-view",level:2},{value:"Step 8. Displaying the tabular view",id:"step-8-displaying-the-tabular-view",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{frontMatter:a,mdxType:"Authors"}),(0,n.kt)("p",null,"If you want to visualize a time series data structure to your Redis database then download ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redis.io/docs/stack"},"Redis Stack")," enhances your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With Redis Time Series, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf."),(0,n.kt)("p",null,"With RedisInsight browser tool, you can perform the below sets of activities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TS.RANGE & TS.MRANGE are supported"),(0,n.kt)("li",{parentName:"ul"},"Charts support milliseconds."),(0,n.kt)("li",{parentName:"ul"},"Ability to configure auto refresh interval."),(0,n.kt)("li",{parentName:"ul"},"Ability to submit query with \u2018ctrl + enter\u2019 in single line mode"),(0,n.kt)("li",{parentName:"ul"},"Display tabular as well as JSON view")),(0,n.kt)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/create/redis-stack"},"Follow this link to create Redis Stack database")," that comes with support for time series data structures"),(0,n.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,n.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:i(21676).Z,width:"1464",height:"1256"})),(0,n.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,n.kt)("p",null,'Select "Connect to a Redis database"\n',(0,n.kt)("img",{alt:"My Image",src:i(4820).Z,width:"1790",height:"838"})),(0,n.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,n.kt)("h2",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redistimeseries/AirQualityUCI\n")),(0,n.kt)("h2",{id:"step-4-execute-the-python-script"},"Step 4. Execute the Python script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\n"""sample module for dataset loading into redis stack from csv file\n"""\n\nimport argparse\nimport redis\nimport csv\nimport datetime\nimport logging\nfrom tqdm import tqdm\n\n\ndef parse_dataset_row(line):\n\n    result = False\n    date = None\n    Time = None\n    unix_ts = None\n    carbon_monoxide = None\n    temperature_c = None\n    relative_humidity = None\n    # check if we have 15 fields or more, and all fields have something on it\n    if len(line) > 14 and sum([len(line[x]) > 0 for x in range(0, 14)]) == 14:\n        str_date = line[0]\n        str_time = line[1]\n        carbon_monoxide = (\n            float(line[2].replace(",", "."))\n            if (float(line[2].replace(",", ".")) > -200.0)\n            else None\n        )\n        temperature_c = (\n            float(line[12].replace(",", "."))\n            if (float(line[12].replace(",", ".")) > -200.0)\n            else None\n        )\n        relative_humidity = (\n            float(line[13].replace(",", "."))\n            if (float(line[13].replace(",", ".")) > -200.0)\n            else None\n        )\n        unix_ts = int(\n            datetime.datetime.strptime(\n                "{0} {1}".format(str_date, str_time), "%d/%m/%Y %H.%M.%S"\n            ).timestamp()\n        )\n        result = True\n\n    return result, unix_ts, carbon_monoxide, temperature_c, relative_humidity\n\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--port", type=int, help="redis instance port", default=6379)\nparser.add_argument(\n    "--password", type=int, help="redis instance password", default=None\n)\nparser.add_argument("--verbose", help="enable verbose output", action="store_true")\nparser.add_argument("--host", type=str, help="redis instance host", default="127.0.0.1")\nparser.add_argument(\n    "--csv",\n    type=str,\n    help="csv file containing the dataset",\n    default="./AirQualityUCI/AirQualityUCI.csv",\n)\nparser.add_argument(\n    "--csv_delimiter", type=str, help="csv file field delimiter", default=";"\n)\nargs = parser.parse_args()\n\nlog_level = logging.ERROR\nif args.verbose is True:\n    log_level = logging.INFO\nlogging.basicConfig(level=log_level)\n\n# redis setup\nredis_obj = redis.Redis(host=args.host, port=args.port, password=args.password)\ntemperature_key = "ts:temperature"\ncarbon_monoxide_key = "ts:carbon_monoxide"\nrelative_humidity_key = "ts:relative_humidity"\n\nwith open(args.csv, newline="") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=args.csv_delimiter)\n    next(csv_reader, None)  # skip the headers\n    for row in tqdm(csv_reader):\n        (\n            result,\n            unix_ts,\n            carbon_monoxide,\n            temperature_c,\n            relative_humidity,\n        ) = parse_dataset_row(row)\n        if result is True:\n            try:\n                if temperature_c is not None:\n                    redis_obj.execute_command(\n                        "ts.add", temperature_key, unix_ts, temperature_c\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            temperature_key, unix_ts, temperature_c\n                        )\n                    )\n                if carbon_monoxide is not None:\n                    redis_obj.execute_command(\n                        "ts.add", carbon_monoxide_key, unix_ts, carbon_monoxide\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            carbon_monoxide_key, unix_ts, carbon_monoxide\n                        )\n                    )\n                if relative_humidity is not None:\n                    redis_obj.execute_command(\n                        "ts.add", relative_humidity_key, unix_ts, relative_humidity\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            relative_humidity_key, unix_ts, relative_humidity\n                        )\n                    )\n            except redis.RedisError as err:\n                logging.error(err)\n\n')),(0,n.kt)("h2",{id:"step-5-execute-the-script"},"Step 5. Execute the script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ python3 dataloader.py\n9471it [00:29, 326.33it/s]\n")),(0,n.kt)("h2",{id:"step-6-query-a-range-across-one-or-multiple-time-series"},"Step 6. Query a range across one or multiple time-series"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"}," TS.RANGE ts:carbon_monoxide 1112596200 1112603400")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:i(21036).Z,width:"1306",height:"712"})),(0,n.kt)("h2",{id:"step-7--displaying-the-json-view"},"Step 7 . Displaying the JSON view"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:i(3390).Z,width:"1334",height:"976"})),(0,n.kt)("h2",{id:"step-8-displaying-the-tabular-view"},"Step 8. Displaying the tabular view"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:i(24277).Z,width:"1300",height:"678"})),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.io/docs/stack"},"Redis Stack official documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.io/docs/stack/timeseries/quickstart/"},"Time Series Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"explore/redisinsight/profiler"},"Analyze Your Redis commands using RedisInsight Profiler tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"How to Manage Real-Time IoT Sensor Data in Redis"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},21036:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image1-ee358a955656cfe9c486f466b2796cdb.png"},3390:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image2-661f242e4ab31edb2821cdd6f1027a18.png"},24277:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image3-e8e956f69cdd6275cdb30e850dd69adb.png"},4820:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},21676:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);