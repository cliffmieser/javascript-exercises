const removeFromArray = function() {
    // let storedArg = Array.from(arguments[0]);
    let storedArray = arguments[0]; 
    console.log(storedArray);
    // for (let i = 0; i < storedArray; i++ )
    //     if (i == arguments[1]){
    //         let removed = storedArray.splice(arguments[1], 1);
    //         return storedArg;
    //     } 

};
removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
