import{j as e,r as a}from"./index-BtizlqDG.js";const k="/assets/Upstream-8-CSJagvio.svg";function E(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 stroke-neutral-500",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"})})}function M({name:t,lastMessage:n,photo:s}){return e.jsxs("div",{className:" w-full flex items-center bg-neutral-950 hover:bg-neutral-900 p-4 cursor-pointer rounded-xl ease-in-out duration-300",children:[e.jsx("figure",{children:e.jsx("img",{src:s,alt:"",className:" w-8"})}),e.jsxs("div",{className:"pl-4",children:[e.jsx("p",{className:" text-neutral-300",children:t}),e.jsxs("div",{className:" flex items-center",children:[e.jsx(E,{}),e.jsxs("p",{className:" text-neutral-500 text-sm",children:[" : ",n]})]})]})]})}function y(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-10 h-10 fill-blue-500 stroke-neutral-950",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}const S="/assets/Upstream-4-C67S82yb.svg",C=Array.from({length:1},()=>({photo:S,name:"Amaury Vasquez",lastMessage:"Hola, ¿Cómo estas?"}));function L(){return e.jsxs("div",{className:" border border-black w-96 h-auto p-8",children:[e.jsxs("div",{className:" w-full flex justify-between items-center",children:[e.jsx("figure",{children:e.jsx("img",{src:k,alt:"",className:"w-8"})}),e.jsxs("div",{className:" flex items-center",children:[e.jsx(y,{}),e.jsx("p",{className:" text-xl font-bold text-white pl-4",children:"Todos"})]})]}),e.jsx("p",{className:" text-xl text-neutral-300 pt-8 pb-2",children:"Mensajes"}),e.jsx("input",{type:"text",className:" w-full p-2 rounded-xl bg-neutral-900",placeholder:" Buscar"}),e.jsx("div",{className:" pt-4 h-4/5 overflow-y-auto",children:C.map(t=>e.jsx(M,{photo:t.photo,name:t.name,lastMessage:t.lastMessage},t.name))})]})}function O({message:t}){return e.jsx("div",{className:" w-full flex justify-start py-1",children:e.jsx("div",{children:e.jsx("div",{className:" bg-neutral-800 text-xl p-4 rounded-2xl",children:e.jsx("p",{className:" text-white",children:t})})})})}function T({id:t,message:n}){const[s,i]=a.useState(),[l,r]=a.useState(!1),[u,h]=a.useState(!1),[x,m]=a.useState(n),p=()=>{i(!1)},j=()=>{i(!0)},g=()=>{r(!l)},f=()=>{N(t),r(!1)},v=()=>{h(!0),r(!1)},w=()=>{b(t,x),h(!1)},N=async o=>{try{(await fetch(`http://localhost:8080/chat/delete/${o}`,{method:"DELETE"})).ok?(alert("Mensaje Eliminado"),setMessages(n.filter(d=>d.id!==o)),console.log("Mensaje eliminado")):console.error("Error al eliminar el mensaje")}catch(c){console.error("Error en la solicitud DELETE:",c)}},b=async(o,c)=>{try{(await fetch(`http://localhost:8080/chat/update/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({messege:c,hora:new Date().toISOString()})})).ok?(alert("Mensaje actualizado"),console.log("Mensaje actualizado")):console.error("Error al actualizar el mensaje")}catch(d){console.error("Error en la solicitud PUT:",d)}};return console.log(s),e.jsx("div",{className:" w-full flex justify-end py-1",children:e.jsxs("div",{children:[e.jsx("div",{className:l?"w-42 bg-neutral-800 p-1 h-auto rounded-2xl":"hidden",children:e.jsxs("ul",{className:" text-white",children:[e.jsx("li",{className:" p-2 hover:bg-neutral-900 ease-in-out duration-300 cursor-pointer rounded-2xl",onClick:f,children:"Eliminar mensaje"}),e.jsx("li",{className:" p-2 hover:bg-neutral-900 ease-in-out duration-300 cursor-pointer rounded-2xl",onClick:v,children:"Editar mensaje"})]})}),e.jsxs("div",{className:" bg-blue-500 text-xl p-4 rounded-2xl relative",onMouseLeave:p,onMouseEnter:j,children:[u?e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"text",value:x,onChange:o=>m(o.target.value),className:" w-full p-2 rounded-xl bg-neutral-900 text-white"}),e.jsx("button",{className:"ml-2 rounded-full p-2 bg-green-500 hover:bg-green-500/50 ease-in-out duration-300",onClick:w,children:"Confirmar"})]}):e.jsx("p",{className:" text-white",children:n}),e.jsx("div",{className:s?"bg-blue-600 absolute top-0 right-0 h-full flex items-center rounded-r-2xl px-2 cursor-pointer":"hidden",onClick:g,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 stroke-white",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]})]})})}function A(){const[t,n]=a.useState(""),s=l=>{n(l.target.value)},i=async l=>{l.preventDefault();try{const r=await fetch("http://localhost:8080/chat/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({remitente:"admin@admin",receptor:"perris@perris",messege:t,hora:new Date().toISOString()})});r.ok?await r.text()=="yes"?(console.log("Mensaje enviado"),alert("Mensaje enviado"),n("")):(console.error("No se envió el mensaje"),alert("No se envió el mensaje")):(console.error("Error en la solicitud POST"),alert("El mensaje no se pudo enviar"))}catch(r){console.error("Error al enviar la solicitud POST:",r),alert("El mensaje no se pudo enviar")}};return e.jsxs("div",{className:" flex w-full items-center",children:[e.jsx("div",{className:" pr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-12 stroke-white hover:stroke-white/50 ease-in-out duration-300 cursor-pointer",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}),e.jsxs("form",{className:" w-full flex items-center",onSubmit:i,children:[e.jsx("input",{type:"text",className:" w-full p-4 rounded-xl bg-neutral-900 text-white",placeholder:"Escribir mensaje...",value:t,onChange:s,required:!0}),e.jsx("div",{className:" pl-4",children:e.jsx("button",{className:"rounded-full p-2 bg-blue-500 hover:bg-blue-500/50 ease-in-out duration-300",type:" submit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 stroke-white",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})})})]})]})}function D(){const[t,n]=a.useState([]);return a.useEffect(()=>{fetch("http://localhost:8080/chat/message").then(s=>s.json()).then(s=>n(s)).catch(s=>console.error("Error en la obtención de datos",s))},[]),e.jsxs("div",{className:" h-screen bg-neutral-950 w-full flex",children:[e.jsx(L,{}),e.jsx("div",{className:" w-full h-full p-4 flex items-end",children:e.jsxs("div",{className:" w-full",children:[e.jsx("div",{className:" w-full py-8",children:t.map(s=>s.remitente==="admin@admin"?e.jsx(T,{id:s.id,message:s.messege}):e.jsx(O,{message:s.messege}))}),e.jsx(A,{})]})})]})}export{D as default};
