console.log("let's Start");
//creation of object
let rectangle = {
    length: 1,
    breadth : 2
};
// object and method
let square ={
    length : 2,
    breadth : 6,
    daigram : function(){
        console.log("drawing square");
    }
};
//creation of method syntax 2
let square2 = {
    length :2,
    breadth:2,
    daigramm(){
        console.log("this is syntax 2 for creating the method.");
    }
};
//Factory function 
function createRectangle(){
    let rectanglenew={
        length :2,
        breadth:4,
        draw()
        {
            console.log("this is factory function.");
        }
    };
    return rectanglenew;
}
let rectangle3 = createRectangle();//this is the function call 
//with this one line function call a neew object called rectangle3 will be created

//syntax 2 ---> for externally applying the values in the new objcet
function createRectanglenew(len,bre){
    let rectanglenew2={
        length :len,
        breadth:bre,
        drawnew()
        {
            console.log("this is factory function.");
        }
    };
    return rectanglenew2;
}
let rectangle4 = createRectanglenew(67,34);

