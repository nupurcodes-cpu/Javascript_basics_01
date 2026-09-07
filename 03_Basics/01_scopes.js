/* var c = 300
let a = 400
if(true){
    let a = 10
    const b = 30
    console.log("Inner:", a);
}

console.log(a); //Inner: 10
console.log(b); //b is not defined
console.log(c); //400
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Nested Functions
//(chote bacche bado se ice-cream chinn sakte hai, lekin bade choto se ice-cream chin le toh bohot kharba lagta hai)
function one(){
    const username = "Nupur";

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    //console.log(websites);  //websites is not defined

    // two()      //Nupur
}

one()    //no o/p after commenting two()

//++++++++++++++++++++++++++++ interesting (hoisting) +++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))  //6 (This is called hoisting)

function addOne(num){
    return num + 1
}


addTwo(5)  //Cannot access 'addTwo' before initialization (because we put function in the variable, therfore hoiting did not work)

const addTwo = function(num){
    return num + 2
}