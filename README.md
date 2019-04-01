# triviagame
This was my first Javascript Project where I had to build something that was interactive and dynamic with a timer. I decided to go with a random trivia theme with a space background. 

### Getting Started
This project is designed to be ran in the browser without having to install any programs. I have not added media queries to this so playing this on a mobile device is not recommended. 

### Design
The programing that was used to design this project was:
Javascript/JQuery - Funcationality with Timers 
HTML - Content and layout
CSS/Bootstrap - Color, layout.

### Versioning
I have only made one version of this. 

### HTML

In the HTML, I have a wrapper with a subwrapper that I am appending the text to when you click start. I also made a Start button which is hiddent when the user clicks it. 

### CSS
The CSS was very basic. I have a background image that is scaled to the browser width and set to cover. I have aligned the content to the center of the subwrapper. Also, I have ti set to hide the start button once the user clicks it. 

### Javascript
This Javascript was the most complex that I have created thus far.

#### Variables
*Array Object with the Questions and Answers - This held questions that would be shown on the page for the user to guess the answer to. It also stored the correct answers along with the incorrect answers.

*Jeopardy Sound - This sound started playing when the user clicked start. I tried to figure out how to make it stop once the user hit submit but could not figure it out. 

*Game - Variable that holds the game functions, the timer, the start function, the done function and the results function. 

#### Fuctions
Start Function - This function clears the subwrapper, hides the start button with CSS, clears the timer interval, sets the game countdown to 30, makes the counter decrease at a 1 second pace and prepends that to the screen. 

It also shows the questions from the array above using a for loop and appends them to the screen. It also sets the answers as a radio button to the screen along with a submit button if the user can complete the game before the time finishes. 

Countdown Function - This function tells the counter to decrease by one and puts it on the screen. It also runs the done function if time runs out. 

Done Function - This function is the logic for checking the users responses against the answers and adds either a number to the correct count.

Result Function - This function clears the timer and removes it from the HTML. It then appends a message of all done with the users tally of correct, incorrect, and unanswered questions. It also shows the start button so the user can play again. 

If the user clicks start, it resets the scores from the previous attempt and starts the game over. 

This was my third README.md. 
