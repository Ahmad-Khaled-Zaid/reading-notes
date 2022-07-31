# Django Custom User
Setup  
To start, create a new Django project from the command line. We need to do several things:  

create and navigate into a dedicated directory called accounts for our code  
install Django  
make a new Django project called django_project  
make a new app accounts  
start the local web server

## AbstractUser vs AbstractBaseUser
There are two modern ways to create a custom user model in Django: AbstractUser and AbstractBaseUser. In both cases we can subclass them to extend existing functionality however AbstractBaseUser 
requires much.

So we'll use AbstractUser which actually subclasses AbstractBaseUser but provides more default configuration.  



## DjangoX  
DjangoX can be installed via Pip, Pipenv, or Docker. To start, clone the repo to your local computer and change into the proper directory.


