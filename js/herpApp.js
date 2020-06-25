//beginning values for quiz variables
userAnswer = null;
noLegs = null,
legs = null;
plainTail = null;
ring = null;
shell = null;
noShell = null;
frog = null;
lizard = null;
spikes = null;
smooth = null;
spikesBody = null;
other = null;
speckled = null;

//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';
backImg = 'null';


// questions
H1 = 'Is it a snake or does it have legs?';
H2 = 'Does it have a rattle on its tail or a plain tail?';
H3 = 'Does it have stripes or rings?';
H4 = 'Does it have a diamond pattern or a stripe pattern?';
H5 = 'Does it have a shell?';
H6 = 'Does it have a tail or not?';
H7 = 'Does it look like a frog or a lizard?';
H8 = 'Does it have plain fingers or suction cup fingers?';
H9 = 'Does its body have spikes or is it smooth?';
H10 = 'Do the spikes stop at its neck or run down its body and tail?';
H11 = 'Does it have a long body or a round body?';
H12 = 'Does it have stripes or another pattern?';
H13 = 'Is the pattern speckled or zigzag?';
H14 = 'Are the speckles small or large?';


// answers
H1A = 'Snake';  //sets question to H2   //noLegs = true
H1B = 'Has legs'; //sets question to H5 //legs = true

H2A = 'Rattle';      //sets userAnswer to 'RATTLESNAKE'  id = 1
H2B = 'Plain tail';  //sets question to H3   //plainTail = true

H3A = 'Stripe along body';  //sets userAnswer to 'GARTER SNAKE'  id = 2
H3B = 'Ring around body';   //sets question to H4   //ring = true

H4A = 'Diamond pattern'; //sets userAnswer to 'COPPERHEAD'  id = 3
H4B = 'Stripe pattern';  //sets userAnswer to 'KINGSNAKE'   id = 4

H5A = 'Shell';     //sets question to H6  //shell = true
H5B = 'No shell';  //sets question to H7  //noShell = true

H6A = 'No tail'; //sets userAnswer to 'BOX TURTLE'		id = 5
H6B = 'Tail';    //sets userAnswer to 'SNAPPING TURTLE' id = 6

H7A = 'Frog';   //sets question to H8    //frog = true
H7B = 'Lizard'; //sets question to H9    //lizard = true

H8A = 'Plain';       //sets userAnswer to 'BULLFROG'  id = 7
H8B = 'Suction cup'; //sets userAnswer to 'TREE FROG' id = 8

H9A = 'Spikes on back or tail'; //sets question to H10   //spikes = true
H9B = 'Smooth body';            //sets question to H12   //smooth = true

H10A = 'Spikes on neck';          //sets userAnswer to 'IGUANA'  id= 9
H10B = 'Spikes on body and tail'; //sets question to H11   //spikesBody = true

H11A = 'Long body';   //sets userAnswer to 'ALLIGATOR'  id = 10
H11B = 'Round body'; //sets userAnswer to 'HORNED LIZARD' id = 11

H12A = 'Stripes along body'; //sets userAnswer to 'SKINK'  id = 12
H12B = 'Other pattern';      //sets question to H13   //other = true

H13A = 'Speckled pattern'; //sets question to H14    //speckled = true
H13B = 'Zigzag pattern';   //sets userAnswer to 'FENCE LIZARD'  id = 13

H14A = 'Small'; //sets userAnswer to 'NEWT'        id = 14
H14B = 'Large'; //sets userAnswer to 'SALAMANDER'  id = 15


const app = new Vue ({
	el: '#herpApp',
	data: {
		question: H1,
		answerA: H1A,
		answerB: H1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/herps/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 15) + 1),   //chooses a number between 1 and 15
		backImg: backImg
			},

	methods: {
		//what happens when buttonA is clicked
		buttonA: function(){      
			console.log('Button A was pressed');
			if (this.question == H1) {
				noLegs = true,
				document.getElementById("speciesDescriptText").textContent += " without legs,";
				console.log('noLegs is true')};
			if (this.question == H2) {
				userAnswer = 'RATTLESNAKE'
				document.getElementById("speciesDescriptText").textContent += " and a rattle.";
				console.log('Chosen answer is RATTLESNAKE')};
			if (this.question == H3) {
				userAnswer = 'GARTER SNAKE'
				document.getElementById("speciesDescriptText").textContent += " and a stripe along body.";
				console.log('Chosen answer is GARTERSNAKE')};
			if (this.question == H4) {
				userAnswer = 'COPPERHEAD'
				document.getElementById("speciesDescriptText").textContent += " with a diamond pattern.";
				console.log('Chosen answer is COPPERHEAD')};
			if (this.question == H5) {
				shell = true,
				document.getElementById("speciesDescriptText").textContent += " with a shell,";
				console.log('shell is true')};
			if (this.question == H6){
				userAnswer = 'BOX TURTLE'
				document.getElementById("speciesDescriptText").textContent += " without a tail.";
				console.log('Chosen answer is BOX TURTLE')};
			if (this.question == H7) {
				frog = true,
				document.getElementById("speciesDescriptText").textContent = "A frog, with legs, without a shell,";
				console.log('frog is true')};
			if (this.question == H8) {
				userAnswer = 'BULLFROG'
				document.getElementById("speciesDescriptText").textContent += " with plain fingers.";
				console.log('Chosen asnwer is BULLFROG')};
			if (this.question == H9) {
				spikes = true,
				document.getElementById("speciesDescriptText").textContent += " with spikes,";
				console.log('spikes is true')};
			if (this.question == H10) {
				userAnswer = 'IGUANA'
				document.getElementById("speciesDescriptText").textContent = " A herp, with legs, without a shell, with spikes on neck.";
				console.log('Chosen answer is IGUANA')};
			if (this.question == H11) {
				userAnswer = 'ALLIGATOR'
				console.log('Chosen answer is ALLIGATOR')};
			if (this.question == H12) {
				userAnswer = 'SKINK'
				document.getElementById("speciesDescriptText").textContent += " and stripes along body.";
				console.log('Chosen answer is SKINK')};
			if (this.question == H13) {
				speckled = true,
				document.getElementById("speciesDescriptText").textContent += " with speckles,";
				console.log('speckled is true')};
			if (this.question == H14) {
				userAnswer = 'NEWT'
				document.getElementById("speciesDescriptText").textContent = "A herp, with legs, without a shell, with smooth skin, without stripes, and small speckles.";
				console.log('Chosen answer is NEWT')};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == H1) {
				legs = true,
				document.getElementById("speciesDescriptText").textContent += " with legs,";
				console.log('legs is true')};
			if (this.question == H2) {
				plainTail = true,
				document.getElementById("speciesDescriptText").textContent += " a plain tail,";
				console.log('plainTail is true')};
			if (this.question == H3) {
				ring = true,
				document.getElementById("speciesDescriptText").textContent += " rings around body,";
				console.log('ring is true')};
			if (this.question == H4) {
				userAnswer = 'KINGSNAKE'
				document.getElementById("speciesDescriptText").textContent += " with a stripe pattern.";
				console.log('Chosen answer is KINGSNAKE')};
			if (this.question == H5) {
				noShell = true,
				document.getElementById("speciesDescriptText").textContent += " without a shell,";
				console.log('noShell is true')};
			if (this.question == H6){
				userAnswer = 'SNAPPING TURTLE'
				document.getElementById("speciesDescriptText").textContent += " with a tail.";
				console.log('Chosen answer is SNAPPING TURTLE')};
			if (this.question == H7) {
				lizard = true,
				document.getElementById("speciesDescriptText").textContent = "A herp, with legs, without a shell,";
				console.log('lizard is true')};
			if (this.question == H8) {
				userAnswer = 'TREE FROG'
				document.getElementById("speciesDescriptText").textContent += " with suction-cup fingers.";
				console.log('Chosen asnwer is TREE FROG')};
			if (this.question == H9) {
				smooth = true,
				document.getElementById("speciesDescriptText").textContent += " with smooth skin,";
				console.log('smooth is true')};
			if (this.question == H10) {
				spikesBody = true,
				document.getElementById("speciesDescriptText").textContent = "A herp, with legs, without a shell, with spikes on body and tail,";
				console.log('spikesBody is true')};
			if (this.question == H11) {
				userAnswer = 'HORNED LIZARD'
				document.getElementById("speciesDescriptText").textContent += " and a round body.";
				console.log('Chosen answer is HORNED TOAD')};
			if (this.question == H12) {
				other = true,
				document.getElementById("speciesDescriptText").textContent += " without stripes,";
				console.log('other is true')};
			if (this.question == H13) {
				userAnswer = 'FENCE LIZARD'
				document.getElementById("speciesDescriptText").textContent += " and a zigzag pattern.";
				console.log('Chosen answer is FENCE LIZARD')};
			if (this.question == H14) {
				userAnswer = 'SALAMANDER'
				document.getElementById("speciesDescriptText").textContent = "A herp, with legs, without a shell, with smooth skin, without stripes, and large speckles.";
				console.log('Chosen answer is SALAMANDER')};
			},

		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){      
			if (noLegs == true && this.question == H1) {
				this.question = H2;
				this.answerA = H2A;
				this.answerB = H2B; 
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
				document.getElementById("li7").style.display = "none";
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
			}
			else if (legs = true && this.question == H1) {
				this.question = H5;
				this.answerA = H5A;
				this.answerB = H5B;
				document.getElementById("li1").style.display = "none";
				document.getElementById("li2").style.display = "none";
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
			}
			else if (plainTail == true && this.question == H2) {
				this.question = H3;
				this.answerA = H3A;
				this.answerB = H3B;
				document.getElementById("li1").style.display = "none";
			}
			else if (ring == true && this.question == H3) {
				this.question = H4;
				this.answerA = H4A;
				this.answerB = H4B;
				document.getElementById("li2").style.display = "none";
			}
			else if (shell == true && this.question == H5) {
				this.question = H6;
				this.answerA = H6A;
				this.answerB = H6B;
				document.getElementById("li7").style.display = "none";
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
			}
			else if (noShell == true && this.question == H5) {
				this.question = H7;
				this.answerA = H7A;
				this.answerB = H7B;
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if (frog == true && this.question == H7) {
				this.question = H8;
				this.answerA = H8A;
				this.answerB = H8B;
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
			}
			else if (lizard == true && this.question == H7) {
				this.question = H9;
				this.answerA = H9A;
				this.answerB = H9B;
				document.getElementById("li7").style.display = "none";
				document.getElementById("li8").style.display = "none";
			}
			else if (spikes == true && this.question == H9) {
				this.question = H10;
				this.answerA = H10A;
				this.answerB = H10B;
				document.getElementById("li12").style.display = "none";
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
			}
			else if (smooth == true && this.question == H9) {
				this.question = H12;
				this.answerA = H12A;
				this.answerB = H12B;
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
			}
			else if (spikesBody == true && this.question == H10) {
				this.question = H11;
				this.answerA = H11A;
				this.answerB = H11B;
				document.getElementById("li9").style.display = "none";
			}
			else if (other == true && this.question == H12) {
				this.question = H13;
				this.answerA = H13A;
				this.answerB = H13B;
				document.getElementById("li12").style.display = "none";
			}
			else if (speckled == true && this.question == H13) {
				this.question = H14;
				this.answerA = H14A;
				this.answerB = H14B;
				document.getElementById("li13").style.display = "none";
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
				this.quizResult = 'Incorrect!';
				document.getElementById("quizResultsText").innerHTML = "You did not correctly identify this species.";
				$("#quiz").animate({opacity: 0}, 700);
   			 	$("#results").delay( 400 ).animate({opacity: 1}, 800);
    			$("#results").delay( 400 ).css('z-index', '1');
			};
				
		},

		//these are for the buttons for the species select menu
		//tried making one reusable function using argument, but could not get it to work
		setH1: function() {
				this.correctAnswer = 'RATTLESNAKE';
				this.speciesImage = './img/herps/rattlesnake.jpg';
				this.backImg = "'./img/herps/rattlesnake.jpg'";
				console.log(this.correctAnswer);
		},
		setH2: function() {
				this.correctAnswer = 'GARTER SNAKE';
				this.speciesImage = './img/herps/gartersnake.jpg';
				this.backImg = "'./img/herps/gartersnake.jpg'";
				console.log(this.correctAnswer);
		},
		setH3: function() {
				this.correctAnswer = 'COPPERHEAD';
				this.speciesImage = './img/herps/copperhead.jpg';
				this.backImg = "'./img/herps/copperhead.jpg'";
				console.log(this.correctAnswer);
		},
		setH4: function() {
				this.correctAnswer = 'KINGSNAKE';
				this.speciesImage = './img/herps/kingsnake.jpg';
				this.backImg = "'./img/herps/kingsnake.jpg'";
				console.log(this.correctAnswer);
		},
		setH5: function() {
				this.correctAnswer = 'BOX TURTLE';
				this.speciesImage = './img/herps/turtle.jpg';
				this.backImg = "'./img/herps/turtle.jpg'";
				console.log(this.correctAnswer);
		},
		setH6: function() {
				this.correctAnswer = 'SNAPPING TURTLE';
				this.speciesImage = './img/herps/snappingturtle.jpg';
				this.backImg = "'./img/herps/snappingturtle.jpg'";
				console.log(this.correctAnswer);
		},
		setH7: function() {
				this.correctAnswer = 'BULLFROG';
				this.speciesImage = './img/herps/bullfrog.jpg';
				this.backImg = "'./img/herps/bullfrog.jpg'";
				console.log(this.correctAnswer);
		},
		setH8: function() {
				this.correctAnswer = 'TREE FROG';
				this.speciesImage = './img/herps/treefrog.jpg';
				this.backImg = "'./img/herps/treefrog.jpg'";
				console.log(this.correctAnswer);
		},
		setH9: function() {
				this.correctAnswer = 'IGUANA';
				this.speciesImage = './img/herps/iguana.jpg';
				this.backImg = "'./img/herps/iguana.jpg'";
				console.log(this.correctAnswer);
		},
		setH10: function() {
				this.correctAnswer = 'ALLIGATOR';
				this.speciesImage = './img/herps/alligator.jpg';
				this.backImg = "'./img/herps/alligator.jpg'";
				console.log(this.correctAnswer);
		},
		setH11: function() {
				this.correctAnswer = 'HORNED LIZARD';
				this.speciesImage = './img/herps/hornedlizard.jpg';
				this.backImg = "'./img/herps/hornedlizard.jpg'";
				console.log(this.correctAnswer);
		},
		setH12: function() {
				this.correctAnswer = 'SKINK';
				this.speciesImage = './img/herps/skink.jpg';
				this.backImg = "'./img/herps/skink.jpg'";
				console.log(this.correctAnswer);
		},
		setH13: function() {
				this.correctAnswer = 'FENCE LIZARD';
				this.speciesImage = './img/herps/lizard.jpg';
				console.log(this.correctAnswer);
		},
		setH14: function() {
				this.correctAnswer = 'NEWT';
				this.speciesImage = './img/herps/newt.jpg';
				this.backImg = "'./img/herps/newt.jpg'";
				console.log(this.correctAnswer);
		},
		setH15: function() {
				this.correctAnswer = 'SALAMANDER';
				this.speciesImage = './img/herps/tigersalamander.jpg';
				this.backImg = "'./img/herps/tigersalamander.jpg'";
				console.log(this.correctAnswer);
		},

		herpMenuSelect: function() {
			console.log('Please select a new herp to identify');
			this.question = H1;
			this.answerA = H1A;
			this.answerB = H1B;
			userAnswer = null;
			noLegs = null,
			legs = null;
			plainTail = null;
			ring = null;
			shell = null;
			noShell = null;
			frog = null;
			lizard = null;
			spikes = null;
			smooth = null;
			spikesBody = null;
			other = null;
			speckled = null;

		},

		//selects a new random correctAnswer and resets initial variable values
		randomHerp: function() {
			console.log('A new random herp has been chosen');
			this.question = H1;
			this.answerA = H1A;
			this.answerB = H1B;
			userAnswer = null;
			noLegs = null,
			legs = null;
			plainTail = null;
			ring = null;
			shell = null;
			noShell = null;
			frog = null;
			lizard = null;
			spikes = null;
			smooth = null;
			spikesBody = null;
			other = null;
			speckled = null;
			document.getElementById("speciesDescriptText").innerHTML = "A herp, ";
			keyNumber = Math.floor((Math.random() * 15) + 1);   //randomly chooses a number between 1 & 15
			console.log(keyNumber);		   //logs the new random herp name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'RATTLESNAKE'
					this.speciesImage = './img/herps/rattlesnake.jpg'
					this.backImg = "'./img/herps/rattlesnake.jpg'"
					break;
					case 2:
					this.correctAnswer = 'GARTER SNAKE'
					this.speciesImage = './img/herps/gartersnake.jpg'
					this.backImg = "'./img/herps/gartersnake.jpg'"
					break;
					case 3:
					this.correctAnswer = 'COPPERHEAD'
					this.speciesImage = './img/herps/copperhead.jpg'
					this.backImg = "'./img/herps/copperhead.jpg'"
					break;
					case 4:
					this.correctAnswer = 'KINGSNAKE'
					this.speciesImage = './img/herps/kingsnake.jpg'
					this.backImg = "'./img/herps/kingsnake.jpg'"
					break;
					case 5:
					this.correctAnswer = 'BOX TURTLE'
					this.speciesImage = './img/herps/turtle.jpg'
					this.backImg = "'./img/herps/turtle.jpg'"
					break;
					case 6:
					this.correctAnswer = 'SNAPPING TURTLE'
					this.speciesImage = './img/herps/snappingturtle.jpg'
					this.backImg = "'./img/herps/snappingturtle.jpg'"
					break;
					case 7:
					this.correctAnswer = 'BULLFROG'
					this.speciesImage = './img/herps/bullfrog.jpg'
					this.backImg = "'./img/herps/bullfrog.jpg'"
					break;
					case 8:
					this.correctAnswer = 'TREE FROG'
					this.speciesImage = './img/herps/treefrog.jpg'
					this.backImg = "'./img/herps/treefrog.jpg'"
					break;
					case 9:
					this.correctAnswer = 'IGUANA'
					this.speciesImage = './img/herps/iguana.jpg'
					this.backImg = "'./img/herps/iguana.jpg'"
					break;
					case 10:
					this.correctAnswer = 'ALLIGATOR'
					this.speciesImage = './img/herps/alligator.jpg'
					this.backImg = "'./img/herps/alligator.jpg'"
					break;
					case 11:
					this.correctAnswer = 'HORNED LIZARD'
					this.speciesImage = './img/herps/hornedlizard.jpg'
					this.backImg = "'./img/herps/hornedlizard.jpg'"
					break;
					case 12:
					this.correctAnswer = 'SKINK'
					this.speciesImage = './img/herps/skink.jpg'
					this.backImg = "'./img/herps/skink.jpg'"
					break;
					case 13:
					this.correctAnswer = 'FENCE LIZARD'
					this.speciesImage = './img/herps/lizard.jpg'
					this.backImg = "'./img/herps/lizard.jpg'"
					break;
					case 14:
					this.correctAnswer = 'NEWT'
					this.speciesImage = './img/herps/newt.jpg'
					this.backImg = "'./img/herps/newt.jpg'"
					break;
					case 15:
					this.correctAnswer = 'SALAMANDER'
					this.speciesImage = './img/herps/tigersalamander.jpg'
					this.backImg = "'./img/herps/tigersalamander.jpg'"
					break;
				} 
					console.log(this.correctAnswer);

		},

		vueRandomHerp: function() {
			setTimeout(this.randomHerp, 700);
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
		},

		//resets variable values and question/answer
		resetHerp: function() {
			console.log('Your quiz has been reset');
			this.question = H1;
			this.answerA = H1A;
			this.answerB = H1B;
			userAnswer = null;
			noLegs = null,
			legs = null;
			plainTail = null;
			ring = null;
			shell = null;
			noShell = null;
			frog = null;
			lizard = null;
			spikes = null;
			smooth = null;
			spikesBody = null;
			other = null;
			speckled = null;
			document.getElementById("speciesDescriptText").innerHTML = "A herp, ";
		},
		
		vueResetHerp: function() {
			setTimeout(this.resetHerp, 600);
		},

		chooseLi1: function() {
			userAnswer = 'RATTLESNAKE';
		},

		chooseLi2: function() {
			userAnswer = 'GARTER SNAKE';
		
		},

		chooseLi3: function() {
			userAnswer = 'COPPERHEAD';
		
		},

		chooseLi4: function() {
			userAnswer = 'KINGSNAKE';
		
		},

		chooseLi5: function() {
			userAnswer = 'BOX TURTLE';
		
		},

		chooseLi6: function() {
			userAnswer = 'SNAPPING TURTLE';
		
		},

		chooseLi7: function() {
			userAnswer = 'BULLFROG';
		
		},

		chooseLi8: function() {
			userAnswer = 'TREE FROG';
		
		},

		chooseLi9: function() {
			userAnswer = 'IGUANA';
		
		},

		chooseLi10: function() {
			userAnswer = 'ALLIGATOR';
		
		},

		chooseLi11: function() {
			userAnswer = 'HORNED LIZARD';
		
		},

		chooseLi12: function() {
			userAnswer = 'SKINK';
		
		},

		chooseLi13: function() {
			userAnswer = 'FENCE LIZARD';
		
		},

		chooseLi14: function() {
			userAnswer = 'NEWT';
		
		},

		chooseLi15: function() {
			userAnswer = 'SALAMANDER';
		
		},

		
	}
});
		

