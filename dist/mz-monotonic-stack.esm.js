/*
https://github.com/mzusin/mz-monotonic-stack
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var e=o=>{let n=[];for(let t of o){for(;n.length>0&&n[n.length-1]>t;)n.pop();n.push(t)}return n},r=o=>{let n=[];for(let t of o){for(;n.length>0&&n[n.length-1]<t;)n.pop();n.push(t)}return n};export{r as monotonicDecreasingStack,e as monotonicIncreasingStack};
