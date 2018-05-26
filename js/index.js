// add an event listener to the form to submit Dave's message
document.getElementById('chatForm').addEventListener('submit', function(e) {
 e.preventDefault();
 var message = document.getElementById('chatInput').value;

 document.getElementById('ejaz').innerHTML += message + "<br/>";

 respondToMessage(message);
});
// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs
if (chat == "Open the pod bay doors please, HAL") {
  document.getElementById('hal').innerHTML += "I'm sorry Ejaz, I can't do that. <br/>";
} else {
  document.getElementById('hal').innerHTML += "I'm sorry Ejaz, I didn't understand you. <br/>";
}

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message
