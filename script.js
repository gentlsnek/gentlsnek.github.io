'use strict';

const letters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0"

const heading = document.querySelector('h1');



heading.onmouseover = event => {
let original;
  let intervalDone = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    
    .map((letter, index)  => {
        if(index < intervalDone){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
        
    })
    .join("");

     if(intervalDone >= event.target.dataset.value.length) clearInterval(interval);
     
    intervalDone++;
}, 100);
return event.target.dataset.value[index];
}

heading.addEventListener('mouseleave', function(){
   
    const header = "DEVSNEK_";
    //const change = setInterval(() =>{
    
    heading.textContent = header; 
//}, 1000)
});



let circle = document.getElementById('cursor');
const speed = 0.14
;

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    circle.style.left = `${x }px`;
    circle.style.top = `${y}px`;
});

document.querySelector('.memeimage').addEventListener('mouseover', function(){
    
    circle.style.height = '300px';
    circle.style.width = '300px';
    circle.style.backgroundColor = `grey`;
    document.querySelector('.message').classList.remove('hidden');

});

document.querySelector('.memeimage').addEventListener('mouseleave', function(){
    
    circle.style.height = '75px';
    circle.style.width = '75px';
    circle.style.backgroundColor = ``;
    document.querySelector('.message').classList.add('hidden');

})



























   /*const input = heading.textContent;
   const spliting = [];
    for(let i = 0; i < input.length; i++ ){
        spliting[i] = input[i];
        
    }
    for(let i =0; i < spliting.length; i++){
        const randNum = Math.trunc((Math.random() * 26));
        heading.textContent =+ header[i];
    

document.querySelector('.memeimage').addEventListener('mousemove', function(){
   // console.log("mouse is over this");
    document.querySelector('.memeimage').classList.add('hidden');
    document.querySelector('.showtext').classList.remove('hidden');
})

*/