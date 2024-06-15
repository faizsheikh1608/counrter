let dec = document.getElementById('dec');
let inc = document.getElementById('inc');
let clear = document.getElementById('clear');
let output = document.getElementById('output');
let error = document.getElementById('eror');
let count = document.getElementById('count')
let temp = 0;
inc.addEventListener('click',() =>{
    
    ++temp;
    if(temp > 0){
        error.innerText = "";
    }
    count.textContent = temp;
})

dec.addEventListener('click',() =>{
    if(temp > 0){
        error.innerText = "";
    }
    if(temp <= 0){
        error.innerHTML = `<h2>Error : cannot go below 0</h2>`;
        error.style.color = "red";
        return ;
    }
   
    --temp;
    count.textContent = temp;
})

clear.addEventListener('click',()=>{
    temp = 0;
   
    count.innerHTML = temp;
})