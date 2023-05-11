/*! For license information please see HOODialog-HOODialog-stories-mdx.8ff7b14f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[8250],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOODialog/HOODialog.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>HOODialog_stories,extending:()=>extending,sidebarLeft:()=>sidebarLeft,standard:()=>standard});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOODialogType=function(HOODialogType){return HOODialogType[HOODialogType.Standard=0]="Standard",HOODialogType[HOODialogType.StandardError=1]="StandardError",HOODialogType[HOODialogType.StandardSuccess=2]="StandardSuccess",HOODialogType[HOODialogType.StandardWarning=3]="StandardWarning",HOODialogType[HOODialogType.SidebarLeft=4]="SidebarLeft",HOODialogType[HOODialogType.SidebarRight=5]="SidebarRight",HOODialogType}({});class HOODialogState{constructor(){}}class HOODialog extends react.PureComponent{LOG_SOURCE="💦HOODialog";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-mdldialog-outer";constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOODialog",props.type){case HOODialogType.StandardError:this._componentClass=`${this._componentClass} is-error`;break;case HOODialogType.StandardSuccess:this._componentClass=`${this._componentClass} is-success`;break;case HOODialogType.StandardWarning:this._componentClass=`${this._componentClass} is-warning`;break;case HOODialogType.SidebarLeft:this._componentClass=`${this._componentClass} is-sidebar-left`;break;case HOODialogType.SidebarRight:this._componentClass=`${this._componentClass} is-sidebar-right`}this.state=new HOODialogState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;this.props.visible&&(className+=" is-visible");let styleBlock={};return void 0!==this.props.width&&(styleBlock["--lqdDialogWidth"]=this.props.width),void 0!==this.props.height&&(styleBlock["--lqdDialogHeight"]=this.props.height),(0,jsx_runtime.jsx)("div",{...this._rootProps,...this.props.rootElementAttributes,className,children:(0,jsx_runtime.jsx)("dialog",{className:"hoo-mdldialog",style:styleBlock,children:this.props.children})})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOODialog.displayName="HOODialog";try{HOODialog.displayName="HOODialog",HOODialog.__docgenInfo={description:"",displayName:"HOODialog",props:{type:{defaultValue:null,description:"Is dialog visible",name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},visible:{defaultValue:null,description:"Is dialog visible",name:"visible",required:!0,type:{name:"boolean"}},height:{defaultValue:null,description:'Dialog height (e.g. "30vh" or "30%" or "30px"); required for all HOODialogType Standard',name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:'Dialog height (e.g. "40vw" or "40%" or "40px"); required for all HOODialogType',name:"width",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-mdldialog-outer {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOODialog/HOODialog.tsx#HOODialog"]={docgenInfo:HOODialog.__docgenInfo,name:"HOODialog",path:"src/HOODialog/HOODialog.tsx#HOODialog"})}catch(__react_docgen_typescript_loader_error){}const src_HOODialogHeader=__webpack_require__("./src/HOODialogHeader/HOODialogHeader.tsx").Z;const src_HOODialogContent=__webpack_require__("./src/HOODialogContent/HOODialogContent.tsx").Z;var HOOLabel=__webpack_require__("./src/HOOLabel/index.ts");__webpack_require__("./src/HOOButton/index.ts");const Template=args=>(0,jsx_runtime.jsxs)(HOODialog,{...args,children:[(0,jsx_runtime.jsx)(src_HOODialogHeader,{title:"Dialog Header",closeIconName:"hoo-icon-close",closeDisabled:!1,closeOnClick:args.close}),(0,jsx_runtime.jsx)(src_HOODialogContent,{children:(0,jsx_runtime.jsx)(HOOLabel.Z,{label:"Content of Dialog"})})]});const standard=Template.bind({});standard.storyName="Standard",standard.args={type:HOODialogType.Standard,visible:!1,height:"80vh",width:"80vw"},standard.parameters={storySource:{source:'args => <HOODialog {...args}>\n  <HOODialogHeader title="Dialog Header" closeIconName="hoo-icon-close" closeDisabled={false} closeOnClick={args.close} />\n  <HOODialogContent>\n    <HOOLabel label="Content of Dialog" />\n  </HOODialogContent>\n</HOODialog>'}};const sidebarLeft=Template.bind({});sidebarLeft.storyName="Sidebar Left",sidebarLeft.args={type:HOODialogType.SidebarLeft,visible:!1,width:"80vw"},sidebarLeft.parameters={storySource:{source:'args => <HOODialog {...args}>\n  <HOODialogHeader title="Dialog Header" closeIconName="hoo-icon-close" closeDisabled={false} closeOnClick={args.close} />\n  <HOODialogContent>\n    <HOOLabel label="Content of Dialog" />\n  </HOODialogContent>\n</HOODialog>'}};const extending=Template.bind({});extending.storyName="Extending",extending.args={type:HOODialogType.Standard,visible:!1,height:"80vh",width:"80vw",rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:'args => <HOODialog {...args}>\n  <HOODialogHeader title="Dialog Header" closeIconName="hoo-icon-close" closeDisabled={false} closeOnClick={args.close} />\n  <HOODialogContent>\n    <HOOLabel label="Content of Dialog" />\n  </HOODialogContent>\n</HOODialog>'}};const componentMeta={title:"Components/Dialogs/HOODialog",component:HOODialog,tags:["stories-mdx"],includeStories:["standard","sidebarLeft","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Dialogs/HOODialog",component:HOODialog}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoodialog",children:"HOODialog"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This example shows using a ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOLabel"})," component as the child(children) of the ",(0,jsx_runtime.jsx)(_components.code,{children:"HOODialogContent"})," component.\r\nIn reality you can put whatever DOM elements you want inside it the component the component simply injects all the children into the DOM."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Predefined enum defined for the supported dialog types:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'export enum HOODialogType {\r\n  "Standard",\r\n  "StandardError",\r\n  "StandardSuccess",\r\n  "StandardWarning",\r\n  "SidebarLeft",\r\n  "SidebarRight"\r\n}\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:HOODialog}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"standard",children:"Standard"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Showing and hiding the dialog requires manipulation of a state variable for the visible property. In the example below it's set to false."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Standard",args:{type:HOODialogType.Standard,visible:!1,height:"80vh",width:"80vw"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sidebar-left",children:"Sidebar Left"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Showing and hiding the dialog requires manipulation of a state variable for the visible property. In the example below it's set to false."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Sidebar Left",args:{type:HOODialogType.SidebarLeft,visible:!1,width:"80vw"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Showing and hiding the dialog requires manipulation of a state variable for the visible property. In the example below it's set to false."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Extending",args:{type:HOODialogType.Standard,visible:!1,height:"80vh",width:"80vw",rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}}};const HOODialog_stories=componentMeta},"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>HOOButton,d$:()=>HOOButtonType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButtonState{constructor(){}}class HOOButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case HOOButtonType.Icon:this._componentClass=`${this._componentClass}icon`;break;case HOOButtonType.Primary:this._componentClass=`${this._componentClass}-primary`;break;case HOOButtonType.HyperlinkPrimary:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case HOOButtonType.HyperlinkStandard:this._hyperlinkType=!0;break;case HOOButtonType.CompoundPrimary:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case HOOButtonType.CompoundStandard:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state=new HOOButtonState}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconName):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconRight):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),this.props.type===HOOButtonType.Icon&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{iconSVG}),(!this.props.label||this.props.type===HOOButtonType.Icon&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}HOOButton.displayName="HOOButton";try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>_HOOButton__WEBPACK_IMPORTED_MODULE_0__.d$});var _HOOButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOButton/HOOButton.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOButton__WEBPACK_IMPORTED_MODULE_0__.ZP},"./src/HOODialogContent/HOODialogContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOODialogContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOODialogContentState{constructor(){}}class HOODialogContent extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOODialogContent";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-dlgcontent";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOODialogContent",this.state=new HOODialogContentState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOODialogContent.displayName="HOODialogContent";try{HOODialogContent.displayName="HOODialogContent",HOODialogContent.__docgenInfo={description:"",displayName:"HOODialogContent",props:{rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-dlgcontent {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOODialogContent/HOODialogContent.tsx#HOODialogContent"]={docgenInfo:HOODialogContent.__docgenInfo,name:"HOODialogContent",path:"src/HOODialogContent/HOODialogContent.tsx#HOODialogContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOODialogHeader/HOODialogHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOODialogHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOIcon/index.ts"),_HOOButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOButton/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOODialogHeaderState{constructor(){}}class HOODialogHeader extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOODialogHeader";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-dlgheader";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOODialogHeader",this.state=new HOODialogHeaderState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,iconProp=this.props.closeIconName?{iconName:this.props.closeIconName}:{iconSVG:this.props.closeIconSVG};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,children:[!this.props.children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"hoo-dlgheader-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{children:this.props.title})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"hoo-dlgheader-closer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOButton__WEBPACK_IMPORTED_MODULE_2__.Z,{type:_HOOButton__WEBPACK_IMPORTED_MODULE_2__.d.Icon,onClick:this.props.closeOnClick,disabled:this.props.closeDisabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{...iconProp})})})]}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOODialogHeader.displayName="HOODialogHeader";try{HOODialogHeader.displayName="HOODialogHeader",HOODialogHeader.__docgenInfo={description:"",displayName:"HOODialogHeader",props:{title:{defaultValue:null,description:"Title for Dialog",name:"title",required:!0,type:{name:"string"}},closeDisabled:{defaultValue:null,description:"Close button disabled",name:"closeDisabled",required:!0,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"Close button click event",name:"closeOnClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},closeIconName:{defaultValue:null,description:"Name of close icon to be rendered, if omitted will use closeIconSVG",name:"closeIconName",required:!1,type:{name:"string"}},closeIconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include closeIconName",name:"closeIconSVG",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-dlgheader {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOODialogHeader/HOODialogHeader.tsx#HOODialogHeader"]={docgenInfo:HOODialogHeader.__docgenInfo,name:"HOODialogHeader",path:"src/HOODialogHeader/HOODialogHeader.tsx#HOODialogHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx").Z},"./src/HOOLabel/HOOLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOOLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOLabelState{constructor(){}}class HOOLabel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOLabel";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOLabel",this.state=new HOOLabelState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const isRequired=this.props.required?"is-required":"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}`:`${this._componentClass} ${isRequired}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{...this._rootProps,...this.props.rootElementAttributes,htmlFor:this.props.for,className,children:this.props.label})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOLabel.displayName="HOOLabel";try{HOOLabel.displayName="HOOLabel",HOOLabel.__docgenInfo={description:"",displayName:"HOOLabel",props:{label:{defaultValue:null,description:"The label string",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"(Optional) Styles label to indicated the associated input is required",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"(Optional) Specifies the id of the form element the label should be bound to",name:"for",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLLabelElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOLabel/HOOLabel.tsx#HOOLabel"]={docgenInfo:HOOLabel.__docgenInfo,name:"HOOLabel",path:"src/HOOLabel/HOOLabel.tsx#HOOLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOLabel/HOOLabel.tsx").Z},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.5b86091c.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName){return this._symbolSetDictionary[iconName]}IconBase64(iconName){const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);