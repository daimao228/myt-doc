"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8547],{7905:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var i=l(4848),r=l(8453);const d={},c=void 0,s={id:"zenus-q/\u8fd0\u884cjellyfin",title:"\u8fd0\u884cjellyfin",description:"\u8fd0\u884cjellyfin",source:"@site/docs/zenus-q/\u8fd0\u884cjellyfin.md",sourceDirName:"zenus-q",slug:"/zenus-q/\u8fd0\u884cjellyfin",permalink:"/myt-doc/docs/zenus-q/\u8fd0\u884cjellyfin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"zenus_q",previous:{title:"\u5b89\u88c5librga\u5e93",permalink:"/myt-doc/docs/zenus-q/\u5b89\u88c5librga\u5e93"}},a={},o=[{value:"\u8fd0\u884cjellyfin",id:"\u8fd0\u884cjellyfin",level:2},{value:"\u5728Linux\u4e3b\u673a\u4e0a\u914d\u7f6e",id:"\u5728linux\u4e3b\u673a\u4e0a\u914d\u7f6e",level:3},{value:"1 \u5b89\u88c5\u6240\u9700\u5b89\u88c5\u5305",id:"1-\u5b89\u88c5\u6240\u9700\u5b89\u88c5\u5305",level:3},{value:"2 \u786e\u4fdd<code>dma_heap</code>\u3001<code>dri</code>\u3001<code>mpp_service</code>\u548c<code>rga</code>\u5b58\u5728\u4e8e<code>/dev</code>\u4e2d",id:"2-\u786e\u4fdddma_heapdrimpp_service\u548crga\u5b58\u5728\u4e8edev\u4e2d",level:3},{value:"3 \u8bbe\u7f6eudev\u89c4\u5219\u6587\u4ef6",id:"3-\u8bbe\u7f6eudev\u89c4\u5219\u6587\u4ef6",level:3},{value:"4 \u6dfb\u52a0\u7528\u6237",id:"4-\u6dfb\u52a0\u7528\u6237",level:3},{value:"5 \u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ARM Mali OpenCL \u8fd0\u884c\u65f6 \uff08libmali\uff09\uff1a",id:"5-\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5-arm-mali-opencl-\u8fd0\u884c\u65f6-libmali",level:3},{value:"6 \u68c0\u67e5OpenCL\u8fd0\u884c\u65f6\u72b6\u6001",id:"6-\u68c0\u67e5opencl\u8fd0\u884c\u65f6\u72b6\u6001",level:3},{value:"7 \u8bbe\u7f6ejellyfin",id:"7-\u8bbe\u7f6ejellyfin",level:3},{value:"7.1\u767b\u5f55jellyfin\u5ba2\u6237\u7aef",id:"71\u767b\u5f55jellyfin\u5ba2\u6237\u7aef",level:4},{value:"7.2 \u8bbe\u7f6e",id:"72-\u8bbe\u7f6e",level:4},{value:"8 \u5728linux\u4e0a\u9a8c\u8bc1",id:"8-\u5728linux\u4e0a\u9a8c\u8bc1",level:3}];function t(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u8fd0\u884cjellyfin",children:"\u8fd0\u884cjellyfin"}),"\n",(0,i.jsx)(n.p,{children:"+++"}),"\n",(0,i.jsx)(n.h3,{id:"\u5728linux\u4e3b\u673a\u4e0a\u914d\u7f6e",children:"\u5728Linux\u4e3b\u673a\u4e0a\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["Jellyfin\u6240\u9700\u7684",(0,i.jsx)(n.code,{children:"jellyfin-ffmpeg"}),"deb\u5305\u9644\u5e26\u6240\u6709\u5fc5\u8981\u7684\u7528\u6237\u6a21\u5f0fRockchip MPP\u548cRGA\u9a71\u52a8\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u53ea\u9700\u5b89\u88c5 OpenCL \u8fd0\u884c\u65f6 \uff08libmali\uff09 \u5e76\u914d\u7f6e\u8bbe\u5907\u6743\u9650"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u5b89\u88c5\u6240\u9700\u5b89\u88c5\u5305",children:"1 \u5b89\u88c5\u6240\u9700\u5b89\u88c5\u5305"}),"\n",(0,i.jsxs)(n.p,{children:["\u65b0\u5efa",(0,i.jsx)(n.code,{children:"jellyfin"}),"\u6587\u4ef6\u5939"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir jrllyfin\r\ncd jrllyfin\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u8f7d\u6240\u9700\u7684",(0,i.jsx)(n.code,{children:"jellyfin-server"}),"\u3001",(0,i.jsx)(n.code,{children:"jellyfin-web"}),"\u548c",(0,i.jsx)(n.code,{children:"jellyfin-ffmpeg7"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://repo.jellyfin.org/files/server/ubuntu/latest-stable/arm64/jellyfin-server_10.10.0+ubu2204_arm64.deb\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://repo.jellyfin.org/files/server/ubuntu/latest-stable/arm64/jellyfin-web_10.10.0+ubu2204_all.deb\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://repo.jellyfin.org/files/ffmpeg/ubuntu/latest-7.x/arm64/jellyfin-ffmpeg7_7.0.2-5-jammy_arm64.deb\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u65e0\u6cd5\u4e0b\u8f7d\u8bf7\u81ea\u884c\u5728\u5b98\u7f51\u4e0b\u8f7d\u5e76\u4f20\u5230\u9b54\u4e91\u817e\u4e3b\u673a\u7aef"}),"\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dpkg -i jellyfin-ffmpeg7_7.0.2-5-jammy_arm64.deb\r\ndpkg -i jellyfin-server_10.10.0+ubu2204_arm64.deb\r\ndpkg -i jellyfin-web_10.10.0+ubu2204_all.deb\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"2-\u786e\u4fdddma_heapdrimpp_service\u548crga\u5b58\u5728\u4e8edev\u4e2d",children:["2 \u786e\u4fdd",(0,i.jsx)(n.code,{children:"dma_heap"}),"\u3001",(0,i.jsx)(n.code,{children:"dri"}),"\u3001",(0,i.jsx)(n.code,{children:"mpp_service"}),"\u548c",(0,i.jsx)(n.code,{children:"rga"}),"\u5b58\u5728\u4e8e",(0,i.jsx)(n.code,{children:"/dev"}),"\u4e2d"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ls -l /dev | grep -E "mpp|rga|dri|dma_heap"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ubuntu22.04.6.1.png",src:l(4099).A+"",width:"809",height:"126"})}),"\n",(0,i.jsx)(n.p,{children:"\u5426\u5219\u8bf7\u5c06BSP\u5185\u6838\u5347\u7ea7\u52305.10LTS\u53ca\u66f4\u9ad8\u7248\u672c"}),"\n",(0,i.jsx)(n.h3,{id:"3-\u8bbe\u7f6eudev\u89c4\u5219\u6587\u4ef6",children:"3 \u8bbe\u7f6eudev\u89c4\u5219\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u4ee5\u4e0b\u884c\u6dfb\u52a0\u5230",(0,i.jsx)(n.code,{children:"/etc/udev/rules.d/99-rk-device-permissions.rules"}),"\uff0c\u91cd\u65b0\u542f\u52a8\u4ee5\u4f7f\u5176\u751f\u6548"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'KERNEL=="mpp_service", MODE="0660", GROUP="video"\r\nKERNEL=="rga", MODE="0660", GROUP="video"\r\nKERNEL=="system", MODE="0666", GROUP="video"\r\nKERNEL=="system-dma32", MODE="0666", GROUP="video"\r\nKERNEL=="system-uncached", MODE="0666", GROUP="video"\r\nKERNEL=="system-uncached-dma32", MODE="0666", GROUP="video" RUN+="/usr/bin/chmod a+rw /dev/dma_heap"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u65e0\u6b64\u6587\u4ef6\uff0c\u8bf7\u81ea\u884c\u521b\u5efa"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u6dfb\u52a0\u7528\u6237",children:"4 \u6dfb\u52a0\u7528\u6237"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u7528\u6237",(0,i.jsx)(n.code,{children:"jellfin"}),"\u6dfb\u52a0\u5230",(0,i.jsx)(n.code,{children:"render"}),"\u548c",(0,i.jsx)(n.code,{children:"video"}),"\u7ec4\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8",(0,i.jsx)(n.code,{children:"jellyfin"}),"\u670d\u52a1"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo usermod -aG render jellyfin\r\nsudo usermod -aG video jellyfin\r\nsudo systemctl restart jellyfin\n"})}),"\n",(0,i.jsx)(n.h3,{id:"5-\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5-arm-mali-opencl-\u8fd0\u884c\u65f6-libmali",children:"5 \u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ARM Mali OpenCL \u8fd0\u884c\u65f6 \uff08libmali\uff09\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://github.com/tsukumijima/libmali-rockchip/releases/download/v1.9-1-2d267b0/libmali-valhall-g610-g13p0-gbm_1.9-1_arm64.deb\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u65e0\u6cd5\u4e0b\u8f7d\u8bf7\u81ea\u884c\u5728\u5b98\u7f51\u4e0b\u8f7d\u5e76\u4f20\u5230\u9b54\u4e91\u817e\u4e3b\u673a\u7aef"}),"\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dpkg -i libmali-valhall-g610-g13p0-gbm_1.9-1_arm64.deb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"6-\u68c0\u67e5opencl\u8fd0\u884c\u65f6\u72b6\u6001",children:"6 \u68c0\u67e5OpenCL\u8fd0\u884c\u65f6\u72b6\u6001"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'sudo /usr/lib/jellyfin-ffmpeg/ffmpeg -v debug -init_hw_device rkmpp=rk -init_hw_device opencl=ocl@rk\r\n\r\narm_release_ver: g13p0-01eac0, rk_so_ver: 10\r\n[AVHWDeviceContext @ 0xaaaae8321360] 1 OpenCL platforms found.\r\n[AVHWDeviceContext @ 0xaaaae8321360] 1 OpenCL devices found on platform "ARM Platform".\r\n[AVHWDeviceContext @ 0xaaaae8321360] 0.0: ARM Platform / Mali-G610 r0p0\r\n[AVHWDeviceContext @ 0xaaaae8321360] cl_arm_import_memory found as platform extension.\r\n[AVHWDeviceContext @ 0xaaaae8321360] cl_khr_image2d_from_buffer found as platform extension.\r\n[AVHWDeviceContext @ 0xaaaae8321360] DRM to OpenCL mapping on ARM function found (clImportMemoryARM).\r\n...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"7-\u8bbe\u7f6ejellyfin",children:"7 \u8bbe\u7f6ejellyfin"}),"\n",(0,i.jsx)(n.h4,{id:"71\u767b\u5f55jellyfin\u5ba2\u6237\u7aef",children:"7.1\u767b\u5f55jellyfin\u5ba2\u6237\u7aef"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u8f93\u5165",(0,i.jsx)(n.code,{children:"<\u9b54\u4e91\u817e\u4e3b\u673aip>+8096"}),"\u8fdb\u5165jellyfin\u4e3b\u673a\u7aef"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ubuntu22.04.6.2.png",src:l(8824).A+"",width:"1337",height:"968"})}),"\n",(0,i.jsx)(n.p,{children:"\u81ea\u884c\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55"}),"\n",(0,i.jsx)(n.h4,{id:"72-\u8bbe\u7f6e",children:"7.2 \u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8bbe\u7f6e\u4e2d\u542f\u7528RKMPP\u5e76\u53d6\u6d88\u9009\u4e2d\u4e0d\u652f\u6301\u7684\u7f16\u89e3\u7801\u5668"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ubuntu22.04.6.3.png",src:l(3041).A+"",width:"1313",height:"875"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bbe\u7f6e\u5b8c\u540e\u8bf7\u5728\u6700\u4e0b\u9762\u4fdd\u5b58"})})}),"\n",(0,i.jsx)(n.h3,{id:"8-\u5728linux\u4e0a\u9a8c\u8bc1",children:"8 \u5728linux\u4e0a\u9a8c\u8bc1"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u6ca1\u6709\u53ef\u9760\u7684\u65b9\u6cd5\u53ef\u4ee5\u8bfb\u53d6 Rockchip SoC \u4e0a VPU \u7684\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u60a8\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6\u5176\u4ed6\u5f15\u64ce\u6765\u9a8c\u8bc1\u8fd9\u4e00\u70b9\uff0c\u4f8b\u5982 RGA \uff082D hwaccel blitter\uff09\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728 Jellyfin Web \u5ba2\u6237\u7aef\u64ad\u653e\u89c6\u9891\uff0c\u901a\u8fc7\u8bbe\u7f6e\u8f83\u4f4e\u7684\u5206\u8fa8\u7387\u6216\u6bd4\u7279\u7387\u89e6\u53d1\u89c6\u9891\u8f6c\u7801\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"sudo watch -n 1 cat /sys/kernel/debug/rkrga/load"}),"\u547d\u4ee4\u68c0\u67e5 RGA \u5f15\u64ce\u7684\u5360\u7528\u60c5\u51b5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Every 1.0s: cat /sys/kernel/debug/rkrga/load\r\nnum of scheduler = 3\r\n================= load ==================\r\nscheduler[0]: rga3_core0\r\n         load = 42%\r\n-----------------------------------\r\nscheduler[1]: rga3_core1\r\n         load = 27%\r\n-----------------------------------\r\nscheduler[2]: rga2\r\n         load = 0%\r\n-----------------------------------\r\n         process 17: pid = 217002, name: /usr/lib/jellyfin-ffmpeg/ffmpeg ... -init_hw_device rkmpp=rk -hwaccel rkmpp -hwaccel_output_format drm_prime ...\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u6d4b\u8bd5\u6b64\u9879\u76ee\u65f6\u4f1a\u4e0b\u8f7dmali\u7684\u5176\u4ed6\u7248\u672c\uff0c\u82e5\u5728\u6b64\u9879\u76ee\u540e\u91cd\u65b0\u8fd0\u884crkllm\u5927\u6a21\u578b\u5219\u4f1a\u5bfc\u81f4\u51fa\u73b0firmware\u56fa\u4ef6\u9519\u8bef\uff0c\u89e3\u51b3\u65b9\u6cd5\u4e3a\u5378\u8f7d\u6b64\u9879\u76ee\u6240\u5b89\u88c5\u7684",(0,i.jsx)(n.code,{children:"libmali-valhall-g610-g13p0-gbm_1.9-1_arm64.deb"}),"\u8f6f\u4ef6\u5e76\u5c06",(0,i.jsx)(n.code,{children:"/lib/firmware"}),"\u4e0b",(0,i.jsx)(n.code,{children:"g610"}),"\u6587\u4ef6\u5939\u4e0b\u56fa\u4ef6\u6587\u4ef6cp\u5230",(0,i.jsx)(n.code,{children:"/lib/firmware"}),"\u4e0b\u540e\u91cd\u65b0\u8fd0\u884c"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},4099:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/ubuntu22.04.6.1-37664eca0084ab93fffd327fceda37fa.png"},8824:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/ubuntu22.04.6.2-0c92402a9fb3c2eb676b1a96f54020fc.png"},3041:(e,n,l)=>{l.d(n,{A:()=>i});const i=l.p+"assets/images/ubuntu22.04.6.3-8fbdec7a475c4da4298007c22bab9792.png"},8453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>s});var i=l(6540);const r={},d=i.createContext(r);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);