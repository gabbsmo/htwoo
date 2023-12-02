/*! For license information please see HOOIconOverflow-HOOIconOverflow-stories-mdx.7004e879.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[4328],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOIconOverflow/HOOIconOverflow.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OverflowTemplate:()=>OverflowTemplate,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__,extending:()=>extending});__webpack_require__("./node_modules/react/index.js");var C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_HOOIconOverflow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIconOverflow/HOOIconOverflow.tsx"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const OverflowTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_HOOIconOverflow__WEBPACK_IMPORTED_MODULE_2__.Z,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_3__.Z,{contextItems:[{iconName:"Plus",label:"First Element"},{iconName:"Plus",label:"Second Element"}],contextItemClicked:(ev,contextItem)=>{alert(JSON.stringify(contextItem))}})});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Buttons/HOOIconOverflow",component:_HOOIconOverflow__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"hooiconoverflow",children:"HOOIconOverflow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"flyout-menu-items",children:"Flyout Menu Items"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Enabling flyout menu depends on passing an instance of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HOOFlyoutMenu"})," as a child"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Ed,{of:_HOOIconOverflow__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Basic",args:{overflow:!0},children:OverflowTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Extending",args:{overflow:!0,rootElementAttributes:{style:{backgroundColor:"pink"}}},children:OverflowTemplate.bind({})})})]})}const basic=OverflowTemplate.bind({});basic.storyName="Basic",basic.args={overflow:!0},basic.parameters={storySource:{source:'args => <HOOIconOverflow {...args}>\n    <HOOFlyoutMenu contextItems={[{\n    iconName: "Plus",\n    label: "First Element"\n  }, {\n    iconName: "Plus",\n    label: "Second Element"\n  }]} contextItemClicked={(ev, contextItem) => {\n    alert(JSON.stringify(contextItem));\n  }} />\n  </HOOIconOverflow>'}};const extending=OverflowTemplate.bind({});extending.storyName="Extending",extending.args={overflow:!0,rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:'args => <HOOIconOverflow {...args}>\n    <HOOFlyoutMenu contextItems={[{\n    iconName: "Plus",\n    label: "First Element"\n  }, {\n    iconName: "Plus",\n    label: "Second Element"\n  }]} contextItemClicked={(ev, contextItem) => {\n    alert(JSON.stringify(contextItem));\n  }} />\n  </HOOIconOverflow>'}};const componentMeta={title:"Components/Buttons/HOOIconOverflow",component:_HOOIconOverflow__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["stories-mdx"],includeStories:["basic","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["OverflowTemplate","basic","extending"]},"./src/HOOAction/HOOAction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>HOOActionType,Z:()=>HOOAction});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOActionType=function(HOOActionType){return HOOActionType[HOOActionType.Action=0]="Action",HOOActionType}({});class HOOAction extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAction";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonaction";_labelClass="hoo-button-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAction",this.state={}}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass,labelClass=this.props.labelElementAttributes?.className?`${this._labelClass} ${this.props.labelElementAttributes?.className}`:this._labelClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon","aria-hidden":"true",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:this.props.iconName})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{...this.props.labelElementAttributes,className:labelClass,children:this.props.label}),this.props.type!==HOOActionType.Action&&this.props.flyoutContextItems?.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-icon hoo-buttonchevron",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{iconName:"hoo-icon-arrow-down"})})]}),!this.props.label&&this.props.children]}),this.props.flyoutContextItems&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOFlyoutMenu_HOOFlyoutMenu__WEBPACK_IMPORTED_MODULE_2__.Z,{contextItems:this.props.flyoutContextItems,contextItemClicked:this.props.onClick})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAction.displayName="HOOAction";try{HOOAction.displayName="HOOAction",HOOAction.__docgenInfo={description:"",displayName:"HOOAction",props:{onClick:{defaultValue:null,description:"Direct interface for button click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"(Deprecated) Type of Action.",name:"type",required:!1,type:{name:"HOOActionType"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},flyoutContextItems:{defaultValue:null,description:"(Optional) icon name, if omitted, components children will be rendered.",name:"flyoutContextItems",required:!1,type:{name:"IHOOFlyoutMenuItem[]"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonaction {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLSpanElement attributes that will be applied to the label element of the component.\nClass names will be appended to the end of the default class string - hoo-button-label {rootElementAttributes.class}",name:"labelElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAction/HOOAction.tsx#HOOAction"]={docgenInfo:HOOAction.__docgenInfo,name:"HOOAction",path:"src/HOOAction/HOOAction.tsx#HOOAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOButton,d:()=>HOOButtonType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case HOOButtonType.Icon:this._componentClass=`${this._componentClass}icon`;break;case HOOButtonType.Primary:this._componentClass=`${this._componentClass}-primary`;break;case HOOButtonType.HyperlinkPrimary:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case HOOButtonType.HyperlinkStandard:this._hyperlinkType=!0;break;case HOOButtonType.CompoundPrimary:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case HOOButtonType.CompoundStandard:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state={}}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconName):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconRight):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),this.props.type===HOOButtonType.Icon&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.Z,{iconSVG}),(!this.props.label||this.props.type===HOOButtonType.Icon&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}HOOButton.displayName="HOOButton";try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOFlyoutMenu/HOOFlyoutMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOFlyoutMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAction/HOOAction.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOFlyoutMenuState{constructor(){}}class HOOFlyoutMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOFlyoutMenu";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonflyout";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFlyoutMenu",this.state=new HOOFlyoutMenuState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("menu",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.contextItems&&this.props.contextItems.map((ci=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"hoo-buttonflyout-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.Z,{label:ci.label,iconName:ci.iconName,type:_HOOAction_HOOAction__WEBPACK_IMPORTED_MODULE_1__.N.Action,onClick:event=>{this.props.contextItemClicked(event,ci)}})},ci.label)))})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOFlyoutMenu.displayName="HOOFlyoutMenu";try{HOOFlyoutMenu.displayName="HOOFlyoutMenu",HOOFlyoutMenu.__docgenInfo={description:"",displayName:"HOOFlyoutMenu",props:{contextItems:{defaultValue:null,description:"Context Items",name:"contextItems",required:!0,type:{name:"IHOOFlyoutMenuItem[]"}},contextItemClicked:{defaultValue:null,description:"Context Items clicked event, returns mouse event and HOOFlyoutMenuItem",name:"contextItemClicked",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, ci: IHOOFlyoutMenuItem) => void"}},rootElementAttributes:{defaultValue:null,description:"(Optional) MenuHTMLAttributes attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonflyout {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & MenuHTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"]={docgenInfo:HOOFlyoutMenu.__docgenInfo,name:"HOOFlyoutMenu",path:"src/HOOFlyoutMenu/HOOFlyoutMenu.tsx#HOOFlyoutMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIconOverflow/HOOIconOverflow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOIconOverflow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOButton/HOOButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconOverflow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIconOverflow";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-buttonicon-overflow";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIconOverflow",this.state={showMenu:!1}}_showMenu=()=>{try{this.setState({showMenu:!this.state.showMenu})}catch(err){console.error(`${this.LOG_SOURCE} (_showMenu) - ${err}`)}};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.overflow&&(className+=" is-active"),this.state.showMenu&&(className+=" show-flyout"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,"aria-haspopup":"true",className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__.Z,{type:_HOOButton_HOOButton__WEBPACK_IMPORTED_MODULE_1__.d.Icon,iconName:"hoo-icon-ellipses",onClick:this._showMenu,rootElementAttributes:{className:"hoo-buttonicon-overflow","aria-haspopup":"true"}}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOIconOverflow.displayName="HOOIconOverflow";try{HOOIconOverflow.displayName="HOOIconOverflow",HOOIconOverflow.__docgenInfo={description:"",displayName:"HOOIconOverflow",props:{overflow:{defaultValue:null,description:"Overflow is active; show's children which is normally instance of HOOFlyoutMenu",name:"overflow",required:!0,type:{name:"boolean"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-buttonicon-overflow {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIconOverflow/HOOIconOverflow.tsx#HOOIconOverflow"]={docgenInfo:HOOIconOverflow.__docgenInfo,name:"HOOIconOverflow",path:"src/HOOIconOverflow/HOOIconOverflow.tsx#HOOIconOverflow"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.N.Icon(this.props.iconName);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.5b86091c.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName){return this._symbolSetDictionary[iconName]}IconBase64(iconName){const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);