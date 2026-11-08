(()=>{
 const dialog=document.querySelector('.reader'),image=document.querySelector('#reader-image'),counter=document.querySelector('#page-counter');
 const pages={trading:[['trading-pagina-1.webp','TradingAgents'],['trading-pagina-2.webp','Freqtrade']],creativi:[['creativi-pagina-1.webp','Krita'],['creativi-pagina-2.webp','Blender']],ai:[['ai-pagina-1.webp','Ollama'],['ai-pagina-2.webp','Docling']]};let issue='creativi',page=0;
 function render(){const item=pages[issue][page];image.src='assets-'+item[0];image.alt='Pagina originale di Due Dritte dedicata a '+item[1];counter.textContent=`${page+1} / 2 · ${item[1]}`;document.querySelector('#reader-title').textContent='DUE DRITTE / '+('SPECIALE '+issue.toUpperCase());document.querySelector('.reader-note').textContent=issue==='ai'?'Pagine del numero originale. Gli esempi sono schemi illustrativi dichiarati.':'Pagine del numero originale. Immagini autentiche e fonti riportate nelle schede.';}
 document.querySelectorAll('[data-issue]').forEach(b=>b.addEventListener('click',()=>{issue=b.dataset.issue;page=0;render();dialog.showModal();}));
 document.querySelector('#close-reader').addEventListener('click',()=>dialog.close());
 document.querySelector('#previous-page').addEventListener('click',()=>{page=(page+1)%2;render()});document.querySelector('#next-page').addEventListener('click',()=>{page=(page+1)%2;render()});
 dialog.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();page=(page+1)%2;render()}});
})();
