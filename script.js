//your JS code here. If required.
const input  = document.getElementById("fname");
input.onblur = function small(e) {
	  let value = (e.target.value);
	  e.target.value = value.toUpperCase();
	     return;
	   
}