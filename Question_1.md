Presenter: Allen Suner

###Question:###

You are a civil engineer constructing yet another bridge across Lake Washington. Your team has been constructing pieces of the bridge all year, and now it's time
to put them together. However, your team has made the pieces of the bridge variable length. Assume you have _n_ pieces of the bridge floating in the water with their
lengths defined as _L1_, _L2_, _L3_, ... _Ln_. The cost of putting two pieces of the bridge together is _Li_ + _Lj_, where _i_ and _j_ are two different pieces of the
bridge. Your task is to minimize the cost of creating the bridge. Use any strategy you wish, but provide a code snippet with your answer.

###Solution:###

An optimal solution to this problem can be found using a Greedy algorithm. Consider the following example:

1, 4, 3, 9, 7, 7, 2

If we sort these values:

1, 2, 3, 4, 7, 7, 9

If we take the two least values in the list 1 & 2, and create their conjoined piece the total cost we now have spent is 3, and we are left with a piece that will cost us 3 to combine again.

3, 3, 4, 7, 7, 9

How we store the data does not necessarily matter in terms of the problem we wanted to solve. It can be implemented in whatever way we choose (sorted array, min heap, priority queue, etc.). We continue this process until we are left with only 1 element in our collection which represents our total cost. Maintaining the collection in sorted order...

4, 6, 7, 7, 9 ->
7, 7, 9, 10 ->
9, 10, 14 ->
14, 19 ->
33

Total cost = 33 units
