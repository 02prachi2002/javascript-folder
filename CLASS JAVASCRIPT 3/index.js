console.log("vasu gadha hai tha aur rahega ha ha ha ha ....");
let primitiveString = "String are always sting in default case";
let objectString = new String("String can be converted to object");
//check the string are from primitive type or refrence type
console.log(typeof primitiveString);
console.log(typeof objectString);
//compiler treats the primitive string as object when we use '.' with the variable name examples are given below
console.log(primitiveString.endsWith("case"));
console.log(primitiveString.includes("xx"));
//Template Literals
let Placeholder = "lets understand placeholder";
//use backtick if want to use $ symbol
let example = `let understand the template literals by using  ${Placeholder}`;

//ARRAY
let array1 = [1,4,7,9,5];
console.log(array1);

console.log(array1[0]);
//Insertion 
//inserting at end
console.log(array1.push[76]);
//inserting at begin
console.log(array1.unshift[176]);
//inserting in middle
console.log(array1.splice[3, 0, '1212', '333', '399']);

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2) );


// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

//console.log(courses);

//console.log( courses.includes( {no:1, naam:'Love'} ) );

// let course =  courses.find(course => course.naam === 'Kilvish');

// function(course) {
//     return course.naam === 'Love';
// }

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);

// // console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// //numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// //let sliced = marks.slice(2);
// // let sliced = marks.slice(2,6);
// console.log(sliced);



// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// // for(let value of arr) {
// //     console.log(value);
// // }

// arr.forEach(number=> console.log(number));



// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// let numbers = [5,10,4,40];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);

let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);