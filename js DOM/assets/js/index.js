"use strict";


const alertInput = document.getElementById("alertInput") 
const buttonClick = document.getElementById("buttonClick")
alertInput.addEventListener("keypress", buttonClickHandler);

function buttonClickHandler(){
    console.log(alertInput.value);

}

buttonClick.addEventListener("click", clickButton)

function clickButton(){
    
    buttonClick.value = alertInput.value;

}




const imageContainer = document.getElementById("imageContainer");
const imageOne =document.getElementById("imageOne");
const imageTwo = document.getElementById("imageTwo")
imageContainer.addEventListener("click", imageContainerHover);

function imageContainerHover(){
    imageContainer.removeChild(imageOne);
}