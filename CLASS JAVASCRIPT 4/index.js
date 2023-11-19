// // console.log('kya haaal');

//hosting -> it tis the process of declaring functions
// on the top of file taki jo bhi function ho vo saare ekk baar mai hi read 
//ho jae aur jahai bhi aage need ho uss function ki vo use ho sakta hai
// this is done automaticaaly by js engine 


// //function call or invoke
// run();


// //function declaration
// function run() {
//     console.log('running');
// }




// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();


// let x = 1;
// x = 'a';

// console.log(x);


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);

//Rest Operator

// function sum(num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//Default Parameters
// function interest(p,r=6,y=9) {
//     return p*r*y/100;
// }



let person = {
    firstname : 'prachi',
    lastname : 'varshney;'
}
function fullName (){
    return `${person.firstname} ${person.lastname}`
}
console.log(fullName());

