
function findPrimeFactors(n) {
  if ( n < 0 ) {
     return false;
  } else {
    var factorsOfNum = factors(n);
    var primeFactorsOfNum = [];
    for (var i = 0; i < factorsOfNum.length; i++) {
      var curr = factorsOfNum[i];
      if (isPrime(curr)) primeFactorsOfNum.push(curr);
    }
    return primeFactorsOfNum;
  }
}

function factors(num) {
  var factors = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function isPrime(num) {
  var m = Math.sqrt(num);
  for (var i = 2; i <= m; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
