function calculateBMI() {
  // Get input values from the form
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  
  // Check if the input values are valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }
  
  // Calculate BMI
  var bmi = weight / (height * height) * 10000;
  
  // Determine weight status
  var weightStatus;
  if (bmi < 18.5) {
    weightStatus = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = "Healthy weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = "Overweight";
  } else {
    weightStatus = "Obese";
  }
  
  // Display the result
  document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Weight Status: " + weightStatus;
}
