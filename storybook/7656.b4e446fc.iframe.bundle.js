"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7656],{"../plugins/home/src/homePageComponents/FeaturedDocsCard/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Content:()=>Content});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useAsync=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("../node_modules/react-use/lib/useAsync.js")),Progress=__webpack_require__("../packages/core-components/src/components/Progress/Progress.tsx"),ErrorPanel=__webpack_require__("../packages/core-components/src/components/ErrorPanel/ErrorPanel.tsx"),Link=__webpack_require__("../packages/core-components/src/components/Link/Link.tsx"),EmptyState=__webpack_require__("../packages/core-components/src/components/EmptyState/EmptyState.tsx"),LinkButton=__webpack_require__("../packages/core-components/src/components/LinkButton/LinkButton.tsx"),api=__webpack_require__("../plugins/catalog-react/src/api.ts"),useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js");const useStyles=(0,makeStyles.Z)((theme=>({docDescription:{fontSize:theme.typography.body1.fontSize,fontWeight:theme.typography.body1.fontWeight,marginBottom:theme.spacing(2),marginTop:theme.spacing(2)},docSubLink:{fontSize:theme.typography.subtitle1.fontSize,fontWeight:theme.typography.subtitle1.fontWeight,lineHeight:theme.typography.subtitle1.lineHeight},docsTitleLink:{fontSize:theme.typography.h6.fontSize,fontWeight:theme.typography.h6.fontWeight,lineHeight:theme.typography.h6.lineHeight}})),{name:"HomeFeaturedDocsCard"}),Content=props=>{const{emptyState,filter,linkDestination,responseLimit,subLinkText}=props,linkText=subLinkText||"LEARN MORE",styles=useStyles(),catalogApi=(0,useApi.h_)(api.A),{value:entities,loading,error}=(0,useAsync.Z)((async()=>(await catalogApi.getEntities({filter,limit:responseLimit||10})).items));return loading?(0,jsx_runtime.jsx)(Progress.E,{}):error?(0,jsx_runtime.jsx)(ErrorPanel.y,{error}):(null==entities?void 0:entities.length)?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:entities.map((d=>(0,jsx_runtime.jsxs)("div",{"data-testid":"docs-card-content",children:[(0,jsx_runtime.jsx)(Link.rU,{className:styles.docsTitleLink,"data-testid":"docs-card-title",to:linkDestination||`/docs/${d.metadata.namespace||"default"}/${d.kind}/${d.metadata.name}/`,children:d.metadata.title}),d.metadata.description&&(0,jsx_runtime.jsx)(Typography.Z,{className:styles.docDescription,children:d.metadata.description}),(0,jsx_runtime.jsx)(Link.rU,{className:styles.docSubLink,"data-testid":"docs-card-sub-link",to:linkDestination||`/docs/${d.metadata.namespace||"default"}/${d.kind}/${d.metadata.name}/`,children:linkText})]},`${d.metadata.name}-${d.kind}-${d.metadata.namespace}`)))}):emptyState||(0,jsx_runtime.jsx)(EmptyState.u,{missing:"data",title:"No documents to show",description:"Create your own document. Check out our Getting Started Information",action:(0,jsx_runtime.jsx)(LinkButton.Q,{to:"https://backstage.io/docs/features/techdocs/getting-started",variant:"contained",children:"DOCS"})})};try{Content.displayName="Content",Content.__docgenInfo={description:"A component to display specific Featured Docs.",displayName:"Content",props:{filter:{defaultValue:null,description:"The entity filter used to display only the intended item/s",name:"filter",required:!0,type:{name:"EntityFilterQuery"}},emptyState:{defaultValue:null,description:"An optional ReactNode for empty states",name:"emptyState",required:!1,type:{name:"React.JSX.Element"}},linkDestination:{defaultValue:null,description:"An optional linkDestination to set for the Featured Doc",name:"linkDestination",required:!1,type:{name:"string"}},responseLimit:{defaultValue:null,description:"An optional limit to set for link destination",name:"responseLimit",required:!1,type:{name:"number"}},subLinkText:{defaultValue:null,description:"An optional string to customize sublink text",name:"subLinkText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/FeaturedDocsCard/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"../plugins/home/src/homePageComponents/FeaturedDocsCard/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}}}]);