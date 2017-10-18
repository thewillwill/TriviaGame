// TO DO
//  googleMapsAPI = "AIzaSyDaNawaFmIi-kGyIDoa4HZ7j5WfR11w0DM";
//
//

// -----------------------------
//   VARIABLES
// -----------------------------


// GLOBAL VARIABLES
// -----------------------------


// Country (Question) Object

function Country(name, capital, lat, long, continent) {
    this.name = name;
    this.capital = capital;
    this.lat = lat;
    this.long = long;
    this.continent = continent;
};

var australia = new Country("Australia", "Sydney", "", "", "Asia");
var newzealand = new Country("New Zealand", "Hamilton", "", "", "Asia");
var japan = new Country("Japan", "Tokyo", "", "", "Asia");

var countries = []; //array of all country objects
var pickedCountries = []; //indexes of the countries previously selected in this game
var selectedCountry = ""; //object holding the selected country object

var questionStart = "What is the capital of ";
var questionEnd = "?";

var correct = 0;
var wrong = 0;
var numPossibleAnswers = 3;
var pickedAnswers = []; //array of string answers (including correct answer) (length = numpickedAnswers)

var answerChosen;


//Timer Variables
//---------------
var intervalId;
var maxTime = 5; //number of seconds per question
var timeRemaining = true;


// -----------------------------
//   Functions
// -----------------------------


//listener for document ready
$(document).ready(function() {

    //doc loaded

    //set up the countries array
    countries[0] = australia;
    countries[1] = newzealand;
    countries[2] = japan;

    //generate the first question and answers
    newQuestion();

    //add event listener to the answer elements
    // $("#answers *").on("click", function() {
    $(document).on("click", ".possible-answer", function() {
        if(timeRemaining) {

        console.log("user clicked on " + $(this).attr("data-value"));

        if (answerChosen) {
            console.log("answer already Chosen ");
            //don't do anything with the click
            return;
        }
        //console.log("set AnswerChosen to true");
        answerChosen = true;
        var userPick = $(this).attr("data-value");
        console.log("User clicked: " + userPick);

        //check if user picked correct answer

        if (userPick == selectedCountry.capital) {
            //user is correct
            correct++;
            $("#correct-number").text(correct);
            $("#message-area").text("You are correct");

        } else {
            //user is wrong
            wrong++;
            $("#wrong-number").text(wrong);
            $("#message-area").text("You are wrong");

        }

        //displayAnswer();

        //stop interval time
        //display answer in bold and move google map
        //wait 5 seconds
        //displayQuestion() {
}
else {
    $("#message-area").text("Times up");
}
    }) //end answer click listener

    $("#reset-button").on("click", function() {
        newQuestion();
    }) //end answer click listener 


}); //end document ready listener

function resetGlobals() {
    correctAnswers = 0;
    wrongAnswers = 0;
}

function newQuestion() {
    console.log("------> NEW Question");
    // if (pickedCountries[0]) {
    //     console.log("-> last country: " + pickedCountries[pickedCountries.length-1]);
    // }
    selectedCountry = "";
    pickedAnswers = [];
    //console.log("-->set AnswerChosen to false");
    answerChosen = false;
    //fill countries array with country objects
    selectRandomCountry();

    selectAlternateAnswers();
    displayQuestion();
    displayAnswers();

    if (!timeRemaining) {
        stopwatch.reset();
        timeRemaining = true;
    }
    
    console.log("Starting setInterval()");
    intervalId = setInterval(stopwatch.count, 1000);
}


//select a country object for a question
function selectRandomCountry() {
    //generate a new random number to select a country from array
    //check that it hasn't been picked previously
    // do this until we have picked one

    do {
        randomCountry = countries[Math.floor(Math.random() * countries.length)];
        var randomCapital = randomCountry.capital;

        //this prevents an infinite while loop if all of the questions have been exhausted
        if (pickedCountries.length == (countries.length)) {
            console.log("Countries all picked");
            return;

        }
        //console.log("country not already picked: " + !pickedCountries.includes(randomCountry.name))
        if (!pickedCountries.includes(randomCountry.name)) {
            selectedCountry = randomCountry; //set the currently selected country object
            pickedCountries.push(randomCountry.name);
        }

    }
    //console.log("in while loop for question capital: " + randomCapital);
//do until the selectedCountry has a value;
while (!selectedCountry);
console.log("Picked a Country: " + selectedCountry.name);
}


////pick random country capitals from same continent up to 1 less than the max number of answers
function selectAlternateAnswers() {
    //generate a new random number to select a country from array
    //check that it hasn't already been picked and it isn't the real answer (to prevent duplication)
    // do this until we have enough possible anwers
    do {
        randomCountryIndex = Math.floor(Math.random() * countries.length);
        var randomCapital = countries[randomCountryIndex].capital;
        if (!pickedAnswers.includes(randomCapital) && randomCapital != selectedCountry.country) {
            //        console.log("found new answer: " + randomCapital)
            pickedAnswers.push(randomCapital);
        }
        //console.log("in while loop for answers: " + randomCapital);
    }
    while (pickedAnswers.length < numPossibleAnswers);

}

function displayQuestion() {
    $("#question-area").html(
        $("<div/>")
        .attr("id", "question")
        .addClass("question-text")
        .text(questionStart + selectedCountry.name + questionEnd)
    );
}

function displayAnswers() {
    //empty the old answers
    $("#answers").empty();
    //put new answers inside the answers <div>
    pickedAnswers.forEach(function(element, index) {
        $("#answers").append(
            $("<li/>")
            .attr({ "id": element, "data-value": element })
            .addClass("possible-answer")
            .text(element)
        );

    })

}

//  stopwatch object.
var stopwatch = {

  time: 0,

  reset: function() {
    stopwatch = 30;


    //  TODO: Change the "display" div to "00:00."
    $("#stopwatch-seconds").text("30");

  },

  start: function() {

      //start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
      }

  },

  stop: function() {
    //stop the count here and set the clock to not be running.
    clearInterval(intervalId);

  },

  count: function() {

    if (maxTime - stopwatch.time == 0) {
        timeRemaining = false;
        stopwatch.stop();
        console.log("stopwatch stopped");
    }
    else {


    //  TODO: increment time by 1, remember we cant use "this" here.
    stopwatch.time ++;

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#stopwatch-seconds").text(maxTime - stopwatch.time);
    }
  
  },



}











//comments