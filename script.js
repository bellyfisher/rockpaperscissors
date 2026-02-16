let yourName = "";

// Get modal and input elements - FROM LINES 3 TO 30, I USED AI TO HELP ME WRITE THIS CODE
const nameModal = document.getElementById("nameModal");
const nameInput = document.getElementById("nameInput");
const nameSubmitBtn = document.getElementById("nameSubmitBtn");

// Handle name submission
function submitName() {
    if (nameInput.value.trim() !== "") {
        yourName = nameInput.value.trim();
        document.getElementById("playerName").textContent = yourName;
        nameModal.classList.add("hidden");
    }
}

// Submit on button click
nameSubmitBtn.addEventListener("click", submitName);

// Submit on Enter key press
nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Focus on input when page loads
window.addEventListener("load", function() {
    nameInput.focus();
});
// AI ENDS HERE
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 let answer, image;
        
    switch(randomNumber){
        case 0:
        answer = 'Computer chooses Rock!'
        image = 'rightrock.png'
break;
        case 1:
        answer = 'Computer chooses Paper!'
        image = 'rightpaper.png'
break;
        case 2:
        answer = 'Computer chooses Scissors!'
        image = 'rightscissors.png'
break;
    }
    return {answer, image};
};
const determineWinner = (playerChoice, computerChoice) => {

    if (playerChoice === computerChoice) {
        return "tie";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    }

    return "computer";
};


// paper > rock, scissors > paper, rock > scissors

