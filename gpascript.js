'use strict'

const form = document.querySelector('form');
const input = document.querySelector('.topicinput');
const subject = document.querySelector('.sub');





function reset(){
  document.querySelector('.dispmarks').textContent = "";
  document.querySelector('.dispmarks').classList.add('hidden');
  input.value = "";
  document.getElementById('grade1').value = "";
  document.getElementById('grade2').value = "";
  document.getElementById('grade3').value = ""; 
  document.getElementById('grade4').value = "";
  document.getElementById('grade5').value = "";
  document.getElementById('grade6').value = "";
  document.getElementById('grade7').value = "";
  document.getElementById('grade8').value = "";
  document.getElementById('grade9').value = "";

  document.getElementById('credits1').value = "";
  document.getElementById('credits2').value = "";
  document.getElementById('credits3').value = ""; 
  document.getElementById('credits4').value = "";
  document.getElementById('credits5').value = "";
  document.getElementById('credits6').value = "";
  document.getElementById('credits7').value = "";
  document.getElementById('credits8').value = "";
  document.getElementById('credits9').value = "";

  document.querySelector('.sub1').classList.add('hidden');
  document.querySelector('.sub2').classList.add('hidden');
  document.querySelector('.sub3').classList.add('hidden');
  document.querySelector('.sub4').classList.add('hidden');
  document.querySelector('.sub5').classList.add('hidden');
  document.querySelector('.sub6').classList.add('hidden');
  document.querySelector('.sub7').classList.add('hidden');
  document.querySelector('.sub8').classList.add('hidden');
  document.querySelector('.sub9').classList.add('hidden');  

}

form.addEventListener('submit', function(e){
  e.preventDefault();
  document.querySelector('.marks').classList.remove('hidden');
  let insubs = input.value;
 //console.log(typeof(insubs));
  let i = insubs;
 switch(i){
  case '3':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    break;

  case '4':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    break;
  
  case '5':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    document.querySelector('.sub5').classList.remove('hidden');
    break;

  case '6':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    document.querySelector('.sub5').classList.remove('hidden');
    document.querySelector('.sub6').classList.remove('hidden');
    break;

  case '7':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    document.querySelector('.sub5').classList.remove('hidden');
    document.querySelector('.sub6').classList.remove('hidden');
    document.querySelector('.sub7').classList.remove('hidden');
    break;

  case '8':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    document.querySelector('.sub5').classList.remove('hidden');
    document.querySelector('.sub6').classList.remove('hidden');
    document.querySelector('.sub7').classList.remove('hidden');
    document.querySelector('.sub8').classList.remove('hidden');
    break;

  case '9':
    document.querySelector('.sub1').classList.remove('hidden');
    document.querySelector('.sub2').classList.remove('hidden');
    document.querySelector('.sub3').classList.remove('hidden');
    document.querySelector('.sub4').classList.remove('hidden');
    document.querySelector('.sub5').classList.remove('hidden');
    document.querySelector('.sub6').classList.remove('hidden');
    document.querySelector('.sub7').classList.remove('hidden');
    document.querySelector('.sub8').classList.remove('hidden');
    document.querySelector('.sub9').classList.remove('hidden');    
}


document.querySelector('.calculate').addEventListener('submit', calculate(e));

function calculate(){
  e.preventDefault();
  let grades = [];
  let credits = [];
  let result = 0;
   switch(i){
    case '3':
        grades.push(document.getElementById('grade1').value);
        credits.push(document.getElementById('credits1').value);
        grades.push(document.getElementById('grade2').value);
        credits.push(document.getElementById('credits2').value);
        grades.push(document.getElementById('grade3').value);
        credits.push(document.getElementById('credits3').value);
      break;

    case '4':
      grades.push(document.getElementById('grade1').value);
      credits.push(document.getElementById('credits1').value);
      grades.push(document.getElementById('grade2').value);
      credits.push(document.getElementById('credits2').value);
      grades.push(document.getElementById('grade3').value);
      credits.push(document.getElementById('credits3').value);
      grades.push(document.getElementById('grade4').value);
      credits.push(document.getElementById('credits4').value);
      break;

   case '5':
      grades.push(document.getElementById('grade1').value);
      credits.push(document.getElementById('credits1').value);
      grades.push(document.getElementById('grade2').value);
      credits.push(document.getElementById('credits2').value);
      grades.push(document.getElementById('grade3').value);
      credits.push(document.getElementById('credits3').value);
      grades.push(document.getElementById('grade4').value);
      credits.push(document.getElementById('credits4').value);
      grades.push(document.getElementById('grade5').value);
      credits.push(document.getElementById('credits5').value);
      break;

   case '6':
     grades.push(document.getElementById('grade1').value);
     credits.push(document.getElementById('credits1').value);
     grades.push(document.getElementById('grade2').value);
     credits.push(document.getElementById('credits2').value);
     grades.push(document.getElementById('grade3').value);
     credits.push(document.getElementById('credits3').value);
     grades.push(document.getElementById('grade4').value);
     credits.push(document.getElementById('credits4').value);
     grades.push(document.getElementById('grade5').value);
     credits.push(document.getElementById('credits5').value);
      break;
    
    case '7':
      grades.push(document.getElementById('grade1').value);
      credits.push(document.getElementById('credits1').value);
      grades.push(document.getElementById('grade2').value);
      credits.push(document.getElementById('credits2').value);
      grades.push(document.getElementById('grade3').value);
      credits.push(document.getElementById('credits3').value);
      grades.push(document.getElementById('grade4').value);
      credits.push(document.getElementById('credits4').value);
      grades.push(document.getElementById('grade5').value);
      credits.push(document.getElementById('credits5').value);
      grades.push(document.getElementById('grade6').value);
      credits.push(document.getElementById('credits6').value);
      grades.push(document.getElementById('grade7').value);
      credits.push(document.getElementById('credits7').value);
      break;
       
    case '8':
      grades.push(document.getElementById('grade1').value);
      credits.push(document.getElementById('credits1').value);
      grades.push(document.getElementById('grade2').value);
      credits.push(document.getElementById('credits2').value);
      grades.push(document.getElementById('grade3').value);
      credits.push(document.getElementById('credits3').value);
      grades.push(document.getElementById('grade4').value);
      credits.push(document.getElementById('credits4').value);
      grades.push(document.getElementById('grade5').value);
      credits.push(document.getElementById('credits5').value);
      grades.push(document.getElementById('grade6').value);
      credits.push(document.getElementById('credits6').value);
      grades.push(document.getElementById('grade7').value);
      credits.push(document.getElementById('credits7').value);
      grades.push(document.getElementById('grade8').value);
      credits.push(document.getElementById('credits8').value);
      break;

    case'9':
      grades.push(document.getElementById('grade1').value);
      credits.push(document.getElementById('credits1').value);
      grades.push(document.getElementById('grade2').value);
      credits.push(document.getElementById('credits2').value);
      grades.push(document.getElementById('grade3').value);
      credits.push(document.getElementById('credits3').value);
      grades.push(document.getElementById('grade4').value);
      credits.push(document.getElementById('credits4').value);
      grades.push(document.getElementById('grade5').value);
      credits.push(document.getElementById('credits5').value);
      grades.push(document.getElementById('grade6').value);
      credits.push(document.getElementById('credits6').value);
      grades.push(document.getElementById('grade7').value);
      credits.push(document.getElementById('credits7').value);
      grades.push(document.getElementById('grade8').value);
      credits.push(document.getElementById('credits8').value);
      grades.push(document.getElementById('grade9').value);
      credits.push(document.getElementById('credits9').value);
      break;
   }
   calculation();
   console.log(grades);
   console.log(credits);
   function calculation(){
    let sum = 0;
    let sum2= 0;
    for(let j = 0; j < grades.length; j++){
     sum += Number(credits[j]);
     sum2 += grades[j] * credits[j];
    }
     
     console.log(sum);
     console.log(sum2);
     result = sum2 / sum;
     console.log(result);
   }
   function display(){
    document.querySelector('.dispmarks').classList.remove('hidden');
    document.querySelector('.dispmarks').textContent ="your gpa for this sem is " +  result;
    }

    

    display();
}

}
)

reset();


document.getElementById('reset').addEventListener('click', reset);
