function isNice(arr){
  for(let i = 0; i < arr.length; i++) {
  let num = arr[i];
  
  let numLess = arr.includes(num - 1);
  let numMore = arr.includes(num + 1);
  
  if(numLess === false && numMore === false) {
  return false;
  }
}


return arr.length > 1;
}