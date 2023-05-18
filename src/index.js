import React from 'react'
import ReactDom from 'react-dom'
//import * as ReactDOMClient from 'react-dom/client';
//导入
//import JoeApp from './01-base/01-class'
//import MyApp from './01-base/02-function'
//import App from './01-base/03-组件嵌套'
//import App from  './01-base/04-组件样式'
//import App from  './01-base/05-事件绑定'
//import App from  './01-base/06-事件绑定'
//import App from './01-base/07-ref'
//import App from './01-base/08-state'
//import App from './01-base/09-列表渲染'
//import App from './01-base/10-to-do-list'
import App from './01-base/12-dangerous_html'
//ReactDom.render("guodonghan",document.getElementById("root"))

//ReactDOMClient.createRoot(/*...*/);
//ReactDOMClient.hydrateRoot(/*...*/);
ReactDom.render(<App></App>,document.getElementById("root"))
