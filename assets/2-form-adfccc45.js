document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form");if(e){e.addEventListener("input",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"){const s=e.elements.email.value,m=e.elements.message.value,l={email:s,message:m};localStorage.setItem("feedback-form-state",JSON.stringify(l))}});const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}e.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset(),console.log({email:e.elements.email.value,message:e.elements.message.value})})}});
//# sourceMappingURL=2-form-adfccc45.js.map
