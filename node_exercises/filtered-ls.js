fs = require('fs');
const path = require('path');
let dirName = process.argv[2]
let fileExt = '.' + process.argv[3]




fs.readdir(dirName, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    files.forEach(file => { 
      if (path.extname(file) == fileExt) 
        console.log(file); 
    }) 
  } 
}) 

