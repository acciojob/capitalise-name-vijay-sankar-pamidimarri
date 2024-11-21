//your JS code here. If required.

let input=document.querySelector("#fname");
let v1=()=>{
	input.value=input.value.toUpperCase();
}
input.addEventListener('blur',v1);