"use strict";

const rootDiv = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("input");
const ul = document.createElement("ul");
const paragraph = document.createElement("p");
const slojnoSfantasy = [];

rootDiv.append(form);
form.append(input);
form.append(submit);

rootDiv.append(paragraph);
submit.type = "submit";

form.classList.add("classForm");


submit.addEventListener("click", (event) => {
    event.preventDefault()
/*     const arr = input.value.split(" ");
    const array = [];


    arr.map((item) => {
        if (item) {
            array.push(item);
        }
    })

    slojnoSfantasy.push(input.value);


    if (array.length < 3) {
        throw new RangeError("trulyalya");
    }
 */
    console.log(input.value);
    console.log(slojnoSfantasy);

    event.target.reset();

});
input.addEventListener("input", () => { paragraph.textContent = input.value });



