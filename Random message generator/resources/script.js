/*Example: John loves lasagna and keeps his house clean.
            NAME VERB   NOUN   and VERB his NOUN ADJECTIVE. */

/*ARRAYS WITH NAMES, ADJECTIVES, VERBS AND NOUNS*/
let names = ['Benjamin', 'Lucius', 'Tommy', 'Jimmy', 'Anton', 'Chace', 'Joey', 'Manolo'];
let adjectives = ['big', 'blue', 'pacient', 'weird', 'tired', 'incredible', 'brilliant'];
let verbs = ['jumps', 'sees', 'wants', 'jumps', 'drinks', 'likes', 'thinks','believes'];
let nouns = ['pizza', 'phone', 'airpods', 'jacket', 'chair', 'spoon', 'tablet', 'cup of coffee'];


/*FUNCTION THAT PICKS RUNDOM ELEMENT FROM AN ARRAY */
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*FUNCTION TO GET A RANDOM PHRASE */
const getRandomPhrase = () => {
    return `"${getRandomWord(names)} ${getRandomWord(verbs)} ${getRandomWord(nouns)} and ${getRandomWord(verbs)}
    his ${getRandomWord(nouns)} ${getRandomWord(adjectives)}."`;
}

// console.log(getRandomPhrase());

/*SET THE VARIABLES*/
const button = document.getElementById('button');
let randomPhrase = document.getElementById('random-phrase');

function newRandomPhrase() {
    randomPhrase.innerHTML = getRandomPhrase();
}

button.addEventListener('click', newRandomPhrase);
