let button = document.querySelectorAll(".buttons");

let fontName = document.getElementById("font-name-button");
let fontSizeRef = document.getElementById("font-size-button");
let writingArea = document.getElementById("content");

let alignButtons = document.querySelectorAll(".align");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontlist = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
]
const initializer = () =>{
  highlighter(alignButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);
}

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
      button.addEventListener("click", () => {
          console.log("clicked");
        //needsRemoval = true means only one button should be highlight and other would be normal
        if (needsRemoval) {
          let alreadyActive = false;
          //If currently clicked button is already active
          if (button.classList.contains("active")) {
            alreadyActive = true;
          }
          //Remove highlight from other buttons
          highlighterRemover(className);
          if (!alreadyActive) {
            //highlight clicked button
            button.classList.add("active");
          }
        } else {
          //if other buttons can be highlighted
          button.classList.toggle("active");
        }
      });
    });
  };
  window.onload = initializer();
