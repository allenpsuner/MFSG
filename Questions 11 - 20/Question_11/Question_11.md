Presenter: Kevin Staiger

### Question:
Write a function, createBalancedBST(), that generates a balanced binary search tree given a sorted array.

#### Assumptions:

- The array given as input to the array is sorted and its values are integers.
- We have a BST/Tree data structure available to us with common methods such as:
  - TreeNode.setRight()
  - TreeNode.setLeft()

  ### Solution:

```ruby

class Node 
  
  attr_accessor :value, :left, :right
  
  def initialize(value, left=nil, right=nil)
    @value = value
    @left = left
    @right = right
  end
  
end 

def balance_bst(array, left=0, right=array.length - 1)
  return if left > right
  
  mid_index = left + (right - left) / 2
  node = Node.new(array[mid_index])
  node.left = balance_bst(array, left, mid_index - 1)
  node.right = balance_bst(array, mid_index + 1, right)
  node
end
```
