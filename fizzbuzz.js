var num = 0;

while (num <= 20) {
  if (num % 3 === 0  && num % 5 == 0) console.log("fizzbuzz");
  else if (num % 3 === 0) console.log("fizz");
  else if (num % 5 === 0) console.log("buzz");
  else console.log(num);

num += 1};
