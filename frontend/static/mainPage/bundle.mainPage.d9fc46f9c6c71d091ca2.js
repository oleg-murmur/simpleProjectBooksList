(()=>{"use strict";fetch("http://localhost:3000/api/book/getall?limit=5").then((e=>e.json())).then((e=>{const t=document.getElementById("data-list");t.className="data-list",e.forEach((e=>{const n=document.createElement("div");n.className="Test";const a=document.createElement("h2"),o=document.createElement("div"),c=document.createElement("div");a.textContent=e.bookName,o.textContent=e.genre,c.textContent=e.author,n.appendChild(c),n.appendChild(o),n.appendChild(a),n.appendChild(a),t.appendChild(n)}))})).catch((e=>{console.error("Произошла ошибка при загрузке данных:",e)}))})();