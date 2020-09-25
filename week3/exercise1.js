const crypto = require('crypto');



const createSecureString = (size) => {
	return new Promise((resolve, reject) => {
		crypto.randomBytes(size, (error, buffer) =>{
			if(error) return reject(error);
			resolve({
				length: buffer.length,
				random: 'A buffer with ' + buffer.length + ' hex-characters'
			});
		})
	});
};


/*
const secureRandomObjects = [
	createSecureString(48),
	createSecureString(40),
	createSecureString(32),
	createSecureString(24),
	createSecureString(16),
	createSecureString(8)
];

Promise.all(secureRandomObjects)
	.then(()=> console.log(secureRandomObjects))

*/
module.exports = createSecureString;