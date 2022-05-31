const sumAll = function(a, b){
    // creates an array from start 'a', to end 'b'
    // adds up all numbers from a to b
    // returns the result of the sum
    let arrayOfNums = [];
    let sumOfNums = 0;

    if ((a < 0 || b < 0) || (typeof a !== 'number' || typeof b !== 'number')){
        return sumOfNums = "ERROR";
    } else if (a > b){ //If a is greater than b
        for (let i = a; i>= b; i--){
            arrayOfNums.push(i);
        }
        //gets sum of numbers in array
        for (let i in arrayOfNums){
        sumOfNums += arrayOfNums[i];
    }
        return sumOfNums;

    } else if (a < b) { //If a is less than b
        for (let i = a; i <= b; i++){
            arrayOfNums.push(i);
        }
        //gets sum of numbers in array
        for (let i in arrayOfNums){
            sumOfNums += arrayOfNums[i];
        }

        return sumOfNums;

    }
};


// Do not edit below this line
module.exports = sumAll;
