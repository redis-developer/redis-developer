"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return a?i.createElement(h,s(s({ref:t},p),{},{components:a})):i.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={id:"index-redisgraphmovies",title:"Building Movies database app using RedisGraph and NodeJS",sidebar_label:"Building Movies database app using RedisGraph and NodeJS",slug:"/howtos/redisgraphmovies"},s=void 0,o={unversionedId:"howtos/redisgraphmovies/index-redisgraphmovies",id:"howtos/redisgraphmovies/index-redisgraphmovies",title:"Building Movies database app using RedisGraph and NodeJS",description:"IMDb(Internet Movie Database) is the world's most popular and authoritative source for information on movies, TV shows and celebrities. This application is an IMDB clone with basic account authentication and movie recommendation functionality. You will learn the power of RedisGraph and NodeJS to build a simple movie database.",source:"@site/docs/howtos/redisgraphmovies/index-redisgraphmovies.mdx",sourceDirName:"howtos/redisgraphmovies",slug:"/howtos/redisgraphmovies",permalink:"/howtos/redisgraphmovies",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraphmovies/index-redisgraphmovies.mdx",tags:[],version:"current",lastUpdatedAt:1688164724,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"index-redisgraphmovies",title:"Building Movies database app using RedisGraph and NodeJS",sidebar_label:"Building Movies database app using RedisGraph and NodeJS",slug:"/howtos/redisgraphmovies"},sidebar:"docs",previous:{title:"How to build a Fraud Detection System using Redis",permalink:"/howtos/frauddetection"},next:{title:"Building a Pipeline for Natural Language Processing using RedisGears",permalink:"/howtos/nlp"}},d={},l=[{value:"Tech Stack",id:"tech-stack",level:3},{value:"Step 1. Install the pre-requisites",id:"step-1-install-the-pre-requisites",level:3},{value:"Step 2. Run Redis Stack Docker container",id:"step-2-run-redis-stack-docker-container",level:3},{value:"Step 3. Run RedisInsight Docker container",id:"step-3-run-redisinsight-docker-container",level:3},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",level:3},{value:"Step 5. Setting up environment variables",id:"step-5-setting-up-environment-variables",level:3},{value:"Step 6. Install the dependencies",id:"step-6-install-the-dependencies",level:3},{value:"Step 7. Run the backend server",id:"step-7-run-the-backend-server",level:3},{value:"Step 8. Run the client",id:"step-8-run-the-client",level:3},{value:"Step 9. Accessing the Movie app",id:"step-9-accessing-the-movie-app",level:3},{value:"Step 10. Sign up for a new account",id:"step-10-sign-up-for-a-new-account",level:3},{value:"Step 11. Sign-in to movie app",id:"step-11-sign-in-to-movie-app",level:3},{value:"Step 12. Rate the movie",id:"step-12-rate-the-movie",level:3},{value:"Step 13. View the list of rated movie",id:"step-13-view-the-list-of-rated-movie",level:3},{value:"Step 14. View directed movie over RedisInsight",id:"step-14-view-directed-movie-over-redisinsight",level:3},{value:"Step 15. Find movies where actor acted in.",id:"step-15-find-movies-where-actor-acted-in",level:3},{value:"Step 16. Store a user in a database",id:"step-16-store-a-user-in-a-database",level:3},{value:"Step 17. Find a user by username",id:"step-17-find-a-user-by-username",level:3},{value:"How it works?",id:"how-it-works",level:3},{value:"Home page",id:"home-page",level:4},{value:"How the data is stored",id:"how-the-data-is-stored",level:4},{value:"Add a new genre:",id:"add-a-new-genre",level:4},{value:"Add a movie:",id:"add-a-movie",level:4},{value:"Set genre to a movie:",id:"set-genre-to-a-movie",level:4},{value:"How the data is accessed",id:"how-the-data-is-accessed",level:4},{value:"Get genres:",id:"get-genres",level:4},{value:"Get moves by genre:",id:"get-moves-by-genre",level:4},{value:"Code example: Get movies with genre",id:"code-example-get-movies-with-genre",level:4},{value:"Sign-up and Login pages",id:"sign-up-and-login-pages",level:4},{value:"How the data is stored",id:"how-the-data-is-stored-1",level:4},{value:"Store user in the database:",id:"store-user-in-the-database",level:4},{value:"How the data is accessed",id:"how-the-data-is-accessed-1",level:4},{value:"Find by user name:",id:"find-by-user-name",level:4},{value:"Code Example: Find user",id:"code-example-find-user",level:4},{value:"Movie detail page",id:"movie-detail-page",level:4},{value:"How the data is stored",id:"how-the-data-is-stored-2",level:4},{value:"Associate actor with a movie:",id:"associate-actor-with-a-movie",level:4},{value:"Associate director with a movie:",id:"associate-director-with-a-movie",level:4},{value:"How the data is accessed",id:"how-the-data-is-accessed-2",level:4},{value:"Find movie by id with genre, actors and director:",id:"find-movie-by-id-with-genre-actors-and-director",level:4},{value:"Code Example: Get movie detail",id:"code-example-get-movie-detail",level:4},{value:"Actor and Director detail page",id:"actor-and-director-detail-page",level:4},{value:"How the data is accessed",id:"how-the-data-is-accessed-3",level:4},{value:"Find movies where actor acted in:",id:"find-movies-where-actor-acted-in",level:4},{value:"Find movies directed by:",id:"find-movies-directed-by",level:4},{value:"Get movies directed by",id:"get-movies-directed-by",level:4},{value:"User detail page",id:"user-detail-page",level:4},{value:"Shows the profile info and movies which were rated by user",id:"shows-the-profile-info-and-movies-which-were-rated-by-user",level:4},{value:"How the data is stored",id:"how-the-data-is-stored-3",level:4},{value:"Set rating for a movie:",id:"set-rating-for-a-movie",level:4},{value:"How the data is accessed",id:"how-the-data-is-accessed-4",level:4},{value:"Get movies and user ratings:",id:"get-movies-and-user-ratings",level:4},{value:"Get rated movies for user",id:"get-rated-movies-for-user",level:4},{value:"Data types:",id:"data-types",level:4},{value:"Each type has its own properties",id:"each-type-has-its-own-properties",level:4},{value:"And there are 4 types of relationship:",id:"and-there-are-4-types-of-relationship",level:4},{value:"References",id:"references",level:3}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"IMDb(Internet Movie Database) is the world's most popular and authoritative source for information on movies, TV shows and celebrities. This application is an IMDB clone with basic account authentication and movie recommendation functionality. You will learn the power of RedisGraph and NodeJS to build a simple movie database."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"moviedb",src:a(10654).Z,width:"2052",height:"666"})),(0,n.kt)("h3",{id:"tech-stack"},"Tech Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Frontend - React"),(0,n.kt)("li",{parentName:"ul"},"Backend - Node.js, Redis, RedisGraph")),(0,n.kt)("h3",{id:"step-1-install-the-pre-requisites"},"Step 1. Install the pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node - v13.14.0+"),(0,n.kt)("li",{parentName:"ul"},"NPM - v7.6.0+")),(0,n.kt)("h3",{id:"step-2-run-redis-stack-docker-container"},"Step 2. Run Redis Stack Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -p 6379:6379 redis/redis-stack\n")),(0,n.kt)("p",null,"Ensure that Docker container is up and running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' docker ps\n CONTAINER ID   IMAGE                           COMMAND                  CREATED             STATUS             PORTS                    NAMES\n fd5ef30f025a   redis/redis-stack               "redis-server --load\u2026"   2 hours ago         Up 2 hours         0.0.0.0:6379->6379/tcp   nervous_buck\n')),(0,n.kt)("h3",{id:"step-3-run-redisinsight-docker-container"},"Step 3. Run RedisInsight Docker container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,n.kt)("p",null,"Ensure that Docker container is up and runnig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},' docker ps\n CONTAINER ID   IMAGE                           COMMAND                  CREATED             STATUS             PORTS                    NAMES\n 264db1706dcc   redislabs/redisinsight:latest   "bash ./docker-entry\u2026"   About an hour ago   Up About an hour   0.0.0.0:8001->8001/tcp   angry_shirley\n fd5ef30f025a   redis/redis-stack               "redis-server --load\u2026"   2 hours ago         Up 2 hours         0.0.0.0:6379->6379/tcp   nervous_buck\n')),(0,n.kt)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-redisgraph-movie-demo-app-nodejs\n")),(0,n.kt)("h3",{id:"step-5-setting-up-environment-variables"},"Step 5. Setting up environment variables"),(0,n.kt)("p",null,"Copy .env.sample to .env and add the below details:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'  REDIS_ENDPOINT_URL = "Redis server URI"\n  REDIS_PASSWORD = "Password to the server"\n')),(0,n.kt)("h3",{id:"step-6-install-the-dependencies"},"Step 6. Install the dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," npm install\n")),(0,n.kt)("h3",{id:"step-7-run-the-backend-server"},"Step 7. Run the backend server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," node app.js\n")),(0,n.kt)("h3",{id:"step-8-run-the-client"},"Step 8. Run the client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," cd client\n yarn install\n yarn start\n")),(0,n.kt)("h3",{id:"step-9-accessing-the-movie-app"},"Step 9. Accessing the Movie app"),(0,n.kt)("p",null,"Open http://IP:3000 to access the movie app"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(75538).Z,width:"2780",height:"2150"})),(0,n.kt)("h3",{id:"step-10-sign-up-for-a-new-account"},"Step 10. Sign up for a new account"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"moviedb",src:a(99905).Z,width:"3524",height:"1352"})),(0,n.kt)("p",null,"Enter the details to create a new account:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(72806).Z,width:"1140",height:"902"})),(0,n.kt)("h3",{id:"step-11-sign-in-to-movie-app"},"Step 11. Sign-in to movie app"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(9342).Z,width:"3546",height:"2118"})),(0,n.kt)("h3",{id:"step-12-rate-the-movie"},"Step 12. Rate the movie"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(44686).Z,width:"2480",height:"1754"})),(0,n.kt)("h3",{id:"step-13-view-the-list-of-rated-movie"},"Step 13. View the list of rated movie"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(75604).Z,width:"1460",height:"1718"})),(0,n.kt)("h3",{id:"step-14-view-directed-movie-over-redisinsight"},"Step 14. View directed movie over RedisInsight"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' GRAPH.QUERY "MovieApp" "MATCH (director:Director {tmdbId: \\"4945\\"})-[:DIRECTED]->(movie:Movie) RETURN DISTINCT movie,director"\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(58625).Z,width:"2702",height:"1194"})),(0,n.kt)("h3",{id:"step-15-find-movies-where-actor-acted-in"},"Step 15. Find movies where actor acted in."),(0,n.kt)("p",null,"Run the below query under RedisGraph to find the author acted in a movie"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' GRAPH.QUERY "MovieApp" "MATCH (actor:Actor {tmdbId: \\"8537\\"})-[:ACTED_IN_MOVIE]->(movie:Movie) RETURN DISTINCT movie,actor"\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(47244).Z,width:"3236",height:"1276"})),(0,n.kt)("h3",{id:"step-16-store-a-user-in-a-database"},"Step 16. Store a user in a database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' CREATE (user:User {id: 32,\n username: "user", password: "hashed_password", api_key: "525d40da10be8ec75480"})\n RETURN user\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(74939).Z,width:"2352",height:"1178"})),(0,n.kt)("h3",{id:"step-17-find-a-user-by-username"},"Step 17. Find a user by username"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' MATCH (user:User {username: "user"}) RETURN user\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"movieapp",src:a(53236).Z,width:"2544",height:"1180"})),(0,n.kt)("h3",{id:"how-it-works"},"How it works?"),(0,n.kt)("p",null,"The app consumes the data provided by the Express API and presents it through some views to the end user, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Home page"),(0,n.kt)("li",{parentName:"ul"},"Sign-up and Login pages"),(0,n.kt)("li",{parentName:"ul"},"Movie detail page"),(0,n.kt)("li",{parentName:"ul"},"Actor and Director detail page"),(0,n.kt)("li",{parentName:"ul"},"User detail page")),(0,n.kt)("h4",{id:"home-page"},"Home page"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How it works",src:a(74293).Z,width:"1000",height:"621"})),(0,n.kt)("p",null,"The home page shows the genres and a brief listing of movies associated with them."),(0,n.kt)("h4",{id:"how-the-data-is-stored"},"How the data is stored"),(0,n.kt)("h4",{id:"add-a-new-genre"},"Add a new genre:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' create (g:Genre{name:"Adventure"})\n')),(0,n.kt)("h4",{id:"add-a-movie"},"Add a movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' create (m:Movie {\n  url: "https://themoviedb.org/movie/862",\n  id:232,\n  languages:["English"],\n  title:"Toy Story",\n  countries:["USA"],\n  budget:30000000,\n  duration:81,\n  imdbId:"0114709",\n  imdbRating:8.3,\n  imdbVotes:591836,\n  movieId:42,\n  plot:"...",\n  poster:"https://image.tmd...",\n  poster_image:"https://image.tmdb.or...",\n  released:"1995-11-22",\n  revenue:373554033,\n  runtime:$runtime,\n  tagline:"A cowboy doll is profoundly t...",\n  tmdbId:"8844",\n  year:"1995"})\n')),(0,n.kt)("h4",{id:"set-genre-to-a-movie"},"Set genre to a movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (g:Genre), (m:Movie)\n WHERE g.name = "Adventure" AND m.title = "Toy Story"\n CREATE (m)-[:IN_GENRE]->(g)\n')),(0,n.kt)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed"),(0,n.kt)("h4",{id:"get-genres"},"Get genres:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"}," MATCH (genre:Genre) RETURN genre\n")),(0,n.kt)("h4",{id:"get-moves-by-genre"},"Get moves by genre:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (movie:Movie)-[:IN_GENRE]->(genre)\n WHERE toLower(genre.name) = toLower("Film-Noir") OR id(genre) = toInteger("Film-Noir")\n RETURN movie\n')),(0,n.kt)("h4",{id:"code-example-get-movies-with-genre"},"Code example: Get movies with genre"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"}," const getByGenre = function (session, genreId) {\n const query = [\n  'MATCH (movie:Movie)-[:IN_GENRE]->(genre)',\n  'WHERE toLower(genre.name) = toLower($genreId) OR id(genre) = toInteger($genreId)',\n  'RETURN movie',\n ].join('\\n');\n\n return session\n .query(query, {\n    genreId,\n  })\n  .then((result) => manyMovies(result));\n};\n")),(0,n.kt)("h4",{id:"sign-up-and-login-pages"},"Sign-up and Login pages"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"moviedb",src:a(61310).Z,width:"1000",height:"593"}),"\n",(0,n.kt)("img",{alt:"moviedb",src:a(31564).Z,width:"1000",height:"593"})),(0,n.kt)("p",null,"To be able to rate movies a user needs to be logged in: for that a basic JWT-based authentication system is implemented, where user details are stored in the RedisGraph for persistence."),(0,n.kt)("h4",{id:"how-the-data-is-stored-1"},"How the data is stored"),(0,n.kt)("h4",{id:"store-user-in-the-database"},"Store user in the database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' CREATE (user:User {id: 32,\n username: "user", password: "hashed_password", api_key: "525d40da10be8ec75480"})\n RETURN user\n')),(0,n.kt)("h4",{id:"how-the-data-is-accessed-1"},"How the data is accessed"),(0,n.kt)("h4",{id:"find-by-user-name"},"Find by user name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (user:User {username: "user"}) RETURN user\n')),(0,n.kt)("h4",{id:"code-example-find-user"},"Code Example: Find user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"}," const me = function (session, apiKey) {\n return session\n   .query('MATCH (user:User {api_key: $api_key}) RETURN user', {\n     api_key: apiKey,\n   })\n   .then((foundedUser) => {\n     if (!foundedUser.hasNext()) {\n       throw {message: 'invalid authorization key', status: 401};\n     }\n     while (foundedUser.hasNext()) {\n       const record = foundedUser.next();\n       return new User(record.get('user'));\n     }\n   });\n };\n")),(0,n.kt)("h4",{id:"movie-detail-page"},"Movie detail page"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How it works",src:a(85924).Z,width:"1000",height:"621"})),(0,n.kt)("p",null,"On this page a user can rate the film and view the Actors/directors who participated in the production of the film."),(0,n.kt)("h4",{id:"how-the-data-is-stored-2"},"How the data is stored"),(0,n.kt)("h4",{id:"associate-actor-with-a-movie"},"Associate actor with a movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (m:Movie) WHERE m.title="Jumanji" CREATE (a:Actor :Person{\n bio:"Sample...",\n bornIn:"Denver, Colorado, USA",\n imdbId:"0000245",\n name:"Robin Williams",\n poster:"https://image.tmdb.org/t/p/w440_and_...",\n tmdbId:"2157",\n url:"https://themoviedb.org/person/2157"})-[r:ACTED_IN_MOVIE\n {role: "Alan Parrish"}]->(m)\n')),(0,n.kt)("h4",{id:"associate-director-with-a-movie"},"Associate director with a movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (m:Movie) WHERE m.title="Dead Presidents" CREATE (d:Director :Person{\n  bio: "From Wikipedia, the free e...",\n  bornIn: "Detroit, Michigan, USA",\n  imdbId: "0400436",\n  name: "Albert Hughes",\n  tmdbId: "11447",\n  url: "https://themoviedb.org/person/11447"})-[r:DIRECTED]->(m)\n')),(0,n.kt)("h4",{id:"how-the-data-is-accessed-2"},"How the data is accessed"),(0,n.kt)("h4",{id:"find-movie-by-id-with-genre-actors-and-director"},"Find movie by id with genre, actors and director:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (movie:Movie {tmdbId: $movieId})\n OPTIONAL MATCH (movie)<-[my_rated:RATED]-(me:User {id: "e1e3991f-fe81-439e-a507-aa0647bc0b88"})\n OPTIONAL MATCH (movie)<-[r:ACTED_IN_MOVIE]-(a:Actor)\n OPTIONAL MATCH (movie)-[:IN_GENRE]->(genre:Genre)\n OPTIONAL MATCH (movie)<-[:DIRECTED]-(d:Director)\n WITH DISTINCT movie, my_rated, genre, d,  a, r\n RETURN DISTINCT movie,\n collect(DISTINCT d) AS directors,\n collect(DISTINCT a) AS actors,\n collect(DISTINCT genre) AS genres\n')),(0,n.kt)("h4",{id:"code-example-get-movie-detail"},"Code Example: Get movie detail"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"}," const getById = function (session, movieId, userId) {\n if (!userId) throw {message: 'invalid authorization key', status: 401};\n const query = [\n   'MATCH (movie:Movie {tmdbId: $movieId})\\n' +\n     '  OPTIONAL MATCH (movie)<-[my_rated:RATED]-(me:User {id: $userId})\\n' +\n     '  OPTIONAL MATCH (movie)<-[r:ACTED_IN_MOVIE]-(a:Actor)\\n' +\n     '  OPTIONAL MATCH (movie)-[:IN_GENRE]->(genre:Genre)\\n' +\n     '  OPTIONAL MATCH (movie)<-[:DIRECTED]-(d:Director)\\n' +\n     '  WITH DISTINCT movie, my_rated, genre, d,  a, r\\n' +\n     '  RETURN DISTINCT movie,\\n' +\n     '  collect(DISTINCT d) AS directors,\\n' +\n     '  collect(DISTINCT a) AS actors,\\n' +\n     '  collect(DISTINCT genre) AS genres',\n ].join(' ');\n return session\n   .query(query, {\n     movieId: movieId.toString(),\n     userId: userId.toString(),\n   })\n   .then((result) => {\n     if (result.hasNext()) {\n       return _singleMovieWithDetails(result.next());\n     }\n     throw {message: 'movie not found', status: 404};\n   });\n };\n")),(0,n.kt)("h4",{id:"actor-and-director-detail-page"},"Actor and Director detail page"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How it works",src:a(8995).Z,width:"1000",height:"618"})),(0,n.kt)("h4",{id:"how-the-data-is-accessed-3"},"How the data is accessed"),(0,n.kt)("h4",{id:"find-movies-where-actor-acted-in"},"Find movies where actor acted in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (actor:Actor {tmdbId: "8537"})-[:ACTED_IN_MOVIE]->(movie:Movie)\n RETURN DISTINCT movie,actor\n')),(0,n.kt)("h4",{id:"find-movies-directed-by"},"Find movies directed by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (director:Director {tmdbId: "4945"})-[:DIRECTED]->(movie:Movie)\n RETURN DISTINCT movie,director\n')),(0,n.kt)("h4",{id:"get-movies-directed-by"},"Get movies directed by"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"}," const getByDirector = function (session, personId) {\n const query = [\n   'MATCH (director:Director {tmdbId: $personId})-[:DIRECTED]->(movie:Movie)',\n   'RETURN DISTINCT movie,director',\n ].join('\\n');\n\n return session\n   .query(query, {\n     personId,\n   })\n   .then((result) => manyMovies(result));\n };\n")),(0,n.kt)("h4",{id:"user-detail-page"},"User detail page"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How it works",src:a(50803).Z,width:"1000",height:"629"})),(0,n.kt)("h4",{id:"shows-the-profile-info-and-movies-which-were-rated-by-user"},"Shows the profile info and movies which were rated by user"),(0,n.kt)("h4",{id:"how-the-data-is-stored-3"},"How the data is stored"),(0,n.kt)("h4",{id:"set-rating-for-a-movie"},"Set rating for a movie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (u:User {id: 42}),(m:Movie {tmdbId: 231})\n MERGE (u)-[r:RATED]->(m)\n SET r.rating = "7"\n RETURN m\n')),(0,n.kt)("h4",{id:"how-the-data-is-accessed-4"},"How the data is accessed"),(0,n.kt)("h4",{id:"get-movies-and-user-ratings"},"Get movies and user ratings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Cypher"},' MATCH (:User {id: "d6b31131-f203-4d5e-b1ff-d13ebc06934d"})-[rated:RATED]->(movie:Movie)\n RETURN DISTINCT movie, rated.rating as my_rating\n')),(0,n.kt)("h4",{id:"get-rated-movies-for-user"},"Get rated movies for user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Javascript"}," const getRatedByUser = function (session, userId) {\n return session\n   .query(\n     'MATCH (:User {id: $userId})-[rated:RATED]->(movie:Movie) \\\n      RETURN DISTINCT movie, rated.rating as my_rating',\n     {userId},\n   )\n   .then((result) =>\n     result._results.map((r) => new Movie(r.get('movie'), r.get('my_rating'))),\n   );\n };\n")),(0,n.kt)("h4",{id:"data-types"},"Data types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data is stored in various keys and various relationships.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There are 5 types of data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User"),(0,n.kt)("li",{parentName:"ul"},"Director"),(0,n.kt)("li",{parentName:"ul"},"Actor"),(0,n.kt)("li",{parentName:"ul"},"Genre"),(0,n.kt)("li",{parentName:"ul"},"Movie")))))),(0,n.kt)("h4",{id:"each-type-has-its-own-properties"},"Each type has its own properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Actor: ",(0,n.kt)("inlineCode",{parentName:"li"},"id, bio, born , bornIn, imdbId, name, poster, tmdbId, url")),(0,n.kt)("li",{parentName:"ul"},"Genre: ",(0,n.kt)("inlineCode",{parentName:"li"},"id, name")),(0,n.kt)("li",{parentName:"ul"},"Director: ",(0,n.kt)("inlineCode",{parentName:"li"},"id, born, bornIn, imdbId, name, tmdbId, url")),(0,n.kt)("li",{parentName:"ul"},"User: ",(0,n.kt)("inlineCode",{parentName:"li"},"id, username, password, api_key")),(0,n.kt)("li",{parentName:"ul"},"Movie: ",(0,n.kt)("inlineCode",{parentName:"li"},"id, url, languages, countries, budget, duration, imdbId, imdbRating, indbVotes, movieId, plot, poster, poster_image, released, revenue, runtime, tagline, tmdbId, year"))),(0,n.kt)("h4",{id:"and-there-are-4-types-of-relationship"},"And there are 4 types of relationship:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User-",(0,n.kt)("inlineCode",{parentName:"li"},"RATED"),"->Movie"),(0,n.kt)("li",{parentName:"ul"},"Director-",(0,n.kt)("inlineCode",{parentName:"li"},"DIRECTED"),"->Movie"),(0,n.kt)("li",{parentName:"ul"},"Actor-",(0,n.kt)("inlineCode",{parentName:"li"},"ACTED_IN_MOVIE"),"->Movie"),(0,n.kt)("li",{parentName:"ul"},"Movie-",(0,n.kt)("inlineCode",{parentName:"li"},"IN_GENRE"),"->Genre")),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started"},"How to list and search Movies Database using Redisearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/blog/getting-started-with-redisearch-2-0/"},"Redis Search Indexing Capabilities to add search to Movie app"))))}c.isMDXComponent=!0},74293:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/a-e74937575bdf53241c062e675028f4a6.png"},50803:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/b-ed5e044194a8c389480045a0c8d4dc65.png"},8995:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/c-c8175ede1aa097c9fb055f6497b9007b.png"},85924:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/d-ede6f36c5b10f8608bccca2c15c4b452.png"},61310:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/f-43f2f6d11c5b5edd724aa3746dde9448.png"},31564:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/g-e5b26eeefb3cdc3304b9ecb0f30da71d.png"},75538:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb-46d687ef28fdaf33dc36e55c6301e79a.png"},47244:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_actedin-7f01eb47cb67628da77fd5c7957c9039.png"},72806:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_createaccount-5b1dffcad9306f8ca23066579e930965.png"},74939:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_createuser-9d2f2cd0a4a21dcb830958ddd424f7fb.png"},53236:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_createuser1-4d41acc90df6fe1fa507e46ee8370c36.png"},58625:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_directed-d77d156525e820e778f1b34593bb72f3.png"},10654:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_frontpage-1052374f5564d8886a049c9f35d4338c.png"},75604:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_rated-d19d811637af07445c0fafa6a5852a48.png"},44686:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_rating-d0722f1efd7753c0115595fd5864ace0.png"},9342:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_sign-034a2c0d20d62188aae3fc9d26f40cb3.png"},99905:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/moviedb_signup-23db249beb656843effbc42437c45993.png"}}]);