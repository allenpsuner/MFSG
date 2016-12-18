Presenter: James


### Question:
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.


### Example:
Given ```[100, 4, 200, 1, 3, 2]```
The longest consecutive elements sequence is ```[1, 2, 3, 4]```. Return its ```length: 4```.

### Solution

There's two ways to approach this problem, one which uses sorting to optimize the space and time and
another which optimizes time, if we consider object creation as free.

For the first and more common solution what we will do is:

1. Sort the array so all entries are in order. O(NLogN)
1a. In order to avoid duplicate miscount we must remove all duplicates O(N) or require <SET> as a pre-requisite.

2. Set values i and j adjacent to each other and ensure that we reset count when j - i does not equal 1. O(N)

3. Update a local counter and maintain a global maximum.


The second solution can be implemented using three passes of the array.  This implementation deals with
duplicates and overlap of -1, 0, 1 however it requires memory and can be non-optimal for sparse samples.

To minimize space we can use a byte in Java and this can be compacted into a bit.
What we will do is transform the given array into an indexed representation of the data.
I will use 1 byte to represent the data.

1. On the first pass we need to determine what our maximum value is, this will be required
for the array creation. (If we are to consider negative and positive values we need some modular
normalization here.)

2. We will then instantiate an array and fill it (second pass) with the transformed data (a byte).

Runtime here is a O(N + N) (if we count array construction as free).

3. On the third pass we will keep a local maximum and update global as the value increases. O(K)

Overall Runtime here is 2N + K ~ linear for some value.



