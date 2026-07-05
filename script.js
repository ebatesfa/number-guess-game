 alert("JS is connected");
 console.log("JS loaded");
let secretNumber=Math.floor(Math.random()*20)+1;
let attempts= 5;

let input= document.getElementById("guess");
let checkBtn= document.getElementById("checkBtn");
let message= document.getElementById("messages");
let attemptsText=  document.getElementById("attempts");

checkBtn.addEventListener("click", function numberguess(){
   attemptsText.textContent="you have left" + attempts +"attempts";
if(Number(input.value)==secretNumber){
    message.textContent=" correct";
    checkBtn.disabled=true;
}else if(Number(input.value) > secretNumber){
    message.textContent=" try lower";
    attempts=attempts-1;
     attemptsText.textContent="you have left" + attempts +"attempts";
}else if(Number(input.value) < secretNumber){
    message.textContent=" try higher";
    attempts=attempts-1;
 attemptsText.textContent="you have left" + attempts +"attempts";

} 
if(attempts==0){
    message.textContent="game over";
    checkBtn.disabled=true;
}

} )


