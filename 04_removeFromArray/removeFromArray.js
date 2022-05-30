const removeFromArray = function(arg1, ...otherArgs) {
    // Takes an array and some other arguments
    // Removes other arguments from the given array
    // let storedArray = Array.from(arguments[0]);
    let storedArray = arg1;
    let valuesToRemove = otherArgs;
    console.log(valuesToRemove);
    let newArray = [];
    for (let i = 0; i < storedArray.length; i++ ){
        if (storedArray[i] != valuesToRemove){
            newArray.push(storedArray[i]);
        } else{
            continue;
        }
    }
    return newArray;

};

let NewArray = removeFromArray([1, 2, 3, 4], 3, 2);
console.log(NewArray);

//First test passed
// Turning the arguments into a real array:
// let storedArray = Array.from(arguments[0]);
// let valuesToRemove = arguments[1];


// Do not edit below this line
module.exports = removeFromArray;
