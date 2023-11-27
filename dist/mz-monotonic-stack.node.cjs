/*
https://github.com/mzusin/mz-monotonic-stack
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var r=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var h=(t,n)=>{for(var o in n)r(t,o,{get:n[o],enumerable:!0})},i=(t,n,o,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of m(n))!p.call(t,e)&&e!==o&&r(t,e,{get:()=>n[e],enumerable:!(c=s(n,e))||c.enumerable});return t};var u=t=>i(r({},"__esModule",{value:!0}),t);var l={};h(l,{monotonicDecreasingStack:()=>g,monotonicIncreasingStack:()=>a});module.exports=u(l);var a=t=>{let n=[];for(let o of t){for(;n.length>0&&n[n.length-1]>o;)n.pop();n.push(o)}return n},g=t=>{let n=[];for(let o of t){for(;n.length>0&&n[n.length-1]<o;)n.pop();n.push(o)}return n};0&&(module.exports={monotonicDecreasingStack,monotonicIncreasingStack});
