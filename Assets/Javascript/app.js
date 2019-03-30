console.log("connected ***");
$(document).ready(function () {
    console.log("connected");
    var questions = [
        {
            question: "What do the 3 D's of aparition stand for?",
            answers: ['determination,destinaion,deliberation', 'destination,desperation,deportation', 'destination,deliberation,detonator'],
            correctAnswer: "determination,destinaion,deliberation"
        },
        {
            question: "Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?",
            answers: ['Albus Dumbledore', 'Phineas Nigellus', 'Armando Dippet'],
            correctAnswer: "Armando Dippet"
        },
        {
            question: "Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?",
            answers: ['Unicorns', 'Hypogriffs', 'Thestrals'],
            correctAnswer: "Thestrals"
        },
        {
            question: "Where is the Slytherin common room located?",
            answers: ['Kitchens', 'Dungeons', 'Griffindor Tower'],
            correctAnswer: "Dungeons"
        },
    ]
    var counter = 120;
    var correct = 0;
    var incorrect = 0;

    function start() {
        timer = setInterval(countdown, 1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $("#quiz-area").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                console.log("inside inner for loop");
                $("#quiz-area").append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }

        }

        $("#quiz-area").append('<button id="done">Done</button>');
    }
    function countdown() {
        counter--;
        $("#counter-number").html(counter);
        if (counter === 0) {
            console.log("TIME UP");
            done();
        }
    }
    function done() {
        console.log("Done function");
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                correct++;
            }
            else {
                incorrect++;
            }
        });
        result();
    }
    function result() {

    }
    $(document).on("click", "#start", function () {
        start();
    });


});
