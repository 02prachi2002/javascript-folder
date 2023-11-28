const countValue = document.getElementById("counter");

function addition(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function subtraction(){
        // get the vlue from UI
       let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};