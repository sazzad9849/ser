(()=>{"use strict";var e,t={8728:(e,t,r)=>{var n=r(7294),a=r(3935),o=r(6967),i=r(9669),l=r.n(i),u=r(3987),c=r(2692),f=r(6352);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(){var e=s((0,n.useState)([]),2),t=e[0],r=e[1],a=s((0,n.useState)(!1),2),i=a[0],m=a[1],v=s((0,n.useState)(""),2),d=v[0],p=v[1],h=s((0,n.useState)(""),2),y=h[0],g=h[1];(0,n.useEffect)((function(){b()}),[]);var b=function(){l().get("/api/categories").then((function(e){e.data&&e.data.categories&&r(e.data.categories),e.data&&e.data.relative_watch_path&&g(e.data.relative_watch_path),m(!0)})).catch((function(e){console.error(e),m(!0),p((0,c.b)(e))}))};return n.createElement("div",{className:"mb-5"},function(){if(""!==d)return n.createElement("div",{className:"container"},n.createElement(u.Z,{style:{fontSize:"x-large"}},d))}(),function(){if(!i)return n.createElement(o.Z,{title:"Loading...",movieDetails:[{poster_path_small:"/static/image/empty_poster.png",movie_content:[]}],relativeWatchPath:"#"})}(),function(){if(i&&void 0===t.find((function(e){return e.movies&&0!==e.movies.length})))return n.createElement(f.Z,null)}(),function(){if(i&&void 0!==t.find((function(e){return 0!==e.movies.length})))return n.createElement("div",{className:"d-flex flex-wrap justify-content-start mb-2"},"Jump to category  |  ",t.map((function(e){if(!e.movies||0!==e.movies.length)return n.createElement("div",{className:"bd-highlight text-nowrap"},n.createElement("a",{href:"#".concat(e.name)},e.name),"  ")})))}(),t.map((function(e){return n.createElement(o.Z,{key:e.name,title:e.name,movieDetails:e.movies,relativeWatchPath:y,refreshFunc:b})})))};(0,a.render)(n.createElement(v,null),document.getElementById("main"))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,a,o]=e[f],l=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(f--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=985,(()=>{var e={985:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,u]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var f=u(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(f)},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[622],(()=>n(8728)));a=n.O(a)})();