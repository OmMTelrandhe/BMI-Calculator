let btn = document.getElementById("calculate");

btn.addEventListener("click", () => {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter valid values");
        return;
    }

    // BMI = w in kg and height in  m

    height = height / 100
    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("bmi").innerText = bmi;

    let Cat = document.getElementById("status");
            if (bmi < 18.5) {
                Cat.innerText = "Underweight";
                Cat.style.color = "darkgoldenrod";
                Cat.style.fontWeight = "bold";
                Cat.style.fontSize = "25px";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                Cat.innerText = "Normal";
                Cat.style.color = "Darkgreen";
                Cat.style.fontWeight = "bold";
                Cat.style.fontSize = "25px";
            } else if (bmi >= 25 && bmi <= 29.9) {
                Cat.innerText = "Overweight";
                Cat.style.color = "lightcoral";
                Cat.style.fontWeight = "bold";
                Cat.style.fontSize = "25px";
            } else {
                Cat.innerText = "Obese";
                Cat.style.color = "darkred";
                Cat.style.fontWeight = "bold";
                Cat.style.fontSize = "25px";
            }


})



