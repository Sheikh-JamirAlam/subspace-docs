"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,title:"\ud83d\udd27 Subspace.js"},s=void 0,l={unversionedId:"Development/subspacejs",id:"Development/subspacejs",title:"\ud83d\udd27 Subspace.js",description:"This document was automatically pulled from https://github.com/subspace/subspace.js, any edits must go to that repo, not this one.",source:"@site/docs/Development/subspacejs.md",sourceDirName:"Development",slug:"/Development/subspacejs",permalink:"/ru/docs/Development/subspacejs",editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/Development/subspacejs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udd27 Subspace.js"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdc Core Subspace Protocol",permalink:"/ru/docs/Development/core-development"},next:{title:"Awesome Subspace",permalink:"/ru/docs/community-awesome"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Run the examples.",id:"run-the-examples",level:2},{value:"Running a local network",id:"running-a-local-network",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This document was automatically pulled from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace.js"},"https://github.com/subspace/subspace.js"),", any edits must go to that repo, not this one."))),(0,o.kt)("h1",{id:"subspacesubspace"},"@subspace/subspace"),(0,o.kt)("p",null,"This JavaScript library provides a simple API to submit and retrieve user data to the ",(0,o.kt)("a",{parentName:"p",href:"https://subspace.network/"},"Subspace network"),". The project is in active development with a ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer"},"live test network")," designed to provide scalable and distributed archival storage."),(0,o.kt)("h1",{id:"storage-api"},"Storage API."),(0,o.kt)("p",null,"The Storage API exposes a Subspace node feature called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/tree/main/crates/pallet-object-store"},"pallet-object-store")," that implements RPC methods to store an ",(0,o.kt)("strong",{parentName:"p"},"Object")," from user-provided data. The user can send a simple text or even a file; the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-object-store")," receives an ",(0,o.kt)("strong",{parentName:"p"},"Object")," to store and generate an ",(0,o.kt)("strong",{parentName:"p"},"objectId"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"put"),": Receive a signed transaction containing an ",(0,o.kt)("strong",{parentName:"p"},"Object")," to store. It emit a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSubmitted Event")," with an ",(0,o.kt)("strong",{parentName:"p"},"objectId")," to get the ",(0,o.kt)("strong",{parentName:"p"},"Object")," from the network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"findObject"),": Receives an ",(0,o.kt)("strong",{parentName:"p"},"objectId")," to find the related ",(0,o.kt)("strong",{parentName:"p"},"Object")," stored, if it exists this method will return the ",(0,o.kt)("strong",{parentName:"p"},"Object")," data."))),(0,o.kt)("p",null,"To expose these methods, this library implements two main classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Identity"),": Class to load a ",(0,o.kt)("strong",{parentName:"p"},"keyPair")," from different sources. An instance of this class is required to create a ",(0,o.kt)("strong",{parentName:"p"},"SubspaceClient"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fromWeb3"),": Load ",(0,o.kt)("strong",{parentName:"p"},"keyPair")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"web3Accounts")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/extension-dapp"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fromUri"),": Load ",(0,o.kt)("strong",{parentName:"p"},"keyPair")," from a secret URI, Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"//Alice///password")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"mnemonic phrase"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SubspaceClient"),": Class that loads an ",(0,o.kt)("strong",{parentName:"p"},"Identity")," instance and creates providers to interact with the network."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"connect"),": Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiPromise")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WsProvider"),", returning a ",(0,o.kt)("strong",{parentName:"p"},"SubspaceClient")," instance ready to call:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"putObject"),": Receives an ",(0,o.kt)("strong",{parentName:"p"},"Object")," as Uint8Array, it create and submit a signed ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," transaction and return an ",(0,o.kt)("strong",{parentName:"p"},"objectId"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getObject"),": Receives an ",(0,o.kt)("strong",{parentName:"p"},"objectId")," calling ",(0,o.kt)("inlineCode",{parentName:"p"},"findObject")," to return the ",(0,o.kt)("strong",{parentName:"p"},"Object")," as Uint8Array."))))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please, note that object will be retrievable after it is archived on the blockchain, it won't be available right away. Archiving takes 100-120 blocks to complete. Caching mechanism for faster retrievability will be introduced soon")),(0,o.kt)("h1",{id:"run-this-project"},"Run this project."),(0,o.kt)("p",null,"Clone this repository:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/subspace/subspace.js.git"))),(0,o.kt)("p",null,"Install dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm ci"))),(0,o.kt)("p",null,"Build the library."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run build"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Import the library.\nimport { SubspaceClient, Identity } from "@subspace/subspace";\n\n// Generate an Identity from node.js\nconst identity = await Identity.fromUri(mnemonic);\n// Generate an Identity from broser using web3Account (injected by extension)\nconst identity = await Identity.fromWeb3();\n\n// Generate a SubspaceClient and connect to node and farmer rpc endpoints.\nconst subspaceClient = await SubspaceClient.connect(\n  identity,\n  NODE_WS_PROVIDER,\n  FARMER_WS_PROVIDER\n);\n\n// Put the file as (Uint8Array) in to the objectStore and return the objectId\nconst objectId: string = await subspaceClient.putObject(objectData);\n\n// Using the objectId get the file as (Uint8Array) from the objectStore.\nconst object: Uint8Array = await subspaceClient.getObject(objectId);\n')),(0,o.kt)("h2",{id:"run-the-examples"},"Run the examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the examples folder for node.js and browser."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./examples/ts-node"},"node.js"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./examples/dapp"},"dapp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./examples/html"},"html"),".")))),(0,o.kt)("h2",{id:"running-a-local-network"},"Running a local network"),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace"},"Subspace repository")," to learn how configure and run your local network."))}d.isMDXComponent=!0}}]);