$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function openingPage() {
        openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $("#mainArea").append(openScreen);
    }
    
    openingPage();
    
 
    
    $("#mainArea").on("click", ".start-button", function(event){
       
        $('.jumbotron').hide();
            
        generateQuestions();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer",function(event) {
        
        selectedAnswer = $(this).text();
        
        console.log(selecterAnswer)
        console.log(correctAnswers[questionCounter])
        
        if (selectedAnswer === correctAnswers[questionCounter])
       {// var imageArray = triviaQuestions[currentQuestion].imageArray;
         // var correctAnswers = $("<img>");
          //correctAnswers.attr("src", imageArray);
         //correctAnswers.addClass("image");
         // $("#image").html(correctAnswers);

            //alert("yes! sir ZOHAR says you are right");
            clearInterval(theClock),
            generateWin(imageArray)}
            
            else {
           // alert("wrong answer! sorry -zohar");
            clearInterval(theClock),
            
            generateLoss()}
            });  
    
    $("body").on("click", ".reset-button", function(event){
        
        resetGame();
    }); 
    
});  
    
    function timeoutLoss() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" ;
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000);  
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $("#mainArea").html(gameHTML);
        document.getElementById('image');
        setTimeout(wait, 3000);  
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] ;
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
        document.getElementById()
    }
    

    function generateQuestions() {
        gameHTML = "<p class='text-center timer-p answwer'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3];
        $("#mainArea").html(gameHTML);
    }; //end generate question
    
    function wait() {
        
    questionCounter < 7 ? 
        (questionCounter++,
        generateQuestions(),
        counter = 30,
        timerWrapper() ):
        
       (finalScreen())
    }; //end function
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                timeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $("#mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateQuestions();
        timerWrapper();
    }
    
    var openScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = 
    [ "You may already know that calcium is good for you – but do you know which nutrient helps your body use calcium? ", 
    "How often do you eat fast food?", 
    "What's the Recommended Amount of water an average adult should be drinking perday?", 
    "Which one of the following famous individual is also a trained mechanic? ", 
    "How many licks does it take to get to the center of a Tootsie Pop?", 
    "Which Cancer has the worst survival rate?", 
    "How many species of animals went extinct in 2018?", 
    "Which of the following is the most beautiful hike in the world?" ];

    var answerArray = [
        ["Potassium", "Vitamin D", "Folic Acid", "Vitamin C"], 
        ["Every Day","Every Week","Once a Month","Almost Never"], 
        ["1 Gallon","16 Ounces","1 liter","2 Liters"], 
        ["The Rock","Lebron James","Queen Elizabeth","Fergie"], 
        ["364","3,103","550","1,030"], 
        ["Esophageal Cancer","Heart Cancer","Stomach Cancer","Pancreatic Cancer"], 
        ["Zero species","1 species","15 species","3 species"], 
        ["The Narrows at Zions Ntional Park","The Inca Trail in Machu Picchu Peru"," Kjeragbolten, Norway","Half Dome, Yosemite National Park"] ];

   var imageArray = new Image
   
   
    imageArray[0] = new Image();
        imageArray[1] = new Image
    imageArray[2] = new Image ();
    imageArray[3] = new Image ();   
   imageArray[4] = new Image ();  
    imageArray[5] = new Image ();  
    imageArray[6] = new Image ();  
     imageArray[7] = new Image ();  
   
    var correctAnswers = 
    [ "B. Vitamin D", 
    "D. Almost Never", 
    "D. 2 Liters", 
    "C. Queen Elizabeth", 
    "A. 364 licks", 
    "B. Heart Cancer with only 1%", 
    "D. 3 Species of birds went extict during 2018", 
    "C.  Kjeragbolten, Norway"];

    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
   
            
        
  