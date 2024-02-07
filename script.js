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