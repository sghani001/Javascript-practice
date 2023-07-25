// task1

// calculate BMI

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    console.log(bmi);
}

bmiCalculator(65, 1.8);
