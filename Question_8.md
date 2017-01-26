Presenter: Allen Suner

### Question:
Write an algorithm to reverse singly linked list in-place (don't use extra objects in memory).

### Solution:
The key is to use 3 pointers instead of the assumed 2. A solution is written below in ruby. It assumes the linked list instance object is not null.

```ruby
def reverse
  curr_node = self.head
  prev_node = nil
  next_node = nil
  
  while(!curr_node.nil?)
    next_node = curr_node.next
    curr_node.next = prev_node
    prev_node = curr_node
    curr_node = next_node
  end

  self.head = prev_node
end
```
**Performance: O(N)**
