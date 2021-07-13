
var frontCard=document.querySelectorAll(".front-face");
var backCard=document.querySelectorAll(".back-face");
var card=document.querySelectorAll(".memory-card");
console.log(backCard);
frontCard.forEach(function(cards){
    cards.addEventListener('click',()=>{
    if(cards.classList.contains('front-face')){
        cards.classList.remove('front-face');
        cards.classList.add('back-face');
        cards.classList.add('card-show');

    }
    else{
        cards.classList.add('front-face');
        cards.classList.remove('back-face');
        cards.classList.remove('card-show');
        

    }
})
    
})
// rotateCard.onclick=function(){
//      rotateCard.classList.add('card-show');
//      backCard.style.display='flex';
// }
// backCard.onclick=function(){
//     backCard.style.display='none';
// }