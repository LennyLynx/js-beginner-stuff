 //create the calculateBMI function
function calculateBMI() {
    
    // retrieve weight
    let weightInput = document.getElementById("weight").value;

    
    let heightInput = document.querySelector(".js-height").value;

    // get the result display area
    let resultElement = document.getElementById("result");

    let weight = parseFloat(weightInput);
    let height = parseFloat(heightInput);

    //  validate that inputs 
    if (weightInput !== "" && heightInput !== "" && weight > 0 && height > 0) {

        // calculate thee BMI
        let bmi = weight / (height * height);

        // catagory omesz
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // display result inside the webpage using DOM
        resultElement.innerHTML = "Your BMI: " + bmi.toFixed(2) + "<br>Category: " + category;

    } else {
        // error message if inputs are invalid
        resultElement.innerHTML = "Please enter a valid weight and height.";
    }
}

// create clearBMI function to clear inputs and result
function clearBMI() {
    document.getElementById("weight").value = "";
    document.querySelector(".js-height").value = "";
    document.getElementById("result").innerHTML = "";
}