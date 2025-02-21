// JS BOM
// JS Timing events methods
// setTimeOut(), setInterval()

// setTimeout(()=>{
//     console.log("hi");
// },15000);

// setTimeout(display,10000);
// function display(){
//     console.log("display function");
// }

const saveButton = document.querySelector(".save-btn");
 const message = document.querySelector(".message");

// saveButton.addEventListener("click",saveUser);

// function saveUser(){
//     message.textContent = "user registration successfully";
// }

// setTimeout(() =>{
//     message.textContent = " "
// },2000)

saveButton.addEventListener("click",displayCount);
function displayCount(){
    let count = 1;
    message.textContent = count;


setInterval(()=>{
    count++;
    message.textContent = count;
},1000);
}