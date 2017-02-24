Presenter: Nicu Parente

### Question:
You are travelling up a staircase that contains a fixed number of steps _n_. You can traverse the staircase by either taking each step,
or by skipping a step (if possible).

Your task is to write a function that calculates the total possible ways you are able to traverse the staircase. For example,
if you have a staircase with 1 stair the output would be 1, or if you had a staircase with 3 stairs the output would be 3.

__Bonus:__
Include the time complexity of your algorithm and how you arrived at that answer.

### Solution:

The pattern follows the fibonacci sequence. Given the number of steps in the stairs as fibonacci (F), the corresponding amount of ways to climb it is fibonacci sequence plus one.


```
F 0 1 2 3 4 5 6...
  | |\ \ \ \ \ \
S 0 1 1 2 3 5 8 13...
```

```ruby
def howManyWays(numSteps)
  if(numSteps == 0)
    return 0
  elsif (numSteps == 1)
    return 1
  else
    seq = [0, 1, 1]
    while(seq.length <= numSteps+1)
      seq << seq.last + seq[seq.length-2]
    end
  return seq.last
  end
end
```

**Performance: O(N)**
