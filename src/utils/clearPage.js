
 export default function clearPage() {
         let toRemove = document.querySelectorAll('article');
         for(let article of toRemove) { article.remove()}     
 }