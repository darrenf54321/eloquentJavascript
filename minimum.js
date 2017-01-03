function minimum(x, y) {
  if (x === y)
    return "same values";
  else if (x > y)
    return y;
  else
    return x;
}

console.log(minimum(5, 2));
console.log(minimum(3, 100));
console.log(minimum(2, 4) + 100);
