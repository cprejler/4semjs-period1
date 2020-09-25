var now = require("performance-now")
const fetch = require("node-fetch");








const URL = "https://swapi.dev/api/people/";
 
function fetchPerson(url){

  return fetch(url).then(res => res.json());
}



async function printNames() {
  var start = now()
  console.log("Before");
  const person1 = await fetchPerson(URL+'1');
  const person2 = await fetchPerson(URL+'2');
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
  var end = now()
  console.log(end-start);
}


printNames()