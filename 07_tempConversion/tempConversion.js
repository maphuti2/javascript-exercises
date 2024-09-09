const convertToCelsius = function(temp) {
  const degrees = (5/9) * (temp - 32);
  if (degrees < 0){
    return Math.round(degrees * 10) / 10;
  }
  return Math.round(degrees * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const fahr = (temp * 1.8) + 32;
  if (fahr < 0){
    return Math.round(fahr * 10) / 10;
  }
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
