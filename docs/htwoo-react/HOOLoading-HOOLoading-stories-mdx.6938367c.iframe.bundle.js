/*! For license information please see HOOLoading-HOOLoading-stories-mdx.6938367c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[6281],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOLoading/HOOLoading.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOLoading_stories,extending:()=>extending});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOLoadingState{constructor(){}}class HOOLoading extends react.PureComponent{LOG_SOURCE="💦HOOLoading";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-progress";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOLoading",this.state=new HOOLoadingState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,jsx_runtime.jsx)("div",{...this._rootProps,role:"progressbar","aria-valuenow":this.props.value,"aria-valuemin":this.props.minValue,"aria-valuemax":this.props.maxValue,title:"Progress",...this.props.rootElementAttributes,className,children:(0,jsx_runtime.jsx)("div",{className:"hoo-progress-indicator"})})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOLoading.displayName="HOOLoading";try{HOOLoading.displayName="HOOLoading",HOOLoading.__docgenInfo={description:"",displayName:"HOOLoading",props:{value:{defaultValue:null,description:"Current Value",name:"value",required:!0,type:{name:"number"}},minValue:{defaultValue:null,description:"Min Value",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"Max Value",name:"maxValue",required:!0,type:{name:"number"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-progress {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOLoading/HOOLoading.tsx#HOOLoading"]={docgenInfo:HOOLoading.__docgenInfo,name:"HOOLoading",path:"src/HOOLoading/HOOLoading.tsx#HOOLoading"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(HOOLoading,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.h_,{title:"Components/Loading/HOOLoading",component:HOOLoading}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoolabel",children:"HOOLabel"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:HOOLoading}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Basic",args:{minValue:0,maxValue:100,value:20},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Extending",args:{minValue:0,maxValue:100,value:20,rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args={minValue:0,maxValue:100,value:20},basic.parameters={storySource:{source:"args => <HOOLoading {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={minValue:0,maxValue:100,value:20,rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:"args => <HOOLoading {...args} />"}};const componentMeta={title:"Components/Loading/HOOLoading",component:HOOLoading,tags:["stories-mdx"],includeStories:["basic","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOLoading_stories=componentMeta,__namedExportsOrder=["Template","basic","extending"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);