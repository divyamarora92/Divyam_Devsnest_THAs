const box=document.querySelector('.container');
for(var i=0;i<400;i++){
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
        box.classList.remove('child-clicked')
    }
    else{
        box.classList.add('child-clicked')
    }

});
})