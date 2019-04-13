// counter function
const counter = () =>{
	let count = 0;
	let sring = prompt("Please Enter the senterce here!");
	let cha = prompt("Enter the alphabet to search and count how many times it appear");
	for(let j = 0; j < sring.length; j++){
		if(sring[j] == cha){
		  count += 1;
		}
	}
	return count;
}
alert(counter());
