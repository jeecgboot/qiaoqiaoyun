import{Z as y,h,as as A,bJ as H,_ as L,l as F}from"./index-831af9dd.js";import{d as b,e as v,u as f,V as t,a6 as n,af as i,a8 as u,ai as m,k as e,W as S,O as I}from"./vue-vendor-24c7dc61.js";import{ac as $}from"./antd-vue-vendor-0d72f01e.js";import k from"./index-306fe414.js";import B from"./LayoutSider-a82baef0.js";import{L as M}from"./index-70f3c7fe.js";import{u as V}from"./useHeaderSetting-7889be2c.js";import"./vxe-table-vendor-8813019a.js";import"./index-e041eae3.js";import"./index-158ad271.js";import"./SimpleMenu-fbc2f100.js";import"./useOpenKeys-0758de45.js";import"./SubMenuItem-cfcb4516.js";import"./SimpleSubMenu-ff390f8a.js";import"./index-5f7e4a11.js";import"./lowAppStore-499fb8f9.js";import"./index-a964241b.js";import"./low.app.api-97fc250a.js";import"./AppLogo-063b26cf.js";import"./LowAppIcon-e49e90b9.js";import"./index-7a1d97e6.js";import"./index-07670f1d.js";import"./LoginSelect-d08d3d93.js";import"./index-1c3affea.js";import"./BasicModal-58413bab.js";import"./useWindowSizeFn-8f085f6f.js";import"./DragBar-74fbe5b4.js";import"./SimpleMenuTag-e41510fe.js";const E=b({name:"LowAppLayout",components:{LayoutFeatures:y(()=>L(()=>import("./index-96890e76.js"),["js/index-96890e76.js","js/index-831af9dd.js","js/vue-vendor-24c7dc61.js","js/antd-vue-vendor-0d72f01e.js","js/vxe-table-vendor-8813019a.js","assets/index-3d0fbd8d.css","js/useHeaderSetting-7889be2c.js","assets/index-a6b97254.css"])),LayoutFooter:y(()=>L(()=>import("./index-f05b83a0.js"),["js/index-f05b83a0.js","js/vue-vendor-24c7dc61.js","js/antd-vue-vendor-0d72f01e.js","js/siteSetting-107c927d.js","js/index-831af9dd.js","js/vxe-table-vendor-8813019a.js","assets/index-3d0fbd8d.css","js/useContentViewHeight-96ef8825.js","js/useWindowSizeFn-8f085f6f.js","assets/index-9500089d.css"])),LayoutHeader:M,LayoutSideBar:B,Layout:$,LowAppHeader:k},setup(){const{prefixCls:o}=h("low-app-layout"),{getIsMobile:l}=A(),{getShowFullHeaderRef:c}=V(),{getShowSidebar:_,getIsMixSidebar:r,getShowMenu:d}=H(),s=v(()=>{let a=["ant-layout"];return(f(r)||f(d))&&a.push("ant-layout-has-sider"),a});return{getShowFullHeaderRef:c,getShowSidebar:_,prefixCls:o,getIsMobile:l,getIsMixSidebar:r,layoutClass:s}}});function R(o,l,c,_,r,d){const s=t("LayoutFeatures"),a=t("LayoutHeader"),w=t("LayoutSideBar"),g=t("LowAppHeader"),C=t("LayoutFooter"),p=t("Layout");return n(),i(p,{class:u(o.prefixCls)},{default:m(()=>[e(s),o.getShowFullHeaderRef?(n(),i(a,{key:0,fixed:""})):S("",!0),e(p,{class:u([o.layoutClass])},{default:m(()=>[o.getShowSidebar||o.getIsMobile?(n(),i(w,{key:0})):S("",!0),e(p,{class:u(`${o.prefixCls}-main`)},{default:m(()=>[e(g),I(o.$slots,"default"),e(C)]),_:3},8,["class"])]),_:3},8,["class"])]),_:3},8,["class"])}const mo=F(E,[["render",R]]);export{mo as default};
