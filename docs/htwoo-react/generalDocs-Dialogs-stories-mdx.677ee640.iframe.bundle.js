/*! For license information please see generalDocs-Dialogs-stories-mdx.677ee640.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[7660],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/generalDocs/Dialogs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",pre:"pre",code:"code"},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Advanced/Using Dialogs in SPFx"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"using-dialogs-in-spfx",children:"Using Dialogs in SPFx"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"As of HTWOO version 2.1.x all dialogs are not rendered using the HTML Dialog element and therefore this guidance is not needed. Dialogs can be rendered inline and will overlay the page properly."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Because of how SharePoint applies styles to it's UI, we cannot consistently, and in some cases at all, support CSS that will allow dialogs added inline to the DOM where an extension or webpart is being rendered to properly overlay the SharePoint page. The safest work around for this issue, although a subtil use of DOM manipulation, is to add a DIV element to the bottom of the BODY of the page to then render and apply styling that will overlay the page successfully.  The following is a bit of sample code that provides a generic way to implement that DIV element and what's required to have it use the styling properly."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The method can be called from some type of user interaction (like a button) where you would pass a local variable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:'import {spfxThemes} from "@n8d/htwoo-react/SPFxThemes";\r\nimport MyDialogContentComponent from "./MyDialogContentComponent";\r\n\r\nexport default class MyComponent extends React.PureComponent<IMyComponentProps, IMyComponentState> {\r\n  private _myDialogElement: HTMLDivElement = null;\r\n  private _myDialogId = "MyDialogCont";\r\n\r\n  private _myButtonOnClick = (event) => {\r\n    //The properties for your component, you should includes a method property to handle the closeDialog event.\r\n    const props: IMyDialogContentComponent = {ADD YOUR PROPS HERE};\r\n    //Call the generic _openDialog method passing in the dialog component you want to load into the page.\r\n    this._openDialog(this._myDialogElement, this._myDialogId, MyDialogContentComponent, props);\r\n  }\r\n\r\n  //Generic method that allows you to add any dialog component to the page\r\n  private _openDialog = (element: HTMLDivElement, id: string, dialogElement: any, dialogProps: any): void => {\r\n    try {\r\n      if (element == undefined) {\r\n        //create approval container div\r\n        element = document.createElement("DIV") as HTMLDivElement;\r\n        element.setAttribute("id", id);\r\n        //Make sure you add `root-40` to support the font, and the root class (namespacing class) so that the htwoo styles are available to your dialog\r\n        element.className = `root-40 ${styles.myComponent}`;\r\n        //Give the div a high z-index so when it\'s shown we make sure it overlays the whole page.\r\n        element.style["z-index"] = 1000;\r\n        element.style.position = "relative";\r\n        element.style.display = "block";\r\n\r\n        //Add themes to this element since it\'s not "inline" with the root DOM element of the SPFx solution\r\n        //In this instance we\'re using the global spfxThemes constant that was defined in SPFxThemes class\r\n        //The last boolean `true` indicates that the theme applied should use the page theme, this allows\r\n        //proper styling of the dialog when the source theme is in an inverted section. If the solution doesn\'t\r\n        //support inverted themes then you can ignore that property.\r\n        //For more information on other ways to utilize the SPFxThemes class please see the `Adavanced/SPFxThemes Class` docs.\r\n        spfxThemes.initThemeHandler(element, undefined, undefined, true);\r\n\r\n        //bind to top placeholder\r\n        document.body.appendChild(element);\r\n      }\r\n      //Add keyup event listener to handle closing the dialog when the user presses the Escape key.\r\n      document.addEventListener("keyup", (ev) => { if (ev.key === "Escape") { this._closeDialog(element) } });\r\n      \r\n      //Assign the closeDialog property of the properties to the generic _closeDialog handler\r\n      dialogProps.closeDialog = () => {\r\n        this._closeDialog(element);\r\n        //Remove keyup event listener to handle closing the dialog when the user presses the Escape key.\r\n        document.removeEventListener("keyup", (ev) => { if (ev.key === "Escape") { this._closeDialog(element) } });\r\n      }\r\n\r\n      const dialogCont: React.ReactElement<{}> = React.createElement(dialogElement, dialogProps);\r\n      ReactDOM.render(dialogCont, element);\r\n    } catch (err) {\r\n      console.error(`${this.LOG_SOURCE} (_openDialog) - ${err}`);\r\n    }\r\n  }\r\n\r\n  //Generic method that allows you to close any dialog component to the page\r\n  private _closeDialog = (element: HTMLDivElement) => {\r\n    if (element !== undefined) {\r\n      ReactDOM.unmountComponentAtNode(element);\r\n    }\r\n  }\r\n}\n'})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Advanced/Using Dialogs in SPFx",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);