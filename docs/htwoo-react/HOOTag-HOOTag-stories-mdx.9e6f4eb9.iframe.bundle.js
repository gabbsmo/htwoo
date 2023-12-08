/*! For license information please see HOOTag-HOOTag-stories-mdx.9e6f4eb9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[3954],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOTag/HOOTag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,extending:()=>extending,primaryButton:()=>primaryButton,primaryLink:()=>primaryLink,staticStandard:()=>staticStandard});__webpack_require__("./node_modules/react/index.js");var C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_HOOTag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOTag/HOOTag.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOTag__WEBPACK_IMPORTED_MODULE_2__.ZP,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",img:"img",pre:"pre",code:"code",h2:"h2",h3:"h3"},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Meta/HOOTag",component:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.ZP}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"hootag",children:"HOOTag"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.img,{src:"https://img.shields.io/badge/%F0%9F%92%A6%20Added%20Version-1.1-blue.svg?style=for-the-badge",alt:"Available in v1.1"})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Predefined enum defined for the supported tag types and styles:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-ts",children:'export enum HOOTagType {\r\n  Button = "button",\r\n  Link = "link",\r\n  Static = "static"\r\n}\r\n\r\nexport enum HOOTagStyle {\r\n  Primary = "primary",\r\n  Standard = "standard"\r\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Ed,{of:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.ZP}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"primary---button",children:"Primary - Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Primary: Button",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Button,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Primary,text:"Tag Button",onClick:()=>{alert("Clicked")}},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"primary---link",children:"Primary - Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Primary: Link",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Link,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Primary,text:"Tag Link",linkUrl:"https://google.com",linkTarget:"_blank"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"static-standard",children:"Static: Standard"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Static: Standard",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Static,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Standard,text:"Tag Static"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"extending",children:"Extending"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Extending",args:{tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Static,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Standard,text:"Tag Static Ext",rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}const primaryButton=Template.bind({});primaryButton.storyName="Primary: Button",primaryButton.args={tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Button,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Primary,text:"Tag Button",onClick:()=>{alert("Clicked")}},primaryButton.parameters={storySource:{source:"args => <HOOTag {...args} />"}};const primaryLink=Template.bind({});primaryLink.storyName="Primary: Link",primaryLink.args={tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Link,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Primary,text:"Tag Link",linkUrl:"https://google.com",linkTarget:"_blank"},primaryLink.parameters={storySource:{source:"args => <HOOTag {...args} />"}};const staticStandard=Template.bind({});staticStandard.storyName="Static: Standard",staticStandard.args={tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Static,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Standard,text:"Tag Static"},staticStandard.parameters={storySource:{source:"args => <HOOTag {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={tagType:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.en.Static,tagStyle:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.PZ.Standard,text:"Tag Static Ext",rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:"args => <HOOTag {...args} />"}};const componentMeta={title:"Components/Meta/HOOTag",component:_HOOTag__WEBPACK_IMPORTED_MODULE_2__.ZP,tags:["stories-mdx"],includeStories:["primaryButton","primaryLink","staticStandard","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","primaryButton","primaryLink","staticStandard","extending"]},"./src/HOOTag/HOOTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PZ:()=>HOOTagStyle,ZP:()=>HOOTag,en:()=>HOOTagType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOTagType=function(HOOTagType){return HOOTagType.Button="button",HOOTagType.Link="link",HOOTagType.Static="static",HOOTagType}({}),HOOTagStyle=function(HOOTagStyle){return HOOTagStyle.Primary="primary",HOOTagStyle.Standard="standard",HOOTagStyle}({});class HOOTagState{constructor(){}}class HOOTag extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOTag";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-mtag";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOTag",this.state=new HOOTagState,this._componentClass+=props.tagStyle===HOOTagStyle.Primary?"-primary":""}render(){try{let retVal=null;this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;switch(this.props.tagType){case HOOTagType.Button:retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})});break;case HOOTagType.Link:retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{...this._rootProps,...this.props.rootElementAttributes,className,href:this.props.linkUrl,target:this.props.linkTarget||"_self",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})});break;default:retVal=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"hoo-mtag-lbl",children:this.props.text})})}return retVal}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOTag.displayName="HOOTag";try{HOOTag.displayName="HOOTag",HOOTag.__docgenInfo={description:"",displayName:"HOOTag",props:{text:{defaultValue:null,description:"Tag text",name:"text",required:!0,type:{name:"string"}},tagType:{defaultValue:null,description:"Tag type (HOOTagType)",name:"tagType",required:!0,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"static"'}]}},tagStyle:{defaultValue:null,description:"Tag style (HOOTagStyle)",name:"tagStyle",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"standard"'}]}},linkUrl:{defaultValue:null,description:"(Optional - Used with HooTagType.Link) The url to link to.",name:"linkUrl",required:!1,type:{name:"string"}},linkTarget:{defaultValue:null,description:"(Optional - Used with HooTagType.Link) The target of the HTMLAnchorElement",name:"linkTarget",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:'(Optional - Used with HOOTagType.Button) Direct interface for buttons click event handler.\nDefaults to "_self"',name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-mtag {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOTag/HOOTag.tsx#HOOTag"]={docgenInfo:HOOTag.__docgenInfo,name:"HOOTag",path:"src/HOOTag/HOOTag.tsx#HOOTag"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);