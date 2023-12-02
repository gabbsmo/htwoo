/*! For license information please see generalDocs-SPFxThemes-stories-mdx.6f3b1fe6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[6939],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/generalDocs/SPFxThemes.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Advanced/SPFxThemes Class"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"using-the-spfxthemes-class",children:"Using the SPFxThemes Class"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The SPFxThemes class provides handling for setting up the CSS Variables that the htwoo-* library depends on to render the controls with the appropriate styling for the theme of the surface they are being rendered (i.e SharePoint page sections, inverted sections, Microsoft Teams, classic SharePoint page, or outside of Microsoft surface)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"initialize",children:"Initialize"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The class can be instatiated by creating a new instance in the root ts file of your project and then initializing it in the SPFx onInit method. This method is a good choice where you want to initialize the theme for the solution but do not need access to any of the theme properties elesewhere in your solution."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:"import { ThemeProvider } from '@microsoft/sp-component-base';\r\nimport { SPFxThemes, ISPFxThemes } from '@n8d/htwoo-react/SPFxThemes';\r\n\r\nprivate _spfxThemes: ISPFxThemes = new SPFxThemes();\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Consume the new ThemeProvider service\r\n  const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);\r\n  this._spfxThemes.initThemeHandler(this.domElement, themeProvider);\r\n\r\n  // If no ThemeProvider service, use undefined which will use page context\r\n  this._spfxThemes.initThemeHandler(document.body, undefined, undefined, undefined, true);\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"If you are outside the Microsoft ecosystem and building your own solution you can also utilize one of the themes built into HTWOO-Core or build your own theme."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"To import the theme as a json file you will need to enable typescript to import json files by adding the following to your tsconfig.json file in the compilerOptions section:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-json",children:'"compilerOptions": {\r\n    "resolveJsonModule": true,\r\n    "esModuleInterop": true\r\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Then you can import the theme in the imports statement, and pass it to the public function ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"setCSSVariables"})," in the SPFxThemes class. Or as outlined you can build your own theme using the available typings."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:"import { spfxThemes } from '@n8d/htwoo-react/SPFxThemes';\r\n// Note there are multiple theme files defined in the HTWOO-Core project\r\nimport blueTheme from '@n8d/htwoo-core/lib/sass/themes/blue.theme.json';\r\n\r\nfunction useProvidedTheme(): void {\r\n  // Whatever element you want to attach to\r\n  const element = docuement.getElementById(\"MyElement\");\r\n  // Bypass initThemeHandler and set domElement and pass json theme object directly to the setCSSVariables method.\r\n  spfxThemes.domElement = element;\r\n  spfxThemes.setCSSVariables(blueTheme);\r\n}\r\n\r\nfunction useCustomTheme(): void {\r\n  // Create a custom theme using the provided typings\r\n  const customTheme: IHOOTheme = {...theme values...};\r\n  // Bypass initThemeHandler and set domElement and pass custom json theme object directly to the setCSSVariables method.\r\n  spfxThemes.domElement = element;\r\n  spfxThemes.setCSSVariables(customTheme);\r\n}\r\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"available-constants",children:"Available Constants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"In addition, the SPFxThemes class exports two constants that can be utilized based on your needs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"spfxthemes",children:"spfxThemes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["The first is an exported constant ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"spfxThemes"})," that can be utilized anywhere in your solution by simply importing the constant into your file and making sure you've initialized it in the SPFx onInit method. This is not the correct choice for a web part implementation because web parts can end up in page sections with an inverted background color, if you use a globally defined theme provider then whichever web part loads first with initialize the theme provider and all the instances of the web part on the page will utilize that one theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:"import { ThemeProvider } from '@microsoft/sp-component-base';\r\nimport { spfxThemes } from '@n8d/htwoo-react/SPFxThemes';\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Consume the new ThemeProvider service  \r\n  const microsoftTeams = this.context.sdks?.microsoftTeams;\r\n  const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);\r\n  spfxThemes.initThemeHandler(this.domElement, themeProvider, microsoftTeams);\r\n\r\n  // If no ThemeProvider service, do not include property which will use page context\r\n  spfxThemes.initThemeHandler(document.body, undefined, undefined, undefined, true);\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"spfxthemescontext---react-context-themeprovider",children:"SPFxThemesContext - React Context ThemeProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["The second is an exported React Context Provider called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"SPFxThemesContext"})," which can be used to add a Context provider to your React application. One way to use this in SPFx is to render the root element inside the Provider. This is a good choice for web parts that could end up in multiple locations on the same page. Each instance of the web part would initialize their own theme provider yet to get at theme information you don't have to pass the object down the React property chain."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:"import { ThemeProvider } from '@microsoft/sp-component-base';\r\nimport { SPFxThemes, ISPFxThemes, SPFxThemesContext } from '@n8d/htwoo-react/SPFxThemes';\r\n\r\nprivate _spfxThemes: ISPFxThemes = new SPFxThemes();\r\n\r\npublic async onInit(): Promise<void> {\r\n  // Consume the new ThemeProvider service\r\n  const microsoftTeams = this.context.sdks?.microsoftTeams;\r\n  const themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);\r\n  this._spfxThemes.initThemeHandler(this.domElement, themeProvider, microsoftTeams);\r\n}\r\n\r\npublic render(): void {\r\n  let element = null;\r\n  try {\r\n    const props: IMyComponentProps = { };\r\n    element = React.createElement(\r\n      MyComponent, props\r\n    );\r\n      \r\n    //Pass in the private _spfxThemes variable as the value to the provider\r\n    const provider = React.createElement(SPFxThemesContext.Provider, { value: this._spfxThemes }, element);\r\n    ReactDom.render(provider, this.domElement);\r\n  } catch (err) {\r\n    console.error(`${this.LOG_SOURCE} (render) ${err}`);\r\n  }\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"To consume the provider in a React Component you would do the following"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-typescript",children:"import { SPFxThemesContext, SPFxThemes } from '@n8d/htwoo-react/SPFxThemes';\r\n\r\nexport default class MyComponent extends React.PureComponent<IMyComponentProps, IMyComponentState> {\r\n  static contextType = SPFxThemesContext;\r\n  private _spfxThemes: SPFxThemes;\r\n\r\n  constructor(props: IMyComponentProps) {\r\n    super(props);\r\n    this.state = {};\r\n  }\r\n\r\n  //After the component mounts the instance of the initialized _spfxThemes class is available to the component.\r\n  public componentDidMount(): void {\r\n    this._spfxThemes = this.context;\r\n  }\r\n\r\n  ....\r\n\r\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"domelement-htmlelement",children:"domElement: HTMLElement"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Provides a getter/setter for the domElement the theme is applied to."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"isinverted-boolean-readonly",children:"isInverted: boolean (ReadOnly)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Provides a boolean that can be checked to tell if the SPFx solution is rendered in an inverted page section."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"inteams-boolean-readonly",children:"inTeams: boolean (ReadOnly)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Provides a boolean that can be used to check if the solution is running in teams."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"currenttheme-any-readonly",children:"currentTheme: any (ReadOnly)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Provides a method to retrieve the currewnt JSON theme applied to the domElement. Overridden when calling ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"setCSSVariables"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"initThemeHandler"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"methods",children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"initthemehandler-domelement-htmlelement-themeprovider-any-microsoftteams-any-usepagetheme-boolean--void",children:"initThemeHandler: (domElement: HTMLElement, themeProvider?: any, microsoftTeams?: any, usePageTheme?: boolean) => void;"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Property | Type | Optional (Default) | Description\r\n---|---|---|---\r\ndomElement | HTMLElement | | The element to inject the CSS Variables onto, this scopes those variables to any siblings or children of that root element.\r\nthemeProvider | any (Typed as ThemeProvider from '@microsoft/sp-component-base' in SPFx) | Optional | An instance of the ThemeProvider from SPFx\r\nmicrosoftTeams | any (Typed as IMicrosoftTeams from '@microsoft/sp-webpart-base' in SPFx) | Optional | The Microsoft Teams context to apply theme for Teams\r\ntheme | any | Optional | A custom json theme object to be applied to the domElement.\r\nusePageTheme | boolean | Optional (False) | Used to override theme provider and apply theme to domElement based on the page theme"})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Advanced/SPFxThemes Class",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_codeH2O_htwoo_htwoo_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);