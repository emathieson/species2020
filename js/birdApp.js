//beginning values for quiz variables
userAnswer = null;
hookOrCurveBeak = null;
straightBeak = null;
hookedBeak = null;
smallHead = null;
redDarkHead = null;
darkHead = null;
waterBird = null;
landBird = null;
simple = null;
darkHead2 = null;
lightHead = null;
whiteBody = null;
blue = null;
different = null;
roundedHead = null;
whiteBreast = null;
red = null;
bbgg = null;
short = null;
beak = null;
brown = null;
greyBlack = null;
greyHead = null;


//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';
backImg = 'null';


//BIRD questions
B1 = "What is the shape of the bird's beak?";
B2 = 'Does it have a hooked beak or a curved beak?';
B3 = 'Does it have a small head or a broad head?';
B4 = 'Does it have an all-white head or a red or dark head?';
B5 = 'Does it have a red or dark head?';
B6 = 'Does it have a white neck or a dark neck?';
B7 = 'Is it a water bird or a land bird?';
B8 = 'Is its beak or bill pouch-like or simple?';
B9 = 'Does it have a dark head or a light head?';
B10 = 'Does it have a dark bill or a yellow bill?';
B11 = 'Does it have a white body or a blue-ish body?';
B12 = 'Is its bill straight or does it have a black knob?';
B13 = 'Is its head blue or a different color?';
B14 = 'Does it have a crested head or a rounded head?';
B15 = 'Does it have a red breast or a white breast?';
B16 = 'Does it have an all white breast and underside?';
B17 = 'Is its head or neck red or is it black, brown, green, or grey?';
B18 = 'Does it have a needle-like beak or a short beak?';
B19 = 'What color is its body?';
B20 = 'Does it have a bill or a beak?';
B21 = 'Does it have brown on its head or a grey or black head?';
B22 = 'Does it have a dark throat or a light throat?';
B23 = 'Does it have an all grey head or a black cap on its head?';
B24 = 'Does it have a red or grey breast?';


//BIRD answers
B1A = 'Hooked or curved beak'; 	//Sets question to B2 //hookOrCurveBeak = true
B1B = 'Straight beak'; 			//Sets question to B7 //straightBeak = true

B2A = 'Hooked beak';	//Sets question to B3 //hookedBeak = true
B2B = 'Curved beak';	//ROADRUNNER          //curvedBeak = true    //keyNumber = 1

B3A = 'Small head'; 	//Sets question to B4    //smallHead = true
B3B = 'Broad head'; 	//OWL   //keyNumber = 2

B4A = 'All-white head';		//EAGLE    //keyNumber = 3
B4B = 'Red or dark head';	//Sets question to B5  //redDarkHead = true

B5A = 'Red head';	//VULTURE   //keyNumber = 4
B5B = 'Dark head';	//Sets question to B6    //darkHead = true

B6A = 'White neck';		//FALCON  //keyNumber = 5
B6B = 'Dark neck';		//HAWK   //keyNumber = 6

B7A = 'Water bird';		//Sets question to B8     //waterBird = true 
B7B = 'Land bird';		//Sets questions to B13   //landBird = true

B8A = 'Pouch-like';	//PELICAN               //keyNumber = 7
B8B = 'Simple';		//Sets question to B9   //simple = true

B9A = 'Dark head';		//Sets question to B10   //darkHead2 = true
B9B = 'Light head';		//Sets question to B11   //lightHead = true

B10A = 'Dark bill';		//LOON          //keyNumber = 8
B10B = 'Yellow bill';	//MALLARD DUCK  //keyNumber = 9

B11A = 'White body';	//Sets question to B12  //whiteBody = true
B11B = 'Blue-ish body';	//GREAT BLUE HERON      //keyNumber = 10

B12A = 'Black knobbed bill';	//SWAN   //keyNumber = 11
B12B = 'Long straight bill';	//EGRET  //keyNumber = 12

B13A = 'Blue';				//Sets question to B14   //blue = true
B13B = 'Different Color';	//Sets question to B17   //different = true

B14A = 'Crest on head';	//BLUE JAY               //keyNumber = 13
B14B = 'Rounded head';	//Sets question to B15   //roundedHead = true

B15A = 'Red breast';	//BLUEBIRD              //keyNumber = 14
B15B = 'White breast';	//Sets question to B16  //whiteBreast = true

B16A = 'White underside';			//SWALLOW    //keyNumber = 15
B16B = 'Reddish underside';	//NUTHATCH   //keyNumber = 16

B17A = 'Red';							//Sets question to B18  //red = true
B17B = 'Black, brown, green, or grey';	//Sets question to B20  //bbgg = true

B18A = 'Needle-like beak';	//HUMMINGBIRD           //keyNumber = 17
B18B = 'Short beak';		//Sets question to B19  //short = true

B19A = 'Yellow or green body';	//WARBLER     //keyNumber = 18
B19B = 'Black and white body';	//WOODPECKER  //keyNumber = 19

B20A = 'Bill';	//CANADIAN GOOSE        //keyNumber = 20
B20B = 'Beak';	//Sets question to B21  //beak = true

B21A = 'Brown on head';			//Sets question to B22   //brown = true
B21B = 'Grey or black head';	//Sets question to B23   //greyBlack  = true

B22A = 'Dark throat';	//SPARROW  //keyNumber = 21
B22B = 'Light throat';	//GROUSE   //keyNumber = 22

B23A = 'All grey head';	//Sets question to B24  //greyHead = true
B23B = 'Black cap';		//CHICKADEE             //keyNumber = 23

B24A = 'Red breast';	//ROBIN  //keyNumber = 24
B24B =  'Grey breast';	//PIGEON //keyNumber = 25




const app = new Vue ({
	el: '#birdApp',
	data: {
		question: B1,
		answerA: B1A,
		answerB: B1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/birds/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 25) + 1),   //chooses a number between 1 and 25
		backImg: backImg
			},

	methods: {
		//what happens when buttonA is clicked
		buttonA: function(){   
			console.log('Button A was pressed');
			if (this.question == B1) {
				hookOrCurveBeak = true,
				document.getElementById("speciesDescriptText").textContent += "with a hooked or curved beak,";
				console.log('hookOrCurveBeak is true')};
			if (this.question == B2) {
				hookedBeak = true,
				document.getElementById("speciesDescriptText").textContent = "A bird, with a hooked beak,";
				console.log('hookedBeak is true')};
			if (this.question == B3) {
				smallHead = true,
				document.getElementById("speciesDescriptText").textContent += " a small head,";
				console.log('smallHead is true')};
			if (this.question == B4) {
				userAnswer = 'EAGLE';
				document.getElementById("speciesDescriptText").textContent += " and an all-white head.";
				console.log('Answer chosen is eagle')};
			if (this.question == B5) {
				userAnswer = 'VULTURE';
				document.getElementById("speciesDescriptText").textContent = "A bird, with a hooked beak, a small head, and a red head.";
				console.log('Answer chosen is vulture')};
			if (this.question == B6) {
				userAnswer = 'FALCON';
				document.getElementById("speciesDescriptText").textContent += " and a white neck.";
				console.log('Answer chosen is falcon')};
			if (this.question == B7) {
				waterBird = true;
				document.getElementById("speciesDescriptText").textContent = "A water-dwelling bird, with a straight beak or bill,";
				console.log('waterBird is true')};
			if(this.question == B8) {
				userAnswer = 'PELICAN';
				document.getElementById("speciesDescriptText").textContent = "A water-dwelling bird, with a straight, and a pouch-like beak.";
				console.log('Answer chosen is pelican')};
			if (this.question == B9) {
				darkHead2 = true;
				document.getElementById("speciesDescriptText").textContent += " a dark head,";
				console.log('darkHead2 is true')};
			if (this.question == B10) {
				userAnswer = 'LOON';
				document.getElementById("speciesDescriptText").textContent += " and a dark bill.";
				console.log('Answer chosen is loon')};
			if (this.question == B11) {
				whiteBody = true;
				document.getElementById("speciesDescriptText").textContent += " a white body,";
				console.log('whiteBody is true')};
			if (this.question == B12) {
				userAnswer = 'SWAN';
				document.getElementById("speciesDescriptText").textContent += " and a black-knobbed bill.";
				console.log('Answer chosen is swan')};
			if (this.question == B13) {
				blue = true;
				document.getElementById("speciesDescriptText").textContent += " a blue head,";
				console.log('blue is true')};
			if (this.question == B14) {
				userAnswer = 'BLUEJAY';
				document.getElementById("speciesDescriptText").textContent += " with a crest.";
				console.log('Answer chosen is blue jay')};
			if (this.question == B15) {
				userAnswer = 'BLUEBIRD';
				document.getElementById("speciesDescriptText").textContent += " and a red breast.";
				console.log('Answer chosen is bluebird')};
			if (this.question == B16) {
				userAnswer = 'SWALLOW';
				document.getElementById("speciesDescriptText").textContent += " and an all-white underside.";
				console.log('Answer chosen is swallow')};
			if (this.question == B17) {
				red = true;
				document.getElementById("speciesDescriptText").textContent += " a red head or neck,";
				console.log('red is true')};
			if (this.question == B18) {
				userAnswer = 'HUMMINGBIRD';
				document.getElementById("speciesDescriptText").textContent += " and a needle-like beak.";
				console.log('Answer chosen is hummingbird')};
			if (this.question == B19) {
				userAnswer = 'WARBLER';
				document.getElementById("speciesDescriptText").textContent += " and a yellow or green body.";
				console.log('Answer chosen is warbler')};
			if (this.question == B20) {
				userAnswer = 'CANADIAN GOOSE';
				document.getElementById("speciesDescriptText").textContent += " and a bill.";
				console.log('Answer chosen is canadian goose')};
			if (this.question == B21) {
				brown = true;
				document.getElementById("speciesDescriptText").textContent = "A land-dwelling bird, with a straight beak, a beak, a brown head,";
				console.log('brown is true')};
			if (this.question == B22) {
				userAnswer = 'SPARROW';
				document.getElementById("speciesDescriptText").textContent += " and a dark throat.";
				console.log('Answer chosen is sparrow')};
			if (this.question == B23) {
				greyHead = true;
				document.getElementById("speciesDescriptText").textContent = "A land-dwelling bird, with a straight beak, a non-blue head, a non-red head, a beak, a grey head,";
				console.log('greyHead is true')};
			if (this.question == B24) {
				userAnswer = 'ROBIN';
				document.getElementById("speciesDescriptText").textContent += " and a red breast.";
				console.log('Chosen answer is robin')};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == B1) {
				straightBeak = true,
				document.getElementById("speciesDescriptText").textContent += " with a straight beak,";
			console.log('straightBeak is true')};
			if (this.question == B2) {
				userAnswer = 'ROADRUNNER',
				document.getElementById("speciesDescriptText").textContent = "A bird, with a curved beak.";
				console.log('Answer chosen is roadrunner')};
			if (this.question == B3) {
				userAnswer = 'OWL';
				document.getElementById("speciesDescriptText").textContent += " and a broad head.";
				console.log('Answer chosen is owl')};
			if (this.question == B4) {
				redDarkHead = true,
				document.getElementById("speciesDescriptText").textContent += " a non-white head,";
				console.log('redDarkHead is true')};
			if (this.question == B5) {
				darkHead = true;
				document.getElementById("speciesDescriptText").textContent = "A bird, with a hooked beak, a small head, a dark head,";
				console.log('darkHead = true')};
			if (this.question == B6) {
				userAnswer = 'HAWK';
				document.getElementById("speciesDescriptText").textContent += " and a dark neck.";
				console.log('Answer chosen is hawk')};
			if (this.question == B7) {
				landBird = true;
				document.getElementById("speciesDescriptText").textContent = "A land-dwelling bird, with a straight beak,";
				console.log('landBird is true')};
			if(this.question == B8) {
				simple = true;
				document.getElementById("speciesDescriptText").textContent = "A water-dwelling bird, with a straight, simple beak,";
				console.log('simple is true')};
			if (this.question == B9) {
				lightHead = true;
				document.getElementById("speciesDescriptText").textContent += " a light-colored head,";
				console.log('lightHead is true')};
			if (this.question == B10) {
				userAnswer = 'MALLARD DUCK';
				document.getElementById("speciesDescriptText").textContent += " and a yellow bill.";
				console.log('Answer chosen is mallard duck')};
			if (this.question == B11) {
				userAnswer = 'GREAT BLUE HERON';
				document.getElementById("speciesDescriptText").textContent += " and a blue-ish body.";
				console.log('Answer chosen is great blue heron')};
			if (this.question == B12) {
				userAnswer = 'EGRET';
				document.getElementById("speciesDescriptText").textContent += " and a long, straight bill.";
				console.log('Answer chosen is egret')};
			if (this.question == B13) {
				different = true;
				document.getElementById("speciesDescriptText").textContent += " a non-blue head,";
				console.log('different is true')};
			if (this.question == B14) {
				roundedHead = true;
				document.getElementById("speciesDescriptText").textContent = " A land-dwelling bird, with a straight beak, a blue, rounded head,";
				console.log('roundedHead is true')};
			if (this.question == B15) {
				whiteBreast = true;
				document.getElementById("speciesDescriptText").textContent += " a white breast,";
				console.log('whiteBreast is true')};
			if (this.question == B16) {
				userAnswer = 'NUTHATCH';
				document.getElementById("speciesDescriptText").textContent += " and a reddish underside.";
				console.log('Answer chosen is nuthatch')};
			if (this.question == B17) {
				bbgg = true;
				document.getElementById("speciesDescriptText").textContent += " a non-red head,";
				console.log('bbgg is true')};
			if (this.question == B18) {
				short = true;
				document.getElementById("speciesDescriptText").textContent += " a short bill or beak,";
				console.log('short is true')};
			if (this.question == B19) {
				userAnswer = 'WOODPECKER';
				document.getElementById("speciesDescriptText").textContent += " and a black and white body.";
				console.log('Answer chosen is woodpecker')};
			if (this.question == B20) {
				beak = true;
				document.getElementById("speciesDescriptText").textContent += " a beak,";
				console.log('beak is true')};
			if (this.question == B21) {
				greyBlack = true;
				document.getElementById("speciesDescriptText").textContent += " a grey or black head,";
				console.log('greyBlack is true')};
			if (this.question == B22) {
				userAnswer = 'GROUSE';
				document.getElementById("speciesDescriptText").textContent += " and a light throat.";
				console.log('Answer chosen is grouse')};
			if (this.question == B23) {
				userAnswer = 'CHICKADEE';
				document.getElementById("speciesDescriptText").textContent = "A land-dwelling bird, with a straight beak, a non-blue head, a non-red head, a beak, a grey or black capped head,";
				console.log('Answer chosen is chickadee')};
			if (this.question == B24) {
				userAnswer = 'PIGEON';
				document.getElementById("speciesDescriptText").textContent += " and a grey breast.";
				console.log('Answer chosen is pigeon')};
			},
			

		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){  
			 
			if (hookOrCurveBeak == true && this.question == B1) {
				this.question = B2;
				this.answerA = B2A;
				this.answerB = B2B; 
				document.getElementById("li7").style.display = "none"; //hides everything after hawk
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
				document.getElementById("li16").style.display = "none";
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
			}
			else if(straightBeak = true && this.question == B1) {
				this.question = B7;
				this.answerA = B7A;
				this.answerB = B7B;
				document.getElementById("li1").style.display = "none"; //hides everything before hawk
				document.getElementById("li2").style.display = "none";
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if(hookedBeak == true && this.question == B2) {
				this.question = B3;
				this.answerA = B3A;
				this.answerB = B3B;
				document.getElementById("li1").style.display = "none"; //hides roadrunner
			}
			else if(smallHead == true && this.question == B3) {
				this.question = B4;
				this.answerA = B4A;
				this.answerB = B4B;
				document.getElementById("li2").style.display = "none"; //hides owl
			}
			else if(redDarkHead == true && this.question == B4) {
				this.question = B5;
				this.answerA = B5A;
				this.answerB = B5B;
				document.getElementById("li3").style.display = "none"; //hides eagle
			}
			else if(darkHead == true && this.question == B5) {
				this.question = B6;
				this.answerA = B6A;
				this.answerB = B6B;
				document.getElementById("li4").style.display = "none"; //hides vulture
			}
			else if(waterBird == true && this.question == B7 ) {
				this.question = B8;
				this.answerA = B8A;
				this.answerB = B8B;
				document.getElementById("li13").style.display = "none"; //hides land birds
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
				document.getElementById("li16").style.display = "none";
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
			}
			else if(simple == true && this.question == B8) {
				this.question = B9;
				this.answerA = B9A;
				this.answerB = B9B;
				document.getElementById("li7").style.display = "none";
			}
			else if(darkHead2 == true && this.question == B9) {
				this.question = B10;
				this.answerA = B10A;
				this.answerB = B10B;
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if(lightHead == true && this.question == B9) {
				this.question = B11;
				this.answerA = B11A;
				this.answerB = B11B;
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
			}
			else if(whiteBody == true && this.question == B11) {
				this.question = B12;
				this.answerA = B12A;
				this.answerB = B12B;
				document.getElementById("li10").style.display = "none";
			}
			else if(landBird == true && this.question == B7) {
				this.question = B13;
				this.answerA = B13A;
				this.answerB = B13B;
				document.getElementById("li7").style.display = "none"; //hides waterbirds
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if (blue == true && this.question == B13) {
				this.question = B14;
				this.answerA = B14A;
				this.answerB = B14B;
				document.getElementById("li17").style.display = "none"; //hides non blue heads
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
			}
			else if (different == true && this.question == B13) {
				this.question = B17;
				this.answerA = B17A;
				this.answerB = B17B;
				document.getElementById("li13").style.display = "none"; //hides blue heads
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
				document.getElementById("li16").style.display = "none";
			}
			else if (roundedHead == true && this.question == B14) {
				this.question = B15;
				this.answerA = B15A;
				this.answerB = B15B;
				document.getElementById("li13").style.display = "none";
			}
			else if (whiteBreast == true && this.question == B15) {
				this.question = B16;
				this.answerA = B16A;
				this.answerB = B16B;
				document.getElementById("li14").style.display = "none";
			}
			else if (red == true && this.question == B17) {
				this.question = B18;
				this.answerA = B18A;
				this.answerB = B18B;
				document.getElementById("li20").style.display = "none"; //hides non red breasts
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
			}
			else if (bbgg == true && this.question == B17) {
				this.question = B20;
				this.answerA = B20A;
				this.answerB = B20B;
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
			}
			else if (short == true && this.question == B18) {
				this.question = B19;
				this.answerA = B19A;
				this.answerB = B19B;
				document.getElementById("li17").style.display = "none";
			}
			else if (beak == true && this.question == B20) {
				this.question = B21;
				this.answerA = B21A;
				this.answerB = B21B;
				document.getElementById("li20").style.display = "none";
			}
			else if (brown == true && this.question == B21) {
				this.question = B22;
				this.answerA = B22A;
				this.answerB = B22B;
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
			}
			else if (greyBlack == true && this.question == B21) {
				this.question = B23;
				this.answerA = B23A;
				this.answerB = B23B;
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
			}
			else if (greyHead == true && this.question == B23) {
				this.question = B24;
				this.answerA = B24A;
				this.answerB = B24B;
				document.getElementById("li23").style.display = "none";
			}  
		},    

		vueUpdateQuestion: function() {
			setTimeout(this.updateQuestion, 600);
		},
		 
			

		//this happens everytime a button is pressed, to see if a final answer was chosen
		checkAnswer: function() {       
			if (userAnswer == null) {
				console.log('No answer chosen yet')}
			else if (userAnswer != null && this.correctAnswer == userAnswer) {
				this.quizResult = 'CORRECT!';
				console.log('Correct!');
				document.getElementById("quizResultsText").innerHTML = "You correctly identified the " + this.correctAnswer + "!";
				$("#quiz").animate({opacity: 0}, 700);
   			 	$("#results").delay( 400 ).animate({opacity: 1}, 800);
    			$("#results").delay( 400 ).css('z-index', '1');
	

			}
			else if (userAnswer !=null && this.correctAnswer != userAnswer) {
				console.log('Incorrect!');
				this.quizResult = 'Incorrect!';
				document.getElementById("quizResultsText").innerHTML = "You did not correctly identify this species.";
				$("#quiz").animate({opacity: 0}, 700);
   			 	$("#results").delay( 400 ).animate({opacity: 1}, 800);
    			$("#results").delay( 400 ).css('z-index', '1');
			};
				
		},



		//these are for the buttons for the species select menu
		//tried making one reusable function using argument, but could not get it to work
		setB1: function() {
				this.correctAnswer = 'ROADRUNNER';
				this.speciesImage = './img/birds/roadrunner.jpg';
				this.backImg = "'./img/birds/roadrunner.jpg'";
				console.log(this.correctAnswer);
		},
		setB2: function() {
				this.correctAnswer = 'OWL';
				this.speciesImage = './img/birds/owl.jpg';
				this.backImg = "'./img/birds/owl.jpg'";
				console.log(this.correctAnswer);
		},
		setB3: function() {
				this.correctAnswer = 'EAGLE';
				this.speciesImage = './img/birds/eagle.jpg';
				this.backImg = "'./img/birds/eagle.jpg'";
				console.log(this.correctAnswer);
		},
		setB4: function() {
				this.correctAnswer = 'VULTURE';
				this.speciesImage = './img/birds/vulture.jpg';
				this.backImg = "'./img/birds/vulture.jpg'";
				console.log(this.correctAnswer);
		},
		setB5: function() {
				this.correctAnswer = 'FALCON';
				this.speciesImage = './img/birds/falcon.jpg';
				this.backImg = "'./img/birds/falcon.jpg'";
				console.log(this.correctAnswer);
		},
		setB6: function() {
				this.correctAnswer = 'HAWK';
				this.speciesImage = './img/birds/hawk.jpg';
				this.backImg = "'./img/birds/hawk.jpg'";
				console.log(this.correctAnswer);
		},
		setB7: function() {
				this.correctAnswer = 'PELICAN';
				this.speciesImage = './img/birds/pelican.jpg';
				this.backImg = "'./img/birds/pelican.jpg'";
				console.log(this.correctAnswer);
		},
		setB8: function() {
				this.correctAnswer = 'LOON';
				this.speciesImage = './img/birds/loon.jpg';
				this.backImg = "'./img/birds/loon.jpg'";
				console.log(this.correctAnswer);
		},
		setB9: function() {
				this.correctAnswer = 'MALLARD DUCK';
				this.speciesImage = './img/birds/mallard.jpg';
				this.backImg = "'./img/birds/mallard.jpg'";
				console.log(this.correctAnswer);
		},
		setB10: function() {
				this.correctAnswer = 'GREAT BLUE HERON';
				this.speciesImage = './img/birds/heron.jpg';
				this.backImg = "'./img/birds/heron.jpg'";
				console.log(this.correctAnswer);
		},
		setB11: function() {
				this.correctAnswer = 'SWAN';
				this.speciesImage = './img/birds/swan.jpg';
				this.backImg = "'./img/birds/swan.jpg'";
				console.log(this.correctAnswer);
		},
		setB12: function() {
				this.correctAnswer = 'EGRET';
				this.speciesImage = './img/birds/egret.jpg';
				this.backImg = "'./img/birds/egret.jpg'";
				console.log(this.correctAnswer);
		},
		setB13: function() {
				this.correctAnswer = 'BLUEJAY';
				this.speciesImage = './img/birds/bluejay.jpg';
				this.backImg = "'./img/birds/bluejay.jpg'";
				console.log(this.correctAnswer);
		},
		setB14: function() {
				this.correctAnswer = 'BLUEBIRD';
				this.speciesImage = './img/birds/bluebird.jpg';
				this.backImg = "'./img/birds/bluebird.jpg'";
				console.log(this.correctAnswer);
		},
		setB15: function() {
				this.correctAnswer = 'SWALLOW';
				this.speciesImage = './img/birds/swallow.jpg';
				this.backImg = "'./img/birds/swallow.jpg'";
				console.log(this.correctAnswer);
		},
		setB16: function() {
				this.correctAnswer = 'NUTHATCH';
				this.speciesImage = './img/birds/nuthatch.jpg';
				this.backImg = "'./img/birds/nuthatch.jpg'";
				console.log(this.correctAnswer);
		},
		setB17: function() {
				this.correctAnswer = 'HUMMINGBIRD';
				this.speciesImage = './img/birds/hummingbird.jpg';
				this.backImg = "'./img/birds/hummingbird.jpg'";
				console.log(this.correctAnswer);
		},
		setB18: function() {
				this.correctAnswer = 'WARBLER';
				this.speciesImage = './img/birds/warbler.jpg';
				this.backImg = "'./img/birds/warbler.jpg'";
				console.log(this.correctAnswer);
		},
		setB19: function() {
				this.correctAnswer = 'WOODPECKER';
				this.speciesImage = './img/birds/woodpecker.jpg';
				this.backImg = "'./img/birds/woodpecker.jpg'";
				console.log(this.correctAnswer);
		},
		setB20: function() {
				this.correctAnswer = 'CANADIAN GOOSE';
				this.speciesImage = './img/birds/canadiangoose.jpg';
				this.backImg = "'./img/birds/canadiangoose.jpg'";
				console.log(this.correctAnswer);
		},
		setB21: function() {
				this.correctAnswer = 'SPARROW';
				this.speciesImage = './img/birds/sparrow.jpg';
				this.backImg = "'./img/birds/sparrow.jpg'";
				console.log(this.correctAnswer);
		},
		setB22: function() {
				this.correctAnswer = 'GROUSE';
				this.speciesImage = './img/birds/grouse.jpg';
				this.backImg = "'./img/birds/grouse.jpg'";
				console.log(this.correctAnswer);
		},
		setB23: function() {
				this.correctAnswer = 'CHICKADEE';
				this.speciesImage = './img/birds/chickadee.jpg';
				this.backImg = "'./img/birds/chickadee.jpg'";
				console.log(this.correctAnswer);
		},
		setB24: function() {
				this.correctAnswer = 'ROBIN';
				this.speciesImage = './img/birds/robin.jpg';
				this.backImg = "'./img/birds/robin.jpg'";
				console.log(this.correctAnswer);
		},
		setB25: function() {
				this.correctAnswer = 'PIGEON';
				this.speciesImage = './img/birds/pigeon.jpg';
				this.backImg = "'./img/birds/pigeon.jpg'";
				console.log(this.correctAnswer);
		},

		birdMenuSelect: function() {
			console.log('Please select a new bird to identify');
			this.question = B1;
			this.answerA = B1A;
			this.answerB = B1B;
			userAnswer = null;
			hookOrCurveBeak = null;
			straightBeak = null;
			hookedBeak = null;
			smallHead = null;
			redDarkHead = null;
			darkHead = null;
			waterBird = null;
			landBird = null;
			simple = null;
			darkHead2 = null;
			lightHead = null;
			whiteBody = null;
			blue = null;
			different = null;
			roundedHead = null;
			whiteBreast = null;
			red = null;
			bbgg = null;
			short = null;
			beak = null;
			brown = null;
			greyBlack = null;
			greyHead = null;
		},

		//selects a new random correctAnswer and resets initial variable values
		randomBird: function() {
			console.log('A new random bird has been chosen');
			this.question = B1;
			this.answerA = B1A;
			this.answerB = B1B;
			userAnswer = null;
			hookOrCurveBeak = null;
			straightBeak = null;
			hookedBeak = null;
			smallHead = null;
			redDarkHead = null;
			darkHead = null;
			waterBird = null;
			landBird = null;
			simple = null;
			darkHead2 = null;
			lightHead = null;
			whiteBody = null;
			blue = null;
			different = null;
			roundedHead = null;
			whiteBreast = null;
			red = null;
			bbgg = null;
			short = null;
			beak = null;
			brown = null;
			greyBlack = null;
			greyHead = null;
			document.getElementById("speciesDescriptText").innerHTML = "A bird, ";
			keyNumber = Math.floor((Math.random() * 25) + 1);   //randomly chooses a number between 1 & 25
			console.log(keyNumber);		   //logs the new random bird name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'ROADRUNNER'
					this.speciesImage = './img/birds/roadrunner.jpg'
					this.backImg = "'./img/birds/roadrunner.jpg'"
					break;
					case 2:
					this.correctAnswer = 'OWL'
					this.speciesImage = './img/birds/owl.jpg'
					this.backImg = "'./img/birds/owl.jpg'"
					break;
					case 3:
					this.correctAnswer = 'EAGLE'
					this.speciesImage = './img/birds/eagle.jpg'
					this.backImg = "'./img/birds/eagle.jpg'"
					break;
					case 4:
					this.correctAnswer = 'VULTURE'
					this.speciesImage = './img/birds/vulture.jpg'
					this.backImg = "'./img/birds/vulture.jpg'"
					break;
					case 5:
					this.correctAnswer = 'FALCON'
					this.speciesImage = './img/birds/falcon.jpg'
					this.backImg = "'./img/birds/falcon.jpg'"
					break;
					case 6:
					this.correctAnswer = 'HAWK'
					this.speciesImage = './img/birds/hawk.jpg'
					this.backImg = "'./img/birds/hawk.jpg'"
					break;
					case 7:
					this.correctAnswer = 'PELICAN'
					this.speciesImage = './img/birds/pelican.jpg'
					this.backImg = "'./img/birds/pelican.jpg'"
					break;
					case 8:
					this.correctAnswer = 'LOON'
					this.speciesImage = './img/birds/loon.jpg'
					this.backImg = "'./img/birds/loon.jpg'"
					break;
					case 9:
					this.correctAnswer = 'MALLARD DUCK'
					this.speciesImage = './img/birds/mallard.jpg'
					this.backImg = "'./img/birds/mallard.jpg'"
					break;
					case 10:
					this.correctAnswer = 'GREAT BLUE HERON'
					this.speciesImage = './img/birds/heron.jpg'
					this.backImg = "'./img/birds/heron.jpg'"
					break;
					case 11:
					this.correctAnswer = 'SWAN'
					this.speciesImage = './img/birds/swan.jpg'
					this.backImg = "'./img/birds/swan.jpg'"
					break;
					case 12:
					this.correctAnswer = 'EGRET'
					this.speciesImage = './img/birds/egret.jpg'
					this.backImg = "'./img/birds/egret.jpg'"
					break;
					case 13:
					this.correctAnswer = 'BLUE JAY'
					this.speciesImage = './img/birds/bluejay.jpg'
					this.backImg = "'./img/birds/bluejay.jpg'"
					break;
					case 14:
					this.correctAnswer = 'BLUEBIRD'
					this.speciesImage = './img/birds/bluebird.jpg'
					this.backImg = "'./img/birds/bluebird.jpg'"
					break;
					case 15:
					this.correctAnswer = 'SWALLOW'
					this.speciesImage = './img/birds/swallow.jpg'
					this.backImg = "'./img/birds/swallow.jpg'"
					break;
					case 16:
					this.correctAnswer = 'NUTHATCH'
					this.speciesImage = './img/birds/nuthatch.jpg'
					this.backImg = "'./img/birds/nuthatch.jpg'"
					break;
					case 17:
					this.correctAnswer = 'HUMMINGBIRD'
					this.speciesImage = './img/birds/hummingbird.jpg'
					this.backImg = "'./img/birds/hummingbird.jpg'"
					break;
					case 18:
					this.correctAnswer = 'WARBLER'
					this.speciesImage = './img/birds/warbler.jpg'
					this.backImg = "'./img/birds/warbler.jpg'"
					break;
					case 19:
					this.correctAnswer = 'WOODPECKER'
					this.speciesImage = './img/birds/woodpecker.jpg'
					this.backImg = "'./img/birds/woodpecker.jpg'"
					break;
					case 20:
					this.correctAnswer = 'CANADIAN GOOSE'
					this.speciesImage = './img/birds/canadiangoose.jpg'
					this.backImg = "'./img/birds/canadiangoose.jpg'"
					break;
					case 21:
					this.correctAnswer = 'SPARROW'
					this.speciesImage = './img/birds/sparrow.jpg'
					this.backImg = "'./img/birds/sparrow.jpg'"
					break;
					case 22:
					this.correctAnswer = 'GROUSE'
					this.speciesImage = './img/birds/grouse.jpg'
					this.backImg = "'./img/birds/grouse.jpg'"
					break;
					case 23:
					this.correctAnswer = 'CHICKADEE'
					this.speciesImage = './img/birds/chickadee.jpg'
					this.backImg = "'./img/birds/chickadee.jpg'"
					break;
					case 24:
					this.correctAnswer = 'ROBIN'
					this.speciesImage = './img/birds/robin.jpg'
					this.backImg = "'./img/birds/robin.jpg'"
					break;
					case 25:
					this.correctAnswer = 'PIGEON'
					this.speciesImage = './img/birds/pigeon.jpg'
					this.backImg = "'./img/birds/pigeon.jpg'"
					break;
				} 
					console.log(this.correctAnswer);

		},

		vueRandomBird: function() {
			setTimeout(this.randomBird, 700);
		},

		resetLi: function() {
			document.getElementById("li1").style.display = "block";
			document.getElementById("li2").style.display = "block";
			document.getElementById("li3").style.display = "block";
			document.getElementById("li4").style.display = "block";
			document.getElementById("li5").style.display = "block";
			document.getElementById("li6").style.display = "block";
			document.getElementById("li7").style.display = "block";
			document.getElementById("li8").style.display = "block";
			document.getElementById("li9").style.display = "block";
			document.getElementById("li10").style.display = "block";
			document.getElementById("li11").style.display = "block";
			document.getElementById("li12").style.display = "block";
			document.getElementById("li13").style.display = "block";
			document.getElementById("li14").style.display = "block";
			document.getElementById("li15").style.display = "block";
			document.getElementById("li16").style.display = "block";
			document.getElementById("li17").style.display = "block";
			document.getElementById("li18").style.display = "block";
			document.getElementById("li19").style.display = "block";
			document.getElementById("li20").style.display = "block";
			document.getElementById("li21").style.display = "block";
			document.getElementById("li22").style.display = "block";
			document.getElementById("li23").style.display = "block";
			document.getElementById("li24").style.display = "block";
			document.getElementById("li25").style.display = "block";
		}, 

		//resets variable values and question/answer
		resetBird: function() {
			console.log('Your quiz has been reset');
			this.question = B1;
			this.answerA = B1A;
			this.answerB = B1B;
			userAnswer = null;
			hookOrCurveBeak = null;
			straightBeak = null;
			hookedBeak = null;
			smallHead = null;
			redDarkHead = null;
			darkHead = null;
			waterBird = null;
			landBird = null;
			simple = null;
			darkHead2 = null;
			lightHead = null;
			whiteBody = null;
			blue = null;
			different = null;
			roundedHead = null;
			whiteBreast = null;
			red = null;
			bbgg = null;
			short = null;
			beak = null;
			brown = null;
			greyBlack = null;
			greyHead = null;
			document.getElementById("speciesDescriptText").innerHTML = "A bird, ";
		},
		
		vueResetBird: function() {
			setTimeout(this.resetBird, 600);
		},
		

		chooseLi1: function() {
			userAnswer = 'ROADRUNNER';
		},

		chooseLi2: function() {
			userAnswer = 'OWL';
		},

		chooseLi3: function() {
			userAnswer = 'EAGLE';
		},

		chooseLi4: function() {
			userAnswer = 'VULTURE';
		},

		chooseLi5: function() {
			userAnswer = 'FALCON';
		},

		chooseLi6: function() {
			userAnswer = 'HAWK';
		},

		chooseLi7: function() {
			userAnswer = 'PELICAN';
		},

		chooseLi8: function() {
			userAnswer = 'LOON';
		},

		chooseLi9: function() {
			userAnswer = 'MALLARD DUCK';
		},

		chooseLi10: function() {
			userAnswer = 'GREAT BLUE HERON';
		},

		chooseLi11: function() {
			userAnswer = 'SWAN';
		},

		chooseLi12: function() {
			userAnswer = 'EGRET';
		},

		chooseLi13: function() {
			userAnswer = 'BLUEJAY';
		},

		chooseLi14: function() {
			userAnswer = 'BLUEBIRD';
		},

		chooseLi15: function() {
			userAnswer = 'SWALLOW';
		},

		chooseLi16: function() {
			userAnswer = 'NUTHATCH';
		},

		chooseLi17: function() {
			userAnswer = 'HUMMINGBIRD';
		},

		chooseLi18: function() {
			userAnswer = 'WARBLER';
		},

		chooseLi19: function() {
			userAnswer = 'WOODPECKER';
		},

		chooseLi20: function() {
			userAnswer = 'CANADIAN GOOSE';
		},

		chooseLi21: function() {
			userAnswer = 'SPARROW';
		},

		chooseLi22: function() {
			userAnswer = 'GROUSE';
		},

		chooseLi23: function() {
			userAnswer = 'CHICKADEE';
		},

		chooseLi24: function() {
			userAnswer = 'ROBIN';
		},

		chooseLi25: function() {
			userAnswer = 'PIGEON';
		},
	}
});
		

