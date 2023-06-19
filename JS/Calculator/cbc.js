function calculateCalories() {
  var weight = parseFloat(document.getElementById("weight").value);
  var activity = parseFloat(document.getElementById("activity").value);
  var duration = parseFloat(document.getElementById("duration").value);
  
  var MET = getMET(activity);
  var caloriesBurned = weight * MET * duration / 60;
  
  document.getElementById("result").innerHTML = "Approximate calories burned: " + caloriesBurned.toFixed(2) + " cal";
}

function getMET(activity) {
  switch (activity) {
    case 1.8: // Walking (5 km/h)
      return 3.5;
    case 5.0: // Cycling (12-14 km/h)
      return 6.8;
    case 8.0: // Running (8 km/h)
      return 8.0;
    default:
      return 0;
  }
}
