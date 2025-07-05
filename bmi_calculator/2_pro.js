const form=document.querySelector('form')
let category = "";

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0 || height===' ' || weight === '') {
        alert('Please enter valid weight and height values.');
        return;
    }
    const bmi = (weight /((height * height))).toFixed(2);

   // Determine BMI Category
    if (bmi < 18.6) {
      category = "Underweight";
      results.style.color = "blue";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal";
      results.style.color = "green";
    } else {
      category = "Overweight";
      results.style.color = "red";
  }

  
  results.innerText = `Your BMI is ${bmi} — You are ${category}.`;
  });