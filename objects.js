//OBJECTS

// let a = {};

//here a is an empty object 
//these brackets are called object literals

// let rec = {
//     len:1,
//     bre:2
// };

//rec is the object
//len, bre are properties
//{} -> these brackets are called the object literals 
console.log("Let's Start");
let rectangle = {
    lenght :2,
    breadt:3,

    draw: function() {
        console.log('draw');
    }
};

//to create a function
//function -> is program which do a well defined task

//factory function
//one way
function cretarectangle()
{
    //return an object
    return rectangle = {
        lenght :2,
        breadt:3,
    
        draw: function() {
            console.log('draw');
        }
    };
}
let obj1= cretarectangle();

//way two
function cretarectangle2(len , bre)
{
    //return an object
    return rectangle = {
        lenght :len,
        breadt:bre,
    
        draw: function() {
            console.log('draw');
        }
    };
}
let obj2= cretarectangle(5,6);

//way three
function cretarectangle3(len , bre)
{
    //return an object
    return rectangle = {
        len,
       bre,
    
        draw: function() {
            console.log('draw');
        }
    };
}
let obj3= cretarectangle(15,16);

//now only one line of function call of cretarectangle will create a whole object at once 

//constructor function
//this refers to the current object we are working on
//fisrt letter should be capital
function Cretarectangle4(len , bre)
{
    
        this.len,
       this.bre,
    
        this.draw= function() {
            console.log('draw');
        }
    
}
//object creation
let obj4= cretarectangle(15,16);
//add a new property
obj4.color = "qwerty";
console.log(obj4);
//delete a property
delete obj4.color;
console.log(obj4);
//function is also an object

//primitive datatype mai variable ki copy banti hai 
//refrence type mai same address ko point karte hai
//primitives are copied by value 
//primitive are cpoied by address

//for-in iterate
let rectangle12 = {
    len:2,
    bre:3
};
for(let key in rectangle12){
    //key are reflected through key variable
    //values are reflected through rectangle[key]
    console.log(key, rectangle12[key])
}

//for-of is used for iteration in iterables i.e. maps arrays
//to check whether a property is present in the function or not
//example -> here we are checking whether the color property exit in the function rectangle or not 
if ('color' in rectangle)
{
    console.log('present');
}
else{
    console.log('absent');
}
//object cloning
 //garbage collector
 //we have no control over it
 //it collects the unused and useless variables and free the memory allocated to them


