"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8798],{7180:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>V,contentTitle:()=>L,default:()=>T,frontMatter:()=>q,metadata:()=>D,toc:()=>E});var s=r(4848),t=r(8453),i=r(6540),l=r(4164),c=r(3104),o=r(6347),d=r(205),a=r(7485),u=r(1682),h=r(9466);function x(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return x(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=p(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,a]=m({queryString:r,groupId:s}),[u,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,h.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),f=(()=>{const e=o??u;return j({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),a(e),x(e)}),[a,x,t]),tabValues:t}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,c.a_)(),u=e=>{const n=e.currentTarget,r=d.indexOf(n),s=o[r].value;s!==t&&(a(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...i,className:(0,l.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,s.jsx)(y,{...e,...n}),(0,s.jsx)(g,{...e,...n})]})}function w(e){const n=(0,b.A)();return(0,s.jsx)(k,{...e,children:x(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function A(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(I.tabItem,t),hidden:r,children:n})}const q={slug:"/zeus-q/ubuntushiyong"},L="Ubuntu\u4f7f\u7528",D={id:"zeus-q/ubuntu\u4f7f\u7528",title:"Ubuntu\u4f7f\u7528",description:"\u8be5\u6587\u4ef6\u7cfb\u7edf\u57fa\u4e8eubuntu22.04\u7248\u672c\u6784\u5efa\uff0c\u4f7f\u7528\u65b9\u6cd5\u4e0eubuntu22.04\u76f8\u540c",source:"@site/docs/zeus-q/ubuntu\u4f7f\u7528.md",sourceDirName:"zeus-q",slug:"/zeus-q/ubuntushiyong",permalink:"/myt-doc/docs/zeus-q/ubuntushiyong",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/zeus-q/ubuntushiyong"},sidebar:"zeus",previous:{title:"Zeus Q1 \u4e3b\u673a\u56fa\u4ef6",permalink:"/myt-doc/docs/zeus-q/Q1zhujijieshao"},next:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/myt-doc/docs/zeus-q/anzhuangzhinan"}},V={},E=[{value:"1.\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e",id:"1\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"2.ssh\u65b9\u6cd5",id:"2ssh\u65b9\u6cd5",level:3},{value:"3.\u6dfb\u52a0\u65b0\u7528\u6237",id:"3\u6dfb\u52a0\u65b0\u7528\u6237",level:3},{value:"4.\u6302\u8f7d\u786c\u76d8\uff0c\u5e76\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",id:"4\u6302\u8f7d\u786c\u76d8\u5e76\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",level:3},{value:"\u6302\u8f7d\u786c\u76d8",id:"\u6302\u8f7d\u786c\u76d8",level:4},{value:"\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",id:"\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",level:4},{value:"5.docker \u8fc1\u79fb\u6302\u8f7d\u5230\u65b0\u7684\u78c1\u76d8\u5206\u533a",id:"5docker-\u8fc1\u79fb\u6302\u8f7d\u5230\u65b0\u7684\u78c1\u76d8\u5206\u533a",level:3},{value:"6.\u8bbe\u7f6e\u9759\u6001ip",id:"6\u8bbe\u7f6e\u9759\u6001ip",level:3}];function S(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ubuntu\u4f7f\u7528",children:"Ubuntu\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u6587\u4ef6\u7cfb\u7edf\u57fa\u4e8eubuntu22.04\u7248\u672c\u6784\u5efa\uff0c\u4f7f\u7528\u65b9\u6cd5\u4e0eubuntu22.04\u76f8\u540c"}),"\n",(0,s.jsx)(n.h3,{id:"1\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e",children:"1.\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u767b\u5165\u7cfb\u7edf\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"tip",children:[(0,s.jsxs)(n.p,{children:["ssh\u7528\u6237\u540d\uff1a",(0,s.jsx)(n.strong,{children:"myt"})]}),(0,s.jsxs)(n.p,{children:["\u5bc6\u7801\uff1a",(0,s.jsx)(n.strong,{children:"123456"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"2ssh\u65b9\u6cd5",children:"2.ssh\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ssh <\u7528\u6237\u540d>@<\u4e3b\u673aip\u5730\u5740>\r\n\u4f8b\u5982\uff1a ssh myt@192.168.xxx.xxx\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u83b7\u53d6ip",type:"tip",children:(0,s.jsxs)(w,{children:[(0,s.jsx)(A,{value:"oled",label:"oled(\u63a8\u8350)",default:!0,children:(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u67e5\u770boled\u83b7\u53d6\u4e3b\u673aip\u5730\u5740"})}),(0,s.jsx)(A,{value:"chuankou",label:"\u4e32\u53e3",children:(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4e32\u53e3\u8c03\u8bd5\uff0c\u8fdb\u5165\u5e76\u767b\u5f55\u540e\u4f7f\u7528ifconfig\u83b7\u53d6\u4e3b\u673aip\u5730\u5740"})})]})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u767b\u5f55\u8fdc\u7a0b\u4e3b\u673a\uff0c\u7cfb\u7edf\u4f1a\u7ed9\u51fa\u4e0b\u9762\u63d0\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"The authenticity of host 192.168.xxx.xxx(192.168.xxx.xxx)'can't be established.\r\nECDSA key fingerprint is SHA256:FFobshqrG0achj7Xp4LsJ9+xkNBlyy0e8ZIP17K+qQI.\r\nAre you sure you want to continue connecting(yes/no)?\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u76f4\u63a5\u8f93\u5165yes\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"3\u6dfb\u52a0\u65b0\u7528\u6237",children:"3.\u6dfb\u52a0\u65b0\u7528\u6237"}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\uff1a",type:"tip",children:(0,s.jsx)(n.p,{children:"\u8bf7\u767b\u5f55\u5230root\u7528\u6237"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"adduser <\u7528\u6237\u540d>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539 /etc/sudoers \u6587\u4ef6\uff0c\u7528\u4e8e\u63a7\u5236\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u4ee5\u8d85\u7ea7\u7ba1\u7406\u5458\uff08root\uff09\u7684\u8eab\u4efd\u6267\u884c\u7279\u5b9a\u7684\u547d\u4ee4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# \u7f16\u8f91 /etc/sudoers \r\nvim /etc/sudoers\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"root      ALL=(ALL:ALL) ALL"}),"\u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<\u7528\u6237\u540d>      ALL=(ALL:ALL) ALL\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4\u6302\u8f7d\u786c\u76d8\u5e76\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",children:"4.\u6302\u8f7d\u786c\u76d8\uff0c\u5e76\u5f00\u673a\u81ea\u52a8\u6302\u8f7d"}),"\n",(0,s.jsx)(n.h4,{id:"\u6302\u8f7d\u786c\u76d8",children:"\u6302\u8f7d\u786c\u76d8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"df -h #\u67e5\u770b\u78c1\u76d8\u662f\u5426\u6302\u8f7d\r\nlsblk #\u89c2\u5bdf\u78c1\u76d8\u5206\u533a\u72b6\u6001\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u6bd4\u67e5\u770b\u672a\u6302\u8f7d\u7684\u786c\u76d8\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkfs.ext4 /dev/nvme0xxx \u5c06\u786c\u76d8\u683c\u5f0f\u5316\u4e3aext4\u683c\u5f0f\r\n\r\n#\u8fd0\u884c\u547d\u4ee4\u884c\u4ee3\u7801\u540e\uff0c\u4f1a\u663e\u793a\u4ee5\u4e0b\u5185\u5bb9\u786e\u8ba4\r\n/dev/nvme0xxx contains a ext4 file system\r\n        last mounted on /mmc on Thu Jan  1 00:00:12 1970\r\nProceed anyway? (y,N)\r\n#\u8f93\u5165y\u5e76\u56de\u8f66\uff0c\u5b8c\u6210\u786c\u76d8\u683c\u5f0f\u5316\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u683c\u5f0f\u5316\u540e\u7684\u786c\u76d8\u6302\u8f7d\u5230\u6307\u5b9a\u76ee\u5f55\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mount /dev/nvme0xxx <\u6307\u5b9a\u76ee\u5f55>\r\n#\u4f8b\u5982\uff1a mount /dev/nvme0n1p1 /app\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u518d\u6b21\u67e5\u770b\u78c1\u76d8\u662f\u5426\u6302\u8f7d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"df -h\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",children:"\u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"blkid #\u67e5\u770b\u786c\u76d8\u7684UUID\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UUID",src:r(452).A+"",width:"657",height:"23"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# \u8fdb\u5165 fstab \u4fee\u6539\u914d\u7f6e\r\nsudo vim /etc/fstab\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6587\u4ef6\u5c3e\u90e8\u6dfb\u52a0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"UUID=2fd18098-xxxx-xxxx-xxxx-xxxxxxxxxxx  <\u6307\u5b9a\u76ee\u5f55>  ext4  defaults  0  0\n"})}),"\n",(0,s.jsx)(n.p,{children:"wq \u4fdd\u5b58\u9000\u51fa"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"sudo reboot"}),"  \u91cd\u542f\u7535\u8111"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"df -h"}),"  \u67e5\u770b\u6302\u8f7d\u60c5\u51b5"]})}),"\n",(0,s.jsx)(n.h3,{id:"5docker-\u8fc1\u79fb\u6302\u8f7d\u5230\u65b0\u7684\u78c1\u76d8\u5206\u533a",children:"5.docker \u8fc1\u79fb\u6302\u8f7d\u5230\u65b0\u7684\u78c1\u76d8\u5206\u533a"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53Docker\u9ed8\u8ba4\u7684\u6570\u636e\u76ee\u5f55",(0,s.jsx)(n.code,{children:"/var/lib/docker"}),"\u5728\u56fa\u6001\u76d8\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u5176\u8fc1\u79fb\u5230\u673a\u68b0\u76d8\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67e5\u770bdocker\u9ed8\u8ba4\u76ee\u5f55\u7684\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker info\r\n# Docker Root Dir: /var/lib/docker\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u505c\u6b62docker\u670d\u52a1\u5e76\u79fb\u52a8\u539f\u6709docker\u6587\u4ef6\u5230\u65b0\u76ee\u5f55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# \u8fd9\u91cc\u4f1a\u6709\u4e2asocket\u5b58\u5728, \u9700\u8981\u628asocket\u4e5f\u5173\u95ed\r\nsystemctl stop docker.service\r\n\r\n# \u79fb\u52a8docker\u7684\u6570\u636e\u5230\u65b0\u7684\u5730\u65b9 \r\n# ps: \u6302\u5728\u7684\u65b0\u786c\u76d8\u7684\u683c\u5f0f\u9700\u8981\u4e3a aufs\u683c\u5f0f, \u5426\u5219\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\u5bb9\u5668\r\n# mount -t aufs ...\r\nmv /var/lib/docker <\u8fc1\u79fb\u76ee\u5f55>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u91cd\u65b0\u8bbe\u7f6e Docker Root Dir"}),"\n",(0,s.jsx)(n.p,{children:"\u4e24\u79cd\u65b9\u5f0f\u4efb\u9009\u5176\u4e00"}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u6539\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"vi /usr/lib/systemd/system/docker.service\r\n# \u5728 ExecStart=/usr/bin/dockerd \u540e\u8ffd\u52a0 --data-root=<\u8fc1\u79fb\u76ee\u5f55>, \u6ce8\u610f\u5982\u679c\u672c\u6765\u540e\u9762\u6709\u5176\u4ed6\u53c2\u6570\u4e0d\u8981\u641e\u4e71\u4e86\r\n# \u793a\u4f8b\u5982\u4e0b\r\nExecStart=/usr/bin/dockerd --data-root=<\u8fc1\u79fb\u76ee\u5f55> -H fd:// --containerd=/run/containerd/containerd.sock\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u6539daemon.json"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# \u6ca1\u6709\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\r\n/etc/docker/daemon.json\r\n\r\n# \u4e2a\u4eba\u914d\u7f6e\u5982\u4e0b\r\n{\r\n    "data-root":"<\u8fc1\u79fb\u76ee\u5f55>",\r\n    \r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u542f\u52a8\u670d\u52a1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"systemctl daemon-reload\r\nsystemctl start docker.service\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6\u8bbe\u7f6e\u9759\u6001ip",children:"6.\u8bbe\u7f6e\u9759\u6001ip"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6253\u5f00\u7ec8\u7aef\u5e76\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u7f16\u8f91\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u627e\u5230\u4f60\u8981\u914d\u7f6e\u7684\u7f51\u7edc\u63a5\u53e3\uff08\u901a\u5e38\u662f ",(0,s.jsx)(n.code,{children:"eth0"})," \u6216 ",(0,s.jsx)(n.code,{children:"ens33"})," \u7b49\uff09\uff0c\u7136\u540e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Example for eth0 interface\r\nauto eth0\r\niface eth0 inet static\r\n    address 192.168.xxx.xxx      # \u8bbe\u7f6e\u9759\u6001 IP \u5730\u5740\r\n    netmask 255.255.255.0      # \u8bbe\u7f6e\u5b50\u7f51\u63a9\u7801\r\n    gateway 192.168.xxx.1       # \u8bbe\u7f6e\u7f51\u5173\r\n    dns-nameservers 8.8.8.8 8.8.4.4  # \u8bbe\u7f6e DNS \u670d\u52a1\u5668\r\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u4fdd\u5b58\u5e76\u5173\u95ed\u6587\u4ef6\u540e\uff0c\u91cd\u542f\u7f51\u7edc\u670d\u52a1\u4ee5\u5e94\u7528\u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl restart networking\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6216\u8005\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ifdown"})," \u548c ",(0,s.jsx)(n.code,{children:"ifup"})," \u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo ifdown eth0 && sudo ifup eth0\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"ifconfig"})," \u547d\u4ee4\u6765\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u6b63\u786e\u5e94\u7528\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ifconfig\n"})})]})}function T(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}},452:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/UUID-6932dfe57ef3c58f2d89342127be70da.png"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);