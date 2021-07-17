let bttn=document.getElementById('btn');
let bg=document.getElementById('background');
bttn.addEventListener('click',()=>{
    var nos= Math.floor(Math.random()*255);
    console.log(nos);
    bg.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255);+")";

})