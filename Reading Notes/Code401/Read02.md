
# TDD with python

Unit tests are some pieces of code to exercise the input, the output and the behavioral of your code. You can write them anytime you want.

## Great example explain the need of TDD  

Imagine that we have a punch of customers and we have some information about them, name, age,etc...
and we want to add a gender info to them depending on their names, so we need to API called Genderize.io
so we need to think about that first in baby steps

## some notes in writing a test

1. **Test Name :** it should be descriptive, we need to say what is expected and what we are testing.  
   So in our last example when we want to write a test to check the gender we need explicitly say that ***should return female when the name is from a female.***
 ![UNIT TEST FUNCTION](./assets/UNTI_TEST/UNIT%20TEST.png)

2. the file name should follow the same module name For instance, if our module is gender.py, our test name should be test_gender.py.
3. ideal is to separate the production code from the test tests folders
![test file format](./assets//UNTI_TEST/Test%20files%20format.png)
4. structure is important,  conventionally used AAA **ARRANGE** ,**ACT** ,**ASSERT**
   a.Arrange: you need to organize the data needed to execute that piece of code (input)  
   b.Act:here you will execute the code being tested (exercise the behavior)  
   c.Assert: after executing the code, you will check if the result (output) is the same as you were expecting.  
<span style="color:red; font-weight:900">pytest library is suggested to be used for unit testing.<span>

## The Cycle

1. Write a unit test and make it fail (it needs to fail because the feature isn’t there yet).
2. Write the feature and make the test pass!
3. Refactor the code — the first version doesn’t need to be the beautiful one (don’t be shy)

# What does the if **name** == “**main**”: do?

Before executing code, Python interpreter reads source file and define few special variables/global variables.
If the python interpreter is running that module (the source file) as the main program, it sets the special **name** variable to have a value “**main**”.
If this file is being imported from another module, **name** will be set to the module’s name. Module’s name is available as value to __name__ global variable.

***What is a module?***  
A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py appended.

***Advantages :***  

1. Every Python module has it’s **name** defined and if this is ‘**main**’, it implies that the module is being run standalone by the user and we can do corresponding appropriate actions.  
2. If you import this script as a module in another script, the **name** is set to the name of the script/module.  
Python files can act as either reusable modules, or as standalone programs.  
3. if **name** == “main”: is used to execute some code only if the file was run directly, and not imported.

# Recursion

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

## Need of Recursion
Recursion is an amazing technique with the help of which we can reduce the length of our code and make it easier to read and write. It has certain advantages over the iteration technique which will be discussed later. A task that can be defined with its similar subtask, recursion is one of the best solutions for it. For example; The Factorial of a number.



## ***Things I want to know more about***

1. <span style="color:red; font-weight:900">refactoring and unit tests.<span>
2. <span style="color:red; font-weight:900">how to use pytest.<span>
3. <span style="color:red; font-weight:900">software design.<span>

## ***some new words for me and it's explanation***

1. TDD : Test-driven development
