import{r as s,j as e,c as m,R as h}from"./client-6eba707e.js";import{B as c}from"./button-627b222b.js";/* empty css              */const u=()=>{const[t,n]=s.useState(0),r="https://github.com/guocaoyi/create-chrome-ext",a=()=>{chrome.tabs.create({url:chrome.runtime.getURL("dashboard.html")})},i=()=>{chrome.windows.getCurrent({populate:!0},o=>{chrome.sidePanel.open({windowId:o.id})})},d=()=>{t>0&&n(t-1)},l=()=>n(t+1);return s.useEffect(()=>{chrome.storage.sync.get(["count"],o=>{n(o.count||0)})},[]),s.useEffect(()=>{chrome.storage.sync.set({count:t}),chrome.runtime.sendMessage({type:"COUNT",count:t})},[t]),e.jsxs("main",{children:[e.jsx("h3",{children:"Popup Page"}),e.jsxs("div",{className:"calc",children:[e.jsx("button",{onClick:d,disabled:t<=0,children:"-"}),e.jsx("label",{children:t}),e.jsx("button",{onClick:l,children:"+"})]}),e.jsx("a",{href:r,target:"_blank",children:"generated by create-chrome-ext"}),e.jsx(c,{onClick:a,className:"mt-4",children:"Open Dashboard"}),e.jsx(c,{onClick:i,className:"mt-4",children:"Open Side Panel 2"})]})};m.createRoot(document.getElementById("app")).render(e.jsx(h.StrictMode,{children:e.jsx(u,{})}));
