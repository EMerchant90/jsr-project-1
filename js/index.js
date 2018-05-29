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

  function halResponse(halMessage) {
    $('#hal').append('HAL 9000: ' + halMessage + '<br />');
  }

  function shuffle() {
    for (let i = classmates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [classmates[i], classmates[j]] = [classmates[j], classmates[i]];
    }
    return classmates[0] + ", " + classmates[1] + " and " + classmates[2];
  }

  if(message == '') {
    halResponse('Anyone there?')
  } else if (message.indexOf('hello') !== -1) {
    halResponse('Hello, Ejaz. How is ' + rand + '?');
  } else if (message.indexOf('how') !== -1) {
    halResponse('I know things, Mr. Ejaz.');
  } else if (message.indexOf('on board') !== -1) {
    var onboard = shuffle();
    halResponse('I currently detect ' + onboard + ' onboard the ship, Ejaz.');
  } else if (message.indexOf('Open the pod bay doors please, HAL') !== -1) {
    halResponse("I'm sorry Ejaz, I can't do that");
  } else if (message.indexOf('?') !== -1 || message.indexOf('what') !== -1 || message.indexOf('where') !== -1 || message.indexOf('why') !== -1 || message.indexOf('when') !== -1) {
    halResponse('I can not answer that for you, Ejaz.');
  } else {
    halResponse("I'm sorry Ejaz, I didn't understand you.");
  }
}

// create a function for HAL to open the chat with "Good morning, Dave"
function goodMorning(message) {
  $('#hal').append('HAL 9000: Good Morning, Ejaz. <br />');
}

// invoke the opening message
goodMorning();
