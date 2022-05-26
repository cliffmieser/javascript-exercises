const removeFromArray = function() {
    let storedArray = arguments[0];
    let valueToRemove = arguments[1];
    let newArray = [];
    for (let i = 0; i < storedArray.length; i++ ){
        if (storedArray[i] != valueToRemove){
            newArray.push(storedArray[i]);
        }
    }
    return newArray;


};

//First test passed


// Do not edit below this line
module.exports = removeFromArray;
