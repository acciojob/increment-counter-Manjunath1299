let count = 0;
let counterElement = document.getElementById("counter");  
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  counterElement.innerText = count;  
  alert(count);  
  count++;  
});
