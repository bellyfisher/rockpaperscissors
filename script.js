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

const userChoice = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 let answer, image;
        
    switch(randomNumber){
        case 0:
        answer = 'Rock!'
        image = 'rightrock.png'
break;
        case 1:
        answer = 'Paper!'
        image = 'rightpaper.png'
break;
        case 2:
        answer = 'Scissors!'
        image = 'rightscissors.png'
break;
    }
    return {answer, image};
};

let winner;
    if (wins === 2) {
        winner = "user";
    } 
    else {
        title = "Computer";
    }
result.style.display = "block";