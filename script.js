'use strict';

const letters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0"

document.querySelector("h1").onmouseover = event => {
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


