const slider = document.getElementById("toggleSlider");
const colorNumber = document.getElementsByClassName("addLossNumber");
const percent = document.getElementsByClassName("percentage");

function slideClicked() {
  if (
    slider.style.background !==
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
  ) {
    slider.style.background =
      "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    console.log("clicked");
  } else {
    slider.style.background = "$white";
    console.log("else clicked");
  }
}

slider.addEventListener("click", slideClicked);

// function coloredNum() {
//   if (colorNumber[3].textContent.includes("-")) {
//     colorNumber[3].classList.add("negative");
//     console.log("has negative numbers");
//   }
// }
//
// coloredNum();

const colorNumbers = document.getElementsByClassName("addLossNumber");

function coloredNum() {
  for (let i = 0; i < colorNumbers.length; i++) {
    const addLossNum = colorNumbers[i];
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

// function coloredNum() {
//   for (let i = 0; i < colorNumbers.length; i++) {
//     const addLossNum = colorNumbers[i];
//     if (addLossNum.textContent.includes("-")) {
//       addLossNum.classList.add("negative");
//       console.log("has negative numbers");
//     }
//   }
// }
//
// coloredNum();
