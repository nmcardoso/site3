webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Pandas Eating Lots"}}},layoutContext:{}}},207:function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(5),s=(r(i),n(210)),l=r(s),u=n(108),c=r(u);t.default=function(e){return o.createElement(l.default,a({},e,c.default))},e.exports=t.default}).call(t,n(20))},216:function(e,t,n){e.exports={default:n(226),__esModule:!0}},218:function(e,t,n){e.exports={default:n(228),__esModule:!0}},222:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(216),a=o(r);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},223:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},226:function(e,t,n){n(251),e.exports=n(13).Object.assign},228:function(e,t,n){n(253),e.exports=n(13).Object.keys},241:function(e,t,n){"use strict";var o=n(42),r=n(84),a=n(60),i=n(89),s=n(139),l=Object.assign;e.exports=!l||n(28)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=o})?function(e,t){for(var n=i(e),l=arguments.length,u=1,c=r.f,p=a.f;l>u;)for(var f,d=s(arguments[u++]),h=c?o(d).concat(c(d)):o(d),m=h.length,g=0;m>g;)p.call(d,f=h[g++])&&(n[f]=d[f]);return n}:l},245:function(e,t,n){var o=n(27),r=n(13),a=n(28);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},251:function(e,t,n){var o=n(27);o(o.S+o.F,"Object",{assign:n(241)})},253:function(e,t,n){var o=n(89),r=n(42);n(245)("keys",function(){return function(e){return r(o(e))}})},310:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(T+e)}function a(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,k.createLocation)(e,null,null,t.location);return n.pathname=r(n.pathname),n}t.__esModule=!0,t.navigateTo=t.replace=t.push=void 0;var s=n(222),l=o(s),u=n(218),c=o(u),p=n(223),f=o(p),d=n(58),h=o(d),m=n(79),g=o(m),y=n(78),b=o(y);t.withPrefix=r;var v=n(5),C=o(v),w=n(76),x=n(7),O=o(x),k=n(21),T="/";T="/site3";var P={activeClassName:O.default.string,activeStyle:O.default.object,exact:O.default.bool,strict:O.default.bool,isActive:O.default.func,location:O.default.object},S=function(e,t){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){e===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},E=function(e){function t(n,o){(0,h.default)(this,t);var r=(0,g.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var s=o.router.history,l=i(n.to,s);return r.state={path:(0,k.createPath)(l),to:l,IOSupported:a},r.handleRef=r.handleRef.bind(r),r}return(0,b.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,k.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&S(e,function(){___loader.enqueue(t.state.to.pathname)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,o=(0,f.default)(t,["onClick"]),r=void 0;return r=(0,c.default)(P).some(function(t){return e.props[t]})?w.NavLink:w.Link,C.default.createElement(r,(0,l.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.path;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var r=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(r);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___push(e.state.to)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},t}(C.default.Component);E.propTypes=(0,l.default)({},P,{innerRef:O.default.func,onClick:O.default.func,to:O.default.oneOfType([O.default.string,O.default.object]).isRequired}),E.contextTypes={router:O.default.object},t.default=E;var M=t.push=function(e){window.___push(e)};t.replace=function(e){window.___replace(e)},t.navigateTo=M},105:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.noWarn,r=void 0!==o&&o,a=n.createElement,i=void 0===a||a,s=function(t){function n(){var e,o,a;W(this,n);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=o=K(this,t.call.apply(t,[this].concat(s))),o.warned=r,o.state={theme:{}},o.setTheme=function(e){return o.setState({theme:e})},a=e,K(o,a)}return H(n,t),n.prototype.componentWillMount=function(){!this.context[I];var e=this.props.theme;this.context[I]?this.setTheme(e?e:this.context[I].getState()):this.setTheme(e||{})},n.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)},n.prototype.componentDidMount=function(){this.context[I]&&!this.props.theme&&(this.subscriptionId=this.context[I].subscribe(this.setTheme))},n.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[I].unsubscribe(this.subscriptionId)},n.prototype.render=function(){return i?D.createElement(e,B({},this.props,this.state)):e.call(this,B({},this.props,this.state),this.context)},n}(D.Component),l=(t={},t[I]=z.object,t),u=null;return Object.defineProperty(s,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){u=e},get:function(){return u?B({},l,u):l}}),s}function a(e){var t=Y.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return J(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){function t(){return s}function n(e){s=e;for(var t=Object.keys(a),n=0,o=t.length;n<o;n++)a[t[n]]&&a[t[n]](e)}function o(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=i;return a[t]=e,i+=1,t}function r(e){a[e]=void 0}var a={},i=1,s=e;return{getState:t,setState:n,subscribe:o,unsubscribe:r}}function l(e){var t=[],n=[];return e.toString().split(" ").forEach(function(e){if(void 0===F.styleSheet.registered[e.substring(4)])t.push(e);else{var o=u(e);n.push(o)}}),{glamorlessClassName:t,glamorStyles:n}}function u(e){var t;return t={},t["data-"+e]="",t}function c(e){var t=e.styles,n=e.props,o=e.cssOverrides,r=e.cssProp,a=e.context,i=e.displayName,s=p([].concat(t,[n.className,o,r]),n,a),l=s.mappedArgs,u=s.nonGlamorClassNames,c=!1,f=c?{label:i}:null,d=F.css.apply(void 0,[f].concat(l)).toString(),h=u.join(" ").trim();return(d+" "+h).trim()}function p(e,t,n){for(var o=void 0,r=[],a=[],i=0;i<e.length;i++){for(o=e[i];"function"==typeof o;)o=o(t,n);if("string"==typeof o){var s=l(o),u=s.glamorStyles,c=s.glamorlessClassName;r.push.apply(r,u),a.push.apply(a,c)}else if(Array.isArray(o)){var f=p(o,t,n);r.push.apply(r,f.mappedArgs),a.push.apply(a,f.nonGlamorClassNames)}else r.push(o)}return{mappedArgs:r,nonGlamorClassNames:a}}function f(e){function t(o){function a(e){return t(o,B({},s,e))}function i(){function i(e,t,n){if(!p)return!0;var o=!0;return n&&(p(n.props,e,n.context,t)||(o=!1)),o}for(var s=arguments.length,f=Array(s),m=0;m<s;m++)f[m]=arguments[m];var b=r(function(t,n){t=d(b.propsToApply,{},t,n);var o=i(t,n,this.previous);p&&(this.previous={props:t,context:n});var r=e(t,b),a=r.toForward,s=r.cssOverrides,l=r.cssProp;return this.className=o?c({styles:b.styles,props:t,cssOverrides:s,cssProp:l,context:n,displayName:b.displayName}):this.className,D.createElement(b.comp,B({ref:"innerRef"in a?void 0:t.innerRef},a,{className:this.className}))},{noWarn:!0,createElement:!1});return Object.assign(b,n({comp:o,styles:f,rootEl:l,filterProps:h,forwardProps:y,displayName:u,propsToApply:C}),{isGlamorousComponent:!0,propsAreCssOverrides:v,withComponent:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=b.forwardProps,r=b.filterProps,a=V(b,["forwardProps","filterProps"]);return t(B({},a,{comp:e,rootEl:g(e)}),B({forwardProps:o,filterProps:r},n))()},withProps:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t(b,{withProps:n})()},withConfig:a}),b}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.rootEl,u=s.displayName,p=s.shouldClassNameUpdate,f=s.filterProps,h=void 0===f?[]:f,m=s.forwardProps,y=void 0===m?[]:m,b=s.propsAreCssOverrides,v=void 0===b?o.propsAreCssOverrides:b,C=s.withProps;return Object.assign(i,{withConfig:a}),i}function n(e){var t=e.comp,n=e.styles,o=e.rootEl,r=e.filterProps,a=e.forwardProps,i=e.displayName,s=e.propsToApply,l=t.comp?t.comp:t,u=t.propsToApply?[].concat(t.propsToApply,h(s)):h(s);return{styles:m(t.styles,n),comp:l,rootEl:o||g(t),forwardProps:m(t.forwardProps,a),filterProps:m(t.filterProps,r),displayName:i||"glamorous("+y(t)+")",propsToApply:u}}return t}function d(e,t,n,o){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,n),o)):Array.isArray(e)?Object.assign(t,d(e,t,n,o)):Object.assign(t,e)}),Object.assign(t,n)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function m(e,t){return e?e.concat(t):t}function g(e){return e.rootEl?e.rootEl:e.comp||e}function y(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function b(e,t){var n=t&&t.cache?t.cache:Q,o=t&&t.serializer?t.serializer:P,r=t&&t.strategy?t.strategy:O;return r(e,{cache:n,serializer:o})}function v(e){return null==e||"number"==typeof e||"boolean"==typeof e}function C(e,t,n,o){var r=v(o)?o:n(o),a=t.get(r);return"undefined"==typeof a&&(a=e.call(this,o),t.set(r,a)),a}function w(e,t,n){var o=Array.prototype.slice.call(arguments,3),r=n(o),a=t.get(r);return"undefined"==typeof a&&(a=e.apply(this,o),t.set(r,a)),a}function x(e,t,n,o,r){return n.bind(t,e,o,r)}function O(e,t){var n=1===e.length?C:w;return x(e,this,n,t.cache.create(),t.serializer)}function k(e,t){var n=w;return x(e,this,n,t.cache.create(),t.serializer)}function T(e,t){var n=C;return x(e,this,n,t.cache.create(),t.serializer)}function P(){return JSON.stringify(arguments)}function S(){this.cache=Object.create(null)}function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function M(e,t){return t={exports:{}},e(t,t.exports),t.exports}function j(e,t){var n=t.propsAreCssOverrides,o=t.rootEl,r=t.filterProps,a=t.forwardProps,i=e.css,s=e.innerRef,l=(e.theme,e.className,e.glam,V(e,["css","innerRef","theme","className","glam"]));void 0!==s&&a.indexOf("innerRef")!==-1&&(l.innerRef=s);var u={toForward:{},cssProp:i,cssOverrides:{}};return n||"string"==typeof o||0!==r.length?Object.keys(l).reduce(function(e,t){return r.indexOf(t)!==-1?e:(a.indexOf(t)!==-1||St(o,t)?e.toForward[t]=l[t]:n&&(e.cssOverrides[t]=l[t]),e)},u):(u.toForward=l,u)}function A(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var D=o(n(5)),F=n(48),_=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"],R=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],L=_.concat(R).filter(function(e,t,n){return n.indexOf(e)===t}),I="__glamorous__",N=!1,z=void 0;if(N){if(D.PropTypes||(z=function(){return z},["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){z[e]=z})),!D.Children){var q={map:function(e,t,n){return null==e?null:(e=q.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=q.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=q.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:[].concat(e)}};D.Children=q}}else if(parseFloat(D.version.slice(0,4))>=15.5)try{z=n(7)}catch(e){}z=z||D.PropTypes;var U,G,W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},H=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=a,Y=Object.prototype.toString,J=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1},Z=function(e){var t,n;return i(e)!==!1&&(t=e.constructor,"function"==typeof t&&(n=t.prototype,i(n)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1))},$=function(e){function t(){var n,o,r;W(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=K(this,e.call.apply(e,[this].concat(i))),o.setOuterTheme=function(e){o.outerTheme=e,void 0!==o.broadcast&&o.publishTheme()},r=n,K(o,r)}return H(t,e),t.prototype.getTheme=function(e){var t=e||this.props.theme;if(X(t)){var n=t(this.outerTheme);if(!Z(n))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return n}return B({},this.outerTheme,t)},t.prototype.getChildContext=function(){var e;return e={},e[I]=this.broadcast,e},t.prototype.publishTheme=function(e){this.broadcast.setState(this.getTheme(e))},t.prototype.componentDidMount=function(){this.context[I]&&(this.subscriptionId=this.context[I].subscribe(this.setOuterTheme))},t.prototype.componentWillMount=function(){this.context[I]&&this.setOuterTheme(this.context[I].getState()),this.broadcast=s(this.getTheme(this.props.theme))},t.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.publishTheme(e.theme)},t.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[I].unsubscribe(this.subscriptionId)},t.prototype.render=function(){return this.props.children?D.Children.only(this.props.children):null},t}(D.Component);$.childContextTypes=(U={},U[I]=z.object.isRequired,U),$.contextTypes=(G={},G[I]=z.object,G),S.prototype.has=function(e){return e in this.cache},S.prototype.get=function(e){return this.cache[e]},S.prototype.set=function(e,t){this.cache[e]=t};var Q={create:function(){return new S}},ee=b,te={variadic:k,monadic:T};ee.strategies=te;var ne=["coords","download","href","name","rel","shape","target","type"],oe=["title"],re=["alt","height","name","width"],ae=["alt","coords","download","href","rel","shape","target","type"],ie=["controls","loop","muted","preload","src"],se=["href","target"],le=["size"],ue=["dir"],ce=["cite"],pe=["disabled","form","name","type","value"],fe=["height","width"],de=["span","width"],he=["span","width"],me=["value"],ge=["cite"],ye=["open"],be=["title"],ve=["open"],Ce=["height","src","type","width"],we=["disabled","form","name"],xe=["size"],Oe=["accept","action","method","name","target"],ke=["name","scrolling","src"],Te=["cols","rows"],Pe=["profile"],Se=["size","width"],Ee=["manifest"],Me=["height","name","sandbox","scrolling","src","width"],je=["alt","height","name","sizes","src","width"],Ae=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],De=["cite"],Fe=["challenge","disabled","form","name"],_e=["form"],Re=["type","value"],Le=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],Ie=["name"],Ne=["content","name"],ze=["high","low","max","min","optimum","value"],qe=["data","form","height","name","type","width"],Ue=["reversed","start","type"],Ge=["disabled","label"],We=["disabled","label","selected","value"],Be=["form","name"],He=["name","type","value"],Ve=["width"],Ke=["max","value"],Xe=["cite"],Ye=["async","defer","integrity","nonce","src","type"],Je=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],Ze=["name"],$e=["media","sizes","src","type"],Qe=["media","nonce","title","type"],et=["summary","width"],tt=["headers","height","scope","width"],nt=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],ot=["headers","height","scope","width"],rt=["default","kind","label","src"],at=["type"],it=["controls","height","loop","muted","playsInline","poster","preload","src","width"],st=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],lt={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ut={a:ne,abbr:oe,applet:re,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:fe,col:de,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:we,font:xe,form:Oe,frame:ke,frameset:Te,head:Pe,hr:Se,html:Ee,iframe:Me,img:je,input:Ae,ins:De,keygen:Fe,label:_e,li:Re,link:Le,map:Ie,meta:Ne,meter:ze,object:qe,ol:Ue,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:$e,style:Qe,table:et,td:tt,textarea:nt,th:ot,track:rt,ul:at,video:it,svg:st,elements:lt,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},ct=Object.freeze({a:ne,abbr:oe,applet:re,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:fe,col:de,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:we,font:xe,form:Oe,frame:ke,frameset:Te,head:Pe,hr:Se,html:Ee,iframe:Me,img:je,input:Ae,ins:De,keygen:Fe,label:_e,li:Re,link:Le,map:Ie,meta:Ne,meter:ze,object:qe,ol:Ue,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:$e,style:Qe,table:et,td:tt,textarea:nt,th:ot,track:rt,ul:at,video:it,svg:st,elements:lt,default:ut}),pt=ct&&ut||ct,ft=M(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=pt,e.exports=pt}),dt=E(ft),ht=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];N&&ht.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var mt=dt["*"],gt=dt.elements.svg,yt=dt.elements.html,bt=["color","height","width"],vt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Ct=vt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",wt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Ct+"]*$")),xt=function(e){return"svg"===e||yt.indexOf(e)===-1&&gt.indexOf(e)!==-1},Ot=function(e,t){var n=void 0;return n=xt(t)?dt.svg:dt[t]||[],mt.indexOf(e)!==-1||n.indexOf(e)!==-1},kt=function(e){return bt.indexOf(e)!==-1},Tt=function(e){return ht.indexOf(e)!==-1},Pt=function(e,t){return"string"!=typeof e||(Ot(t,e)||Tt(t)||wt(t.toLowerCase()))&&(!kt(t)||xt(e))},St=ee(Pt),Et=f(j);Object.assign(Et,L.reduce(function(e,t){return e[t]=Et(t),e},{})),Object.assign(Et,L.reduce(function(e,t){var n=A(t);return e[n]=Et[t](),e[n].displayName="glamorous."+n,e[n].propsAreCssOverrides=!0,e},{})),Et.default=Et;var Mt=Object.freeze({default:Et,ThemeProvider:$,withTheme:r}),jt=Et;Object.assign(jt,Object.keys(Mt).reduce(function(e,t){return"default"!==t&&(e[t]=Mt[t]),e},{})),e.exports=jt},210:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n(5),a=(o(r),n(105)),i=o(a),s=n(48),l=n(310),u=o(l),c=n(57),p=(0,s.css)({float:"right"});t.default=function(t){var n=t.children,o=t.data;return e.createElement(i.default.Div,{margin:"0 auto",maxWidth:700,padding:(0,c.rhythm)(2),paddingTop:(0,c.rhythm)(1.5)},e.createElement(u.default,{to:"/"},e.createElement(i.default.H3,{marginBottom:(0,c.rhythm)(2),display:"inline-block",fontStyle:"normal"},o.site.siteMetadata.title)),e.createElement(u.default,{className:p,to:"/about"},"About"),n())};t.query="** extracted graphql fragment **"}).call(t,n(20))}});
//# sourceMappingURL=component---src-layouts-index-js-a9bb3b244301b05385de.js.map