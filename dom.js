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
// document.removeEventListener('click', toprintpracis );

//print an event object or the data that provide wher and when etc user has clicked on the site
//can get event specific data from this method

 let content = document.querySelector("#wrap");
 content.addEventListener('click', function(event)
 {
    console.log(event);
 })



//brute force code
//  //this is the javascript to add a div tag
// let newdiv = document.createElement('div');
// for(let i=0;i<10;i++)
// {
//    //This adds a paragraph in a div which is created above
//    let newpara = document.createElement('p');
//    //adds a text in paragraph 
//    newpara.textContent = 'this is the paragraph' + i;
//    // adds a function to each paragraph that if anyone clicks the paragraph 'hello it worked ' is printed on console
//    newpara.addEventListener('click', function(event){
//       console.log('hello it worked'); // there are 10 function created for each paragragh line
//    });
//    //this tells that newpara is the child of the div
//    newdiv.appendChild(newpara);

// }
// //the div which is created is the child of the document or the parent 
// document.body.appendChild(newdiv);



//lets optimize the code - now there is one function for all the paragraph tags
 //this is the javascript to add a div tag
// let newdiv = document.createElement('div');
// function func(event){
//    console.log('hello it worked'); // there are 10 function created for each paragragh line
// }
// for(let i=0;i<10;i++)
// {
//    //This adds a paragraph in a div which is created above
//    let newpara = document.createElement('p');
//    //adds a text in paragraph 
//    newpara.textContent = 'this is the paragraph' + i;
//    // adds a function to each paragraph that if anyone clicks the paragraph 'hello it worked ' is printed on console
//    newpara.addEventListener('click', func);
//    //this tells that newpara is the child of the div
//    newdiv.appendChild(newpara);

// }
// //the div which is created is the child of the document or the parent 
// document.body.appendChild(newdiv);



// //now lets add this addeventlistner in the div
// //now where ever we click inside the div function will work for sure even its the empty space in the div
//  //this is the javascript to add a div tag
//  let newdiv = document.createElement('div');
//  function func(event){
//     console.log('hello it worked'); // there are 10 function created for each paragragh line
//  }
//  newdiv.addEventListener('click', func);
//  for(let i=0;i<10;i++)
//  {
//     //This adds a paragraph in a div which is created above
//     let newpara = document.createElement('p');
//     //adds a text in paragraph 
//     newpara.textContent = 'this is the paragraph' + i;
//     //this tells that newpara is the child of the div
//     newdiv.appendChild(newpara);
 
//  }
//  //the div which is created is the child of the document or the parent 
//  document.body.appendChild(newdiv);



//  //now lets add this addeventlistner in the div and make it like by only clicking on the paragraph text only
// //now where ever we click inside the div function will work for sure even its the empty space in the div
//  //this is the javascript to add a div tag
//  let newdiv = document.createElement('div');
//  function func(event1){
//     console.log('Para is '+ event1.target.textContent);
//  }
//  newdiv.addEventListener('click', func );
//  for(let i=0;i<10;i++)
//  {
//     //This adds a paragraph in a div which is created above
//     let newpara = document.createElement('p');
//     //adds a text in paragraph 
//     newpara.textContent = 'this is the paragraph' + i;
//     //this tells that newpara is the child of the div
//     newdiv.appendChild(newpara);
 
//  }
//  //the div which is created is the child of the document or the parent 
//  document.body.appendChild(newdiv);


// to specify to perform a certain function on clicking on the particulat area we use nodename property
let element11 = document.querySelector('#wrap2');
function wrap2func(event2)
{
   if(event2.target.nodeName==='SPAN'){
      console.log('clicked in span tag ' + event2.target.textContent);

   }
   else{
      console.log('kuch bhi');
   }
}
element11.addEventListener('click', wrap2func);