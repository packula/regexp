(self.webpackChunk=self.webpackChunk||[]).push([[514],{5750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Be}});var a=n(7294),r=n(3905),o=n(6291),l=n(308),c=n(6010),i=n(941),s=n(3783),u=n(7898),d=n(5537),m=n(7462),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),y=n(3366),f=n(6742),g=n(3919),v=n(8617),b="menuLinkText_1J2g",k=["items"],E=["item"],C=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],_=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,y.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(N,(0,m.Z)({key:t,item:e},n))})))}));function N(e){var t=e.item,n=(0,y.Z)(e,E);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(S,(0,m.Z)({item:t},n));case"link":default:return a.createElement(x,(0,m.Z)({item:t},n))}}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=(0,y.Z)(e,C),s=n.items,u=n.label,d=n.collapsible,p=_(n,o),h=(0,i.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),f=h.collapsed,g=h.setCollapsed,v=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:f,setCollapsed:g}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},a.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[b]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},l),u),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},a.createElement(T,{items:s,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function x(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,y.Z)(e,Z),l=t.href,s=t.label,u=_(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(f.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:l},(0,g.Z)(l)&&{onClick:n},o),(0,g.Z)(l)?s:a.createElement("span",null,s,a.createElement(v.Z,null))))}var I="sidebar_15mo",j="sidebarWithHideableNavbar_267A",B="sidebarHidden_2kNb",P="sidebarLogo_3h0W",L="menu_Bmed",M="menuWithAnnouncementBar_2WvA",A="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},a.createElement(p,{className:w}))}function O(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,i.LU)(),h=p.navbar.hideOnScroll,y=p.hideableSidebar,f=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(I,(t={},t[j]=h,t[B]=s,t))},h&&a.createElement(d.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[M]=!f&&m,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:o,activePath:r}))),y&&a.createElement(D,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:n,activePath:r,onItemClick:function(){return t()}}))};function F(e){return a.createElement(i.Cv,{component:R,props:e})}var H=a.memo(O),z=a.memo(F);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(z,e))}var V=n(9105),Y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).default,theme:Y};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=J({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=J({},n,{backgroundColor:null}),r};function X(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),U(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),U(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=J({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?J({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),U(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),U(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=J({},X(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?J({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),U(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=q(u,d.type),d.alias&&(u=q(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;c.push({types:u,content:m[0]});for(var h=1;h<p;h++)G(c),i.push(c=[]),c.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return G(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var te=n(7594),ne=n.n(te),ae={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},re=n(5350),oe=function(){var e=(0,i.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||ae,a=e.darkTheme||n;return t?a:n},le="codeBlockContainer_K1bP",ce="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=["js","jsBlock","jsx","python","html"],he={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},ye=["highlight-next-line","highlight-start","highlight-end"],fe=function(e){void 0===e&&(e=pe);var t=e.map((function(e){var t=he[e],n=t.start,a=t.end;return"(?:"+n+"\\s*("+ye.join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function ge(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,l=(0,i.LU)().prism,s=(0,a.useState)(!1),u=s[0],d=s[1],p=(0,a.useState)(!1),y=p[0],f=p[1];(0,a.useEffect)((function(){f(!0)}),[]);var g=(0,i.bc)(r)||o,v=(0,a.useRef)(null),b=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(r&&me.test(r)){var C=r.match(me)[1];b=ne()(C).filter((function(e){return e>0}))}var Z=null==n?void 0:n.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var _=E.replace(/\n$/,"");if(0===b.length&&void 0!==Z){for(var T,N="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return fe(["js","jsBlock"]);case"jsx":case"tsx":return fe(["js","jsBlock","jsx"]);case"html":return fe(["js","jsBlock","html"]);case"python":case"py":return fe(["python"]);default:return fe()}}(Z),x=E.replace(/\n$/,"").split("\n"),I=0;I<x.length;){var j=I+1,B=x[I].match(S);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=j+",";break;case"highlight-start":T=j;break;case"highlight-end":N+=T+"-"+(j-1)+","}x.splice(I,1)}else I+=1}b=ne()(N),_=x.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(_),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(ee,(0,m.Z)({},$,{key:String(y),theme:k,code:_,language:Z}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:le},g&&a.createElement("div",{style:n,className:ie},g),a.createElement("div",{className:(0,c.Z)(ce,Z)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,se,"thin-scrollbar"),style:n},a.createElement("code",{className:de},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,m.Z)({key:t},l({token:e,key:t})))})))})))),a.createElement("button",{ref:v,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ue,"clean-btn"),onClick:P},u?a.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ve=n(6159),be="details_1VDD";function ke(e){var t=Object.assign({},e);return a.createElement(i.PO,(0,m.Z)({},t,{className:(0,c.Z)("alert alert--info",be,t.className)}))}var Ee=["mdxType","originalType"];var Ce={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,y.Z)(r,Ee));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(ge,e):a.createElement("code",e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(ge,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ke,(0,m.Z)({},e,{summary:n}),r)},h1:(0,ve.Z)("h1"),h2:(0,ve.Z)("h2"),h3:(0,ve.Z)("h3"),h4:(0,ve.Z)("h4"),h5:(0,ve.Z)("h5"),h6:(0,ve.Z)("h6")},Ze=n(4608),_e=n(5977),Te="backToTopButton_35hR",Ne="backToTopButtonShow_18ls";function Se(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var xe=function(){var e,t=(0,_e.TH)(),n=Se(),r=n.smoothScrollTop,o=n.cancelScrollToTop,l=(0,a.useState)(!1),i=l[0],s=l[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,c.Z)("clean-btn",Te,(e={},e[Ne]=i,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Ie={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function je(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,y=u.version,f=s.sidebar,g=f?u.docsSidebars[f]:void 0,v=(0,a.useState)(!1),b=v[0],k=v[1],E=(0,a.useState)(!1),C=E[0],Z=E[1],_=(0,a.useCallback)((function(){C&&Z(!1),k(!b)}),[C]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:y,tag:(0,i.os)(m,y)}},a.createElement("div",{className:Ie.docPage},a.createElement(xe,null),g&&a.createElement("aside",{className:(0,c.Z)(Ie.docSidebarContainer,(t={},t[Ie.docSidebarContainerHidden]=b,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ie.docSidebarContainer)&&b&&Z(!0)}},a.createElement(W,{key:f,sidebar:g,path:s.path,onCollapse:_,isHidden:C}),C&&a.createElement("div",{className:Ie.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(p,{className:Ie.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Ie.docMainContainer,(n={},n[Ie.docMainContainerEnhanced]=b||!g,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Ie.docItemWrapper,(o={},o[Ie.docItemWrapperEnhanced]=b,o))},a.createElement(r.Zo,{components:Ce},d)))))}var Be=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,_e.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(je,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(Ze.default,e)}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);