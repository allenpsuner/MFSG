Presenter: Ian

### Question 10
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

![alt tag](http://articles.leetcode.com/wp-content/uploads/2012/08/rainwatertrap.png)

### Explanation

At any given point of the input array, the amount of water that will be collected can be computed by finding the minimum
height of the towers to the left and right of that position then subtracting the height or value at that position.

Take the array [1, 1, 4, 1, 2, 3, 6, 2, 2] and consider the amount of water collected at index 5 (value of 3). At that position,
the highest value to the left is 4 (index 2) and the highest value to the right is 6 (index 6). So the min between 4 and 6 is 4.
We then subtract the value at index 5 (3) from 4 we have a collected water amount of 1.

Overall, we can scan the array twice to compute these values. We create an array of highestToLeft values and another, highestToRight.
We then iterate through the original input array, aggregating the collected water values at each index as explained above.

### Solution
See computTrappedWater.js.
