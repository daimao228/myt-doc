"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3080],{8222:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var d=r(4848),s=r(8453);const c={},i=void 0,l={id:"MYTOS/\u8fd0\u884crkllm\u5927\u6a21\u578b",title:"\u8fd0\u884crkllm\u5927\u6a21\u578b",description:"\u8fd0\u884crkllm\u5927\u6a21\u578b",source:"@site/docs/MYTOS/\u8fd0\u884crkllm\u5927\u6a21\u578b.md",sourceDirName:"MYTOS",slug:"/MYTOS/\u8fd0\u884crkllm\u5927\u6a21\u578b",permalink:"/myt-doc/docs/MYTOS/\u8fd0\u884crkllm\u5927\u6a21\u578b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"MYTOS\u5f00\u53d1\u6559\u7a0b",previous:{title:"\u6309\u9700\u5236\u5b9a\u6587\u4ef6\u7cfb\u7edf",permalink:"/myt-doc/docs/MYTOS/\u6309\u9700\u5236\u5b9a\u6587\u4ef6\u7cfb\u7edf"},next:{title:"\u8fd0\u884crknn demo",permalink:"/myt-doc/docs/MYTOS/\u8fd0\u884crknn demo"}},t={},o=[{value:"\u8fd0\u884crkllm\u5927\u6a21\u578b",id:"\u8fd0\u884crkllm\u5927\u6a21\u578b",level:2},{value:"1 \u4f7f\u7528SSH\u94fe\u63a5\u8fdb\u9b54\u4e91\u817e\u4e3b\u673a",id:"1-\u4f7f\u7528ssh\u94fe\u63a5\u8fdb\u9b54\u4e91\u817e\u4e3b\u673a",level:3},{value:"2 \u5b89\u88c5docker",id:"2-\u5b89\u88c5docker",level:3},{value:"3 \u5207\u6362\u5230su\u6743\u9650\u4e0b",id:"3-\u5207\u6362\u5230su\u6743\u9650\u4e0b",level:3},{value:"4 \u62c9\u53d6docker\u955c\u50cf\u8fd0\u884crkllm\u5927\u6a21\u578b",id:"4-\u62c9\u53d6docker\u955c\u50cf\u8fd0\u884crkllm\u5927\u6a21\u578b",level:3},{value:"5 \u6253\u5f00\u4e3b\u673aIP+\uff1a8080\u7aef\u53e3\uff0c\u8bbf\u95eedemo\u63a7\u5236\u53f0",id:"5-\u6253\u5f00\u4e3b\u673aip8080\u7aef\u53e3\u8bbf\u95eedemo\u63a7\u5236\u53f0",level:3}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u8fd0\u884crkllm\u5927\u6a21\u578b",children:"\u8fd0\u884crkllm\u5927\u6a21\u578b"}),"\n",(0,d.jsx)(n.p,{children:"+++"}),"\n",(0,d.jsx)(n.h3,{id:"1-\u4f7f\u7528ssh\u94fe\u63a5\u8fdb\u9b54\u4e91\u817e\u4e3b\u673a",children:"1 \u4f7f\u7528SSH\u94fe\u63a5\u8fdb\u9b54\u4e91\u817e\u4e3b\u673a"}),"\n",(0,d.jsx)(n.p,{children:"\u63a5\u5165usb\u63a5\u53e3\uff0c\u4f7f\u7528\u4e32\u53e3\u67e5\u770b\u4e3b\u673a\u5185\u5bb9\uff0c\u4f7f\u7528\u521a\u624d\u8bbe\u7f6e\u7684\u7528\u6237\u540d\uff0c\u4ee5\u53ca\u5bc6\u7801\u767b\u5f55ubuntu\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u9b54\u4e91\u817e\u4e3b\u673aip"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"ifconfig\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"ubuntu22.04\u4e8c.1.png",src:r(4837).A+"",width:"901",height:"221"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:" ssh <username>@<ip>                                    #username\u4e3a\u7528\u6237\u540d\uff0cip\u4e3a\u521a\u624d\u67e5\u770b\u7684ip\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u5165\u5bc6\u7801\u540e\u53ef\u76f4\u63a5\u94fe\u63a5\u8fdb\u5165"}),"\n",(0,d.jsx)(n.h3,{id:"2-\u5b89\u88c5docker",children:"2 \u5b89\u88c5docker"}),"\n",(0,d.jsx)(n.p,{children:"\u68c0\u67e5\u5378\u8f7d\u8001\u7248\u672cDocker"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo apt-get remove docker docker-engine docker.io containerd runc\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u66f4\u65b0\u8f6f\u4ef6\u5305"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo apt-get update\r\nsudo apt-get upgrade -y\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5docker\u4f9d\u8d56"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo apt-get install ca-certificates curl gnupg lsb-release -y\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6dfb\u52a0docker\u5bc6\u94a5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6dfb\u52a0\u963f\u91cc\u4e91docker\u8f6f\u4ef6\u6e90"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'sudo apt install software-properties-common -y\r\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\r\nsudo apt update\r\nsudo apt-get update\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5docker"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"apt-get install docker-ce docker-ce-cli containerd.i -y\n"})}),"\n",(0,d.jsx)(n.p,{children:"ubuntu 22.04\u9ed8\u8ba4\u4f7f\u7528nftables\u4f5c\u4e3a\u9632\u706b\u5899\uff0c\u800c\u975eiptables\u3002\u6b64\u5904\u9700\u8981\u5c06nfttables\u6539\u4e3aiptables"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo update-alternatives --set iptables /usr/sbin/iptables-legacy\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u6e05\u534e\u5927\u5b66\u7684docker\u955c\u50cf\u6e90"}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00 Docker \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"/etc/docker/daemon.json"}),"\uff08\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u9700\u8981\u521b\u5efa\uff09\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\r\n  "registry-mirrors": ["https://docker.mirrors.tuna.tsinghua.edu.cn"]\r\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"3-\u5207\u6362\u5230su\u6743\u9650\u4e0b",children:"3 \u5207\u6362\u5230su\u6743\u9650\u4e0b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"su\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u5165\u5bc6\u7801\uff0c\u5207\u6362\u5230su\u6743\u9650\u4e0b\uff08ubuntu\u7cfb\u7edf\u4e0b\u8f93\u5165\u5bc6\u7801\u65f6\u5e76\u65e0\u4efb\u4f55\u63d0\u793a\uff0c\u8f93\u5165\u5bc6\u7801\u540e\u76f4\u63a5\u56de\u8f66\u5373\u53ef\uff09"}),"\n",(0,d.jsx)(n.h3,{id:"4-\u62c9\u53d6docker\u955c\u50cf\u8fd0\u884crkllm\u5927\u6a21\u578b",children:"4 \u62c9\u53d6docker\u955c\u50cf\u8fd0\u884crkllm\u5927\u6a21\u578b"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"docker run -itd --pull=always -v /dev/mali0:/dev/mali0 \\\r\n--device /dev/dri -p 8080:8080 --cap-add=CAP_SYS_ADMIN \\\r\n--device /dev/mali0 --name rkllm \\\r\nregistry.cn-hangzhou.aliyuncs.com/mytrkllm/mytllm:v2-20240614 \\\r\n/root/run.sh\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["\u8bf7\u786e\u4fdd",(0,d.jsx)(n.code,{children:"g610"}),"\u7248\u672c\u517c\u5bb9\uff0c\u4e14\u786e\u4fdd",(0,d.jsx)(n.code,{children:"/usr/lib/firmware"}),"\u76ee\u5f55\u4e0b\u6709",(0,d.jsx)(n.code,{children:"mali_csffw.bin"}),"\u56fa\u4ef6\uff0c\u5426\u5219\u8fd0\u884c\u65f6\u4f1a\u51fa\u73b0\u56fa\u4ef6\u62a5\u9519"]})}),"\n",(0,d.jsx)(n.h3,{id:"5-\u6253\u5f00\u4e3b\u673aip8080\u7aef\u53e3\u8bbf\u95eedemo\u63a7\u5236\u53f0",children:"5 \u6253\u5f00\u4e3b\u673aIP+\uff1a8080\u7aef\u53e3\uff0c\u8bbf\u95eedemo\u63a7\u5236\u53f0"}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"ubuntu22.04\u4e8c.2.png",src:r(7006).A+"",width:"1313",height:"875"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},4837:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/ubuntu22.04\u4e8c.1-28cf3d6d1a9ee3d3270b513d6ff8bb18.png"},7006:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/ubuntu22.04\u4e8c.2-1a15867f97943adcf46805b482757d5c.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var d=r(6540);const s={},c=d.createContext(s);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);