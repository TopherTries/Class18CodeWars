//8 kyu
//Incorrect division method. This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
//JavaScript:
const solve = (x, y) => (x/y)

//8 kyu
//Grade book
//Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

//Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'
//Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  let gradePointAverage = ((s1+s2+s3) / 3)
  
  if(gradePointAverage >= 90){
    return 'A'
  }else if(gradePointAverage >= 80 && gradePointAverage < 90){
    return 'B'
  }else if(gradePointAverage >= 70 && gradePointAverage < 80){
    return 'C'
  }else if(gradePointAverage >= 60 && gradePointAverage < 70){
    return 'D'
  }else if(gradePointAverage >= 0 && gradePointAverage < 60){
    return 'F'
  }
}

//8 kyu
//Return Negative. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//JavaScript:
function makeNegative(num) {
  if(num > 0){
  return num * -1;
    }else{
  return num;
    }
}

//8 kyu
Calculate BMI
//Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"
//JavaScript:

function bmi(weight, height) {
  let index = (weight/height**2)
  if(index <= 18.5){
    return "Underweight"
  }else if(index <= 25.0){
    return "Normal"
  }else if(index <= 30.0){
    return "Overweight"
  }else if(index > 30){
    return "Obese"
  }
}
