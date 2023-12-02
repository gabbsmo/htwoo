/*! For license information please see HOOOptionList-HOOOptionList-stories-mdx.bec7065d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[6732],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOOptionList/HOOOptionList.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,checkboxList:()=>checkboxList,default:()=>HOOOptionList_stories,extending:()=>extending,multiColumnCheckboxList:()=>multiColumnCheckboxList,options:()=>options,radioButtonList:()=>radioButtonList});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const src_HOOCheckbox=__webpack_require__("./src/HOOCheckbox/HOOCheckbox.tsx").Z;var Common=__webpack_require__("./src/common/Common.ts");const src_HOORadioButton=__webpack_require__("./src/HOORadioButton/HOORadioButton.tsx").Z;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOOptionListType=function(HOOOptionListType){return HOOOptionListType[HOOOptionListType.Checkbox=0]="Checkbox",HOOOptionListType[HOOOptionListType.RadioButton=1]="RadioButton",HOOOptionListType}({}),HOOOptionListDirection=function(HOOOptionListDirection){return HOOOptionListDirection[HOOOptionListDirection.Vertical=0]="Vertical",HOOOptionListDirection[HOOOptionListDirection.Horizontal=1]="Horizontal",HOOOptionListDirection}({});class HOOOptionListState{constructor(rea=void 0,styleblock={}){this.rea=rea,this.styleblock=styleblock}}class HOOOptionList extends react.Component{LOG_SOURCE="💦HOOOptionList";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_optionListName="hoo-options-";_direction=HOOOptionListDirection.Vertical;_valid=!0;_updateStyle=!1;constructor(props){let styleblock,rea;super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOOptionList",this._direction=this.props.direction||HOOOptionListDirection.Vertical,this._optionListName+=(0,Common.z)(10),this._componentClass=props.type===HOOOptionListType.Checkbox?"hoo-checkbox-group":"hoo-radiobutton-group",this._valid=null===props.value||(props.type===HOOOptionListType.Checkbox?Array.isArray(props.value):!Array.isArray(props.value)),this.props.rootElementAttributes?.style&&(styleblock={...this.props.rootElementAttributes?.style}),void 0===this.props.colsDesk&&void 0===this.props.colsMobile||(styleblock=styleblock||{},void 0!==this.props.colsDesk&&(styleblock["--cols-desk"]=this.props.colsDesk),void 0!==this.props.colsMobile&&(styleblock["--cols-mobile"]=this.props.colsMobile)),this.props.rootElementAttributes&&(rea=JSON.parse(JSON.stringify(this.props.rootElementAttributes)),this.props.reactKey&&(rea.key=this.props.reactKey),this.props.type===HOOOptionListType.RadioButton?(rea.tabindex=0,rea.role="radiogroup"):rea.role="checkbox",delete rea.style),this.state=new HOOOptionListState}shouldComponentUpdate(nextProps,nextState){return(!(0,Common.X)(nextState,this.state)||!(0,Common.X)(nextProps,this.props))&&(nextProps.value!==this.props.value&&(this._valid=null===nextProps.value||(nextProps.type===HOOOptionListType.Checkbox?Array.isArray(nextProps.value):!Array.isArray(nextProps.value))),nextProps.type!=this.props.type&&(this._updateStyle=!0),nextProps.colsDesk!=this.props.colsDesk&&(this._updateStyle=!0),nextProps.colsMobile!=this.props.colsMobile&&(this._updateStyle=!0),nextProps.rootElementAttributes!=this.props.rootElementAttributes&&(this._updateStyle=!0),!0)}componentDidUpdate(prevProps,prevState,snapshot){try{if(this._updateStyle){let styleblock,rea;this._updateStyle=!1,this.props.rootElementAttributes?.style&&(styleblock={...this.props.rootElementAttributes?.style}),void 0===this.props.colsDesk&&void 0===this.props.colsMobile||(styleblock=styleblock||{},void 0!==this.props.colsDesk&&(styleblock["--cols-desk"]=this.props.colsDesk),void 0!==this.props.colsMobile&&(styleblock["--cols-mobile"]=this.props.colsMobile)),this.props.rootElementAttributes&&(rea=JSON.parse(JSON.stringify(this.props.rootElementAttributes)),this.props.reactKey&&(rea.key=this.props.reactKey),this.props.type===HOOOptionListType.RadioButton?(rea.tabindex=0,rea.role="radiogroup"):rea.role="checkbox",delete rea.style),this.setState({rea,styleblock})}}catch(err){console.error(`${this.LOG_SOURCE} (componentDidUpdate) - ${err}`)}}_onChange=(event,key)=>{try{const checked=event.target.checked;this.props.onChange(key,checked)}catch(err){console.error(`${this.LOG_SOURCE} (_onChange) - ${err}`)}};_getOptionTSX=option=>{let retVal=null;try{let checked=!1;const elementAttributes={name:this._optionListName};switch(this.props.type){case HOOOptionListType.Checkbox:checked=this.props.value?.indexOf(option.key)>-1,retVal=(0,jsx_runtime.jsx)(src_HOOCheckbox,{checked,disabled:this.props.disabled||!1,label:option.text,onChange:e=>{this._onChange(e,option.key)},rootElementAttributes:elementAttributes});break;case HOOOptionListType.RadioButton:checked=this.props.value===option.key,retVal=(0,jsx_runtime.jsx)(src_HOORadioButton,{checked,disabled:this.props.disabled||!1,value:option.key,label:option.text,onChange:e=>{this._onChange(e,option.key)},rootElementAttributes:elementAttributes})}}catch(err){console.error(`${this.LOG_SOURCE} (_getOptionTSX) - ${err}`)}return retVal};render(){try{let className=`${this._componentClass} ${this._direction===HOOOptionListDirection.Horizontal?"is-horizontal":""}`;return className=this.props.rootElementAttributes?.className?`${className} ${this.props.rootElementAttributes?.className}`:className,(0,jsx_runtime.jsxs)("menu",{...this.state.rea,...this.props.rootElementAttributes,className,style:this.state.styleblock,children:[this._valid&&this.props.options&&this.props.options.map((option=>{const tabIndexProp=this.props.type===HOOOptionListType.RadioButton?{tabIndex:0}:{};return(0,jsx_runtime.jsx)("li",{...tabIndexProp,children:this._getOptionTSX(option)},option.key)})),!this._valid&&"The type of HOOOptionList does not match the type of value"]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOOptionList.displayName="HOOOptionList";try{HOOOptionList.displayName="HOOOptionList",HOOOptionList.__docgenInfo={description:"",displayName:"HOOOptionList",props:{type:{defaultValue:null,description:"Type of option list",name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},options:{defaultValue:null,description:"Type of option list",name:"options",required:!0,type:{name:"IHOOListOption[]"}},value:{defaultValue:null,description:"Option list value. Must be of type Array if type is Checkbox",name:"value",required:!0,type:{name:"string | number | string[] | number[]"}},onChange:{defaultValue:null,description:"Change event handler that receives the key and checked status of the option changed",name:"onChange",required:!0,type:{name:"(key: string | number, checked: boolean) => void"}},disabled:{defaultValue:null,description:"(Optional) Is option list disabled",name:"disabled",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"(Optional) Direction for child options; defaults to Vertical",name:"direction",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},colsDesk:{defaultValue:null,description:"(Optional) Number of columns for desktop experience; defaults to 1",name:"colsDesk",required:!1,type:{name:"number"}},colsMobile:{defaultValue:null,description:"(Optional) Number of columns for mobile experience; defaults to 1",name:"colsMobile",required:!1,type:{name:"number"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLMenuElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLMenuElement> & HTMLAttributes<HTMLMenuElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOOptionList/HOOOptionList.tsx#HOOOptionList"]={docgenInfo:HOOOptionList.__docgenInfo,name:"HOOOptionList",path:"src/HOOOptionList/HOOOptionList.tsx#HOOOptionList"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/HOOLabel/index.ts");const options=[{key:1,text:"Apple"},{key:2,text:"Banana"},{key:3,text:"Cherry"},{key:4,text:"Date"},{key:5,text:"Elderberry"},{key:6,text:"Fig"},{key:7,text:"Grape"},{key:8,text:"Honeydew"},{key:9,text:"Iced Melon"},{key:10,text:"Jackfruit"}],Template=args=>(0,jsx_runtime.jsx)(HOOOptionList,{...args});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.h_,{title:"Components/Inputs/HOOOptionList",component:HOOOptionList}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoooptionlist",children:"HOOOptionList"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"options"})," property requires an array of items of type ",(0,jsx_runtime.jsx)(_components.code,{children:"IHOOListOption"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Predefined enum defined for the supported Option list type and the option list direction:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:'export interface IHOOListOption {\r\n  key: number | string;\r\n  text: string;\r\n}\r\n\r\nexport enum HOOOptionListType {\r\n  "Checkbox",\r\n  "RadioButton",\r\n}\r\n\r\nexport enum HOOOptionListDirection {\r\n  "Vertical",\r\n  "Horizontal"\r\n}\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:HOOOptionList}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"checkbox-list",children:"Checkbox List"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Checkbox List",args:{type:HOOOptionListType.Checkbox,options,value:[1]},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"multi-column-checkbox-list",children:"Multi-column Checkbox List"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Multi-column Checkbox List",args:{type:HOOOptionListType.Checkbox,options,value:[1],colsDesk:2,colsMobile:1},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"radio-button-list",children:"Radio Button List"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Radio Button List",args:{type:HOOOptionListType.RadioButton,options,value:1},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Xz,{children:(0,jsx_runtime.jsx)(addon_docs_dist.oG,{name:"Extending",args:{type:HOOOptionListType.Checkbox,options,value:[1],rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}const checkboxList=Template.bind({});checkboxList.storyName="Checkbox List",checkboxList.args={type:HOOOptionListType.Checkbox,options,value:[1]},checkboxList.parameters={storySource:{source:"args => <HOOOptionList {...args} />"}};const multiColumnCheckboxList=Template.bind({});multiColumnCheckboxList.storyName="Multi-column Checkbox List",multiColumnCheckboxList.args={type:HOOOptionListType.Checkbox,options,value:[1],colsDesk:2,colsMobile:1},multiColumnCheckboxList.parameters={storySource:{source:"args => <HOOOptionList {...args} />"}};const radioButtonList=Template.bind({});radioButtonList.storyName="Radio Button List",radioButtonList.args={type:HOOOptionListType.RadioButton,options,value:1},radioButtonList.parameters={storySource:{source:"args => <HOOOptionList {...args} />"}};const extending=Template.bind({});extending.storyName="Extending",extending.args={type:HOOOptionListType.Checkbox,options,value:[1],rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:"args => <HOOOptionList {...args} />"}};const componentMeta={title:"Components/Inputs/HOOOptionList",component:HOOOptionList,tags:["stories-mdx"],includeStories:["checkboxList","multiColumnCheckboxList","radioButtonList","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOOptionList_stories=componentMeta,__namedExportsOrder=["options","Template","checkboxList","multiColumnCheckboxList","radioButtonList","extending"]},"./src/HOOCheckbox/HOOCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOCheckbox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_common_Common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/Common.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOCheckboxState{constructor(){}}class HOOCheckbox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOCheckbox";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-checkbox";_checkboxId="hoo-checkbox-";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOCheckbox",this._checkboxId+=(0,_common_Common__WEBPACK_IMPORTED_MODULE_2__.z)(10),this.state=new HOOCheckboxState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{...this._rootProps,id:this._checkboxId,...this.props.rootElementAttributes,type:"checkbox",checked:this.props.checked,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onChange:this.props.onChange,className}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:this._checkboxId,...this.props.labelElementAttributes,children:[this.props.label&&this.props.label,!this.props.label&&this.props.children]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOCheckbox.displayName="HOOCheckbox";try{HOOCheckbox.displayName="HOOCheckbox",HOOCheckbox.__docgenInfo={description:"",displayName:"HOOCheckbox",props:{checked:{defaultValue:null,description:"Checkbox checked.",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Change event handler",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"(Optional) Checkbox label. If omitted, children will be inserted.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"(Optional) Is checkbox disabled - default false.",name:"disabled",required:!1,type:{name:"boolean"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.\nClass names will be appended to the end of the default class string - hoo-checkbox {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.",name:"labelElementAttributes",required:!1,type:{name:"LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOCheckbox/HOOCheckbox.tsx#HOOCheckbox"]={docgenInfo:HOOCheckbox.__docgenInfo,name:"HOOCheckbox",path:"src/HOOCheckbox/HOOCheckbox.tsx#HOOCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/HOOLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOOLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOLabelState{constructor(){}}class HOOLabel extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOLabel";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-label";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOLabel",this.state=new HOOLabelState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const isRequired=this.props.required?"is-required":"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className} ${isRequired}`:`${this._componentClass} ${isRequired}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{...this._rootProps,...this.props.rootElementAttributes,htmlFor:this.props.for,className,children:this.props.label})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOLabel.displayName="HOOLabel";try{HOOLabel.displayName="HOOLabel",HOOLabel.__docgenInfo={description:"",displayName:"HOOLabel",props:{label:{defaultValue:null,description:"The label string",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"(Optional) Styles label to indicated the associated input is required",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"(Optional) Specifies the id of the form element the label should be bound to",name:"for",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLLabelElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-label {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOLabel/HOOLabel.tsx#HOOLabel"]={docgenInfo:HOOLabel.__docgenInfo,name:"HOOLabel",path:"src/HOOLabel/HOOLabel.tsx#HOOLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOLabel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/HOOLabel/HOOLabel.tsx").Z},"./src/HOORadioButton/HOORadioButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>HOORadioButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_common_Common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/Common.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOORadioButtonState{constructor(){}}class HOORadioButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOORadioButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-radio";_radioId="hoo-radio-";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOORadioButton",this._radioId+=(0,_common_Common__WEBPACK_IMPORTED_MODULE_2__.z)(10),this.state=new HOORadioButtonState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{...this._rootProps,id:this._radioId,...this.props.rootElementAttributes,type:"radio",checked:this.props.checked,value:this.props.value,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onChange:this.props.onChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{htmlFor:this._radioId,...this.props.labelElementAttributes,children:[this.props.label&&this.props.label,!this.props.label&&this.props.children]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOORadioButton.displayName="HOORadioButton";try{HOORadioButton.displayName="HOORadioButton",HOORadioButton.__docgenInfo={description:"",displayName:"HOORadioButton",props:{checked:{defaultValue:null,description:"Radio checked.",name:"checked",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"Radio value.",name:"value",required:!0,type:{name:"string | number"}},onChange:{defaultValue:null,description:"Change event handler",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"(Optional) RadioButton label. If omitted, children will be inserted.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"(Optional) Is checkbox disabled - default false.",name:"disabled",required:!1,type:{name:"boolean"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the input element of the component. Use to override id, name, and other attributes.\nClass names will be appended to the end of the default class string - hoo-radio {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>"}},labelElementAttributes:{defaultValue:null,description:"(Optional) HTMLInputElement attributes that will be applied to the label element of the component. Use to override for, class, and other attributes.",name:"labelElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOORadioButton/HOORadioButton.tsx#HOORadioButton"]={docgenInfo:HOORadioButton.__docgenInfo,name:"HOORadioButton",path:"src/HOORadioButton/HOORadioButton.tsx#HOORadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/common/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getRandomString(chars){try{const text=new Array(chars);for(let i=0;i<chars;i++)text[i]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return text.join("")}catch(err){console.error(`💦Common (getRandomString) - ${err}`)}}function isEqual(a,b){try{if(a===b)return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;let keys1=Object.keys(a),keys2=Object.keys(b);if(keys1.length!==keys2.length)return!1;for(let key of keys1)if(!keys2.includes(key)||!isEqual(a[key],b[key]))return!1;return!0}catch(err){console.error(`💦Common (isEqual) - ${err}`)}}__webpack_require__.d(__webpack_exports__,{X:()=>isEqual,z:()=>getRandomString})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);