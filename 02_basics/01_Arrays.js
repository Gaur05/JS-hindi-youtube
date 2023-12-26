// array

const myArr = [0, 1, 2, 3, 4, 5] // Arrays should be in the square brackets...
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6.56) // It adds the value in the array
console.log(myArr);

// myArr.push(7)
myArr.pop()  //It removes the last value of the array 

// myArr.unshift(9) // It adds the argument value in the beginning of the array
// myArr.shift() // It removes the first value of the array aka the 0th index value.

// console.log(myArr.includes(9)); // It will give the boolean datatype 
// console.log(myArr.indexOf(3)); // Gives the index of the argument value

// const newArr = myArr.join() // It converts the array datatype to string datatype

// console.log(myArr);
// console.log( newArr);


// slice, splice
// Slice do not manuplate the values of the array
// Splice manuplate the values of the array

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);