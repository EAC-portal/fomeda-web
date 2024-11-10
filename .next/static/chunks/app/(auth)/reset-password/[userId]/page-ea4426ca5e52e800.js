(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7068],{57594:function(e,s,a){Promise.resolve().then(a.bind(a,66023))},95381:function(e,s,a){"use strict";var r=a(90265);s.Z=r.Z},66023:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return y}});var r=a(57437),t=a(2265),n=a(30252),o=a(77733),l=a(95381),i=a(74011),d=a(55293),c=a(73454),p=a(25325),u=a(46682),h=a(16463),w=a(50413),m=a(68788),f=a(82649);let{Title:x,Link:g}=n.default;function y(){let e=(0,h.useRouter)(),[s,a]=(0,t.useState)(!1),n=(0,h.usePathname)(),g=n.substring(n.lastIndexOf("/")+1),y=async s=>{a(!0);let{confirm_password:r,...t}=s,n={...t};try{await m.Z.resetPassword(g,n).then(s=>{f.Z.success("Reset password","Your password has been reset sucessfully."),e.push("/reset-password/success")})}catch(e){console.error(e),f.Z.error("Internal Error","Reset password failed. Please contact the admin.")}finally{a(!1)}};return(0,r.jsx)(w.default,{showTitle:!1,children:(0,r.jsxs)(o.Z,{align:"middle",justify:"space-evenly",style:{height:"100vh"},children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(i.Z,{preview:!1,src:"/logoFomeda.svg",alt:"fomeda-logo"})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(c.Z,{name:"forget_password",layout:"vertical",autoComplete:"off",onFinish:y,onFinishFailed:e=>{console.log("Failed:",e)},style:{width:"400px"},children:[(0,r.jsx)(x,{level:2,children:"Reset password"}),(0,r.jsx)(c.Z.Item,{label:"New password",name:"password",rules:[{required:!0,message:"Please input your password"},{min:12,max:20,message:"The password must be between 12 and 20 characters"},{whitespace:!0,message:"The password cannot be whitespaces only"},{pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,message:"The password contains at least one uppercase letter, one lowercase letter, at least one number and at least one special character"}],children:(0,r.jsx)(p.default.Password,{placeholder:"Password"})}),(0,r.jsx)(c.Z.Item,{label:"Confirm new password",dependencies:["password"],name:"confirm_password",rules:[{required:!0,message:"Please input to confirm your new password"},{min:12,max:20,message:"The confirm password must be between 12 and 20 characters"},{whitespace:!0,message:"The confirm password cannot be whitespaces only"},{pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,message:"The confirm password contains at least one uppercase letter, one lowercase letter, at least one number and at least one special character"},e=>{let{getFieldValue:s}=e;return{validator:(e,a)=>a&&s("password")!==a?Promise.reject(Error("The confirm password that you entered does not match with password above")):Promise.resolve()}}],children:(0,r.jsx)(p.default.Password,{placeholder:"Confirm password"})}),(0,r.jsxs)(c.Z.Item,{style:{paddingTop:"5px"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(u.ZP,{block:!0,type:"primary",htmlType:"submit",loading:s,children:"Continue"})}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(u.ZP,{block:!0,type:"default",onClick:()=>{e.push("/forget-password")},children:"Back"})})]})]})})})]})})}}},function(e){e.O(0,[3276,9665,3419,3454,5325,252,4717,5913,5293,413,2971,7023,1744],function(){return e(e.s=57594)}),_N_E=e.O()}]);