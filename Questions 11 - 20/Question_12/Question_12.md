Presenter: Angel Cantu

### Question:

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

###Assumptions:

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.


![alt tag](http://i.imgur.com/EYcuB1wm.jpg)

  ### Solution:
```javascript

function fibonacci_series(n){
    if (n === 1)
    {
        return [0, 1];
    }
    else
    {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s
    }
}

function perimeter(n){
    //The function perimeter has for parameter n where n + 1 is the number of squares 
    return fibonacci_series(n + 1).reduce((acc, val) => (acc + val)) * 4;
}
```