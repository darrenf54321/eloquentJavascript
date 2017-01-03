function isEven(x) {
  if (x < 0) {
   x = Math.abs(x);
  }
  if (x === 0)
    return true;
  else if (x === 1)
    return false;
  else {
    x = x - 2;
    return isEven(x);
  }
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(6));
console.log(isEven(75));
console.log(isEven(-1));
