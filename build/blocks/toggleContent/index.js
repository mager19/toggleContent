(()=>{"use strict";var e,t={67:()=>{const e=window.React,t=window.wp.blocks,c=window.wp.i18n,l=window.wp.blockEditor,i=JSON.parse('{"u2":"customblocksmager19/togglecontent"}');(0,t.registerBlockType)(i.u2,{edit:function(t){const{attributes:i,setAttributes:o}=t,{title:I}=i,n=(0,l.useBlockProps)({style:{border:"1px solid #ccc",padding:"30px 20px"},className:"toggleItemContainer"}),r=(0,l.useInnerBlocksProps)(n,{template:[["customblocksmager19/toggleitem",{}]],allowedBlocks:["customblocksmager19/toggleitem"]});return(0,e.createElement)("div",null,(0,e.createElement)(l.RichText,{tagName:"h3",placeholder:(0,c.__)("Add a title","toggleContent"),value:I,onChange:e=>o({title:e})}),(0,e.createElement)("div",{...r}))},save:function(){const e=l.useBlockProps.save(),{children:t}=l.useInnerBlocksProps.save(e);return t},icon:(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJVcGxvYWRlZCB0byBzdmdyZXBvLmNvbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iLTExLjIgLTExLjIgNTQuNDAgNTQuNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiMwMDAwMDAiPjxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApLCBzY2FsZSgxKSI+PHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExLjIsIC0xMS4yKSwgc2NhbGUoMy40KSIgZmlsbD0iI0QyRTNDOCIgZD0iTTkuMTY2LjMzYTIuMjUgMi4yNSAwIDAwLTIuMzMyIDBsLTUuMjUgMy4xODJBMi4yNSAyLjI1IDAgMDAuNSA1LjQzNnY1LjEyOGEyLjI1IDIuMjUgMCAwMDEuMDg0IDEuOTI0bDUuMjUgMy4xODJhMi4yNSAyLjI1IDAgMDAyLjMzMiAwbDUuMjUtMy4xODJhMi4yNSAyLjI1IDAgMDAxLjA4NC0xLjkyNFY1LjQzNmEyLjI1IDIuMjUgMCAwMC0xLjA4NC0xLjkyNEw5LjE2Ni4zM3oiIHN0cm9rZXdpZHRoPSIwIj48L3BhdGg+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjQ0NDQ0NDIiBzdHJva2Utd2lkdGg9IjAuNTc2Ij48L2c+PGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiAubGluZXNhbmRhbmdsZXNfZWVue2ZpbGw6IzYxNjg1Nzt9IDwvc3R5bGU+IDxwYXRoIGNsYXNzPSJsaW5lc2FuZGFuZ2xlc19lZW4iIGQ9Ik0yOCwxOXY2SDR2LTZoMnY0aDIwdi00SDI4eiBNMjQsMTlIOHYyaDE2VjE5eiBNMjQsMTVIOHYyaDE2VjE1eiBNMjQsMTFIOHYyaDE2VjExeiBNMjQsN0g4djIgaDE2Vjd6Ij48L3BhdGg+IDwvZz48L3N2Zz4K",width:24,height:24})})}},c={};function l(e){var i=c[e];if(void 0!==i)return i.exports;var o=c[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,c,i,o)=>{if(!c){var I=1/0;for(a=0;a<e.length;a++){for(var[c,i,o]=e[a],n=!0,r=0;r<c.length;r++)(!1&o||I>=o)&&Object.keys(l.O).every((e=>l.O[e](c[r])))?c.splice(r--,1):(n=!1,o<I&&(I=o));if(n){e.splice(a--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[c,i,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={825:0,598:0};l.O.j=t=>0===e[t];var t=(t,c)=>{var i,o,[I,n,r]=c,s=0;if(I.some((t=>0!==e[t]))){for(i in n)l.o(n,i)&&(l.m[i]=n[i]);if(r)var a=r(l)}for(t&&t(c);s<I.length;s++)o=I[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(a)},c=globalThis.webpackChunkblocksmg=globalThis.webpackChunkblocksmg||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))})();var i=l.O(void 0,[598],(()=>l(67)));i=l.O(i)})();