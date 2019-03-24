$("#start").click(function(){
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    
    question: "What does M&M Stand for?",
    answers: ["Mars and Mars", "Mar's and Murrie's", "Mike and Mike", "Mathews and Morty"],
    correctAnswer: "Mar's and Murrie's"
}, {
    question: "What is the only toy banned from the National Security Headquarters?",
    answers: ["Telletubbies", "Stuffed Animals", "Furbies", "Gi Joes"],
    correctAnswer: "Furbies"
}, {
    question: "What was Kool-Aid originally called?",
    answers: ["Fruit Smack", "Oh Yeah Punch", "Kool Fuel", "Happy Juice"],
    correctAnswer: "Fruit Smack"
}, {
    question: "What is the only state that can be typed on one row of the keyboard?",
    answers: ["Alabama", "Ohio", "Texas", "Alaska"],
    correctAnswer: "Alaska"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("time is up")
            game.done();
        }
    },
    start: function(){
        timer= setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $("#start").remove();
        for(var i=0; i < questions.length; i++){
            $('#subwrapper').append('<h2>'+questions[i].question+"</h2>");
            for(var j=0; j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><button id="end">Submit Answers</button>');    
    },

    done: function (){
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }console.log(this);
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

    this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2> All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}   
    