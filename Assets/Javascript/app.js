$(document).ready(function () {

    $("#startGame").on("click", function (event) {
        console.log("Answer listener func()");
        event.preventDefault();
        $('#startGame').hide();
        triviaQuestions();
        countdownTimer();
    }); 
        var time = 0;{
            setInterval(function () {
                time ++
                $('.time').text(time);
            },1000);
        }

        function showQuestions(){
            $('#countdown').show();
            $('.triviaQuestions').show();
            $('#game-done').show();
        }


    $("body").on("click", ".reset-button", function (event) {
        var correctNum = 0;
        var incorrectNum = 0;
        var counter = 0;
        var time = 0;
        var timerCounter = 30;
        resetGame();
    });

    function clock() {
        time = setInterval(thirty, 1000);

        function thirty() {
            if (timerCounter === 0) {
                clearInterval(time);
                questionTimeout();
            }
            if (timerCounter > 0) {
                timerCounter--;
            }
            $(".timer").html(timerCounter);
        }
    }

    function correctAnswer() {
        console.log("correctAnswer Func()");
        correctNum++;
        gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
            timerCounter + "</span></h2><h3 class='text-center'>Correct! The answer is: " +
            correctArray[counter] + "</h3>";
        $(".gameDiv").html(gameHTML);
        setTimeout(wait, 2500);
    }

    function wrongAnswer() {
        console.log("wrongAnswer func()");
        incorrectNum++;
        gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
            timerCounter + "</span></h2><h3 class='text-center'>Incorrect! The answer is: " +
            correctArray[counter] + "</h3>";
        $(".gameDiv").html(gameHTML);
        setTimeout(wait, 2500);
    }


    function resetGame() {
        console.log("Reset counter " + counter);
        console.log("Reset incorrectNum " + incorrectNum);
        console.log("Reset correctNum " + correctNum);
        generateHTML();
        clock();
    }


    var questionsArray = [
        "What do the 3 D's of aparition stand for?",
        "What is the name of the room Harry uses to teach Dumbledore's Army?",
        "Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?",
        "Where is the Slytherin common room located?",
        "Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?",
        "Which Hogwarts professor was rumoured to be a duelling champion in their youth?",
        "How many staircases does Hogwarts have?",

    ];
    var answersArray = [
        ["determination,destinaion,deliberation", "destination,desperation,deportation", "destination,deliberation,detonator"],
        ["The room of requirements", "The potions classroon", "Artifact Room"],
        ["Albus Dumbledore", "Phineas Nigellus", "Armando Dippet"],
        ["Kitchens", "Dungeons", "Griffindor Tower"],
        ["Unicorns", "Hypogriffs", "Thestrals"],
        ["Professor Snape", "Professor Lockhart", "Professor Flitwick"],
        ["152", "142", "162"],

    ];
    var correctArray = [
        "C. determination,destinaion,deliberation",
        "C.The room of requirements ",
        "C. Armando Dippet",
        "C. Dungeons",
        "C. Thestrals",
        "C. Professor Flitwick",
        "C. 142",
    ];
    var correctNum = 0;
    var incorrectNum = 0;
    var counter = 0;
    var time = 0;
    var timerCounter = 30;
});
