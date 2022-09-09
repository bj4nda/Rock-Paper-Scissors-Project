let score = 0; //score variable
let pChoice; // player choice, will implement functionality in the DOM section of the project
//convert choice to rock, paper, scissors
let read = {
    '0' : 'rock',
    '1' : 'paper',
    '2' : 'scissors'
};
// obj for computer choice which will store the values
const cChoice = {
    init: function() {
        this.store = Math.floor(Math.random() * 3);
        this.text = read[this.store];
    },
    text: '',
    store: ''  
}  
//rules for rock, paper, scissors, compares the computer and player choice, and updates the score
const chooseWinner = function(player, computer) {
    const order = [0, 1, 2, 0];
    if (order[player] === order[computer]) {
        return 'Its a tie! play again?';
    } 
    if (order[player] === order[computer + 1]) {
        score++;
        return 'You win!';
    } else {
        score--;
        return 'You lose :(';
    }
};

//DOM 
// p tag displays the current score, outcome of the game
const paragraph = document.querySelector('p');
// add click eventlisteners

let assignClick = function(element, step) {
    element.addEventListener('click', function() {
        playerChoice = step; //player choice
        cChoice.init(); //computer choice
        paragraph.innerText = 'Computer choose: ' + cChoice.text + '\n'; // display the computer choice as rock, paper or scissors
        paragraph.innerText +=  chooseWinner(playerChoice, cChoice.store) + '\n' ; // choosewinner and adds score update
        paragraph.innerText += 'Score: ' + score; 
    })
}
let images = { 
    elements: document.getElementsByTagName('img'),
    init: function() {
        for (let step= 0; step < this.elements.length; step++) {
            assignClick(this.elements[step], step);
        }
    }
};

images.init();