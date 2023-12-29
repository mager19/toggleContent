(()=>{"use strict";var e,t={891:()=>{const e=window.React,t=window.wp.blocks,i=window.wp.i18n,a=window.wp.blockEditor,I=JSON.parse('{"u2":"customblocksmager19/toggleitem"}');(0,t.registerBlockType)(I.u2,{edit:function(t){const{attributes:I,setAttributes:l}=t,{titleItem:n,contentItem:o}=I,r=(0,a.useBlockProps)({className:"toggleItemContainer"}),c=(0,a.useInnerBlocksProps)(r,{});return(0,e.createElement)("div",{...r},(0,e.createElement)("div",{className:"tagName"},(0,e.createElement)("span",null,"Item Toggle")),(0,e.createElement)(a.RichText,{tagName:"h5",placeholder:(0,i.__)("Add a title Item","toggleitem"),value:n,onChange:e=>l({titleItem:e}),className:"titleItem"}),(0,e.createElement)(a.RichText,{tagName:"p",placeholder:(0,i.__)("Add a content Item","toggleitem"),value:o,onChange:e=>l({contentItem:e})}),(0,e.createElement)("div",{...c}))},save:function(){const e=a.useBlockProps.save(),{children:t}=a.useInnerBlocksProps.save(e);return t},icon:(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItOC40IC04LjQgNDAuODAgNDAuODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzYxNjg1NyI+PGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjxyZWN0IHg9Ii04LjQiIHk9Ii04LjQiIHdpZHRoPSI0MC44MCIgaGVpZ2h0PSI0MC44MCIgcng9IjAiIGZpbGw9IiNEMkUzQzgiIHN0cm9rZXdpZHRoPSIwIj48L3JlY3Q+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj48cGF0aCBkPSJNMjAuNSAxN2gtMTdBMi41MDIgMi41MDIgMCAwIDEgMSAxNC41di00QTIuNTAyIDIuNTAyIDAgMCAxIDMuNSA4aDE3YTIuNTAyIDIuNTAyIDAgMCAxIDIuNSAyLjV2NGEyLjUwMiAyLjUwMiAwIDAgMS0yLjUgMi41em0tMTctOEExLjUwMiAxLjUwMiAwIDAgMCAyIDEwLjV2NEExLjUwMiAxLjUwMiAwIDAgMCAzLjUgMTZoMTdhMS41MDIgMS41MDIgMCAwIDAgMS41LTEuNXYtNEExLjUwMiAxLjUwMiAwIDAgMCAyMC41IDl6TTE3IDEySDd2MWgxMHoiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ij48L3BhdGg+PC9nPjwvc3ZnPgo=",width:24,height:24})})}},i={};function a(e){var I=i[e];if(void 0!==I)return I.exports;var l=i[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,i,I,l)=>{if(!i){var n=1/0;for(g=0;g<e.length;g++){for(var[i,I,l]=e[g],o=!0,r=0;r<i.length;r++)(!1&l||n>=l)&&Object.keys(a.O).every((e=>a.O[e](i[r])))?i.splice(r--,1):(o=!1,l<n&&(n=l));if(o){e.splice(g--,1);var c=I();void 0!==c&&(t=c)}}return t}l=l||0;for(var g=e.length;g>0&&e[g-1][2]>l;g--)e[g]=e[g-1];e[g]=[i,I,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={389:0,866:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var I,l,[n,o,r]=i,c=0;if(n.some((t=>0!==e[t]))){for(I in o)a.o(o,I)&&(a.m[I]=o[I]);if(r)var g=r(a)}for(t&&t(i);c<n.length;c++)l=n[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(g)},i=globalThis.webpackChunkblocksmg=globalThis.webpackChunkblocksmg||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var I=a.O(void 0,[866],(()=>a(891)));I=a.O(I)})();