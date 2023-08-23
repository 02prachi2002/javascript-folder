//Asyunchronous code - execute only when the call stack is empty
setTimeout(function(){
    console.log('third i am asyun code')
}, 3000);
function sync()
{
 console.log('first');
}
sync();
console.log('second');
//API - application programming interface
//Its a way to connect with backend
//features of asyun code
//better error handling
//clean code
//debugging


//Promises-koi bhi command ya function ya kuch bhi hum parallely execute karwana chahete hai background mai
//promise has two phases -> resolve  --> reject
//then we use promise
//sync promise example ---  
let merapromise  = new Promise(function(resolve , reject){
    console.log('i am inside promise');
    resolve(2);//by using resolve we use to mark th epromise -> fulfilled
});
console.log('pehle promise');

//for reject
let mypromise = new Promise (function (resolve,reject)
{
    setTimeout(function(){
        console.log('i am inside promise');
    },5000);
    reject (new Error('this is an error when promise doesnt resolve'))
});
console.log('promise');