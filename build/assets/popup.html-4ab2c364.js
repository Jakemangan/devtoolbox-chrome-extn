import{r as c,j as e,c as h,R as m}from"./client-31bc01d0.js";import{B as o}from"./index-4f0859a8.js";const u=()=>{const[t,n]=c.useState(0),r="https://github.com/guocaoyi/create-chrome-ext",a=()=>{chrome.tabs.create({url:chrome.runtime.getURL("dashboard.html")})},i=()=>{chrome.windows.getCurrent({populate:!0},s=>{chrome.sidePanel.open({windowId:s.id})})},d=()=>{t>0&&n(t-1)},l=()=>n(t+1);return c.useEffect(()=>{chrome.storage.sync.get(["count"],s=>{n(s.count||0)})},[]),c.useEffect(()=>{chrome.storage.sync.set({count:t}),chrome.runtime.sendMessage({type:"COUNT",count:t})},[t]),e.jsxs("main",{children:[e.jsx("h3",{children:"Popup Page"}),e.jsxs("div",{className:"calc",children:[e.jsx("button",{onClick:d,disabled:t<=0,children:"-"}),e.jsx("label",{children:t}),e.jsx("button",{onClick:l,children:"+"})]}),e.jsx("a",{href:r,target:"_blank",children:"generated by create-chrome-ext"}),e.jsx(o,{onClick:a,className:"mt-4",children:"Open Dashboard"}),e.jsx(o,{onClick:i,className:"mt-4",children:"Open Side Panel 2"})]})};h.createRoot(document.getElementById("app")).render(e.jsx(m.StrictMode,{children:e.jsx(u,{})}));