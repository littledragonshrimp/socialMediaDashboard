const slider = document.getElementById("toggleSlider");
const checkbox = document.getElementsByClassName("checkbox");
const colorNumber = document.getElementsByClassName("addLossNumber");
const percent = document.getElementsByClassName("percentage");
const blocks = document.getElementsByClassName("block");
var followers = document.getElementById("followers");
var themeSwitchInput = document.querySelector("#toggle");
var body = document.querySelector("body");

//change to dark mode

// function slideClicked() {
//   if (
//     slider.style.background !==
//     "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
//   ) {
//     slider.style.background =
//       "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
//     console.log("clicked");
//   } else if (
//     slider.style.background ==
//     "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
//   ) {
//     slider.style.background = "white";
//     console.log("else clicked");
//   }
// }
let isSliderActive = false;

function slideClicked() {
  if (!isSliderActive) {
    slider.style.background =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    isSliderActive = true;
  } else {
    slider.style.background = "hsl(230, 22%, 74%)";
    slider.isSliderActive = false;

    console.log("Clicked: white");
  }
}

slider.addEventListener("click", slideClicked);

///color input change
themeSwitchInput.addEventListener("click", function () {
  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    followers.classList.remove("darkMode");
  } else {
    body.classList.add("darkMode");
    followers.classList.add("darkMode");
  }
});

function coloredNum() {
  for (let a = 0; a < colorNumber.length; a++) {
    const addLossNum = colorNumber[a];
    if (addLossNum.textContent.includes("-")) {
      addLossNum.classList.add("negative");
      addLossNum.style.color = "$red";
      addLossNum.textContent = addLossNum.textContent.replace("-", "");
      console.log("has negative numbers");
    }
  }
}
coloredNum();

const percentElements = Array.from(
  document.getElementsByClassName("percentage")
);

function coloredPercentage() {
  percentElements.forEach((percent) => {
    if (percent.textContent.includes("-")) {
      percent.classList.add("negative");
      percent.textContent = percent.textContent.replace("-", "");
      console.log("percentage has negative numbers");
    }
  });
}

coloredPercentage();
