function forLoop(arr){
  const ar = [];
  for(let i =0; i < 25; i++){
    ar.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  let first = ar.slice(1,2);
  return ar;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--
  }
  return 'done';
}

function doWhileLoop(num){
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do{
    i === 0 ? console.log("I run once regardless.") : console.log(`${i} times when passed an integer of ${i} as a parameter.`);
  	}while(incrementVariable()< num);
}
