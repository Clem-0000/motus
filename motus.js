var wordToFind = "actuel";
var arrayWordToFind = ["a", "c", "t", "u", "e", "l"];
var userWord = [];
var wordLength = wordToFind.length; // length of the word use for number of input to display
const userChance = 6;
const colorForTab = {
  colorBasic: "rgb(2 132 199)",
  colorWrongValue: "rgb(12 76 112)",
  colorGoodPlace: "rgb(239 68 68)",
  colorWrongPlace: "rgb(234 179 8)",
};

/**
 * récupère les valeurs saisies par l'utilisateur -> obsolete
 */
const getValueSubmit = () => {
  /* for (let i = 0; i < wordLength; i++) {
    userWord.push(document.getElementById(i).value);
  } */
  console.log(userWord);
};

const displayInput = () => {
  var container = document.getElementById("containerInput"); // on met l'ID de la div qui va contenir tous les inputs
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < wordLength; i++) {
    var input = document.createElement("input");
    input.type = "text"; // type de l'input
    input.id = i; // permet d'avoir un id différent pour chaque input pour pouvoir récupérer les valeurs
    input.className = "inputMotus"; // permet de mettre un style sur l'input
    input.maxLength = "1";
    input.value = userWord[i] != undefined ? userWord[i] : null;
    input.style.backgroundColor =
      userWord[i] != undefined
        ? colorForTab.colorBasic
        : colorForTab.colorWrongValue;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

// faire fonction qui remet à 0 les inputs

const compareLetter = () => {
  // appeler la méthode display input pour afficher une nouvelle salve d'input. faire en sorte d'avoir value = lettre bien placé
  userWord.forEach((userLetter, index) => {
    if (arrayWordToFind.includes(userLetter, index)) {
      console.log(
        "🚀 ~ file: motus.js ~ line 42 ~ userWord.forEach ~ userLetter",
        userLetter
      );
    }
  });
};

/**
 * *permet de récupérer les valeurs alphanumérique [a-Z] saisies par l'utilisateur et l'ajoute à la liste contenant le mot saisie par l'utilisateur
 */
window.addEventListener("keydown", (event) => {
  if (
    event.key != "" &&
    event.code != "KeyM" &&
    (userWord.length < wordLength || event.key == "Backspace") &&
    (event.code.match("Key") ||
      event.key == "Backspace" ||
      event.code.match("Semicolon") ||
      event.key == "Enter")
    // remove click value et autre saisie qu'un delete entrer ou une lettre
  ) {
    if (event.key == "Backspace") {
      userWord.pop();
    } else if (event.key == "Enter") {
      //call function compareLetter
    } else {
      userWord.push(event.key);
    }
    displayInput();
    console.log(event);
  }
});
