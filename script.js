//your JS code here. If required.
const input  = document.getElementById("fname");
input.onblur = function small(e) {
	  let value = (e.target.value);
	  // e.target.value = value.toUpperCase();
	  //    return;
	   let arrOfValues = value.trim().split(" ").map((str)=>{
			let lower = str.toLowerCase();
		  return lower.charAt(0).toUpperCase() + lower.split("").slice(1).join("");
           })
	e.target.value = arrOfValues.join(" ");
}