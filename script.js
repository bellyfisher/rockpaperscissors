let yourName = "";

// Get modal and input elements
const nameModal = document.getElementById("nameModal");
const nameInput = document.getElementById("nameInput");
const nameSubmitBtn = document.getElementById("nameSubmitBtn");

// Handle name submission
function submitName() {
    if (nameInput.value.trim() !== "") {
        yourName = nameInput.value.trim();
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
let winner;
    if (wins === 2) {
        winner = "user";
    } 
    else {
        title = "Computer";
    }
result.style.display = "block";