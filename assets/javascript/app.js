
	var userAnswers = [];
	var correctCount = 0;
	
	$('#doneButton').hide();
	$('#results').hide();
	//click start button to start the trivia game
	$('#button').on('click',function(){
	  var button = $(this);
	  var startGame = button.text();
	  $('#button').hide();
	  $('#doneButton').show();
	  //alert(startGame);
	  displayQuestions(questions, gameDisplay)

	  //timer code
		
		var time = 20;
		var gameTimer = setInterval(function(){
			time --;
			$('#time-remaining').html("Time remaining: " + "00:" + time + " secs");
			if(time == 0){
				clearInterval(gameTimer);
				$('#results').show();				
			}			

		}, 1000)



	  
	});
	
	
	//questions
	var questions = [
		{
		  question: "Which sea creature has three hearts?",

		  answers: {
		  	a: 'Giant Spider Crab',
		  	b: 'Fangtooth Fish',
		  	c: 'Octopus',
		  	d: 'Vampire Squid'
		  },
		  correctAnswer: 'c'
		},
		{
		  question: "Which instrument has forty-seven strings and seven pedals?",

		  answers: {
		  	a: 'Guitar',
		  	b: 'Harp',
		  	c: 'Ukulele',
		  	d: 'Lute'
		  },
		  correctAnswer: 'b'
		},
		{
		  question: "How many bones does an adult human have?",

		  answers: {
		  	a: '206',
		  	b: '210',
		  	c: '240',
		  	d: '260'
		  },
		  correctAnswer: 'a'
		},
		{
		  question: "What is the national flower of Wales?",

		  answers: {
		  	a: 'Sunflower',
		  	b: 'Daffodil',
		  	c: 'Jonquil',
		  	d: 'Narcissus'
		  },
		  correctAnswer: 'b'
		}
	]

	var correctAnswers = ["Octopus", "Harp", "206", "Daffodil"]; 

	var gameDisplay = document.getElementById('quiz');
	var resultsDisplay = document.getElementById('results');
    var doneButton = document.getElementById('done');

	function displayQuestions(questions, gameDisplay){
			
		var answers;
		var quizInput = [];


		//for each question
		for (var i=0; i<questions.length; i++) {
			//answers are empty first
			answers = [];

			// for each available answers to the question
			for (letter in questions[i].answers) {
				//add html radio button
				answers.push(
					'<label>' 
					 + '<input type="radio" name="question'+i+'" value="'+questions[i].answers[letter] +'">'
					 + letter + ': '
					 + questions[i].answers[letter] 
					 + '</label>');
			}

		// add question and answers to the output
		quizInput.push(
				'<div class="question">' + questions[i].question 
				
				+ '<div class="answers">' + answers .join('') 
				
			);

		}		

		
		$('#quiz').append(quizInput.join(''));

		$("input").on("click", function () {
				var input = $(this)
				userAnswers.push(this.value)

			})
		
		
	}	

    $('#doneButton').on('click',function(){
	  var done = $(this);
	  var endGame = done.text();
	  $('#quiz').hide();
	  $('#doneButton').hide();
	  $('#time-remaining').hide();
	  //console.log("done");
	  var correctCount = 0;
	  var incorrectCount = 0;

	  //for loop the questions
	  	// check if correctAnswer === userAnswers

	  		for (var i=0; i<correctAnswers.length; i++) {
	  	
				// add to the number of correct answers
				
				if (userAnswers.includes(correctAnswers[i])){
					correctCount++;
				} else if (userAnswers!=(correctAnswers[i])){
					incorrectCount++;
				}
	  		}

	  		$('#correct').append(correctCount++);
	  		$('#incorrect').append(incorrectCount++);


	  
	});




	
