sum = 0;
let argumentArray = process.argv
for (i=2; i<argumentArray.length; i++){
	sum+=Number(argumentArray[i]);
}
console.log(sum);
