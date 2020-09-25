const createSecureString = require('./exercise1');
const http = require('http');




const server = http.createServer((req, res) => {
    if (req.url === '/api/securerandoms') {
        res.setHeader('Content-Type', 'application/json');

        const getSecureStrings = async () => {
            const obj = {
                title : "6 Secure Strings",
                randoms: []
            }
            
        

        const string1 = createSecureString(48);
        const string2 = createSecureString(40); 
        const string3 = createSecureString(32);
        const string4 = createSecureString(24);
        const string5 = createSecureString(16);
        const string6 = createSecureString(8);

        resString1 = await string1;
        resString2 = await string2;
        resString3 = await string3;
        resString4 = await string4;
        resString5 = await string5;
        resString6 = await string6;

        obj.randoms.push(resString1)
        obj.randoms.push(resString2)
        obj.randoms.push(resString3)
        obj.randoms.push(resString4)
        obj.randoms.push(resString5)
        obj.randoms.push(resString6)
                
        res.write(JSON.stringify(obj));

        res.end()

        }
        getSecureStrings();
    };
    

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
});
server.listen(3000);
console.log('listening on 3000');
