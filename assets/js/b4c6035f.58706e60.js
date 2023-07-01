"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3527],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(t),m=s,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=p;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));const i={id:"index-jsonindex-document",title:"How to index JSON documents using Redis JSON & Search",sidebar_label:"How to index JSON documents using Redis JSON & Search",slug:"/howtos/redisjson/jsonindex-document"},o=void 0,r={unversionedId:"howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document",id:"howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document",title:"How to index JSON documents using Redis JSON & Search",description:"Redis JSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, Redis JSON will fully support JSONPath expressions and Active-Active geo-distribution. The Active-Active implementation is based on Conflict-free Replicated Data-Types (CRDT).",source:"@site/docs/howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document.mdx",sourceDirName:"howtos/redisjson/json-using-redisearch/jsonindex-document",slug:"/howtos/redisjson/jsonindex-document",permalink:"/howtos/redisjson/jsonindex-document",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/json-using-redisearch/jsonindex-document/index-jsonindex-document.mdx",tags:[],version:"current",lastUpdatedAt:1688164724,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"index-jsonindex-document",title:"How to index JSON documents using Redis JSON & Search",sidebar_label:"How to index JSON documents using Redis JSON & Search",slug:"/howtos/redisjson/jsonindex-document"}},d={},l=[{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Step 1. Run the &quot;latest&quot; tagged Redis Stack container",id:"step-1-run-the-latest-tagged-redis-stack-container",level:3},{value:"Step 2. Create an Index",id:"step-2-create-an-index",level:3},{value:"Step 3. Populate the database with JSON document",id:"step-3-populate-the-database-with-json-document",level:3},{value:"Step 4. Indexing the database with JSON document",id:"step-4-indexing-the-database-with-json-document",level:3},{value:"Step 5. Projecting using JSON Path expressions",id:"step-5-projecting-using-json-path-expressions",level:3},{value:"References",id:"references",level:3}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Redis JSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, Redis JSON will fully support JSONPath expressions and ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"},"Active-Active geo-distribution"),". The Active-Active implementation is based on ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"},"Conflict-free Replicated Data-Types (CRDT)"),"."),(0,s.kt)("p",null,"Prior to v2.2, Redis Search only supported Redis hashes. Going forward, Redis Search will support Redis JSON documents. This opens a powerful new set of document-based indexing use cases. In addition, Redis Search now provides query profiling. This will empower developers to understand and optimize their Redis Search queries, increasing their developer experience."),(0,s.kt)("p",null,"Redis Search has been providing indexing and search capabilities on hashes. Under the hood, Redis JSON 2.0 exposes an internal public API. Internal, because this API is exposed to other modules running inside a Redis node. Public, because any module can consume this API. So does Redis Search! In addition to indexing Redis hashes, Redis Search also indexes JSON. To index JSON, you must use the Redis JSON module."),(0,s.kt)("p",null,"By exposing its capabilities to other modules, Redis JSON gives Redis Search the ability to index JSON documents so users can now find documents by indexing and querying the content. These combined modules give you a powerful, low latency, JSON-oriented document database!"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Redis 6.x or later"),(0,s.kt)("li",{parentName:"ul"},"Redis Search 2.2 or later"),(0,s.kt)("li",{parentName:"ul"},"Redis JSON 2.0 or later")),(0,s.kt)("h3",{id:"step-1-run-the-latest-tagged-redis-stack-container"},'Step 1. Run the "latest" tagged Redis Stack container'),(0,s.kt)("p",null,"This Docker image contains Redis together with the main Redis modules, including Redis Search and Redis JSON. You'll need the latest tag of the image, which you can access as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 redis/redis-stack:latest\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20406,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=timeseries,ver=10410,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ReJSON,ver=20000,api=1,filters=0,usedby=[search],using=[],options=[]\n module:name=search,ver=20200,api=1,filters=0,usedby=[],using=[ReJSON],options=[]\n")),(0,s.kt)("h3",{id:"step-2-create-an-index"},"Step 2. Create an Index"),(0,s.kt)("p",null,"Let's start by creating an index."),(0,s.kt)("p",null,"We can now specify ON JSON to inform Redis Search that we want to index JSON documents.\nThen, on the SCHEMA part, you can provide JSONPath expressions. The result of each JSON Path expression is indexed and associated with a logical name ( attribute ). This attribute (previously called field ) is used in the query part."),(0,s.kt)("p",null,"This is the basic syntax for indexing a JSON document:"),(0,s.kt)("b",null,"Syntax"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," FT.CREATE {index_name} ON JSON SCHEMA {json_path} AS {attribute} {type}\n")),(0,s.kt)("b",null,"Command"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," FT.CREATE userIdx ON JSON SCHEMA $.user.name AS name TEXT $.user.email AS email  TAG\n")),(0,s.kt)("h3",{id:"step-3-populate-the-database-with-json-document"},"Step 3. Populate the database with JSON document"),(0,s.kt)("p",null,"We should first populate the database with a JSON document using the JSON.SET command. In our example we are going to use the following JSON document:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London"\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'JSON.SET myuser $ \'{ "user":{"name": "Paul John", "email": "paul.john@example.com", "age": "4", "country": "London" }}\'\n\n')),(0,s.kt)("p",null,"Because indexing is synchronous, the document will be visible on the index as soon as the JSON.SET command returns. Any subsequent query matching the indexed content will return the document"),(0,s.kt)("h3",{id:"step-4-indexing-the-database-with-json-document"},"Step 4. Indexing the database with JSON document"),(0,s.kt)("p",null,"This new version includes a comprehensive support of JSONPath. It is now possible to use all the expressiveness of JSONPath expressions."),(0,s.kt)("p",null,"To create a new index, we use the FT.CREATE command. The schema of the index now accepts JSONPath expressions. The result of the expression is indexed and associated with an attribute (here: title)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"FT.CREATE myIdx ON JSON SCHEMA $.title AS title TEXT\n")),(0,s.kt)("p",null,"We can now do a search query and find our JSON document using FT.SEARCH:"),(0,s.kt)("b",null,"Command"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)'\n")),(0,s.kt)("b",null,"Result"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$"\n    2) "{\\"user\\":{\\"name\\":\\"Paul John\\",\\"email\\":\\"paul.john@example.com\\",\\"age\\":\\"4\\",\\"country\\":\\"London\\"}}"\n')),(0,s.kt)("p",null,"We just saw that, by default, FT.SEARCH returns the whole document. We can also return only specific attribute (here name)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  FT.SEARCH userIdx '@name:(John)' RETURN 1 name\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'  1) (integer) 1\n  2) "myuser"\n  3) 1) "name"\n    2) "Paul John"\n')),(0,s.kt)("h3",{id:"step-5-projecting-using-json-path-expressions"},"Step 5. Projecting using JSON Path expressions"),(0,s.kt)("p",null,"The RETURN parameter also accepts a JSON Path expression which let us extract any part of the JSON document.\nIn this example, we return the result of the JSON Path expression $.user.hp ."),(0,s.kt)("b",null,"Command"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)' RETURN 1 $.user.email\n")),(0,s.kt)("b",null,"Result"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$.user.email"\n    2) "paul.john@example.com"\n')),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"It is not possible to index JSON object and JSON arrays.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},' {\n    "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London",\n    \u201caddress": [\n        "Orbital Park",\n        " Hounslow"\n  ],\n  "pincode": "TW4 6JS"\n }\n  }\n}\n')),(0,s.kt)("b",null,"Command"),":",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},' JSON.SET myuser $ \'{ "user": { "name": "Paul John", "email": "paul.hojn@example.com", "age" :"40", "country": "London", "address": [ "Orbital Park","Hounslow" ], "pincode": "TW4 6JS" }}\'\n')),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University")))}c.isMDXComponent=!0}}]);