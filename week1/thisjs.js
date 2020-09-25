//this examples


var person = {
	firstName : "Casper",
	lastName : "Prejler",
	id : 225512,
	fullName : function(){
		return this.firstName + " " + this.lastName;
	}
}

//In this case this belongs to the person object

console.log(person.fullName())


//We have access to the fullName function on a different object by using the call keyword
//

var person2 = {
	firstName : "John",
	lastName : "Hansen"
}


console.log(person.fullName.call(person2));


