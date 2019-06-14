function forLoop(array){
  const arr = [];
  const num = 25;
  for(let i =0; i < num; i++){
    arr.push(`I am ${i} strange loop${i === 1 ? '' : 's'}`);
    let first = "I am 1 strange loop."
    let rest = "I am 24 strange loops."
  }

  return arr;
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
