let button = document.querySelectorAll(".buttons");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");

let alignButtons = document.querySelectorAll(".align");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
]

const initializer = () =>{
  highlightActiveButtons(alignButtons, true);
  highlightActiveButtons(scriptButtons, true);
  highlightActiveButtons(formatButtons, false);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  for (let i = 1; i <= 10; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  //default size
  fontSizeRef.value = 3;
};

const highlightActiveButtons = (buttonType, autoRemove) => {
    buttonType.forEach((button) => {
      button.addEventListener("click", () => {
        //   console.log("clicked");
        //autoRemove = true means only one button should be highlighted at a time

        if (autoRemove) {
            let alreadyActive = false; //declare a boolean variable
            //If currently clicked button is already active
            if (button.classList.contains("active")) {
              alreadyActive = true;
            }
  
            //Remove highlight from other buttons
            highlightActiveButtonsRemover(buttonType);
            
            if (!alreadyActive) {
              //highlight clicked button
              button.classList.add("active");
            }
        } 

        else {
          //if other buttons can be highlighted
          button.classList.toggle("active");
        }
      });
    });
  };
  const highlightActiveButtonsRemover = (buttonType) =>{

    buttonType.forEach((button) =>{
        button.classList.remove("active");
    })
  }
  window.onload = initializer();
const modifyText = (command,defaultUi,value) =>{
    document.execCommand(command,defaultUi,value);
}
button.forEach((specificbutton) =>{
    specificbutton.addEventListener("click", () =>{
        modifyText(specificbutton.id,false, null);
    })
})