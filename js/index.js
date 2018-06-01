// add an event listener to the form to submit Dave's message
$("#chatForm").submit(function(event){
   event.preventDefault();
   var message = $('#chatInput').val();

  $('#ejaz').append('Me: ' + message + '<br />');
  $('#chatInput').val('');

  message = message.toLowerCase();

  hal9000(message);
});
// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

function hal9000(message) {
  var classmates = ['Alex','Alexis','Andrew','Andreina','Bernardo','Brandon','Colburn','Courtney','David','Diana','Joanna','Josh','Kaitlyn','Katie','Kevin','Myriam','Nikki','Tenny','Timothy'];
  var rand = classmates[Math.floor(Math.random() * classmates.length)];

  function shuffle() {
    for (let i = classmates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [classmates[i], classmates[j]] = [classmates[j], classmates[i]];
    }
    return classmates[0] + ", " + classmates[1] + " and " + classmates[2];
  }

  function halResponse(halMessage) {
    $('#hal').append('HAL 9000: ' + halMessage + '<br />');
  }

switch (message) {
  case 'hello':
    halResponse('Hello, Ejaz. How is ' + rand + '?');
    break;
  case 'how':
    halResponse('I know things, Ejaz.');
    break;
  case 'on board':
    var onboard = shuffle();
    halResponse('I currently detect ' + onboard + ' onboard the ship, Ejaz.');
    break;
  case 'open':
    halResponse("I'm sorry Ejaz, I can't do that");
    break;
  default:
    halResponse("I'm sorry Ejaz, I didn't understand you.");
  }
}

// create a function for HAL to open the chat with "Good morning, Dave"
function goodDay(message) {
  $('#hal').append('HAL 9000: Good Day, Ejaz. <br />');
}

// invoke the opening message
goodDay();
