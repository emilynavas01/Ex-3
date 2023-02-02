let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat,current)=> flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]


function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function everyLoop(array, test) 
{
    let n=array.length;
    if (n==0){return true}
    for (let i=0; i<n; i=i+1){
    
    if (test(array[i])==false){
      return false
    }
    else if(i==n-1){return true}
    
    }
    
}

function everySome(array, test) 
{
    return !array.some(element => !test(element))
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true