const mymodule = require('./mymodule');

const fileDir = process.argv[2];
const fileExt = process.argv[3];


let callback = function(err, files){
	if(err)throw err;
	files.forEach(function(file){
		console.log(file)
	})
}


mymodule(fileDir, fileExt, callback);
