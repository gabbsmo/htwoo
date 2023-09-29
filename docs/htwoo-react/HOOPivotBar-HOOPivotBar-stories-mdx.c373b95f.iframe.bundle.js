"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[1253],{"./src/HOOPivotBar/HOOPivotBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,basic:()=>basic,default:()=>HOOPivotBar_stories,extending:()=>extending,options:()=>options,overflow:()=>overflow});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api");const src_HOOPivotButton=__webpack_require__("./src/HOOPivotButton/HOOPivotButton.tsx").Z;var HOOIconOverflow=__webpack_require__("./src/HOOIconOverflow/index.ts"),OverflowObserver=__webpack_require__("./src/common/OverflowObserver.ts"),Common=__webpack_require__("./src/common/Common.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOPivotBar extends react.PureComponent{LOG_SOURCE="💦HOOPivotBar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-pivotbar";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPivotBar",this.state={showOverflow:!1},this._overflowResizer=new OverflowObserver.M(`HOOPivotBarOR_${(0,Common.z)(10)}`),this._overflowResizer.OverflowChangedEvent=this._toggleOverflow,this._overflowContainer=react.createRef()}_toggleOverflow=overflow=>{this.setState({showOverflow:overflow})};componentDidMount(){try{this.props.hasOverflow&&null!=this._overflowResizer&&null!=this._overflowContainer.current&&(this._overflowResizer.ObserveElement=this._overflowContainer.current)}catch(err){console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`)}}_renderPivotItems(){let retVal=null;const pivotButtonAttributes={...this.props.pivotButtonAttributes,role:"menuitem"};try{this.props.pivotItems&&(retVal=this.props.pivotItems.map(((pi,index)=>{const isSelected=pi.key===this.props.selectedKey;return(0,jsx_runtime.jsx)(src_HOOPivotButton,{label:pi.text,isActive:isSelected,onClick:ev=>{this.props.onClick(ev,pi.key)},rootElementAttributes:pivotButtonAttributes},pi.key)})))}catch(err){console.error(`${this.LOG_SOURCE} (_renderPivotItems) - ${err}`)}return retVal}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.hasOverflow&&(className+=" has-overflow"),(0,jsx_runtime.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,role:"menubar",children:[!this.props.hasOverflow&&this._renderPivotItems(),this.props.hasOverflow&&(0,jsx_runtime.jsxs)("div",{ref:this._overflowContainer,className:""+(this.props.hasOverflow?"hoo-overflow":""),children:[this._renderPivotItems(),(0,jsx_runtime.jsx)(HOOIconOverflow.Z,{overflow:this.state.showOverflow,rootElementAttributes:{role:"menuitem"},children:(0,jsx_runtime.jsx)("menu",{className:"hoo-buttonflyout"})})]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOPivotBar.displayName="HOOPivotBar";try{HOOPivotBar.displayName="HOOPivotBar",HOOPivotBar.__docgenInfo={description:"",displayName:"HOOPivotBar",props:{selectedKey:{defaultValue:null,description:"Key of currently selected Pivot Item",name:"selectedKey",required:!0,type:{name:"string | number"}},pivotItems:{defaultValue:null,description:"Menu items to render in Pivot Bar",name:"pivotItems",required:!0,type:{name:"IHOOPivotItem[]"}},onClick:{defaultValue:null,description:"Pivot Item click event handler.",name:"onClick",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, key: string | number) => void"}},hasOverflow:{defaultValue:null,description:"(Optional) Overflow enabled - default false",name:"hasOverflow",required:!1,type:{name:"boolean"}},pivotButtonAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to all Pivot Buttons.\nClass names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}",name:"pivotButtonAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-pivotbar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPivotBar/HOOPivotBar.tsx#HOOPivotBar"]={docgenInfo:HOOPivotBar.__docgenInfo,name:"HOOPivotBar",path:"src/HOOPivotBar/HOOPivotBar.tsx#HOOPivotBar"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/HOOLabel/index.ts");const options=[{key:1,text:"Menu 1"},{key:2,text:"Menu 2"},{key:3,text:"Menu 3"},{key:4,text:"Menu 4"},{key:5,text:"Menu 5"}],Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(HOOPivotBar,{...args,onClick:(ev,key)=>{args.selectedKey=key,updateArgs({...args})}})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.h_,{title:"Components/Menus/HOOPivotBar",component:HOOPivotBar}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoopivotbar",children:"HOOPivotBar"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"options"})," property requires an array of items of type ",(0,jsx_runtime.jsx)(_components.code,{children:"IHOOPivotItem"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"export interface IHOOPivotItem {\r\n  key: number | string;\r\n  text: string;\r\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:HOOPivotBar}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Basic",args:{selectedKey:1,pivotItems:options,hasOverflow:!1},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overflow",children:"Overflow"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Overflow",args:{selectedKey:1,pivotItems:options,hasOverflow:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Extending",args:{selectedKey:1,pivotItems:options,hasOverflow:!1,rootElementAttributes:{style:{backgroundColor:"mintcream"}}},children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args={selectedKey:1,pivotItems:options,hasOverflow:!1},basic.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key) => {\n    args.selectedKey = key;\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOPivotBar {...args} onClick={handle} />;\n}"}};const overflow=Template.bind({});overflow.storyName="Overflow",overflow.args={selectedKey:1,pivotItems:options,hasOverflow:!0},overflow.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key) => {\n    args.selectedKey = key;\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOPivotBar {...args} onClick={handle} />;\n}"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={selectedKey:1,pivotItems:options,hasOverflow:!1,rootElementAttributes:{style:{backgroundColor:"mintcream"}}},extending.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const handle = (ev, key) => {\n    args.selectedKey = key;\n    updateArgs({\n      ...args\n    });\n  };\n  return <HOOPivotBar {...args} onClick={handle} />;\n}"}};const componentMeta={title:"Components/Menus/HOOPivotBar",component:HOOPivotBar,tags:["stories-mdx"],includeStories:["basic","overflow","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOPivotBar_stories=componentMeta},"./src/HOOPivotButton/HOOPivotButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HOOPivotButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOPivotButtonState{constructor(){}}class HOOPivotButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOPivotButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button-pivot";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPivotButton",this.state=new HOOPivotButtonState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey.toString());let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.isActive&&(className+=" is-active"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"hoo-pivot-inner",title:this.props.label,children:this.props.label})})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOPivotButton.displayName="HOOPivotButton";try{HOOPivotButton.displayName="HOOPivotButton",HOOPivotButton.__docgenInfo={description:"",displayName:"HOOPivotButton",props:{label:{defaultValue:null,description:"Pivot Button label",name:"label",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"Is Pivot Button active",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPivotButton/HOOPivotButton.tsx#HOOPivotButton"]={docgenInfo:HOOPivotButton.__docgenInfo,name:"HOOPivotButton",path:"src/HOOPivotButton/HOOPivotButton.tsx#HOOPivotButton"})}catch(__react_docgen_typescript_loader_error){}}}]);