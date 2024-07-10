(()=>{"use strict";var e,t={6323:(e,t,r)=>{var n=r(3935),o=r(7294),l=r(9669),a=r.n(l),u=r(2692),i=r(4599),c=r(3520),f=r(1718),s=r(3987),d=r(6210);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(){var e=v((0,o.useState)({}),2),t=e[0],r=e[1],n=v((0,o.useState)(!1),2),l=n[0],m=n[1],h=v((0,o.useState)(""),2),p=h[0],y=h[1];(0,o.useEffect)((function(){b()}),[]);var b=function(){a().get("/panel/api/global-settings").then((function(e){r(e.data),m(!0)})).catch((function(e){console.log(e),y((0,u.b)(e)),m(!0)}))};return o.createElement("div",{className:"my-5"},o.createElement("h1",null,"Initial Setup"),o.createElement("hr",null),function(){if(""!==p)return o.createElement(s.Z,null,p)}(),!l&&(0,d.xb)(t)?o.createElement("h3",null,"Loading..."):l&&(0,d.xb)(t)?o.createElement("h3",null,"There is a problem. No settings are fetched."):t.forcePasswordChange?o.createElement(i.Z,null):t.dotenv&&""===t.dotenv.MOVIEDB_API?o.createElement(c.Z,{fetchSettings:b}):t.dotenv&&""===t.dotenv.SUBTITLE_LANGS?o.createElement(f.Z,{fetchSettings:b}):(setTimeout((function(){var e=new URLSearchParams(window.location.search).get("next");null===e&&(e="/"),window.location.href=e}),2e3),o.createElement("div",null,o.createElement("h1",null,"Setup complete!"),o.createElement("p",null,"You are being redirected..."))))};(0,n.render)(o.createElement(h,null),document.getElementById("root"))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,l]=e[f],u=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(u=!1,l<a&&(a=l));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var f=e.length;f>0&&e[f-1][2]>l;f--)e[f]=e[f-1];e[f]=[r,o,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=710,(()=>{var e={710:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[a,u,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var f=i(n)}for(t&&t(r);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(f)},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[622],(()=>n(6323)));o=n.O(o)})();