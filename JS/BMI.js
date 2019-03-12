const userHeight = document.querySelector("#cm");
const userWeight = document.querySelector("#kg");
const form = document.querySelector("form");
const userResult = document.querySelector(".result");
const bmiImage = document.querySelector(".bmi-image");

console.log(bmiImage.src);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let bmi = userWeight.value / ((userHeight.value/100) * (userHeight.value/100));
  console.log(bmi);
  bmi = bmi.toFixed(1);
  if (bmi < 18.5) {
    
    userResult.innerHTML = "hey your Underweight";
    bmiImage.setAttribute("src", "./assets/images/underweight.jpg");

  } else if (bmi >= 18.5 && bmi < 24.9) {
    userResult.innerHTML = "hey your Normal";
    bmiImage.setAttribute("src", "./assets/images/normal.jpg");
    
  } else if (bmi >= 25 && bmi <= 29.9) {
    userResult.innerHTML = "hey your Overweight";
    bmiImage.setAttribute("src", "./assets/images/overweight.jpg");
    
  } else {
    userResult.innerHTML = "your so fat";
    bmiImage.setAttribute("src", "./assets/images/obese.jpg");

  }

  userWeight.value = "";
  userHeight.value = "";
  userWeight.focus();
});
