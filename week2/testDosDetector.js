const EventEmitter = require('events');
const DosDetector = require('./dosDetector');


const dosDetector = new DosDetector(500);
dosDetector.on('DosDetected', (eventArg) =>{
	console.log('Listener called', eventArg);
});


dosDetector.addUrl('google.com')
setTimeout(function(){
	dosDetector.addUrl('google.com');
}, 100);

