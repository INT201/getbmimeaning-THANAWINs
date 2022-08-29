const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/height**2
}
function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight,height)
  return BMI>18.5?BMI>24.9?"Overweight":"Normal weight":"Underweight"
}
module.exports = getBMIMeaning
