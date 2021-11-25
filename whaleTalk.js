let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
 
 const resultArray = [];

for(let i = 0; i < input.length; i++ ){
  //console.log(input[i]);
  //console.log("Input index " + i);
  for( let a = 0; a < vowels.length; a++){
      //console.log(a + ' ' + vowels)
      if(input[i] === vowels[a]){
          if(input[i] === 'e'){
          resultArray.push('ee');
         }else if(input[i] === 'u'){
            resultArray.push('uu');
         }
         else{
           resultArray.push(input[i]);
         }
      }   
  }
}
console.log(resultArray.join('').toUpperCase());
