//yeah bhi chalega due to hoisting
run();// yeah bhi chalega
//function declaration
function run()
{
    console.log("running");
}
//invoking a function
run();//yeah bhi chalega
//hoisting : it is moving the function to the top of file automatically by js engine


//function assignment
let functiowalk = function walk(){
    console.log("walking");
}
//for calling assignment function use
functiowalk();

//anonymous function assignment
let stand2 = function()
{
    console.log("walking2");
}
stand2();

function sum(a,b){
    console.log(arguments);
    return a+b;
}
let ans = sum(1,2,3,4,5,6);

//rest operator:
function sum (...args){
    console.log(args);
}
sum(1,2,3,4,5);
//all these numbers in sum will be stored in the array due to rest operator


//getter-to get the value
//setter-to set the value
let person={
    fname : "prachi",
    lname: "varshney"
};
function fullname()
{
    // backtics are template literal format use kar rahe hai iska matlab yeah hota hai ki jo bhi hum space denge ya kuch bhi type karte hai bacck ticks ke ander vo sab print ho jata hai as it is 
    return `${person.fname}  ${person.lname}`;
}
console.log(fullname());



