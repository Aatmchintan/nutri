// BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    if (isNaN(weight) || isNaN(height) || height === 0) {
      document.getElementById('bmi-result').innerText = "Please enter valid values.";
      return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').innerText = `Your BMI: ${bmi}`;
  }
  
  // Calorie Calculator
  function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight-cal').value);
    const height = parseFloat(document.getElementById('height-cal').value);
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      document.getElementById('calorie-result').innerText = "Please enter valid values.";
      return;
    }
    const calories = (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
    document.getElementById('calorie-result').innerText = `Daily Calories: ${calories} kcal`;
  }