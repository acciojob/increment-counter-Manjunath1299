let count = 0;
let counterElement = document.getElementById("counter");  // Get the paragraph element
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  counterElement.innerText = count;  // Display the un-incremented value
  alert(count);  // Alert the un-incremented value
  count++;  // Increment the counter after displaying and alerting
});
