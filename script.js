let count = 0;
let counterElement = document.getElementById("counter");  
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;  
  counterElement.innerText = count;  
  alert('Count is now: ' +count);
});