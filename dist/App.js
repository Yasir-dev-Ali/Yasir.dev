console.log('It is work');
const homeMenu=document.querySelector("#homeMenu");
const menu=document.querySelector("#menu");
const moon=document.querySelector("#moon");
const body=document.querySelector("body");

homeMenu.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    homeMenu.classList.toggle('bg-white');

});
moon.addEventListener('click',()=>{
    body.classList.toggle('dark');

   

});

