"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return E},frontMatter:function(){return y},metadata:function(){return x},toc:function(){return w}});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),u=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",className:(0,u.Z)(s,a),hidden:n},t)}var c=n(2389),p=n(7392),m=n(7094),d=n(2466),f="tabList__CuJ",v="tabItem_LNqP";function g(e){var t,n,r=e.lazy,i=e.block,s=e.defaultValue,o=e.values,c=e.groupId,g=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=o?o:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,p.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===s?s:null!=(t=null!=s?s:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,m.U)(),N=x.tabGroupChoices,w=x.setTabGroupChoices,T=(0,l.useState)(k),E=T[0],O=T[1],j=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var _=N[c];null!=_&&_!==E&&b.some((function(e){return e.value===_}))&&O(_)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==E&&(S(t),O(a),null!=c&&w(c,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var l,i=j.indexOf(e.currentTarget)-1;n=null!=(l=j[i])?l:j[j.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",f)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:P,onClick:P},r,{className:(0,u.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,c.Z)();return l.createElement(g,(0,a.Z)({key:String(t)},e))}var b=["components"],y={id:"escape",title:"escape",sidebar_label:"escape",hide_title:!0},k="escape",x={unversionedId:"api/escape",id:"api/escape",title:"escape",description:"A function that [escapes] a string for use in a [regular expression].",source:"@site/../docs/api/escape.mdx",sourceDirName:"api",slug:"/api/escape",permalink:"/regexp/api/escape",draft:!1,editUrl:"https://github.com/snout-router/regexp/edit/main/website/../docs/api/escape.mdx",tags:[],version:"current",frontMatter:{id:"escape",title:"escape",sidebar_label:"escape",hide_title:!0},sidebar:"docs"},N={},w=[{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage",id:"usage",level:2}],T={toc:w};function E(e){var t=e.components,n=(0,r.Z)(e,b);return(0,i.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"escape"},(0,i.kt)("inlineCode",{parentName:"h1"},"escape")),(0,i.kt)("p",null,"A function that ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping"},"escapes")," a string for use in a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expression"),"."),(0,i.kt)("p",null,"The returned string is suitable for use when building dynamic regular\nexpressions that should match the original string exactly."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The escaped string is suitable ",(0,i.kt)("em",{parentName:"p"},"only")," for use in matching literal strings. In\nother words, it is ",(0,i.kt)("em",{parentName:"p"},"not")," suitable for escaping characters inside regular\nexpression character classes."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"escape")," accepts a single string parameter."),(0,i.kt)("h2",{id:"return-value"},"Return value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"escape")," will return an escaped version of the original string."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(h,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {escape} from '@snout/regexp'\n\nconst happyFace = new RegExp(escape('^_^'))\n\nhappyFace.test('^_^') // returns true\nhappyFace.test('-_-') // returns false\n"))),(0,i.kt)(o,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {escape} from '@snout/regexp'\n\nconst happyFace = new RegExp(escape('^_^'))\n\nhappyFace.test('^_^') // returns true\nhappyFace.test('-_-') // returns false\n")))),(0,i.kt)(h,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {escape} from '@snout/regexp'\n\nfunction trimSuffix(suffix: string, value: string): string {\n  return value.replace(new RegExp(`${escape(suffix)}$`), '')\n}\n\ntrimSuffix('()', 'functionName()') // returns 'functionName'\n"))),(0,i.kt)(o,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {escape} from '@snout/regexp'\n\nfunction trimSuffix(suffix, value) {\n  return value.replace(new RegExp(`${escape(suffix)}$`), '')\n}\n\ntrimSuffix('()', 'functionName()') // returns 'functionName'\n")))))}E.isMDXComponent=!0}}]);