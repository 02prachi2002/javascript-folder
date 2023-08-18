//WINDOW
//->window is a global object
//->this is created by browser
//-> it is repreasented by browser window
//It is a top level entity
// there are three parts of window 
// ->-> DOM
//->-> BOM
//->-> JS Core
//can control anything using browser window

//DOM-Document object model
//it converts the html code to js object 
//BOM-Browser object Model
//content ko chod ke page ke agar javascript kisi browswer se connect karna chahti hai toh BOM usmai help karta hai


//Dom - is tree like model
//having parent 
//to find the element in the html document there are three ways:
//1>getElementbyId()
//2>getElementbyClassName()
//3>getElementbyTagNaame()
//things to keep in mind:
//1) both methods use document object
//2) both return multiple items
//3) the list returned is not am Array
//QUERY SELECCTOR ->it selects the class, id , tag name and prints its first object or single object.
//let a = querySelector(".classname")
//for multiple selection
//use queryselectorall
//inner html
//outer html
//.text contex
//.inner text
//create element


// document.addEventListener('click', function()
// {
//     console.log("prachi");
// })
//  document --> specifies that kaha eventlistner lagaya ja raha hai
//  click --> specifies that ki kya karne par add eventlistner vala function activate hoga
//  function()--> it occurs when we click on document 

// to change the style by clicking on event 
// let a = document.querySelector('h1');
// a.addEventListener('click', function()
// {
//     a.style.background = 'pink';
// })

// another way to write the above code
// function toprintpraci()
// {
//     console.log("prachii");
// }
// document.addEventListener('click', toprintpraci );

//remove event listner
// function toprintpracis()
// {
//     console.log("isha");
// }
// document.addEventListener('click', toprintpracis );

//print an event object or the data that provide wher and when etc user has clicked on the site
//can get event specific data from this method

 let content = document.querySelector("#wrap");
 content.addEventListener('click', function(event)
 {
    console.log(event);
 })

