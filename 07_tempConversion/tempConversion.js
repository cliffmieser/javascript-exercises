const ftoc = function(deg) {
  //takes deg and converts to Celsius
  let convertedDeg = (deg - 32) * (5/9);
  let rounded = Math.round(convertedDeg * 10) / 10;
  return rounded;


};

const ctof = function(deg) {
  //takes deg and converts to Fahrenheit
  let convertedDeg =  (deg * (9/5)) + 32;
  let rounded = Math.round(convertedDeg * 10) / 10;
  return rounded;

};



// let result = ftoc(32);
// console.log(result);

// result = ctof(0);
// console.log(result);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
