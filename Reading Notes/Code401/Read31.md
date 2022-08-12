# Containers vs Virtual Environments
Virtual environments are used to isolate Python software packages locally.  
We can create an isolated box for individual projects so one can use Python 2.7 and Django 1.5 while another can use Python 3.5 and Django 2.1 on the same computer.
Virtual environments are great.    

But…virtual environments can only isolate Python packages.   
They still rely on a global, system-level installation of Python albeit they can refer to the proper version. So when we use Python 2.7 in a project, we’re pointing to an installation of Python 2.7 on the computer itself, not actually within the virtual environment.  

Also we can’t run a production database or other services within virtual environments so compared to Docker containers they are far more limited.  


# REST API
Django REST Framework works alongside the Django web framework to create web APIs.  
We cannot build a web API with only Django Rest Framework. It always must be added to a project after Django itself has been installed and configured.  

In this chapter, we will review the similarities and differences between traditional Django and Django REST Framework.  
The most important takeaway is that Django creates websites containing webpages, while Django REST Framework creates web APIs which are a collection of URL 
endpoints containing available HTTP verbs that return JSON.  

To illustrate these concepts, we will build out a basic Library website with traditional Django and then extend it into a web API with Django REST Framework.  



