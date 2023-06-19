function calculateCalories() {
  // Get the input values from the HTML form
  var weightInput = document.getElementById('weight');
  var durationInput = document.getElementById('duration');
  var activitySelect = document.getElementById('activity');

  // Convert the input values to numbers
  var weight = parseFloat(weightInput.value);
  var duration = parseInt(durationInput.value);
  var activity = parseFloat(activitySelect.value);

  // Check if the input values are valid
  if (isNaN(weight) || isNaN(duration) || isNaN(activity) || weight <= 0 || duration <= 0 || activity <= 0) {
    document.getElementById('result').textContent = 'Invalid input. Please enter valid weight, duration, and select an activity.';
    return;
  }

  // Calculate calories burned
  var caloriesBurned = weight * duration * activity;

  // Display the calculated calories burned
  document.getElementById('result').textContent = 'Calories Burned: ' + caloriesBurned.toFixed(2);
}
