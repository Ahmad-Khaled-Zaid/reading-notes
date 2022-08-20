# What is JSON Web Token?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.  
This information can be verified and trusted because it is digitally signed.  
JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.  

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens.  
Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.  
When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

## What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:  

Header  
Payload  
Signature  
Therefore, a JWT typically looks like the following.  

xxxxx.yyyyy.zzzzz  

## A Production Stack
You want to only use tech in production, which is reliable, well tested and has been around for a while.  

A production setup usually consists of multiple components, each designed and built to be really good at one specific thing. They are fast, reliable and very focused.  

When a request arrives at your server, it should be passed to a dedicated web server. Nginx is an example for a good web server.  

  






