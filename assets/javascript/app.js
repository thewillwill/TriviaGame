// TO DO
//  googleMapsAPI = "AIzaSyDaNawaFmIi-kGyIDoa4HZ7j5WfR11w0DM";
//AIzaSyDLVyv4rD6_xg-U-QbpklwTh1XSJxWJhFc
// Display time for next question
//

// -----------------------------
//   VARIABLES
// -----------------------------


var googleMapString = "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDLVyv4rD6_xg-U-QbpklwTh1XSJxWJhFc&center=12.378154406531843,-14.109061328808595&zoom=6&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xebe3cd&style=element:labels.text.fill%7Ccolor:0x523735&style=element:labels.text.stroke%7Ccolor:0xf5f1e6&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0xc9b2a6&style=feature:administrative.country%7Celement:geometry.fill%7Cweight:1&style=feature:administrative.country%7Celement:geometry.stroke%7Cvisibility:on%7Cweight:3.5&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:geometry.stroke%7Ccolor:0xdcd2be&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xae9e90&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x93817c&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0xa5b076&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x447530&style=feature:road%7Celement:geometry%7Ccolor:0xf5f1e6&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Cvisibility:off&style=feature:road.arterial%7Celement:geometry%7Ccolor:0xfdfcf8&style=feature:road.highway%7Celement:geometry%7Ccolor:0xf8c967&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0xe9bc62&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0xe98d58&style=feature:road.highway.controlled_access%7Celement:geometry.stroke%7Ccolor:0xdb8555&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x806b63&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:transit.line%7Celement:labels.text.fill%7Ccolor:0x8f7d77&style=feature:transit.line%7Celement:labels.text.stroke%7Ccolor:0xebe3cd&style=feature:transit.station%7Celement:geometry%7Ccolor:0xdfd2ae&style=feature:water%7Celement:geometry.fill%7Ccolor:0xb9d3c2&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x92998d&size=480x360";


// GLOBAL VARIABLES
// -----------------------------

var gameStarted = false;

// Country (Question) Object

function Country(name, capital, lat, long, continent) {
    this.name = name;
    this.capital = capital;
    this.lat = lat;
    this.long = long;
    this.continent = continent;
};

var australia = new Country("Australia", "Canberra", "-35.26666667", "149.133333", "Asia");
var newzealand = new Country("New Zealand", "Wellington", "-41.3", "174.783333", "Asia");
var japan = new Country("Japan", "Tokyo", "35.68333333", "  139.75", "Asia");
var angola = new Country("Angola", "Luanda", "-8.833333333", "13.216667", "Africa");
var guinea = new Country("Guinea", "Conakry", "9.5", "-13.7", "Africa");
var kenya = new Country("Kenya", "Nairobi", "-1.283333333", "36.816667", "Africa");


var japan = new Country("Japan", "Tokyo", "35.68333333", "  139.75", "Asia");

var countries = []; //array of all country objects
var pickedCountries = []; //indexes of the countries previously selected in this game
var selectedCountry; //object holding the selected country object

var questionStart = "What is the capital of ";
var questionEnd = "?";

var correct = 0;
var wrong = 0;
var pickedAnswers = []; //array of string answers (including correct answer) (length = numpickedAnswers)

var answerChosen;

var tickIcon = "<i class='fa fa-check' aria-hidden='true'></i>";
var crossIcon = "<i class='fa fa-times' aria-hidden='true'></i>";


//Game Settings
//---------------
var numPossibleAnswers = 3; // the number of questions the user has to choose from
var timeBetweenQuestions = 5; //number of seconds before next question displayed
var maxTime = 5; //number of seconds per question
var numQuestions = 3;


//Question Timer Variables
//---------------
var intervalId;
var timeRemaining = true;


//  timer object.
var timer = {

    time: maxTime,

    reset: function() {
        console.log("-->Timer reset()");
        timer.time = maxTime;

        //  TODO: Change the "display" div to "00:00."
        $("#timer-seconds").text(maxTime);

    },

    start: function() {
        console.log("-->Timer start()");
        //start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000); //display updated counter every second
        }

    },

    stop: function() {
        console.log("-->Timer stop() timer.time: " + timer.time);
        //stop the count here and set the clock to not be running.
        clearInterval(intervalId);

    },

    count: function() {
        if (timer.time == 0) {
            timeRemaining = false;
            increaseWrongCount(false); //increase wrong count with false parameter to indicate running out of time
            showCorrectAnswer(false); //show the correct number, user was incorrect
            console.log("-->timer finished");
        } else {


            //  TODO: increment time by 1, remember we cant use "this" here.
            timer.time--;

            //  TODO: Get the current time, pass that into the timer.timeConverter function,
            //        and save the result in a variable.
            //  TODO: Use the variable you just created to show the converted time in the "display" div.
            $("#timer-seconds").text(timer.time);
        }

    }
}

//Delay Timer (between questiosn) Variables
//---------------
var intervalDelayID;

//  delay timer object.
var delayTimer = {

    time: timeBetweenQuestions,

    reset: function() {
        console.log("-->delayTimer reset()");
        delayTimer.time = timeBetweenQuestions;

        //  TODO: Change the "display" div to "00:00."
        $("#delayTimer-seconds").text(timeBetweenQuestions);

    },

    start: function() {
        console.log("-->delayTimer start()");
        //start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(delayTimer.count, 1000); //display updated counter every second
        }

    },

    stop: function() {
        console.log("-->delayTimer stop() delayTimer.time: " + delayTimer.time);
        //stop the count here and set the clock to not be running.
        clearInterval(intervalDelayId);

    },

    count: function() {
        if (delayTimer.time == 0) {
            // delayTimer.stop();
            // console.log("-->delayTimer finished");
        } else {


            //  TODO: increment time by 1, remember we cant use "this" here.
            delayTimer.time--;

            //  TODO: Get the current time, pass that into the delayTimer.timeConverter function,
            //        and save the result in a variable.
            //  TODO: Use the variable you just created to show the converted time in the "display" div.
            $("#delayTimer-seconds").text(delayTimer.time);
        }

    }
}



// -----------------------------
//   Functions
// -----------------------------

//2PACX-1vTRH-ZC4heeLbrAKfHbKWG8QVFAgYtGXdq90tm7zIidgbxAB9hw-ZeTpWh05W5ciCKyId-uyduFFhnj

//listener for document ready
$(document).ready(function() {

    var corURL = "https://cors-anywhere.herokuapp.com/";
    var sheetsURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTRH-ZC4heeLbrAKfHbKWG8QVFAgYtGXdq90tm7zIidgbxAB9hw-ZeTpWh05W5ciCKyId-uyduFFhnj/pub?gid=1043611901&single=true&output=csv";
    var requestURL = corURL + sheetsURL;

    $.getJSON(requestURL, function(data) {
        console.log("getting JSON");
        //first row "title" column
        console.log(data.feed.entry[0]['gsx$title']['$t']);
    });

    //doc loaded

    //load the background google map
    showGoogleMaps(27.1959739, 78.02423269999997);
    //hide any game boxes until user presses start
    $(".box").hide();
    $("#restart-button").hide();
    $("#next-question-message").hide();

    //add listener for the start game button
    $("#start-button").on("click", function() {
        console.log("start");
        //show all the container boxes on screen
        $(".box").show();
        $("#start-button").hide();
        //generate the first question and answers
        newQuestion();
    });

    //set up the countries array
    countries[0] = australia;
    countries[1] = newzealand;
    countries[2] = angola;
    countries[3] = guinea;
    countries[4] = kenya;
    countries[5] = japan;



    //add event listener to the answer elements
    // $("#answers *").on("click", function() {
    $(document).on("click", ".possible-answer", function() {
        if (timeRemaining) {
            console.log("user clicked on " + $(this).attr("data-value"));
            if (answerChosen) {
                $("#message-area").text("You can't change your answer");
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
                showCorrectAnswer(true);

            } else {
                //wrong answer picked
                showCorrectAnswer(false);
                increaseWrongCount(true); //increase the number of wrong count with true parament to indicate wrong answer picked (not time running out)
            }
        } else {
            //time up
            showCorrectAnswer(false);
        }

        showNextQuestionTimer();


    }) //end answer click listener

    $("#restart-button").on("click", function() {
        //reset all the game variables
        pickedCountries = []; //indexes of the countries previously selected in this game
        selectedCountry = ""; //object holding the selected country object
        correct = 0;
        wrong = 0;
        pickedAnswers = []; //array of string answers (including correct answer) (length = numpickedAnswers)
        $(".box").show();
        $("#restart-button").hide();
        $("#countries-visited").empty();
        newQuestion();
    }) //end answer click listener 


}); //end document ready listener


function increaseWrongCount(wrongAnswer) {
    //user is wrong
    wrong++;
    $("#wrong-number").text(wrong);
    if (wrongAnswer) {
        $("#message-area").text("Nope.");
    } else {
        $("#message-area").text("Too late.");

    }


}

function resetGlobals() {
    correctAnswers = 0;
    wrongAnswers = 0;
}

function newQuestion() {
    console.log("------> NEW Question");
    // if (pickedCountries[0]) {
    //     console.log("-> last country: " + pickedCountries[pickedCountries.length-1]);
    // }

    if (pickedCountries.length == numQuestions) {
        //end game and show reset button.
        console.log("Questions finished");
        $(".box").hide();
        $("#restart-button").show();
        $("#message-area").empty();
        return;

    }

    selectedCountry = "";
    pickedAnswers = [];
    //console.log("-->set AnswerChosen to false");
    answerChosen = false;

    //hide the next question timer
    $("#next-question-message").hide(); //show the next question timer

    //this prevents an infinite loop in the unlikely event that all questions have been exhausted (not going to happen unless maxQuestions get set to greater than the number of questions available)
    if (pickedCountries.length == (countries.length)) {
        console.log("Countries all picked");
        return;
    }


    //fill countries array with country objects
    selectRandomCountry();
    selectAlternateAnswers();
    displayQuestion();
    displayPossibleAnswers();

    //reset the timer when there is a new question

    if (!timeRemaining) {
        timer.reset();
        timeRemaining = true;
    }

    console.log("Starting setInterval() timer.count: " + timer.time);
    intervalId = setInterval(timer.count, 1000);
}


//select a country object for a question
function selectRandomCountry() {
    //generate a new random number to select a country from array
    //check that it hasn't been picked previously
    // do this until we have picked one

    do {
        randomCountry = countries[Math.floor(Math.random() * countries.length)];
        var randomCapital = randomCountry.capital;

        //console.log("country not already picked: " + !pickedCountries.includes(randomCountry.name))
        if (!pickedCountries.includes(randomCountry.name)) {
            selectedCountry = randomCountry; //set the currently selected country object
            pickedCountries.push(randomCountry.name); //add it to the list of selected countries (so question doesn't get repeated)
            pickedAnswers.push(randomCapital); //add the correct answer to the answer array
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

function displayPossibleAnswers() {
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

function showCorrectAnswer(userCorrect) {
    timeRemaining = false;
    timer.stop();

    // intervalDelayId = setInterval(timer.count, 1000); //delayTimer

    //empty the old answers
    $("#answers").empty();
    pickedAnswers.forEach(function(element, index) {
        //apply different styling to incorrect answer
        console.log("element: " + element)
        console.log("Capital: " + selectedCountry.capital)
        if (element == selectedCountry.capital) {
            $("#answers").append(
                $("<li/>")
                .attr({ "id": element, "data-value": element })
                .addClass("correct-answer")
                .text(element)
            );
        }
        //apply different styling to correct answer
        else {
            $("#answers").append(
                $("<li/>")
                .attr({ "id": element, "data-value": element })
                .addClass("wrong-answer")
                .text(element)
            );

        }

    })
    //add to the visible list of "countries visited"
    if (userCorrect) {
        //display a tick after to the country
        $("#countries-visited").append(
            $("<li/>")
            .html(selectedCountry.capital + ", " + selectedCountry.name + " " + tickIcon));
    } else {
        //dislay a cross after the country name
        $("#countries-visited").append(
            $("<li/>")
            .html(selectedCountry.capital + ", " + selectedCountry.name + " " + crossIcon));
    }

    //move the background google map to display the correct capital city
    showGoogleMaps(selectedCountry.lat, selectedCountry.long);

    //start the next question after a delay
    console.log("New timeout starter");
    setTimeout(function() {
        // delayTimer.start();
        newQuestion();
    }, timeBetweenQuestions * 1000);

}


function showNextQuestionTimer() {
    $("#next-question-message").show(); //show the next question timer
}



/*
 * Google Maps Code
 */


function showGoogleMaps(lat, long) {
    // The latitude and longitude of country
    var latLng = new google.maps.LatLng(lat, long);

    var mapOptions = {
        zoom: 4, // initialize zoom level - the max value is 21
        disableDefaultUI: true,

        center: latLng,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#523735"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c9b2a6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#dcd2be"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ae9e90"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#93817c"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#a5b076"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#db8555"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#806b63"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8f7d77"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b9d3c2"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}











//comments