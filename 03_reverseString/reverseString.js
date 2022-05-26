const reverseString = function(string) {
    if (string == ""){
        return "";
    } else{
        let strArr = string.split("");
        strArr.reverse();
        return strArr.join("")
    }
};


// Do not edit below this line
module.exports = reverseString;
