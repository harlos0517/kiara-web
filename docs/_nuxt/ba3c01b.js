(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{382:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("c2897f3a",content,!0,{sourceMap:!1})},391:function(t,e,r){"use strict";r(382)},392:function(t,e,r){var n=r(134)(!1);n.push([t.i,'.flex-column[data-v-4931497a],.flex-row[data-v-4931497a]{display:flex}.middle-center[data-v-4931497a]{justify-content:center;align-items:center}.stretch-center[data-v-4931497a]{justify-content:center;align-items:stretch}.fill-screen[data-v-4931497a]{width:100%;height:100vh}.fill-box[data-v-4931497a]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-4931497a]{width:100vw;height:100vh;top:0;left:0;position:fixed}a[data-v-4931497a]{text-decoration:none;color:inherit}.page-container[data-v-4931497a]{padding:1.5rem 3rem}.page-container .page-title[data-v-4931497a]{font-size:2rem;margin:1rem 0}.page-enter-active[data-v-4931497a],.page-leave-active[data-v-4931497a]{transition:opacity .2s}.page-enter[data-v-4931497a],.page-leave-to[data-v-4931497a]{opacity:0}#kfp-navbar[data-v-4931497a]{background-color:#f8cc73;border-bottom:1px solid #1c110a;transition:opacity .3s}#kfp-navbar #navbar-name[data-v-4931497a]{font-size:2rem}#kfp-navbar #sidebar[data-v-4931497a]{background-color:#f8cc73;top:105px;left:100%;width:300px;padding:1rem 5rem;z-index:200}#kfp-navbar .navline-line[data-v-4931497a]{width:1px;height:2em;margin:0 10px;background-color:#1c110a;transform:rotate(33deg)}#kfp-navbar .navline-h[data-v-4931497a]{height:1px;background-color:#1c110a}#kfp-navbar .navlink+#sidebar.open[data-v-4931497a]{left:unset;right:0}#kfp-navbar .navlink div[data-v-4931497a]{transition:background-color .3s;background-color:transparent;color:#1c110a}#kfp-navbar .navlink div[data-v-4931497a]:after,#kfp-navbar .navlink div[data-v-4931497a]:before{position:absolute;content:"";top:0;width:0;height:0;transition:border-color .3s}#kfp-navbar .navlink div[data-v-4931497a]:before{right:100%;border-bottom:1.5em solid transparent;border-left:15px solid transparent}#kfp-navbar .navlink div[data-v-4931497a]:after{left:100%;border-top:1.5em solid transparent;border-right:15px solid transparent}#kfp-navbar .navlink div.current[data-v-4931497a],#kfp-navbar .navlink div[data-v-4931497a]:hover{background-color:#eb5e33;color:#fff}#kfp-navbar .navlink div.current[data-v-4931497a]:before,#kfp-navbar .navlink div[data-v-4931497a]:hover:before{border-bottom-color:#eb5e33}#kfp-navbar .navlink div.current[data-v-4931497a]:after,#kfp-navbar .navlink div[data-v-4931497a]:hover:after{border-top-color:#eb5e33}',""]),t.exports=n},416:function(t,e,r){"use strict";r.r(e);r(163),r(198);var n=r(133),o=Object(n.b)({setup:function(){var t=Object(n.h)(),e=[{route:"/kfp/art",text:"Artwork"},{route:"/kfp/music",text:"Music"},{route:"/kfp/animation",text:"Animation"},{route:"/kfp/comics",text:"Comics"},{route:"/kfp/clips",text:"Clips"},{route:"/kfp/kfn",text:"KFN"},{route:"/kfp/projects",text:"History Projects"}],r=Object(n.a)((function(){return e.find((function(p){return t.value.path.startsWith(p.route)}))})),o=Object(n.e)(!1);return{pages:e,thisPage:r,navbarOpen:o,triggerNavbar:function(){o.value=!o.value}}}}),l=(r(391),r(94)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-row middle-center w-100 px-5 py-2",attrs:{id:"kfp-Navbar"}},[r("div",{staticClass:"d-none d-md-flex w-100 flex-row middle-center"},[t._l(t.pages,(function(e,n){return[n?r("div",{staticClass:"navline-line"}):t._e(),r("NuxtLink",{staticClass:"navlink flex-fill mx-3 text-center text-white",attrs:{to:e.route}},[r("div",{staticClass:"flex-row-center position-relative h-100",class:{current:e.route===t.$route.path}},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(e.text))])])])]}))],2),r("div",{staticClass:"d-block d-md-none flex-row"},[r("div",{staticClass:"navlink mx-3 text-center text-white",on:{click:t.triggerNavbar}},[r("div",{staticClass:"flex-row-center position-relative h-100 current"},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(t.thisPage?t.thisPage.text:"KFP"))])])]),r("div",{staticClass:"position-fixed",class:{open:t.navbarOpen},attrs:{id:"sidebar"},on:{click:t.triggerNavbar}},[t._l(t.pages,(function(e,n){return[n?r("div",{staticClass:"navline-h"}):t._e(),r("NuxtLink",{staticClass:"navlink flex-fill mx-5 text-center text-white",attrs:{to:e.route}},[r("div",{staticClass:"flex-row-center position-relative h-100",class:{current:t.$route.path.startsWith(e.route)}},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(e.text))])])])]}))],2)])])}),[],!1,null,"4931497a",null);e.default=component.exports}}]);