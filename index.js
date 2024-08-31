const form  = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.innerHTML = "Please provide valid data";
        results.style.backgroundColor = ""; 
        return;
    }

    const bmi = weight / ((height * height) / 10000);
    let category = '';

    if (bmi < 18.6) {
        category = 'Under Weight';
        results.style.backgroundColor = "#f8d7da";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal Range';
        results.style.backgroundColor = "#d4edda";
    } else {
        category = 'Overweight';
        results.style.backgroundColor = "#fff3cd";
    }

    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are categorized as ${category}`;
    
});