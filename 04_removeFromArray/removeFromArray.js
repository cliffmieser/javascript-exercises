const removeFromArray = function(arg1, ...otherArgs) {
    // Takes an array and some other arguments
    // Removes other arguments from the given array
    // let storedArray = Array.from(arguments[0]);
    let storedArray = Array.from(arg1);
    let valuesToRemove = otherArgs;
    console.log(valuesToRemove);
    let newArray = storedArray.filter(item => !valuesToRemove.includes(item));
    return newArray;

};




// Do not edit below this line
module.exports = removeFromArray;
