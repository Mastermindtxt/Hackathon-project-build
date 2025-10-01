let navBtn = document.querySelector("#header-menu-btn");
let menuArea = document.querySelector(".menu-area");
let menuPosition = document.querySelector(".position-menu");
let menuAreaDisable = document.querySelector(".menu-disable-area");
let menuAreaDisableTrue = document.querySelector(".disable-area-display");
let scanBtn = document.querySelector(".btn");
let uploadBtn = document.querySelector(".upload");
let hiddenFileInput = document.getElementById("hiddenFileInput");
let textInput = document.getElementById("text-input");
let frontTextAreA = document.querySelector(".front-text-area");
let frontInfoTextArea = document.querySelector(".front-info-text-area");
let frontDownTextArea = document.querySelector(".front-down-text-area");
let frontImageArea = document.querySelector(".front-image-area");
let mainArea = document.querySelector(".main-before-click");


scanBtn.addEventListener("click", () => {

    let inputText = document.getElementById("text-input").value;
    frontInfoTextArea.classList.add("front-info-text-area-after-click");
    frontDownTextArea.classList.remove("front-down-text-area");
    frontDownTextArea.classList.add("front-down-text-area-after-click");
    frontTextAreA.classList.remove("front-text-area");
    frontTextAreA.classList.add("front-text-area-after-click");
    frontImageArea.classList.remove("front-image-area");
    frontImageArea.classList.add("front-image-area-after-click");
    uploadBtn.classList.remove("upload");
    uploadBtn.classList.add("btn-after-click");
    mainArea.classList.add("main-after-click");
    console.log(frontTextAreA.classList);
});

let clickedBtn = 0;
navBtn.addEventListener("click", () => {
    menuArea.classList.remove("position-menu");
    menuAreaDisable.classList.remove("disable-area-display");
    clickedBtn = 1;
    console.log("menuArea.classlist", menuArea.classList);
});
menuAreaDisable.addEventListener("click", () => {
    menuArea.classList.add("position-menu");
    menuAreaDisable.classList.add("disable-area-display");
    clickedBtn = 1;
    console.log("menuArea.classlist", menuArea.classList);
});


// When button clicked → trigger hidden file input
uploadBtn.addEventListener("click", () => {
    hiddenFileInput.click();
});

// When a file is chosen → update the text input with file name
hiddenFileInput.addEventListener("change", () => {
    if (hiddenFileInput.files.length > 0) {
        textInput.value = hiddenFileInput.files[0].name;
    }
});