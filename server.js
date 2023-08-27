const https = require('node:https');
const fs = require('fs');

const options = {
  port: 3000,
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
  passphrase: 'raju',
  requestCert: true,
  rejectUnauthorized: false
};

https.createServer(options, (req, res) => {
  res.writeHead(200, {});
  res.end('Hello World!!!');
}).listen(options.port, () => {
  console.log(`Listening on port: ${options.port}`);
});
