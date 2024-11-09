let countEl = document.getElementById('count-el');
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
console.log(saveEl);
let count = 0; 


function increment(){
    count++;
    countEl.textContent = count;
    
}


function save(){
     let container = count + ' - ';
    saveEl.textContent += container;
    count = 0;
    countEl.textContent = count;
    console.log(count);
}
   