const box=document.querySelector('.container');
var booked=document.querySelector('#booked');
var remaining=document.querySelector('#remaining');
let bookedSeats = 0;
let remainingSeats = 36;
for(var i=0;i<36;i++){
    let element=document.createElement('div')
    element.classList.add('child')
    element.classList.add('child-clicked')
    box.appendChild(element)
    }
let boxes=document.querySelectorAll('.child')
// boxes.forEach(child=>child.addEventListener('click',()=>{
//     child.classList.toggle('child-clicked')
// }))
boxes.forEach(function(box){
box.addEventListener('click',()=>{
    if(box.classList.contains('child-clicked')){
        box.classList.remove('child-clicked');
        bookedSeats++;
        remainingSeats--;
        booked.innerHTML=bookedSeats;
        remaining.innerHTML=remainingSeats;
        
        
    }
    else{
        box.classList.add('child-clicked')
        bookedSeats--;
        remainingSeats++;
        booked.innerHTML=bookedSeats;
        remaining.innerHTML=remainingSeats;
    }

});
})