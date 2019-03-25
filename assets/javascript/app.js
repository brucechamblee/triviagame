$("#start").click(function(){
    game.start();

})

$(document).on('click','#end',function(){
    game.done();
    
    
})

var questions = [{
    
    question: "What does M&M Stand for?",
    answers: ["Mars and Mars", "Mars and Murries", "Mike and Mike", "Mathews and Morty"],
    correctAnswer: "Mars and Murries"
}, {
    question: "What is the only toy banned from the National Security Headquarters?",
    answers: ["Telletubbies", "Stuffed Animals", "Furbies", "Gi Joes"],
    correctAnswer: "Furbies"
}, {
    question: "What was Kool-Aid originally called?",
    answers: ["Fruit Smack", "Oh Yeah Punch", "Kool Fuel", "Happy Juice"],
    correctAnswer: "Fruit Smack"
},{
    question: "How many words different words are in the Dr. Seuss Book 'Green Eggs and Ham'?",
    answers: ["100", "75", "50", "60"],
    correctAnswer: "50"
},{
    question: "Who is the Heisman pose modeled after?",
    answers: ["Joe Heisman", "Bernie Kosar", "Ed Smith", "Walter Payton"],
    correctAnswer: "Ed Smith"
},{
    question: "Fredric Bauer was famous for what?",
    answers: ["Duct Tape", "Harlem Shake", "Tennis Shoes", "Pringles Can"],
    correctAnswer: "Pringles Can"
},{
    question: "What is the only state that can be typed on one row of the keyboard?",
    answers: ["Alabama", "Ohio", "Texas", "Alaska"],
    correctAnswer: "Alaska"
}];

var jeopardySound = new Audio('assets/images/Jeopardy-theme-song.mp3');
$('#start').click(e => jeopardySound.play());


var game = {
    correct: 0,
    incorrect: 0,
    counter: 0,
    timer: "",
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("time is up")
            game.done();
        }
    },
    start: function(){
        $('#subwrapper').html("");  
        $("#start").hide();
        clearInterval(game.timer);
        game.counter = 30;
        game.timer= setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        for(var i=0; i < questions.length; i++){
            $('#subwrapper').append('<h2>'+questions[i].question+"</h2>");
            for(var j=0; j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><br><br><button id="end">Submit Answers</button>');
          
    },

    done: function (){
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

    this.result();
    },
    result: function(){
        clearInterval(game.timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2> All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        $('#start').show(); 
    }
}   
    