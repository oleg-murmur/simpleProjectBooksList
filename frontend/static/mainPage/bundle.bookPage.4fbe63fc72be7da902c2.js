(()=>{"use strict";const e=document.querySelector(".bookName"),o=document.querySelector(".bookAuthor"),t=document.querySelector(".genreBook"),n=document.querySelector(".bookDescription"),r=(document.getElementById("image"),new URLSearchParams(window.location.search).get("id"));r?console.log("ID книги из query параметров: "+r):console.log("ID книги не найден в query параметрах"),function(){const e=`http://localhost:3000/api/book/cover/${r}`,o=document.getElementById("image");fetch(e).then((e=>{if(e.ok)return e.blob();throw new Error("Network response was not ok.")})).then((e=>{const t=URL.createObjectURL(e);o.src=t})).catch((e=>{console.error("Ошибка при загрузке изображения:",e)}))}(),fetch(`http://localhost:3000/api/book/${r}`).then((e=>e.json())).then((r=>{let c=r.result;e.textContent=c.bookName,t.textContent=c.genre,o.textContent=c.author,n.textContent=c.direction})).catch((e=>{console.error("Произошла ошибка при загрузке данных:",e)}))})();