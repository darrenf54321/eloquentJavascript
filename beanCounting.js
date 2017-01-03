function countBs(string) {
  var result = 0;
  i = 0;
  for(i;i<string.length;i++)if(string[i]=="B")result++;
  return result;
}

console.log(countBs("BaBy"));



function countChar(string, char) {
  var result = 0;
  i = 0;
  for(i;i<string.length;i++)if(string[i]==char)result++;
  return result;
}

console.log(countChar("BaBy", "B"));
