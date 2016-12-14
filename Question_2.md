Presenter: Ian McCunn

###Question:###

Write a function that performs set intersection. There are several different solutions to this problem, try to write a function that has the least time complexity.

**_Note_**: In mathematics, a set is a well defined collection of distinct objects, considered as an object in its own right. For example, the numbers 2, 4, and 6 are distinct objects when considered separately, but when they are considered collectively they form a single set of size three, written {2, 4, 6}. The intersection of two sets is the set of all things that are members of both set A and set B.

###Solution:###

Since a set is an abstract concept we can implement the set as an array or hash in this particular solution.

##### 1 -

The naive approach to finding the intersection of two sets is to iterate through the first set, and for each element iterating over the second set checking for equality of the values and pushing the equal values into a resulting list giving us our intersection. Since we're iterating over the second set for each element of the first, this will give us a run time of O(n<sup>2</sup>).

##### 2 -

The second approach, involved using the sets as sorted arrays. If we sort the arrays first before evaluating we can limit our search space. Given the sets A = {1, 3, 4, 5} and B = {2, 3, 5, 6} and pointers x for set A and y for set B, we start our search with both pointers x and y at positions 1 (make the assumption that our index starts at 1) for both sets.

```
x
|
1  3  4  5
2  3  5  6
|
y
```

In the first iteration we check the equality of x and y. If y happens to be greater than x then we no longer need to search for x in set B, so we can increase our pointer x by one.

```
   x
   |
1  3  4  5
2  3  5  6
|
y
```

Now, x is greater than y, so we can increase pointer y by one.

```
   x
   |
1  3  4  5
2  3  5  6
   |
   y
```

In this case, since x and y are equal (an intersection point of A and B) we can add this to an intesection set C and increase x and y by one to check the next values of the sets.

```
      x
      |
1  3  4  5
2  3  5  6
      |
      y
```

y is greater than x so we can point x to the next position in set A.

```
         x
         |
1  3  4  5
2  3  5  6
      |
      y
```

The values are equal so we can push the value 5 in to the intersection set C. Since x is now at the last position of set A and the sets are sorted, we do not need to continue and our intersection is C = {3, 5}. This gives a better time complexity of O(n + m) where n is the number of elements in set A and m is the number of elements in set B.

##### 3 -

If we implement the sets as hashes, we no longer need to sort. We have O(1) lookup time for each set/hash, so we can iterate through the first set and only check for the existence of the element in the second set once. This reduces our runtime even further to just O(n).
