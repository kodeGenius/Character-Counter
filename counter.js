const counter = (string, char) =>{
	let count = 0;
	for(let j = 0; j < string.length; j++){
		if(string[j] == char){
		  count += 1;
		}
	}
	return count;
}
console.log(counter('Iamtoogoodtobelazyo', 'o'))