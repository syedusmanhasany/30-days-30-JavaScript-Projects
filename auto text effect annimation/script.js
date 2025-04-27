const headingEL = document.querySelector(".container");

const wordsArr = ["Web Developer", "Web Designer", "Backend Developer", "Mobile App Developer", "Instructor"];
let arrIndex = 0;
let characterIndex = 0;
updateWords()

function updateWords() {
    characterIndex++
    headingEL.innerHTML = `<h1>I am ${wordsArr[arrIndex].slice(0, 1) === "I" ? "an" : "a"} <p>${wordsArr[arrIndex].slice(0, characterIndex)}</p></h1>`;
    if (characterIndex === wordsArr[arrIndex].length) {
        characterIndex = 0;
        arrIndex++;
    }
    if (arrIndex === wordsArr.length) {
        arrIndex = 0;
    }
    setTimeout(updateWords, 200)
}