const https = require('node:https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./client.key'),
  cert: fs.readFileSync('./client.crt'),
  ca: [fs.readFileSync('./ca.crt')],
  passphrase: 'raju',
  port: 3000,
  rejectUnauthorized: false,
  strictSSL: false
};

const req = https.request(options, res => {
  console.log('status code ', res.statusCode);
  console.log('headers', res.headers);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', e => {
  console.log(e);
});
req.end();
