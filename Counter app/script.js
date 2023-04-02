
const decrement = document.getElementById("dec");
const increament =  document.getElementById("inc");
const input = document.getElementById("input")
const reset = document.getElementById("reset")
decrement.addEventListener("click",() =>{
    const value =  Number(input.innerText);
    
    
        input.innerText = value -1;
    
})
increament.addEventListener("click",() =>{
    const value =  Number(input.innerText);
   
        input.innerText = value + 1;
    
})
reset.addEventListener("click",() =>{
    input.innerText = 0;
})