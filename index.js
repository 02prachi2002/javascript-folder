console.log('Vasu gadha hai')
//variable -> is a named memory location is called variable 
//using "let" keyword

{
    let a = 13;
    console.log(a);//a only works under these scopes due to "let keyword"
}
 // 13 is printed
//here let is a keyword
//here a is variable name
//let keyword ke ander hi hum har type ke srtings, char , int , double store kar sakte hai
//in case of let value of the variable can't be redefined
//it is a dynamic type language{ koi batane ki jaroorat nahi hai kimkyun se type ka data type store kar rahe hai it manages on its own}


//another keyword use to define the variable is called "var" keyword
//var -> global variable
var a =23;
var a =12;
console.log(a);// 12 is printed
//in case of var value of the variable can be redefined 

//CONSTANT
//defined value cannot be altered
const num =2;
console.log(num);

//PRIMITIVE TYPES
//->string
let c= "prachi"
console.log(c);
//-> number
let d= 1;
console.log(d);
//->boolean
let e= true;
console.log(e);
//->undefined
let f;//jab kuch bhi defined nahi hota hai variable ke ander then javascript mai undefined print hota hai
console.log(f);
//-> null
let g=null;//variable g is defined as null(empty value)
console.log(g);

//DYNAMIC TYPING
let lname = "prachi";
console.log(lname);
lname=12;
console.log(lname);
//same variable with two different dataype answer this is possible in javascript

//REFRENCE TYPE
//->object = every object has properties hoyi hai and behaviour hota hai or multiple variable  linked hai kisi prakar se that is object
// let person={
//     fname="prachi";
//     age:22;
// }; here person is a name of a variable and fname and age sre properties of that vavriable person 
//->array =  list  of items are called array(there can be different type datatype in array)
//->functions = 
//
 
//OPERATORS
//->ARITHMATIC OPERATOR => + - * / %  **
//->ASSIGNMENT OPERATOR =>  =  
//->COMPARISON OPERATOR=> > < >= <= === !==  ans return -> true or false
//->BITWISE OPERATOR => bitwise and , bitwise or
//->LOGICAL OPERATOR=> and or not
//a=a*3 == a*=3
//preincreament = ++x -> increament the value then use the value
//postincreament = x++ -> use the value then increament the value
//loose equalty ==
//strict equaltiy=> ===
//ternary operator (conditional operator)->
// console.log(false|| false) //false is printed
// console.log(false|| true) //true is printed
// console.log(false|| "prachi")//prachi is printed
// console.log(false|| "prachi"||true) //prachi is printed
//falsy value are those which give results like false , undefined ,0 , null , "", nan
//truthy valse are those which are not falsy



