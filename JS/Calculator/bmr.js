function calculateBMR() {
    // Get the input values from the HTML form
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var ageInput = document.getElementById('age');
    var genderSelect = document.getElementById('gender');
  
    // Convert the input values to numbers
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var age = parseInt(ageInput.value);
  
    // Check if the input values are valid
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
      document.getElementById('result').textContent = 'Invalid input. Please enter valid weight, height, and age.';
      return;
    }
  
    // Get the BMR calculation constants based on gender
    var bmrConstant = (genderSelect.value === 'male') ? 66.47 : 655.1;
  
    // Calculate BMR
    var bmr = bmrConstant + (13.75 * weight) + (5 * height) - (6.75 * age);
  
    // Display the calculated BMR
    document.getElementById('result').textContent = 'BMR: ' + bmr.toFixed(2) + ' calories';
  }
  