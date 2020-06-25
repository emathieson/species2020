//beginning values for quiz variables
userAnswer = null;
shrub = null;
cactus = null;
berries = null;
noBerries = null;
red = null;
dark = null;
sepal = null;
toothed = null;
flowers = null;
leavesOnly = null;
flowersWithLeaves = null;
tinyFlowers = null;
bigFlowers = null;
yellowWhite = null;
alongBranch = null;
tip = null;
leavesSmaller = null;


//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';
backImg = 'null';


// questions
S1 = 'Is it a shrub or a cactus?';
S2 = 'Can you see any berries?';
S3 = 'Does it have red berries or dark berries?';
S4 = 'Where do the berries grow?';
S5 = 'Do the berries have obvious sepals?';
S6 = 'Is the edge of the leaf smooth or toothed?';
S7 = 'Is the leaf lobed or entire?';
S8 = 'Does it have flowers or only leaves?';
S9 = 'Do the flowers grow with leaves or on a bare branch?';
S10 = 'Are they tiny clustered flowers or big separate flowers?';
S11 = 'Are the flowers purple OR are they yellow or white?';
S12 = 'Do they grow along the branch or only at the tip?';
S13 = 'Does it have a yellow flower or a white flower?';
S14 = 'Does it have a wide leaf or a narrow leaf?';
S15 = 'Are the leaves much smaller than the flower?';
S16 = 'Does it have a yellow flower or a pink flower?';
S17 = 'Are its leaves shiny and green or dull, grey-green?';
S18 = 'Does it have long thorns?';

// answers
S1A = 'Shrub';  //sets question to S2  //shrub = true
S1B = 'Cactus'; //sets question to S18 //cactus = true

S2A = 'Berries';    //sets question to S3  //berries = true
S2B = 'No berries'; //sets question to S8  //noBerries = true

S3A = 'Red berries';  //sets question to S4  //red = true
S3B = 'Dark berries'; //sets question to S5  //dark = true

S4A = 'Berries along stem';       //sets userAnswer to WINTERBERRY  //id = 1
S4B = 'Berries clustered at tip'; //sets userAnswer to BEARBERRY    //id = 2

S5A = 'Berry has sepal';  //sets question to S6   //sepal = true
S5B = 'No obvious sepal'; //sets userAnswer to ELDERBERRY			//id = 3

S6A = 'Smooth edge';  //sets userAnswer to BLUEBERRY			//id = 4
S6B = 'Toothed edge'; //sets question to S7  //toothed = true

S7A = 'Lobed';  //sets userAnswer to CURRANT		//id = 5
S7B = 'Entire'; //sets userAnswer to SERVICEBERRY 	//id = 6

S8A = 'Flowers';     //sets question to S9   //flowers = true
S8B = 'Leaves only'; //sets question to S17  //leavesOnly = true

S9A = 'Flowers with leaves';    //sets question to S10   //flowersWithLeaves = true
S9B = 'Flowers on bare branch'; //sets userAnswer to PUSSY WILLOW   //id = 7

S10A = 'Tiny flowers in clusters'; //sets question to S11   //tinyFlowers = true
S10B = 'Big separate flowers';     //sets question to S15   //bigFlowers = true

S11A = 'Purple flowers';          //sets userAnswer to LILAC   //id = 8
S11B = 'Yellow or white flowers'; //sets question to S12   //yellowWhite = true

S12A = 'Flowers along branch'; //sets question to S13   //alongBranch = true
S12B = 'Flowers at tip';       //sets question to S14   //tip = true

S13A = 'Yellow flower'; //sets userAnswer to OREGON GRAPE   //id = 9
S13B = 'White flower';  //sets userAnswer to SPIREA		   //id = 10

S14A = 'Wide leaf';   //sets userAnswer to VIBURNUM   //id = 11
S14B = 'Narrow leaf'; //sets userAnswer to DOGWOOD    //id = 12

S15A = 'Leaves not smaller than flower'; //sets userAnswer to RHODODENDRON   //id = 13
S15B = 'Leaves smaller than flower';     //sets question to S16   //leavesSmaller = true

S16A = 'Yellow flower'; //sets userAnswer to CINQUEFOIL  	//id = 14
S16B = 'Pink flower';   //sets userAnswer to PRAIRIE ROSE   //id = 15

S17A = 'Shiny green leaves';      //sets userAnswer to POISON OAK  //id = 16
S17B = 'Dull, grey-green leaves'; //sets userAnswer to SAGEBRUSH   //id = 17

S18A = 'Long thorns';    //sets userAnswer to PRICKLY PEAR    //id = 18
S18B = 'No long thorns'; //sets userAnswer to SAGUARO CACTUS  //id = 19


const app = new Vue ({
	el: '#shrubApp',
	data: {
		question: S1,
		answerA: S1A,
		answerB: S1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/shrubs/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 19) + 1),   //chooses a number between 1 and 19
		backImg: backImg
			},

	methods: {
		//what happens when buttonA is clicked
		buttonA: function(){      
			console.log('Button A was pressed');
			if (this.question == S1) {
				shrub = true
				document.getElementById("speciesDescriptText").textContent = "A shrub,";
				console.log('shrub is true')};
			if (this.question == S2) {
				berries = true,
				document.getElementById("speciesDescriptText").textContent += " with berries,";
				console.log('berries is true')};
			if (this.question == S3) {
				red = true,
				document.getElementById("speciesDescriptText").textContent = "A shrub with red berries,";
				console.log('red is true')};
			if (this.question == S4) {
				userAnswer = 'WINTERBERRY'
				document.getElementById("speciesDescriptText").textContent = "A shrub with red berries along stem.";
				console.log('Chosen answer is WINTERBERRY')};
			if (this.question == S5) {
				sepal = true,
				document.getElementById("speciesDescriptText").textContent += " with a sepal,";
				console.log('sepal is true')};
			if (this.question == S6) {
				userAnswer = 'BLUEBERRY'
				document.getElementById("speciesDescriptText").textContent += " and a smooth-edged leaf.";
				console.log('Chosen answer is BLUEBERRY')};
			if (this.question == S7) {
				userAnswer = 'CURRANT'
				document.getElementById("speciesDescriptText").textContent += " and lobes.";
				console.log('Chosen answer is CURRANT')};
			if (this.question == S8) {
				flowers = true,
				document.getElementById("speciesDescriptText").textContent += " with flowers,";
				console.log('flowers is true')};
			if (this.question == S9) {
				flowersWithLeaves = true,
				document.getElementById("speciesDescriptText").textContent += " leaves,";
				console.log('flowersWithLeaves is true')};
			if (this.question == S10) {
				tinyFlowers = true,
				document.getElementById("speciesDescriptText").textContent += " tiny flowers,";
				console.log('tinyFlowers is true')};
			if (this.question == S11) {
				userAnswer = 'LILAC'
				document.getElementById("speciesDescriptText").textContent += " and purple flowers.";
				console.log('Chosen answer is LILAC')};
			if (this.question == S12) {
				alongBranch = true,
				document.getElementById("speciesDescriptText").textContent += " flowers along branch,";
				console.log('alongBranch is true')};
			if (this.question == S13) {
				userAnswer = 'OREGON GRAPE'
				document.getElementById("speciesDescriptText").textContent = "A shrub, without berries, with flowers, leaves, tiny yellowflowers in clusters along branch.";
				console.log('Chosen answer is OREGON GRAPE')};
			if (this.question == S14) {
				userAnswer = 'VIBURNUM'
				document.getElementById("speciesDescriptText").textContent += " and wide leaves.";
				console.log('Chosen asnwer is VIBURNUM')};
			if (this.question == S15) {
				userAnswer = 'RHODODENDRON'
				document.getElementById("speciesDescriptText").textContent += " and leaves not smaller than flowers.";
				console.log('Chosen answer is RHODODENDRON')};
			if (this.question == S16) {
				userAnswer = 'CINQUEFOIL'
				console.log('Chosen answer is CINQUEFOIL')};
			if (this.question == S17) {
				userAnswer = 'POISON OAK'
				document.getElementById("speciesDescriptText").textContent += " and shiny leaves.";
				console.log('Chosen answer is POISON OAK')};
			if (this.question == S18) {
				userAnswer = 'PRICKLY PEAR'
				document.getElementById("speciesDescriptText").textContent += " with long thorns.";
				console.log('Chosen answer is PRICKLY PEAR')};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == S1) {
				cactus = true
				document.getElementById("speciesDescriptText").textContent = "A cactus,";
				console.log('cactus is true')};
			if (this.question == S2) {
				noBerries = true,
				document.getElementById("speciesDescriptText").textContent += " without berries,";
				console.log('noBerries is true')};
			if (this.question == S3) {
				dark = true,
				document.getElementById("speciesDescriptText").textContent = "A shrub with dark berries,";
				console.log('dark is true')};
			if (this.question == S4) {
				userAnswer = 'BEARBERRY'
				document.getElementById("speciesDescriptText").textContent = "A shrub with red berries clustered at the tip.";
				console.log('Chosen answer is BEARBERRY')};
			if (this.question == S5) {
				document.getElementById("speciesDescriptText").textContent += " without a sepal.";
				userAnswer = 'ELDERBERRY'};
			if (this.question == S6) {
				toothed = true,
				document.getElementById("speciesDescriptText").textContent += " a tooth-edged leaf.";
				console.log('toothed is true')};
			if (this.question == S7) {
				userAnswer = 'SERVICEBERRY'
				document.getElementById("speciesDescriptText").textContent += " and not lobed.";
				console.log('Chosen answer is SERVICEBERRY')};
			if (this.question == S8) {
				leavesOnly = true,
				document.getElementById("speciesDescriptText").textContent += " without flowers,";
				console.log('leavesOnly is true')};
			if (this.question == S9) {
				userAnswer = 'PUSSY WILLOW'
				document.getElementById("speciesDescriptText").textContent += " and on a bare branch.";
				console.log('Chosen answer is PUSSY WILLOW')};
			if (this.question == S10) {
				bigFlowers = true,
				document.getElementById("speciesDescriptText").textContent += " big separate flowers,";
				console.log('bigFlowers is true')};
			if (this.question == S11) {
				yellowWhite = true,
				document.getElementById("speciesDescriptText").textContent = "A shrub, without berries, with flowers, leaves, tiny yellow and white flowers in clusters,";
				console.log('yellowWhite is true')};
			if (this.question == S12) {
				tip = true,
				document.getElementById("speciesDescriptText").textContent += " flowers at tip,";
				console.log('tip is true')};
			if (this.question == S13) {
				userAnswer = 'SPIREA'
				document.getElementById("speciesDescriptText").textContent += " and white flowers.";
				console.log('Chosen answer is SPIREA')};
			if (this.question == S14) {
				userAnswer = 'DOGWOOD'
				document.getElementById("speciesDescriptText").textContent += " and narrow leaves.";
				console.log('Chosen asnwer is DOGWOOD')};
			if (this.question == S15) {
				leavesSmaller = true,
				document.getElementById("speciesDescriptText").textContent += " leaves smaller than flowers,";
				console.log('leavesSmaller is true')};
			if (this.question == S16) {
				userAnswer = 'PRAIRIE ROSE'
				document.getElementById("speciesDescriptText").textContent += " and a pink flower.";
				console.log('Chosen answer is PRAIRIE ROSE')};
			if (this.question == S17) {
				userAnswer = 'SAGEBRUSH'
				document.getElementById("speciesDescriptText").textContent += " and dull leaves.";
				console.log('Chosen answer is SAGEBRUSH')};
			if (this.question == S18) {
				userAnswer = 'SAGUARO CACTUS'
				document.getElementById("speciesDescriptText").textContent += " with no long thorns.";
				console.log('Chosen answer is SAGUARO CACTUS')};
			},

		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){      
			if (shrub == true && this.question == S1) {
				this.question = S2;
				this.answerA = S2A;
				this.answerB = S2B; 
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
			}
			else if (cactus = true && this.question == S1) {
				this.question = S18;
				this.answerA = S18A;
				this.answerB = S18B;
				document.getElementById("li1").style.display = "none";
				document.getElementById("li2").style.display = "none";
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
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
				document.getElementById("li16").style.display = "none";
				document.getElementById("li17").style.display = "none";
			}
			else if (berries == true && this.question == S2) {
				this.question = S3;
				this.answerA = S3A;
				this.answerB = S3B;
				document.getElementById("li7").style.display = "none";
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
			}
			else if (noBerries == true && this.question == S2) {
				this.question = S8;
				this.answerA = S8A;
				this.answerB = S8B;
				document.getElementById("li1").style.display = "none";
				document.getElementById("li2").style.display = "none";
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if (red == true && this.question == S3) {
				this.question = S4;
				this.answerA = S4A;
				this.answerB = S4B;
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if (dark == true && this.question == S3) {
				this.question = S5;
				this.answerA = S5A;
				this.answerB = S5B;
				document.getElementById("li1").style.display = "none";
				document.getElementById("li2").style.display = "none";
			}
			else if (sepal == true && this.question == S5) {
				this.question = S6;
				this.answerA = S6A;
				this.answerB = S6B;
				document.getElementById("li3").style.display = "none";
			}
			else if (toothed == true && this.question == S6) {
				this.question = S7;
				this.answerA = S7A;
				this.answerB = S7B;
				document.getElementById("li4").style.display = "none";
			}
			else if (flowers == true && this.question == S8) {
				this.question = S9;
				this.answerA = S9A;
				this.answerB = S9B;
				document.getElementById("li16").style.display = "none";
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
			}
			else if (leavesOnly == true && this.question == S8) {
				this.question = S17;
				this.answerA = S17A;
				this.answerB = S17B;
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
			else if (flowersWithLeaves == true && this.question == S9) {
				this.question = S10;
				this.answerA = S10A;
				this.answerB = S10B;
				document.getElementById("li7").style.display = "none";
			}
			else if (tinyFlowers == true && this.question == S10) {
				this.question = S11;
				this.answerA = S11A;
				this.answerB = S11B;
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
			}
			else if (bigFlowers == true && this.question == S10) {
				this.question = S15;
				this.answerA = S15A;
				this.answerB = S15B;
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if (yellowWhite == true && this.question == S11) {
				this.question = S12;
				this.answerA = S12A;
				this.answerB = S12B;
				document.getElementById("li8").style.display = "none";
			}
			else if (alongBranch == true && this.question == S12) {
				this.question = S13;
				this.answerA = S13A;
				this.answerB = S13B;
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if (tip == true && this.question == S12) {
				this.question = S14;
				this.answerA = S14A;
				this.answerB = S14B;
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
			}
			else if (leavesSmaller == true && this.question == S15) {
				this.question = S16;
				this.answerA = S16A;
				this.answerB = S16B;
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
		setS1: function() {
				this.correctAnswer = 'WINTERBERRY';
				this.speciesImage = './img/shrubs/winterberry.jpg';
				this.backImg = "'./img/shrubs/winterberry.jpg'";
				console.log(this.correctAnswer);
		},
		setS2: function() {
				this.correctAnswer = 'BEARBERRY';
				this.speciesImage = './img/shrubs/bearberry.jpg';
				this.backImg = "'./img/shrubs/bearberry.jpg'";
				console.log(this.correctAnswer);
		},
		setS3: function() {
				this.correctAnswer = 'ELDERBERRY';
				this.speciesImage = './img/shrubs/elderberry.jpg';
				this.backImg = "'./img/shrubs/elderberry.jpg'";
				console.log(this.correctAnswer);
		},
		setS4: function() {
				this.correctAnswer = 'BLUEBERRY';
				this.speciesImage = './img/shrubs/blueberry.jpg';
				this.backImg = "'./img/shrubs/blueberry.jpg'";
				console.log(this.correctAnswer);
		},
		setS5: function() {
				this.correctAnswer = 'CURRANT';
				this.speciesImage = './img/shrubs/currant.jpg';
				this.backImg = "'./img/shrubs/currant.jpg'";
				console.log(this.correctAnswer);
		},
		setS6: function() {
				this.correctAnswer = 'SERVICEBERRY';
				this.speciesImage = './img/shrubs/serviceberry.jpg';
				this.backImg = "'./img/shrubs/serviceberry.jpg'";
				console.log(this.correctAnswer);
		},
		setS7: function() {
				this.correctAnswer = 'PUSSY WILLOW';
				this.speciesImage = './img/shrubs/pussywillow.jpg';
				this.backImg = "'./img/shrubs/pussywillow.jpg'";
				console.log(this.correctAnswer);
		},
		setS8: function() {
				this.correctAnswer = 'LILAC';
				this.speciesImage = './img/shrubs/lilac.jpg';
				this.backImg = "'./img/shrubs/lilac.jpg'";
				console.log(this.correctAnswer);
		},
		setS9: function() {
				this.correctAnswer = 'OREGON GRAPE';
				this.speciesImage = './img/shrubs/oregongrape.jpg';
				this.backImg = "'./img/shrubs/oregongrape.jpg'";
				console.log(this.correctAnswer);
		},
		setS10: function() {
				this.correctAnswer = 'SPIREA';
				this.speciesImage = './img/shrubs/spirea.jpg';
				this.backImg = "'./img/shrubs/spirea.jpg'";
				console.log(this.correctAnswer);
		},
		setS11: function() {
				this.correctAnswer = 'VIBURNUM';
				this.speciesImage = './img/shrubs/viburnum.jpg';
				this.backImg = "'./img/shrubs/viburnum.jpg'";
				console.log(this.correctAnswer);
		},
		setS12: function() {
				this.correctAnswer = 'DOGWOOD';
				this.speciesImage = './img/shrubs/dogwood.jpg';
				this.backImg = "'./img/shrubs/dogwood.jpg'";
				console.log(this.correctAnswer);
		},
		setS13: function() {
				this.correctAnswer = 'RHODODENDRON';
				this.speciesImage = './img/shrubs/rhododendron.jpg';
				this.backImg = "'./img/shrubs/rhododendron.jpg'";
				console.log(this.correctAnswer);
		},
		setS14: function() {
				this.correctAnswer = 'CINQUEFOIL';
				this.speciesImage = './img/shrubs/cinquefoil.jpg';
				this.backImg = "'./img/shrubs/cinquefoil.jpg'";
				console.log(this.correctAnswer);
		},
		setS15: function() {
				this.correctAnswer = 'PRAIRIE ROSE';
				this.speciesImage = './img/shrubs/prairierose.jpg';
				this.backImg = "'./img/shrubs/prairierose.jpg'";
				console.log(this.correctAnswer);
		},
		setS16: function() {
				this.correctAnswer = 'POISON OAK';
				this.speciesImage = './img/shrubs/poisonoak.jpg';
				this.backImg = "'./img/shrubs/poisonoak.jpg'";
				console.log(this.correctAnswer);
		},
		setS17: function() {
				this.correctAnswer = 'SAGEBRUSH';
				this.speciesImage = './img/shrubs/sagebrush.jpg';
				this.backImg = "'./img/shrubs/sagebrush.jpg'";
				console.log(this.correctAnswer);
		},
		setS18: function() {
				this.correctAnswer = 'PRICKLY PEAR';
				this.speciesImage = './img/shrubs/pricklypear.jpg';
				this.backImg = "'./img/shrubs/pricklypear.jpg'";
				console.log(this.correctAnswer);
		},
		setS19: function() {
				this.correctAnswer = 'SAGUARO CACTUS';
				this.speciesImage = './img/shrubs/saguarocactus.jpg';
				this.backImg = "'./img/shrubs/saguarocactus.jpg'";
				console.log(this.correctAnswer);
		},

		shrubMenuSelect: function() {
			console.log('Please select a new shrub to identify');
			this.question = S1;
			this.answerA = S1A;
			this.answerB = S1B;
			userAnswer = null;
			shrub = null;
			cactus = null;
			berries = null;
			noBerries = null;
			red = null;
			dark = null;
			sepal = null;
			toothed = null;
			flowers = null;
			leavesOnly = null;
			flowersWithLeaves = null;
			tinyFlowers = null;
			bigFlowers = null;
			yellowWhite = null;
			alongBranch = null;
			tip = null;
			leavesSmaller = null;
		},

		//selects a new random correctAnswer and resets initial variable values
		randomShrub: function() {
			console.log('A new random shrub has been chosen');
			this.question = S1;
			this.answerA = S1A;
			this.answerB = S1B;
			userAnswer = null;
			shrub = null;
			cactus = null;
			berries = null;
			noBerries = null;
			red = null;
			dark = null;
			sepal = null;
			toothed = null;
			flowers = null;
			leavesOnly = null;
			flowersWithLeaves = null;
			tinyFlowers = null;
			bigFlowers = null;
			yellowWhite = null;
			alongBranch = null;
			tip = null;
			leavesSmaller = null;
			document.getElementById("speciesDescriptText").innerHTML = "A plant, ";
			keyNumber = Math.floor((Math.random() * 19) + 1);   //randomly chooses a number between 1 & 19
			console.log(keyNumber);		   //logs the new random shrub name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'WINTERBERRY'
					this.speciesImage = './img/shrubs/winterberry.jpg'
					this.backImg = "'./img/shrubs/winterberry.jpg'"
					break;
					case 2:
					this.correctAnswer = 'BEARBERRY'
					this.speciesImage = './img/shrubs/bearberry.jpg'
					this.backImg = "'./img/shrubs/bearberry.jpg'"
					break;
					case 3:
					this.correctAnswer = 'ELDERBERRY'
					this.speciesImage = './img/shrubs/elderberry.jpg'
					this.backImg = "'./img/shrubs/elderberry.jpg'"
					break;
					case 4:
					this.correctAnswer = 'BLUEBERRY'
					this.speciesImage = './img/shrubs/blueberry.jpg'
					this.backImg = "'./img/shrubs/blueberry.jpg'"
					break;
					case 5:
					this.correctAnswer = 'CURRANT'
					this.speciesImage = './img/shrubs/currant.jpg'
					this.backImg = "'./img/shrubs/currant.jpg'"
					break;
					case 6:
					this.correctAnswer = 'SERVICEBERRY'
					this.speciesImage = './img/shrubs/serviceberry.jpg'
					this.backImg = "'./img/shrubs/serviceberry.jpg'"
					break;
					case 7:
					this.correctAnswer = 'PUSSY WILLOW'
					this.speciesImage = './img/shrubs/pussywillow.jpg'
					this.backImg = "'./img/shrubs/pussywillow.jpg'"
					break;
					case 8:
					this.correctAnswer = 'LILAC'
					this.speciesImage = './img/shrubs/lilac.jpg'
					this.backImg = "'./img/shrubs/lilac.jpg'"
					break;
					case 9:
					this.correctAnswer = 'OREGON GRAPE'
					this.speciesImage = './img/shrubs/oregongrape.jpg'
					this.backImg = "'./img/shrubs/oregongrape.jpg'"
					break;
					case 10:
					this.correctAnswer = 'SPIREA'
					this.speciesImage = './img/shrubs/spirea.jpg'
					this.backImg = "'./img/shrubs/spirea.jpg'"
					break;
					case 11:
					this.correctAnswer = 'VIBURNUM'
					this.speciesImage = './img/shrubs/viburnum.jpg'
					this.backImg = "'./img/shrubs/viburnum.jpg'"
					break;
					case 12:
					this.correctAnswer = 'DOGWOOD'
					this.speciesImage = './img/shrubs/dogwood.jpg'
					this.backImg = "'./img/shrubs/dogwood.jpg'"
					break;
					case 13:
					this.correctAnswer = 'RHODODENDRON'
					this.speciesImage = './img/shrubs/rhododendron.jpg'
					this.backImg = "'./img/shrubs/rhododendron.jpg'"
					break;
					case 14:
					this.correctAnswer = 'CINQUEFOIL'
					this.speciesImage = './img/shrubs/cinquefoil.jpg'
					this.backImg = "'./img/shrubs/cinquefoil.jpg'"
					break;
					case 15:
					this.correctAnswer = 'PRAIRIE ROSE'
					this.speciesImage = './img/shrubs/prairierose.jpg'
					this.backImg = "'./img/shrubs/prairierose.jpg'"
					break;
					case 16:
					this.correctAnswer = 'POISON OAK'
					this.speciesImage = './img/shrubs/poisonoak.jpg'
					this.backImg = "'./img/shrubs/poisonoak.jpg'"
					break;
					case 17:
					this.correctAnswer = 'SAGEBRUSH'
					this.speciesImage = './img/shrubs/sagebrush.jpg'
					this.backImg = "'./img/shrubs/sagebrush.jpg'"
					break;
					case 18:
					this.correctAnswer = 'PRICKLY PEAR'
					this.speciesImage = './img/shrubs/pricklypear.jpg'
					this.backImg = "'./img/shrubs/pricklypear.jpg'"
					break;
					case 19:
					this.correctAnswer = 'SAGUARO CACTUS'
					this.speciesImage = './img/shrubs/saguarocactus.jpg'
					this.backImg = "'./img/shrubs/saguarocactus.jpg'"
					break;
				} 
					console.log(this.correctAnswer);

				},

				vueRandomShrub: function() {
					setTimeout(this.randomShrub, 700);
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
		resetShrub: function() {
			console.log('Your quiz has been reset');
			this.question = S1;
			this.answerA = S1A;
			this.answerB = S1B;
			userAnswer = null;
			shrub = null;
			cactus = null;
			berries = null;
			noBerries = null;
			red = null;
			dark = null;
			sepal = null;
			toothed = null;
			flowers = null;
			leavesOnly = null;
			flowersWithLeaves = null;
			tinyFlowers = null;
			bigFlowers = null;
			yellowWhite = null;
			alongBranch = null;
			tip = null;
			leavesSmaller = null;
			document.getElementById("speciesDescriptText").innerHTML = "A plant, ";
			
		},
		
		vueResetShrub: function() {
			setTimeout(this.resetShrub, 600);
		},
		

		chooseLi1: function() {
			userAnswer = 'WINTERBERRY';
		},
		chooseLi2: function() {
			userAnswer = 'BEARBERRY';
		},
		chooseLi3: function() {
			userAnswer = 'ELDERBERRY';
		},
		chooseLi4: function() {
			userAnswer = 'BLUEBERRY';
		},
		chooseLi5: function() {
			userAnswer = 'CURRANT';
		},
		chooseLi6: function() {
			userAnswer = 'SERVICEBERRY';
		},
		chooseLi7: function() {
			userAnswer = 'PUSSY WILLOW';
		},
		chooseLi8: function() {
			userAnswer = 'LILAC';
		},
		chooseLi9: function() {
			userAnswer = 'OREGON GRAPE';
		},
		chooseLi10: function() {
			userAnswer = 'SPIREA';
		},
		chooseLi11: function() {
			userAnswer = 'VIBURNUM';
		},
		chooseLi12: function() {
			userAnswer = 'DOGWOOD';
		},
		chooseLi13: function() {
			userAnswer = 'RHODODENDRON';
		},
		chooseLi14: function() {
			userAnswer = 'CINQUEFOIL';
		},
		chooseLi15: function() {
			userAnswer = 'PRAIRIE ROSE';
		},
		chooseLi16: function() {
			userAnswer = 'POISON OAK';
		},
		chooseLi17: function() {
			userAnswer = 'SAGEBRUSH';
		},
		chooseLi18: function() {
			userAnswer = 'PRICKLY PEAR';
		},
		chooseLi19: function() {
			userAnswer = 'SAGUARO CACTUS';
		},


		
	}
});
		

