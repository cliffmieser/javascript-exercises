const leapYears = function(year) {
    //Takes a year and decides if it is a leap year or now
    if ((year % 4 == 0 ) && (!(year % 100 == 0) || (year % 400 == 0))){
        //is a leap year
        leapYear = true;
        console.log(`The year ${year} is a leap year.`)
        return leapYear;
    } else{
        leapYear = false;
        console.log(`The year ${year}  NOT a leap year.`);
        return leapYear;
    }

};

let leapYear = false;

// let yearCheck = leapYears(2004); //true
// console.log(yearCheck)

// yearCheck = leapYears(1900); //false
// console.log(yearCheck)

// yearCheck = leapYears(1600); //true
// console.log(yearCheck)

// Do not edit below this line
module.exports = leapYears;
