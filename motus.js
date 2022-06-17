var wordToFind = "inanimes";
var arrayWordToFind = wordToFind.split("");
var userWord = [];
userWord.push(arrayWordToFind[0]);
var wordLength = wordToFind.length; // length of the word use for number of input to display
const userChance = 6;
const colorForTab = {
  colorBasic: "rgb(2 132 199)",
  colorWrongValue: "rgb(12 76 112)",
  colorGoodPlace: "rgb(239 68 68)",
  colorWrongPlace: "rgb(234 179 8)",
};

var compteurEnter = 0;
const divToDisplayInput = [
  "firstTry",
  "secondTry",
  "thirdTry",
  "fourthTry",
  "fifthTry",
  "lastTry",
];

/**
 ** permet d'afficher la ligne définitive lorsque l'utilisateur presse "entrer". ca permet de mettre les couleurs allouées à chaque lettre
 */
const displayLastInput = (colorToDisplay) => {
  var container = document.getElementById(
    "" + divToDisplayInput[compteurEnter] + ""
  ); // on met l'ID de la div qui va contenir tous les inputs
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < wordLength; i++) {
    var input = document.createElement("input");
    input.type = "text"; // type de l'input
    input.className = "inputMotus"; // permet de mettre un style sur l'input
    input.maxLength = "1";
    input.value = userWord[i] != undefined ? userWord[i] : null;
    input.style.backgroundColor = colorToDisplay[i];
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

const displayInput = () => {
  var container = document.getElementById(
    "" + divToDisplayInput[compteurEnter] + ""
  ); // on met l'ID de la div qui va contenir tous les inputs

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < wordLength; i++) {
    var input = document.createElement("input");
    input.type = "text"; // type de l'input
    input.className = "inputMotus"; // permet de mettre un style sur l'input
    input.maxLength = "1";
    if (i == 0) {
      input.value = arrayWordToFind[0];
      input.disabled;
      input.style.backgroundColor = colorForTab.colorGoodPlace;
    } else {
      input.value = userWord[i] != undefined ? userWord[i] : null;
      input.style.backgroundColor =
        userWord[i] != undefined
          ? colorForTab.colorBasic
          : colorForTab.colorWrongValue; // obsolete, mettre valeur du dictionnaire
    }

    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

/**
 * permet d'avoir la couleur relative à une lettre en fonction de sa présence dans le mot ou de sa bonne position
 */
const compareLetter = () => {
  colorToDisplay = []; //? va contenir la couleur corespondante à chaque lettre : bleu jaune rouge

  userWord.forEach((userLetter, i) => {

    if (
      arrayWordToFind.find((elem, idx) => elem === userLetter && idx == i) ===
      userLetter
    ) {
      colorToDisplay.push(colorForTab.colorGoodPlace);
    } else if (
      arrayWordToFind.find((elem) => elem === userLetter) === userLetter
    ) {
      colorToDisplay.push(colorForTab.colorWrongPlace);
      // mettre couleur mauvaise place place
    } else {
      colorToDisplay.push(colorForTab.colorWrongValue);
      //mettre couleur non présente dans le mot
    }
  });
  resultMotus();
  displayLastInput(colorToDisplay);
  compteurEnter += 1;
  console.log(
    "🚀 ~ file: motus.js ~ line 102 ~ compareLetter ~ compteurEnter",
    compteurEnter
  );
  userWord = [];
  userWord.push(arrayWordToFind[0]);
  displayInput();
};

/**
 * * permet d'envoyer l'utilisateur sur une page de victoire ou de défaite
 */
const resultMotus = () => {
  if (compteurEnter < 6 && wordToFind == userWord.join("")) {
    window.location.replace("http://127.0.0.1:5500/victoire.html");
  } else if (compteurEnter == 5 && wordToFind != userWord.join("")) {
    window.location.replace("http://127.0.0.1:5500/defaite.html");
  }
};

/**
 * *permet de récupérer les valeurs alphanumérique [a-Z] saisies par l'utilisateur et l'ajoute à la liste contenant le mot saisie par l'utilisateur
 */
window.addEventListener("keydown", (event) => {
  if (
    event.key != "" &&
    event.code != "KeyM" &&
    (userWord.length < wordLength ||
      event.key == "Backspace" ||
      event.key == "Enter") &&
    (event.code.match("Key") ||
      event.key == "Backspace" ||
      event.code.match("Semicolon") ||
      event.key == "Enter")
    // remove click value et autre saisie qu'un Backspace, enter ou une lettre
  ) {
    if (event.key == "Backspace") {
      if (userWord.length > 1) {
        userWord.pop();
      }
    } else if (event.key == "Enter") {
      if (userWord.length == wordLength) {
        compareLetter();
      }
    } else {
      userWord.push(event.key);
      console.log(
        "🚀 ~ file: motus.js ~ line 129 ~ window.addEventListener ~ userWord",
        userWord
      );
    }
    displayInput();
    console.log(event);
  }
});
