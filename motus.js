var wordToFind = "test";
var userWord = [];
var wordLength = wordToFind.length; // length of the word use for number of input to display

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

  for (i = 0; i < wordLength; i++) {
    var input = document.createElement("input");
    input.type = "text"; // type de l'input
    input.id = i; // permet d'avoir un id différent pour chaque input pour pouvoir récupérer les valeurs
    input.className = "inputMotus"; // permet de mettre un style sur l'input
    input.maxLength = "1";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

// faire fonction qui remet à 0 les inputs

const compareLetter = () => {
  // appeler la méthode display input pour afficher une nouvelle salve d'input. faire en sorte d'avoir value = lettre bien placé
};

/**
 * *permet de récupérer les valeurs alphanumérique [a-Z] saisies par l'utilisateur et l'ajoute à la liste contenant le mot saisie par l'utilisateur
 */
window.addEventListener("keydown", (event) => {
  if (
    event.key != "" &&
    event.code != "KeyM" &&
    userWord.length() < wordLength  
    (event.code.match("Key") ||
      event.code.match("Semicolon") ||
      event.key == "Backspace" ||
      event.key == "Enter")
  ) {
    // remove click value
    if (event.key == "Backspace") {
      userWord.pop();
    } else if (event.key == "Enter") {
      //call function verifiedWord
    } else {
      userWord.push(event.key);
    }
    console.log(event);
  }
}); // permet de récupérer les touches exécutées
console.log(userWord);
