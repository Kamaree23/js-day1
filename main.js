// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


function setAlarm(employed, vacation){
    if (employed === true && vacation === false){return true}
      else{return false }
    };




// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function(l , w) {
    if(l == w){return l*w}else{return (l*2)+(w*2)}
    };    



//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(dog_string, dog_names){
    for(let i = 0; i < dog_names.length; i++){ 
        let j = dog_names[i].toLowerCase();  
        let x = dog_string.toLowerCase(); 
        if (x.includes(j)){
            // console.log(dog_string.includes(dog_names[i]))
            console.log('Matched dog_names');
        } else {
            console.log('No Matches');
        };
    };
};

console.log(findWords(dog_string, dog_names))

//-----------------------------------------------------------------
function findWords(dogS, dogA){

    for(i of dogA){
        if (dogS.toLowerCase().includes(i.toLowerCase())){
            console.log("Matched dog_names")
        }
        else{
            console.log("No Matches");
        };
    };
};

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = []

function replaceEvens(){
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            arr.push('even index')
        } else if (i % 2 === 0){
            arr.push('even index')
        } else {
            arr.push(array[i]);
        };
    };
    console.log(arr)
};

replaceEvens()


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]