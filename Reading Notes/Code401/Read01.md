# Big O Notation
<span style="color:red; font-weight:900">Big O notation</span> is used in Computer Science to describe the performance or complexity of an algorithm.  
Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.  

<span style="color:red; font-weight:900">Big O notation examples</span> 

1.***O(1)*** describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. 

   2.***O(N)*** describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set   

   3.***O(N²)*** represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N³), O(N⁴) etc.
4.***O(2^N)*** denotes an algorithm whose growth doubles with each addition to the input data set. The growth curve of an O(2^N) function is exponential — starting off very shallow.  

## Logarithms
Binary search is a technique used to search sorted data sets. It works by selecting the middle element of the data set, essentially the median, and compares it against a target value. If the values match, it will return success. If the target value is higher than the value of the probe element, it will take the upper half of the data set and perform the same operation against it. Likewise, if the target value is lower than the value of the probe element, it will perform the operation against the lower half. It will continue to halve the data set with each iteration until the value has been found or until it can no longer split the data set.

## Facts and Myths about Python names and values
python uses simple mechanisms but it's affects are really huge
### **Names refer to values**
when we say
```html
x=10
```
we are creating a variable named x and this variable is referring to the 10 which is an object.
### Many names can refer to one value
<br>  

```html
x=10
y=x
```
when we said x=10 and y=x, y isn't referring to x, y is referring to the value that x refers to.

### Names are assigned independently
```html
x=10
y=x
x=20
```
x value is 20 but y value is still 10