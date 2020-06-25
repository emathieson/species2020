//beginning values for quiz variables
userAnswer = null;
needles = null;
leaves = null;
thin = null;
short = null;
long = null;
even = null;
compound = null;
simple = null;
oblong = null;
lobed = null;
entire = null;
notToothed = null;
teethAbsent = null;
teethPresent = null;
heart = null;
oblong = null;
large = null;
small = null;

//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';
backImg = 'null';

//TREE questions
T1 = 'Does it have needles or leaves?';
T2 = 'Are the needles flat & wide OR thin?';
T3 = 'Are the needles short OR long?';
T4 = 'Are the needles crowded or are they evenly spaced?';
T5 = 'Are the needles distinct or thick and crowded?';
T6 = 'Does it have pine cones that are long and conical or egg-shaped?';
T7 = 'Are the leaves simple or compound?';
T8 = 'Are the leaflets narrow or oblong?';
T9 = 'Is the first pair of leaflets bigger or smaller than the rest?';
T10 = 'Are the leaves lobed or not lobed (entirely)?';
T11 = 'Are the leaves toothed or not?';
T12 = 'Are the lobes distinctly triangular or more indistinct?';
T13 = 'Do the leaves have teeth?';
T14 = 'Does it have a narrow  leaf or a wide leaf?';
T15 = 'Are the leaves heart shaped or oblong?';
T16 = 'Is the leaf triangular with long tip or almost round?';
T17 = 'Do the leaves have large teeth or small teeth?';
T18 = 'Is the leaf base uneven or symmetrical?';
T19 = 'Does the leaf have curved veins or straight veins?';

//TREE answers
T1A = 'Needles';   //Sets question to T2  //needles = true
T1B = 'Leaves';    //Sets question to T7  //leaves = true

T2A = 'Flat & wide'; //Sets userAnswer to JUNIPER   //id = 1
T2B = 'Thin';     	 //Sets quesiton to T3   		//thin = true

T3A = 'Short';  //Sets question to T4 		//short = true
T3B = 'Long';   //Sets question to T6 		//long = true

T4A = 'Needles crowded'; 	   //Sets userAnswer to WHITE PINE  //id = 2
T4B = 'Needles evenly spaced'; //Sets question to T5   		//even = true

T5A = 'Distinct needles'; 		   //Sets userAnswer to FIR    		 //id = 5
T5B = 'Thick and crowded needles'; //Sets userAnswer to SPRUCE 	//id = 6

T6A = 'Long and conical pine cones'; //Sets userAnswer to LOBLOLLY PINE  	 //id = 3
T6B = 'Egg-shaped pine cones';       //Sets userAnswer to PONDEROSA PINE  	 //id = 4

T7A = 'Compound';  //Sets question to T8  		//compound = true
T7B = 'Simple';    //Sets question to T10 		//simple = true

T8A = 'Narrow'; //Sets userAnswer to DATE PALM  //id = 7
T8B = 'Oblong'; //Sets question to T9           //oblong = true

T9A = 'Bigger leaflets';  //Sets userAnswer to HICKORY   //id = 8
T9B = 'Smaller leaflets'; //Sets userAnswer to WALNUT    //id = 9

T10A = 'Lobed';  //Sets question to T11 	//lobed = true
T10B = 'Entire'; //Sets question to T13 	//entire = true

T11A = 'Leaves are toothed';     //Sets userAnswer to OAK  //id = 10
T11B = 'Leaves are not toothed'; //Sets question to T12    //notToothed = true

T12A = 'Triangular lobes'; //Sets userAnswer to MAPLE			//id = 11
T12B = 'Indistinct lobes'; //Sets userAnswer to SYCAMORE		//id = 12

T13A = 'Teeth absent';  //Sets question to T14    //teethAbsent = true
T13B = 'Teeth present'; //Sets question to T15    //teethPresent = true

T14A = 'Narrow leaf'; //Sets userAnswer to JOSHUA TREE   //id = 13
T14B = 'Wide leaf';   //Sets userAnswer to MAGNOLIA	  //id = 14

T15A = 'Leaves are heart-shaped';  //Sets question to T16   //heart = true
T15B = 'Leaves are oblong';        //Sets question to T17   //oblong = true

T16A = 'Triangular with long tip'; //Sets userAnswer to COTTONWOOD  //id = 15
T16B = 'Almost round';             //Sets userAnswer to ASPEN       //id = 16

T17A = 'Large teeth';  //Sets question to T18   //large = true
T17B = 'Small teeth';  //Sets question to T19   //small = true

T18A = 'Uneven leaf base';       //Sets userAnswer to ELM    //id = 17
T18B = 'Symmetrical leaf base';  //Sets userAnswer to ALDER  //id = 18

T19A = 'Curved veins';    //Sets userAnswer to CHERRY   //id = 19
T19B = 'Straight veins'; //Sets userAnswer to BEECH     //id = 20

//treeApp
const app = new Vue ({
	el: '#treeApp',
	data: {
		question: T1,
		answerA: T1A,
		answerB: T1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/trees/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 20) + 1),   //chooses a number between 1 and 20
		backImg: backImg
			},

	methods: {
		//what happens when buttonA is clicked
		buttonA: function(){      
			console.log('Button A was pressed');
			if (this.question == T1) {
				needles = true,
				document.getElementById("speciesDescriptText").textContent += " with needles";
				console.log('needles is true')};
			if (this.question == T2) {
				userAnswer = 'JUNIPER'
				document.getElementById("speciesDescriptText").textContent = "A tree with flat & wide needles.";
				console.log('userAnswer is JUNIPER')};
			if (this.question == T3) {
				short = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with short, thin needles,";
				console.log('short is true')};
			if (this.question == T4) {
				userAnswer = 'WHITE PINE'
				document.getElementById("speciesDescriptText").textContent = "A tree with short, thin, crowded needles,";
				console.log('userAnswer is WHITE PINE')};
			if (this.question == T5) {
				userAnswer = 'FIR'
				document.getElementById("speciesDescriptText").textContent = "A tree with long, thin, evenly spaced, distinct needles,";
				console.log('userAnswer is FIR')};
			if (this.question == T6) {
				userAnswer = 'LOBLOLLY PINE'
				document.getElementById("speciesDescriptText").textContent += " and long, conical pine cones.";
				console.log('userAnswer is LOBLOLLY PINE')};
			if (this.question == T7) {
				compound = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with compound leaves,";
				console.log('compound is true')};
			if (this.question == T8) {
				userAnswer = 'DATE PALM'
				document.getElementById("speciesDescriptText").textContent = "A tree with compound, narrow leaves.";
				console.log('userAnswer is DATE PALM')};
			if (this.question == T9) {
				userAnswer = 'HICKORY'
				document.getElementById("speciesDescriptText").textContent += " and bigger leaflets.";
				console.log('userAnswer is HICKORY')};
			if (this.question == T10) {
				lobed = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, lobed leaves,";
				console.log('lobed is true')};
			if (this.question == T11) {
				userAnswer = 'OAK'
				document.getElementById("speciesDescriptText").textContent += " and toothed.";
				console.log('userAnswer is OAK')};
			if (this.question == T12) {
				userAnswer = 'MAPLE'
				document.getElementById("speciesDescriptText").textContent += " with triangular lobes.";
				console.log('userAnswer is MAPLE')};
			if (this.question == T13) {
				teethAbsent = true,
				document.getElementById("speciesDescriptText").textContent += " teeth absent,";
				console.log('teethAbsent is true')};
			if (this.question == T14) {
				userAnswer = 'JOSHUA TREE'
				document.getElementById("speciesDescriptText").textContent += " and a narrow leaf.";
				console.log('userAnswer is JOSHUA TREE')};
			if (this.question == T15) {
				heart = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, entire, heart-shaped leaves, teeth";
				console.log('heart is true')};
			if (this.question == T16) {
				userAnswer = 'COTTONWOOD'
				document.getElementById("speciesDescriptText").textContent += " and triangular with long tip.";
				console.log('userAnswer is COTTONWOOD')};
			if (this.question == T17) {
				large = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, entire, oblong leaves, large teeth";
				console.log('large is true')};
			if (this.question == T18) {
				userAnswer = 'ELM'
				document.getElementById("speciesDescriptText").textContent += " and an asymmetrical leaf-base.";
				console.log('userAnswer is ELM')};
			if (this.question == T19) {
				userAnswer = 'CHERRY'
				document.getElementById("speciesDescriptText").textContent += " and curved veins.";
				console.log('userAnswer is CHERRY')};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == T1) {
				leaves = true,
				document.getElementById("speciesDescriptText").textContent += " with leaves";
				console.log('leaves is true')};
			if (this.question == T2) {
				thin = true;
				document.getElementById("speciesDescriptText").textContent = "A tree with thin needles,";
				console.log('thin is true')};
			if (this.question == T3) {
				long = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with long, thin needles,";
				console.log('long is true')};
			if (this.question == T4) {
				even = true;
				document.getElementById("speciesDescriptText").textContent = "A tree with long, thin, evenly spaced needles,";
				console.log('even is true')};
			if (this.question == T5) {
				userAnswer = 'SPRUCE'
				document.getElementById("speciesDescriptText").textContent = "A tree with long, thin, evenly spaced, thick and crowded needles,";
				console.log('userAnswer is SPRUCE')};
			if (this.question == T6) {
				userAnswer = 'PONDEROSA PINE'
				document.getElementById("speciesDescriptText").textContent += " and egg-shaped pine cones.";
				console.log('userAnswer is PONDEROSA PINE')};
			if (this.question == T7) {
				simple = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple leaves,";
				console.log('simple is true')};
			if (this.question == T8) {
				oblong = true,
				document.getElementById("speciesDescriptText").textContent += " oblong leaves,";
				console.log('oblong is true')};
			if (this.question == T9) {
				userAnswer = 'WALNUT'
				document.getElementById("speciesDescriptText").textContent += " and smaller leaflets.";
				console.log('userAnswer is WALNUT')};
			if (this.question == T10) {
				entire = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, entire leaves,";
				console.log('entire is true')};
			if (this.question == T11) {
				notToothed = true,
				document.getElementById("speciesDescriptText").textContent += " not toothed,";
				console.log('notToothed is true')};
			if (this.question == T12) {
				userAnswer = 'SYCAMORE'
				document.getElementById("speciesDescriptText").textContent += " and indistinct lobes.";
				console.log('userAnswer is SYCAMORE')};
			if (this.question == T13) {
				teethPresent = true,
				document.getElementById("speciesDescriptText").textContent += " teeth,";
				console.log('teethPresent is true')};
			if (this.question == T14) {
				userAnswer = 'MAGNOLIA'
				document.getElementById("speciesDescriptText").textContent += " and a wide leaf.";
				console.log('userAnswer is MAGNOLIA')};
			if (this.question == T15) {
				oblong = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, entire, oblong leaves, teeth";
				console.log('oblong is true')}; 
			if (this.question == T16) {
				userAnswer = 'ASPEN'
				document.getElementById("speciesDescriptText").textContent += " and almost-round leaves.";
				console.log('userAnswer is ASPEN')};
			if (this.question == T17) {
				small = true,
				document.getElementById("speciesDescriptText").textContent = "A tree with simple, entire, oblong leaves, small teeth";
				console.log('small is true')};
			if (this.question == T18) {
				userAnswer = 'ALDER';
				document.getElementById("speciesDescriptText").textContent += " and a symmetrical leaf-base.";
				console.log('userAnswer is ALDER')};
			if (this.question == T19) {
				userAnswer = 'BEECH'
				document.getElementById("speciesDescriptText").textContent += " and a straight veins.";
				console.log('userAnswer is BEECH')};
			},

		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){      
			if (needles == true && this.question == T1) {
				this.question = T2;
				this.answerA = T2A;
				this.answerB = T2B; 
				document.getElementById("li7").style.display = "none"; //hides all leaves trees
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
			}
			else if (thin == true && this.question == T2) {
				this.question = T3;
				this.answerA = T3A;
				this.answerB = T3B;
				document.getElementById("li1").style.display = "none"; //hides flat
			}
			else if (short == true && this.question == T3) { 
				this.question = T4;
				this.answerA = T4A;
				this.answerB = T4B;
				document.getElementById("li3").style.display = "none"; //hides long
				document.getElementById("li4").style.display = "none";
			}
			else if (long == true && this.question == T3) {
				this.question = T6;
				this.answerA = T6A;
				this.answerB = T6B;
				document.getElementById("li2").style.display = "none"; //hides short
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if (even == true && this.question == T4) {
				this.question = T5;
				this.answerA = T5A;
				this.answerB = T5B;
				document.getElementById("li2").style.display = "none"; //hides white pine
			}
			else if (leaves == true && this.question == T1) {   /* finish */
				this.question = T7;
				this.answerA = T7A;
				this.answerB = T7B;
				document.getElementById("li1").style.display = "none"; //hide all needles
				document.getElementById("li2").style.display = "none";
				document.getElementById("li3").style.display = "none";
				document.getElementById("li4").style.display = "none";
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
			}
			else if (compound == true && this.question == T7) {
				this.question = T8;
				this.answerA = T8A;
				this.answerB = T8B;
				document.getElementById("li10").style.display = "none"; //hides simple leaves 10-20
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
			}
			else if (simple == true && this.question == T7) {
				this.question = T10;
				this.answerA = T10A;
				this.answerB = T10B;
				document.getElementById("li7").style.display = "none"; //hides compound leaves 7-9
				document.getElementById("li8").style.display = "none";
				document.getElementById("li9").style.display = "none";
			}
			else if (oblong == true && this.question == T8) {
				this.question = T9;
				this.answerA = T9A;
				this.answerB = T9B;
				document.getElementById("li7").style.display = "none"; //hides date palm
			}
			else if (lobed == true && this.question == T10) {
				this.question = T11;
				this.answerA = T11A;
				this.answerB = T11B;
				document.getElementById("li13").style.display = "none"; //hides entire 13-20
				document.getElementById("li14").style.display = "none";
				document.getElementById("li15").style.display = "none";
				document.getElementById("li16").style.display = "none";
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
			}
			else if (entire == true && this.question == T10) {
				this.question = T13;
				this.answerA = T13A;
				this.answerB = T13B;
				document.getElementById("li10").style.display = "none"; //hides lobed 10-12
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if (notToothed == true && this.question == T11) {
				this.question = T12;
				this.answerA = T12A;
				this.answerB = T12B;
				document.getElementById("li10").style.display = "none"; //hides oak
			}
			else if (teethAbsent == true && this.question == T13) {
				this.question = T14;
				this.answerA = T14A;
				this.answerB = T14B;
				document.getElementById("li16").style.display = "none"; //hides teethPresent 16-20
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
			}
			else if (teethPresent == true && this.question == T13) {
				this.question = T15;
				this.answerA = T15A;
				this.answerB = T15B;
				document.getElementById("li13").style.display = "none"; //hjides teethAbsent 13-14
				document.getElementById("li14").style.display = "none";
			}
			else if (heart == true && this.question == T15) {
				this.question = T16;
				this.answerA = T16A;
				this.answerB = T16B;
				document.getElementById("li17").style.display = "none"; //hides oblong 17-20
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
			}
			else if (oblong == true && this.question == T15) {
				this.question = T17;
				this.answerA = T17A;
				this.answerB = T17B;
				document.getElementById("li15").style.display = "none"; //hides heart
				document.getElementById("li16").style.display = "none";
			}
			else if (large == true && this.question == T17) {
				this.question = T18;
				this.answerA = T18A;
				this.answerB = T18B;
				document.getElementById("li19").style.display = "none"; //hides small
				document.getElementById("li20").style.display = "none";
			}
			else if (small == true && this.question == T17) {
				this.question = T19;
				this.answerA = T19A;
				this.answerB = T19B;
				document.getElementById("li17").style.display = "none";
				document.getElementById("li18").style.display = "none";
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
		setT1: function() {
				this.correctAnswer = 'JUNIPER';
				this.speciesImage = './img/trees/juniper.jpg';
				this.backImg = "'./img/trees/juniper.jpg'";
				console.log(this.correctAnswer);
		},
		setT2: function() {
				this.correctAnswer = 'WHITE PINE';
				this.speciesImage = './img/trees/whitepine.jpg';
				this.backImg = "'./img/trees/whitepine.jpg'";
				console.log(this.correctAnswer);
		},
		setT3: function() {
				this.correctAnswer = 'LOBLOLLY PINE';
				this.speciesImage = './img/trees/loblollypine.jpg';
				this.backImg = "'./img/trees/loblollypine.jpg'";
				console.log(this.correctAnswer);
		},
		setT4: function() {
				this.correctAnswer = 'PONDEROSA PINE';
				this.speciesImage = './img/trees/ponderosapine.jpg';
				this.backImg = "'./img/trees/ponderosapine.jpg'";
				console.log(this.correctAnswer);
		},
		setT5: function() {
				this.correctAnswer = 'FIR';
				this.speciesImage = './img/trees/fir.jpg';
				this.backImg = "'./img/trees/fir.jpg'";
				console.log(this.correctAnswer);
		},
		setT6: function() {
				this.correctAnswer = 'SPRUCE';
				this.speciesImage = './img/trees/spruce.jpg';
				this.backImg = "'./img/trees/spruce.jpg'";
				console.log(this.correctAnswer);
		},
		setT7: function() {
				this.correctAnswer = 'DATE PALM';
				this.speciesImage = './img/trees/datepalm.jpg';
				this.backImg = "'./img/trees/datepalm.jpg'";
				console.log(this.correctAnswer);
		},
		setT8: function() {
				this.correctAnswer = 'HICKORY';
				this.speciesImage = './img/trees/hickory.jpg';
				this.backImg = "'./img/trees/hickory.jpg'";
				console.log(this.correctAnswer);
		},
		setT9: function() {
				this.correctAnswer = 'WALNUT';
				this.speciesImage = './img/trees/walnut.jpg';
				this.backImg = "'./img/trees/walnut.jpg'";
				console.log(this.correctAnswer);
		},
		setT10: function() {
				this.correctAnswer = 'OAK';
				this.speciesImage = './img/trees/oak.jpg';
				this.backImg = "'./img/trees/oak.jpg'";
				console.log(this.correctAnswer);
		},
		setT11: function() {
				this.correctAnswer = 'MAPLE';
				this.speciesImage = './img/trees/maple.jpg';
				this.backImg = "'./img/trees/maple.jpg'";
				console.log(this.correctAnswer);
		},
		setT12: function() {
				this.correctAnswer = 'SYCAMORE';
				this.speciesImage = './img/trees/sycamore.jpg';
				this.backImg = "'./img/trees/sycamore.jpg'";
				console.log(this.correctAnswer);
		},
		setT13: function() {
				this.correctAnswer = 'JOSHUA TREE';
				this.speciesImage = './img/trees/joshuatree.jpg';
				this.backImg = "'./img/trees/joshuatree.jpg'";
				console.log(this.correctAnswer);
		},
		setT14: function() {
				this.correctAnswer = 'MAGNOLIA';
				this.speciesImage = './img/trees/magnolia.jpg';
				this.backImg = "'./img/trees/magnolia.jpg'";
				console.log(this.correctAnswer);
		},
		setT15: function() {
				this.correctAnswer = 'COTTONWOOD';
				this.speciesImage = './img/trees/cottonwood.jpg';
				this.backImg = "'./img/trees/cottonwood.jpg'";
				console.log(this.correctAnswer);
		},
		setT16: function() {
				this.correctAnswer = 'ASPEN';
				this.speciesImage = './img/trees/aspen.jpg';
				this.backImg = "'./img/trees/aspen.jpg'";
				console.log(this.correctAnswer);
		},
		setT17: function() {
				this.correctAnswer = 'ELM';
				this.speciesImage = './img/trees/elm.jpg';
				this.backImg = "'./img/trees/elm.jpg'";
				console.log(this.correctAnswer);
		},
		setT18: function() {
				this.correctAnswer = 'ALDER';
				this.speciesImage = './img/trees/alder.jpg';
				this.backImg = "'./img/trees/alder.jpg'";
				console.log(this.correctAnswer);
		},
		setT19: function() {
				this.correctAnswer = 'CHERRY';
				this.speciesImage = './img/trees/cherry.jpg';
				this.backImg = "'./img/trees/cherry.jpg'";
				console.log(this.correctAnswer);
		},
		setT20: function() {
				this.correctAnswer = 'BEECH';
				this.speciesImage = './img/trees/beech.jpg';
				this.backImg = "'./img/trees/beech.jpg'";
				console.log(this.correctAnswer);
		},

		treeMenuSelect: function() {
			console.log('Please select a new tree to identify');
			userAnswer = null;
			needles = null;
			leaves = null;
			thin = null;
			short = null;
			long = null;
			even = null;
			compound = null;
			simple = null;
			oblong = null;
			lobed = null;
			entire = null;
			notToothed = null;
			teethAbsent = null;
			teethPresent = null;
			heart = null;
			oblong = null;
			large = null;
			small = null;
		},

		//selects a new random correctAnswer and resets initial variable values
		randomTree: function() {
			console.log('A new random bird has been chosen');
			this.question = T1;
			this.answerA = T1A;
			this.answerB = T1B;
			userAnswer = null;
			needles = null;
			leaves = null;
			thin = null;
			short = null;
			long = null;
			even = null;
			compound = null;
			simple = null;
			oblong = null;
			lobed = null;
			entire = null;
			notToothed = null;
			teethAbsent = null;
			teethPresent = null;
			heart = null;
			oblong = null;
			large = null;
			small = null;
			document.getElementById("speciesDescriptText").innerHTML = "A tree, ";
			keyNumber = Math.floor((Math.random() * 20) + 1);   //randomly chooses a number between 1 & 25
			console.log(keyNumber);		   //logs the new random bird name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'JUNIPER'
					this.speciesImage = './img/trees/juniper.jpg';
					this.backImg = "'./img/trees/juniper.jpg'"
					break;
					case 2:
					this.correctAnswer = 'WHITE PINE'
					this.speciesImage = './img/trees/whitepine.jpg';
					this.backImg = "'./img/trees/whitepine.jpg'"
					break;
					case 3:
					this.correctAnswer = 'LOBLOLLY PINE'
					this.speciesImage = './img/trees/loblollypine.jpg';
					this.backImg = "'./img/trees/loblollypine.jpg'"
					break;
					case 4:
					this.correctAnswer = 'PONDEROSA PINE'
					this.speciesImage = './img/trees/ponderosapine.jpg';
					this.backImg = "'./img/trees/ponderosapine.jpg'"
					break;
					case 5:
					this.correctAnswer = 'FIR'
					this.speciesImage = './img/trees/fir.jpg';
					this.backImg = "'./img/trees/fir.jpg'"
					break;
					case 6:
					this.correctAnswer = 'SPRUCE'
					this.speciesImage = './img/trees/spruce.jpg';
					this.backImg = "'./img/trees/spruce.jpg'"
					break;
					case 7:
					this.correctAnswer = 'DATE PALM'
					this.speciesImage = './img/trees/datepalm.jpg';
					this.backImg = "'./img/trees/datepalm.jpg'"
					break;
					case 8:
					this.correctAnswer = 'HICKORY'
					this.speciesImage = './img/trees/hickory.jpg';
					this.backImg = "'./img/trees/hickory.jpg'"
					break;
					case 9:
					this.correctAnswer = 'WALNUT'
					this.speciesImage = './img/trees/walnut.jpg';
					this.backImg = "'./img/trees/walnut.jpg'"
					break;
					case 10:
					this.correctAnswer = 'OAK'
					this.speciesImage = './img/trees/oak.jpg';
					this.backImg = "'./img/trees/oak.jpg'"
					break;
					case 11:
					this.correctAnswer = 'MAPLE'
					this.speciesImage = './img/trees/maple.jpg';
					this.backImg = "'./img/trees/maple.jpg'"
					break;
					case 12:
					this.correctAnswer = 'SYCAMORE'
					this.speciesImage = './img/trees/sycamore.jpg';
					this.backImg = "'./img/trees/sycamore.jpg'"
					break;
					case 13:
					this.correctAnswer = 'JOSHUA TREE'
					this.speciesImage = './img/trees/joshuatree.jpg';
					this.backImg = "'./img/trees/joshuatree.jpg'"
					break;
					case 14:
					this.correctAnswer = 'MAGNOLIA'
					this.speciesImage = './img/trees/magnolia.jpg';
					this.backImg = "'./img/trees/magnolia.jpg'"
					break;
					case 15:
					this.correctAnswer = 'COTTONWOOD'
					this.speciesImage = './img/trees/cottonwood.jpg';
					this.backImg = "'./img/trees/cottonwood.jpg'"
					break;
					case 16:
					this.correctAnswer = 'ASPEN'
					this.speciesImage = './img/trees/aspen.jpg';
					this.backImg = "'./img/trees/aspen.jpg'"
					break;
					case 17:
					this.correctAnswer = 'ELM'
					this.speciesImage = './img/trees/elm.jpg';
					this.backImg = "'./img/trees/elm.jpg'"
					break;
					case 18:
					this.correctAnswer = 'ALDER'
					this.speciesImage = './img/trees/alder.jpg';
					this.backImg = "'./img/trees/alder.jpg'"
					break;
					case 19:
					this.correctAnswer = 'CHERRY'
					this.speciesImage = './img/trees/cherry.jpg';
					this.backImg = "'./img/trees/cherry.jpg'"
					break;
					case 20:
					this.correctAnswer = 'BEECH'
					this.speciesImage = './img/trees/beech.jpg';
					this.backImg = "'./img/trees/beech.jpg'"
					break;
				} 
					console.log(this.correctAnswer);
				},

				vueRandomTree: function() {
					setTimeout(this.randomTree, 700);
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
		},

		//resets variable values and question/answer
		resetTree: function() {
			console.log('Your quiz has been reset');
			this.question = T1;
			this.answerA = T1A;
			this.answerB = T1B;
			userAnswer = null;
			needles = null;
			leaves = null;
			thin = null;
			short = null;
			long = null;
			even = null;
			compound = null;
			simple = null;
			oblong = null;
			lobed = null;
			entire = null;
			notToothed = null;
			teethAbsent = null;
			teethPresent = null;
			heart = null;
			oblong = null;
			large = null;
			small = null;
			document.getElementById("speciesDescriptText").innerHTML = "A tree, ";

		},
		
		vueResetTree: function() {
			setTimeout(this.resetTree, 600);
		},

		chooseLi1: function() {
			userAnswer = 'JUNIPER';
		},

		chooseLi2: function() {
			userAnswer = 'WHITE PINE';
		},

		chooseLi3: function() {
			userAnswer = 'LOBLOLLY PINE';
		},

		chooseLi4: function() {
			userAnswer = 'PONDEROSA PINE';
		},

		chooseLi5: function() {
			userAnswer = 'FIR';
		},

		chooseLi6: function() {
			userAnswer = 'SPRUCE';
		},

		chooseLi7: function() {
			userAnswer = 'DATE PALM';
		},

		chooseLi8: function() {
			userAnswer = 'HICKORY';
		},

		chooseLi9: function() {
			userAnswer = 'WALNUT';
		},

		chooseLi10: function() {
			userAnswer = 'OAK';
		},

		chooseLi11: function() {
			userAnswer = 'MAPLE';
		},

		chooseLi12: function() {
			userAnswer = 'SYCAMORE';
		},

		chooseLi13: function() {
			userAnswer = 'JOSHUA TREE';
		},

		chooseLi14: function() {
			userAnswer = 'MAGNOLIA';
		},

		chooseLi15: function() {
			userAnswer = 'COTTONWOOD';
		},

		chooseLi16: function() {
			userAnswer = 'ASPEN';
		},

		chooseLi17: function() {
			userAnswer = 'ELM';
		},

		chooseLi18: function() {
			userAnswer = 'ALDER';
		},

		chooseLi19: function() {
			userAnswer = 'CHERRY';
		},

		chooseLi20: function() {
			userAnswer = 'BEECH';
		},
	}
		
});
		

