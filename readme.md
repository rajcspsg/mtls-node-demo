<u><h1><b>Server cert generation</b></h1></u>
Note: Enter the same passphrase for all the 3 operations below
1. openssl genpkey -out server.key -algorithm RSA \
   -pkeyopt rsa_keygen_bits:2048 -aes-128-cbc

2. <u><h3>CSR configuration file </h3</u> 

</u>
```
[req]
prompt = no
distinguished_name = dn
req_extensions = ext
[dn]
C  = AU
ST = Victoria
L  = Melbourne
O  = rajkumar
OU = integration
CN = www.rajkumar.com
emailAddress = rajkumar@earth.com
[ext]
subjectAltName = @sans
[sans]
DNS.0 = localhost
DNS.1 = anz.com
DNS.2 = www.anz.com
```


3. openssl req -new -config ssl.conf -key server.key -out server.csr 
4. openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

<u><h1><b>Client cert generation</b></h1></u>
Note: Enter the same passphrase for all the 3 operations below
1. openssl genpkey -out client.key -algorithm RSA \
   -pkeyopt rsa_keygen_bits:2048 -aes-128-cbc

2. <u><h3>CSR configuration file </h3</u>

</u>
```
[req]
prompt = true
distinguished_name = dn
req_extensions = ext
[dn]
C  = AU
ST = Victoria
L  = Melbourne
O  = rajkumar
OU = integration
CN = www.rajkumar.com
emailAddress = rajkumar@earth.com
[ext]
subjectAltName = @sans
[sans]
DNS.0 = localhost
DNS.1 = www.anz.com
DNS.2 = anz.com
```


3. openssl req -new -config ssl.conf -key client.key -out client.csr 
4. openssl x509 -req -days 365 -in client.csr -signkey client.key -out client.crt
5. cp client.crt ca.crt

