# List Comprehensions in Python

Chances are you’ll use a lot of lists as a Python programmer. While we’re all big fans of for loops (and nested for loops), Python provides a more concise method for handling lists and list comprehension.  

## why to use list comprehensions?

In order to keep your code elegant and readable, it’s recommended that you use Python’s comprehension features.

```python
my_new_list = [ expression for item in list ]

```

You can see from this example that three ingredients are necessary for a python list comprehension to work.

- First is the expression we’d like to carry out. expression inside the square brackets.
- Second is the object that the expression will work on. item inside the square brackets.
- Finally, we need an iterable list of objects to build our new list from. list inside the square brackets.

## Show difference when creating list using List comprehension and for loop  

```python
# create a list using a for loop
squares = []

for x in range(10):
    # raise x to the power of 2
    squares.append(x**2)

print(squares)
```
  
```python
    # create a list using list comprehension
squares = [x**2 for x in range(10)]
```  



![List Comprehension](./Code401/assets/Read07/listComprhension.PNG)