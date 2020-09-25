const DosDetector = require('./dosDetector');
const osObj = require('./ModuleObject');
const http = require('http');

let dosDetector = new DosDetector(500);
const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osObj));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
	sock.remoteAddress;
	dosDetector.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.

dosDetector.on('DosDetected', (eventArg) =>{
	console.log('Dos Detected', eventArg);
});

