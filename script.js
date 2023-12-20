//your JS code here. If required.
let count=0;
let btn=document.getElementbyId("counter");
let para=document.getElementbyId("incrementBtn");
btn.addEventListener("click",()=>{
	
	para.innerText=`${count} `;
	count++;
	alert(para);
})