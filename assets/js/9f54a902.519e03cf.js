"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7269],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>h});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(l),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},85162:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(67294),a=l(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:l,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:l},t)}},65488:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(87462),a=l(67294),r=l(86010),o=l(72389),s=l(67392),i=l(7094),u=l(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:l,block:o,defaultValue:p,values:h,groupId:m,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=h??k.map((e=>{let{props:{value:t,label:l,attributes:n}}=e;return{value:t,label:l,attributes:n}})),v=(0,s.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[E,w]=(0,a.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==E&&y.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,l=O.indexOf(t),n=y[l].value;n!==E&&(N(t),w(n),null!=m&&T(m,String(n)))},x=e=>{var t;let l=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;l=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;l=O[t]??O[O.length-1];break}}null==(t=l)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:t,label:l,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:_},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),l??t)}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function h(e){const t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},82749:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=l(87462),a=(l(67294),l(3905)),r=l(65488),o=l(85162);const s={},i=void 0,u={unversionedId:"howtos/quick-start/cheat-sheets/hashes",id:"howtos/quick-start/cheat-sheets/hashes",title:"hashes",description:"<Tabs",source:"@site/docs/howtos/quick-start/cheat-sheets/hashes.mdx",sourceDirName:"howtos/quick-start/cheat-sheets",slug:"/howtos/quick-start/cheat-sheets/hashes",permalink:"/howtos/quick-start/cheat-sheets/hashes",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/quick-start/cheat-sheets/hashes.mdx",tags:[],version:"current",lastUpdatedAt:1694812977,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{}},c={},d=[],p={toc:d};function h(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{defaultValue:"CLI",groupId:"REDIS_CHEAT_SHEET",values:[{label:"CLI",value:"CLI"},{label:"NodeRedis",value:"NODE_JS"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Command")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Syntax")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Example")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Output"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HSET"),(0,a.kt)("td",null,"HSET key field value [field value ...]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,'\nHSET h_employee_profile:101 name "Nicol" age 33\n'))),(0,a.kt)("td",null,"(integer) 2")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Sets the specified fields to their respective values in the hash stored at key.",(0,a.kt)("em",null,"Time Complexity:")," O(N)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HGET"),(0,a.kt)("td",null,"HGET key field"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nHGET h_employee_profile:101 name \n"))),(0,a.kt)("td",null,'"Nicol"')),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Returns the value associated with field in the hash stored at key.",(0,a.kt)("em",null,"Time Complexity:")," O(1)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HGETALL"),(0,a.kt)("td",null,"HGETALL key"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nHGETALL h_employee_profile:101\n"))),(0,a.kt)("td",null,'1) "name" 2) "Nicol" 3) "age" 4) "33"')),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Returns all fields and values of the hash stored at key.",(0,a.kt)("em",null,"Time Complexity:")," O(N)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HMGET"),(0,a.kt)("td",null,"HMGET key field1 [field2]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nHMGET h_employee_profile:101 name age\n"))),(0,a.kt)("td",null,'1) "Nicol" 2) "33"')),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Returns the values associated with the specified fields in the hash stored at key.",(0,a.kt)("em",null,"Time Complexity:")," O(N)"))))),(0,a.kt)(o.Z,{value:"NODE_JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*\n    HSET key field value [field value ...]\n    Sets the specified fields to their respective values in the hash stored at key.\n    Time Complexity: O(N)\n    */\n\nconst hSetResult = await client.hSet('h_employee_profile:101', {\n  name: 'Nicol',\n  age: 33,\n});\nconsole.log(hSetResult); // 2\n\n/*\n    HGET key field\n    Returns the value associated with field in the hash stored at key.\n    Time Complexity: O(1)\n    */\nconst hGetResult = await client.hGet('h_employee_profile:101', 'name');\nconsole.log(hGetResult); // \"Nicol\"\n\n/*\n    HGETALL key\n    Returns all fields and values of the hash stored at key.\n    Time Complexity: O(N)\n    */\nconst hGetAllResult = await client.hGetAll('h_employee_profile:101');\nconsole.log(hGetAllResult); // {name: \"Nicol\", age: \"33\"}\n\n/*\n    HMGET key field1 [field2]\n    Returns the values associated with the specified fields in the hash stored at key.\n    Time Complexity: O(N)\n    */\nconst hmGetResult = await client.hmGet('h_employee_profile:101', [\n  'name',\n  'age',\n]);\nconsole.log(hmGetResult); // [\"Nicol\", \"33\"]\n")))))}h.isMDXComponent=!0}}]);