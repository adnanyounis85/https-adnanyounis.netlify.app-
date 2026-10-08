
const menu=document.querySelector('.menu');
const header=document.querySelector('header');
if(menu){menu.addEventListener('click',()=>header.classList.toggle('open'))}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
