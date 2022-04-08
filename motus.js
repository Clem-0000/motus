var wordToFind = "test";
var userWord = [];
var wordLength = wordToFind.length; // length of the word use for number of input to display

/**
 * récupère les valeurs saisies par l'utilisateur
 */
const getValueSubmit = () => {
  for (let i = 0; i < wordLength; i++) {
    userWord.push(document.getElementById(i).value);
  }
  console.log(userWord);
};

const displayInput = () => {
  var container = document.getElementById("containerInput"); // on met l'ID de la div qui va contenir tous les inputs

  for (i = 0; i < wordLength; i++) {
    var input = document.createElement("input");
    input.type = "text"; // type de l'input
    input.id = i; // permet d'avoir un id différent pour chaque input pour pouvoir récupérer les valeurs
    input.className = "test";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
};

// faire fonction qui remet à 0 les inputs

const compareLetter = () => {
  // appeler la méthode display input pour afficher une nouvelle salve d'input. faire en sorte d'avoir value = lettre bien placé
};
