/*! For license information please see HOOText-HOOText-stories-mdx.366c6bfb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[1766],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOText/HOOText.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,basic:()=>basic,default:()=>HOOText_stories,disabled:()=>disabled,extending:()=>extending,multiline:()=>multiline,prefix:()=>prefix,prefixSuffix:()=>prefixSuffix,suffix:()=>suffix});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOTextState{constructor(){}}class HOOText extends react.PureComponent{LOG_SOURCE="💦HOOText";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-input-group";_inputClass="hoo-input-text";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOText",this.state=new HOOTextState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const rootClassName=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,inputClassName=this.props.inputElementAttributes?.className?`${this._inputClass} ${this.props.inputElementAttributes?.className}`:this._inputClass;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!this.props.multiline&&(0,jsx_runtime.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className:rootClassName,children:[this.props.inputPrefix&&(0,jsx_runtime.jsx)("div",{className:"hoo-input-prefix",children:this.props.inputPrefix}),(0,jsx_runtime.jsx)("input",{...this.props.inputElementAttributes,type:this.props.inputType||"text",value:this.props.value,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,"data-suffix":this.props.inputSuffix||null,"data-prefix":this.props.inputPrefix||null,className:inputClassName,onChange:this.props.onChange}),this.props.inputSuffix&&(0,jsx_runtime.jsx)("div",{className:"hoo-input-suffix",children:this.props.inputSuffix})]}),this.props.multiline&&(0,jsx_runtime.jsx)("textarea",{...this._rootProps,...this.props.inputElementAttributes,className:inputClassName,rows:this.props.multiline,value:this.props.value,onChange:this.props.onChange})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOText.displayName="HOOText";try{HOOText.displayName="HOOText",HOOText.__docgenInfo={description:"",displayName:"HOOText",props:{value:{defaultValue:null,description:"value",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Change event handler",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},invalid:{defaultValue:null,description:"(Optional) Is Input Invalid - default false.",name:"invalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"(Optional) Is Input Disabled - default false.",name:"disabled",required:!1,type:{name:"boolean"}},inputPrefix:{defaultValue:null,description:"(Optional) Input Prefix.",name:"inputPrefix",required:!1,type:{name:"string"}},inputSuffix:{defaultValue:null,description:"(Optional) Input Suffix.",name:"inputSuffix",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"(Optional) Rows for multiline textarea, will render textarea with inputElementAttributes.",name:"multiline",required:!1,type:{name:"number"}},inputType:{defaultValue:null,description:"(Optional) override for input type. Default is `text`; Not used when multiline parameter is included.",name:"inputType",required:!1,type:{name:"HTMLInputTypeAttribute"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-input-group {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},inputElementAttributes:{defaultValue:null,description:'(Optional) HTMLInputElement attributes that will be applied to the input element of the component.\nClass names will be appended to the end of the default class string - "hoo-input-text {inputElementAttributes.class}"',name:"inputElementAttributes",required:!1,type:{name:"DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOText/HOOText.tsx#HOOText"]={docgenInfo:HOOText.__docgenInfo,name:"HOOText",path:"src/HOOText/HOOText.tsx#HOOText"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(HOOText,{...args});const basic=Template.bind({});basic.storyName="Basic",basic.args={value:"Default Value"},basic.parameters={storySource:{source:"args => <HOOText {...args} />"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={value:"Default Value",disabled:!0},disabled.parameters={storySource:{source:"args => <HOOText {...args} />"}};const prefix=Template.bind({});prefix.storyName="Prefix",prefix.args={value:"Default Value",inputPrefix:"https://"},prefix.parameters={storySource:{source:"args => <HOOText {...args} />"}};const suffix=Template.bind({});suffix.storyName="Suffix",suffix.args={value:"Default Value",inputSuffix:".com"},suffix.parameters={storySource:{source:"args => <HOOText {...args} />"}};const prefixSuffix=Template.bind({});prefixSuffix.storyName="Prefix/Suffix",prefixSuffix.args={value:"Default Value",inputPrefix:"https://",inputSuffix:".com"},prefixSuffix.parameters={storySource:{source:"args => <HOOText {...args} />"}};const multiline=Template.bind({});multiline.storyName="Multiline",multiline.args={value:"Default Value",multiline:5},multiline.parameters={storySource:{source:"args => <HOOText {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={value:"Default Value",rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:"args => <HOOText {...args} />"}};const componentMeta={title:"Components/Inputs/HOOText",component:HOOText,tags:["stories-mdx"],includeStories:["basic","disabled","prefix","suffix","prefixSuffix","multiline","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Inputs/HOOText",component:HOOText}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hootext",children:"HOOText"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Supports html input types:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"text (default)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"email"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"phone"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"url"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:HOOText}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Basic",args:{value:"Default Value"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",args:{value:"Default Value",disabled:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"prefix",children:"Prefix"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Prefix",args:{value:"Default Value",inputPrefix:"https://"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"suffix",children:"Suffix"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Suffix",args:{value:"Default Value",inputSuffix:".com"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"prefixsuffix",children:"Prefix/Suffix"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Prefix/Suffix",args:{value:"Default Value",inputPrefix:"https://",inputSuffix:".com"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"multiline",children:"Multiline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiline",args:{value:"Default Value",multiline:5},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Extending",args:{value:"Default Value",rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}}};const HOOText_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);