 # Managing Django Settings: Issues
 Different environments. Usually, you have several environments: local, dev, ci, qa, staging, production, etc.  
 Each environment can have its own specific settings (for example: DEBUG = True, more verbose logging,  
 additional apps, some mocked data, etc). You need an approach that allows you to keep all these Django setting configurations.  
Sensitive data. You have SECRET_KEY in each Django project. On top of this there can be DB passwords and tokens for third-party APIs like Amazon or Twitter.  
This data cannot be stored in VCS.


## What Is SSH?
SSH, or Secure Shell Protocol, is a remote administration protocol that allows users to access, control, and modify their remote servers over the internet.

SSH service was created as a secure replacement for the unencrypted Telnet and uses cryptographic techniques to ensure that all communication to and from the  
remote server happens in an encrypted manner. It provides a mechanism for authenticating a remote user, transferring inputs from the client to the host,  
and relaying the output back to the client.



