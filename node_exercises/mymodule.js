const fs = require('fs');
const path = require('path');


module.exports = (dirName, fileExt, callback) => {
	fs.readdir(dirName, (err, files) => {
		if (err)
			return callback(err);
		else {
			list = files.filter(function(file){
				if(path.extname(file) ===  '.' + fileExt) return true;

		})
		return callback(null, list);
	}
})}
