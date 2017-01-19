Presenter: Angel

### Question 1:
Given an linked list with unique values write an algorithm that can determine if the list has a loop.

### Question 2:
Given an linked list with duplicate values write an algorithm that can determine if the list has a loop.

### Solution for question 1:


```ruby
def has_loop(start_point)
  hash_table = Hash.new
  cell = start_point
  while(cell.next != nil)
    if( h.has_key?(cell.value))
      return true #There's a loop
    else
      h[cell.value] = '' #Add the value to the Hash table
    end
    cell = cell.next
  end
  false #this will only get executed if cell.next == nil which means there's no loop
end
```
**Performance: O(N)**

Consider following linked list
[a] -> [b] -> [c] -> [b]

Since the values for each of the elements is unique we can simply iterate through the list and set each of its values in a Hash table as the key. If we get try to add a duplicate key it means the list has a loop

After 3 iterations the Hash table will look like:
|Key|Value|
|---|---|
|a|''|
|b|''|
|c|''|

Once it iterates for the 4th time the algorithm will check if the key "b" exists in the table, since it exists it will return true.



### Solution for question 2:
These are 2 of many possible solutions for question 2. A consideration I took for these algorithms is to compare the linked list object as a whole rather than checking the value it holds.

#### 1

```ruby
def has_loop(start_point)
  cell = start_point
  while(cell.next != nil)
    tracer = start_point  
    while(tracer != cell)
      if(tracer.next == cell.next)
        return true #There's a loop
      else
        tracer = tracer.next
      end
    end
    cell = cell.next
  end
  false  #there's no loop
end
```

**Performance: O(N^2)**

Consider following linked list
[a] -> [b] -> [c] -> [b]
c = cell
t = tracer

*
[a] -> [b] -> [c] -> [b]
c,t
After first iteration both c and t are equal so we move c to the next element.
*
[a] -> [b] -> [c] -> [b]
t      c
We reset t to start_point and compare if they are the same, since this is false we check if their .next link points to the same element since this is false we move t to the next element
[a] -> [b] -> [c] -> [b]
       c,t
Since both elements are the same we move c to the next element.
*
[a] -> [b] -> [c] -> [b]
t              c
We reset t to start_point and compare if they are the same, since this is false we check if their .next link points to the same element which in this case is true meaning there's a loop.

#### 2
```ruby
def has_loop(start_point)
  slow_node = fast_node1 = fast_node2 = start_point

  while(slow_node && fast_node1 = fast_node2.next && fast_node2 = fast_node1.next )
    if(slow_node == fast_node1 || slow_node == fast_node2)
      return true #there's a loop
    else
      slow_node = slow_node.next
    end
  end
  false #there's no loop
end
```

**Performance: O(N)**

This is my implementation of Floyd's cycle detection algorithm.
