
let string = prompt("Please Enter the senterce here!");
let char = prompt("Enter the alphabet to search and count how many times it appear";)
const counter = (string, char) =>{
	let count = 0;
	for(let j = 0; j < string.length; j++){
		if(string[j] == char){
		  count += 1;
		}
	}
	alert(count);
}
console.log(counter('Iamtoogoodtobelazyo', 'o'))