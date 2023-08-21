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
//then we use promise
//sync promise example ---  
let merapromise  = new Promise(function(resolve , reject){
    console.log('i am inside promise');
    resolve(2);
});
console.log('pehle promise');
