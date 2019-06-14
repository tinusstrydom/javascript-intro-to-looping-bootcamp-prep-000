function forLoop(array){
  const array = [];
  const num = 25;
  for(let i =0; i < num; i++){
    array.push(`I am a strange loop.`);
  }

  return array;
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
