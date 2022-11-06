/*      Preliminary
   
1. Write a for loop that prints to the console the numbers 0 through 9.

*/
for(var i=0; i<10; i++){
    console.log(i)
}

// 2. Write a for loop that prints to the console 9 through 0.

for(var i=9; i>=0; i--){
    console.log(i)
}

// 3. Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]

const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

//Bronze Medal

//1. Write a for loop that will push the numbers 0 through 9 to an array.

const numArray = []
for(i=0; i<10; i++){
numArray.push(i)
}

console.log(numArray)
// 2. Write a for loop that prints to the console only even numbers 0 through 100.

for(i=0; i<101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const fruit3 = [];
for(var i=0; i<fruit2.length; i++){
  if(i % 2 === 0){
    fruit3.push(fruit2[i])
   
  }
}
console.log(fruit3)