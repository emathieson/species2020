//beginning values for quiz variables
userAnswer = null;
hornAntlerAbsent = null;
hornAntlerPresent = null;
fly = null;
walk = null;
hairless = null;
furry = null;
thin = null;
plainBody = null;
earsUp = null;
smallClaws = null;
stubbyTail = null;
longTail = null;
longEars = null;
shortEars = null;
stripedBack = null;
solidBack = null;
tailDown = null;
smooth = null;
plainFace = null;
thick = null;
longLegs = null;
dog = null;
cat = null;
lightLegs = null;
nonBranched = null;
branched = null;
plainNeck = null;

//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';
backImg = 'null';


//MAMMAL questions
M1 = 'Does it have any horns or antlers?';
M2 = 'Does it fly or walk?';
M3 = 'Does it have wings or flaps?';
M4 = 'Does is have a furry tail or a hairless tail?';
M5 = 'Does it have a paddle-like tail or a long thin tail?';
M6 = 'Does it have body armor or a plain, hairy body?';
M7 = 'Do its ears stick up or are they hidden in fur?';
M8 = 'Does it have long distinct claws or small claws?';
M9 = 'Does it have a short snout or a long snout?';
M10 = 'Does it have a long tail or a stubby tail?';
M11 = 'Does it have long ears or short ears?';
M12 = 'Does it have a rounded body or a long, lean body?';
M13 = 'Does it have a hump over its shoulders or not?';
M14 = 'Does it have stripes or a solid color on its back?';
M15 = 'Does it have stripes on its tail or a solid color tail?';
M16 = 'Does it hold its tail up or down?';
M17 = 'Does it have quills on its back or a smooth back?';
M18 = 'Does it have white fur around its eyes that looks like a mask?';
M19 = 'Does it have a long skinny neck or a thick neck?';
M20 = 'Does it have short legs or long legs?';
M21 = 'Does it look more like a dog or a cat?';
M22 = 'Does it have dark legs or light legs?';
M23 = 'Does it have a light tail or a dark tail?';
M24 = 'Does it have a plain face or does it have sideburns?';
M25 = 'Are the horns or antlers branched or non-branched?';
M26 = 'Does it have long, curled horns or short, curved horns?';
M27 = 'Does it have a dewlap on its neck or a plain neck?';
M28 = 'Does it have a long tail or a short tail?';

//MAMMAL answers
M1A = 'No horns or antlers'; //sets question to M2    //hornAntlerAbsent = true
M1B = 'Horns or antlers';    //sets question to M25   //hornAntlerPresent = true

M2A = 'Fly';  //sets question to M3   //fly = true
M2B = 'Walk'; //sets question to M4   //walk = true

M3A = 'Skin flaps'; //sets userAnswer to FLYING SQUIRREL //id = 1
M3B = 'Wings';      //sets userAnswer to BAT 			 //id = 2

M4A = 'Hairless'; //sets question to M5    //hairless = true
M4B = 'Furry';    //sets question to M10   //furry = true

M5A = 'Paddle-tail';     //sets userAnswer to BEAVER     //id = 3
M5B = 'Long thin tail';  //sets question to M6   //thin = true

M6A = 'Body armor';        //sets userAnswer to ARMADILLO  //id = 4
M6B = 'Plain hairy body';  //sets question to M7  //plainBody = true

M7A = 'Ears stick up';   //sets question to M8   /earsUp = true
M7B = 'Ears are hidden'; //sets userAnswer to SHREW  //id = 5

M8A = 'Long distinct claws'; //sets userAnswer to OPOSSUM  //id = 6
M8B = 'Small claws';         //sets question to M9  //smallClaws = true

M9A = 'Short snout'; //sets userAnswer to MOUSE  //id = 7
M9B = 'Long snout';  //sets userAnswer to RAT    //id = 8

M10A = 'Stubby tail'; //sets question to M11  //stubbyTail = true
M10B = 'Long tail';   //sets question to M14  //longTail = true

M11A = 'Long ears';  //sets question to M12  //longEars = true
M11B = 'Short ears'; //sets question to M13  //shortEars = true

M12A = 'Rounded body';    //sets userAnswer to COTTONTAIL  //id = 9
M12B = 'Long, lean body'; //sets userAnswer to JACKRABBIT  //id = 10

M13A = 'No hump'; //sets userAnswer to BLACK BEAR    //id = 11
M13B = 'Hump';    //sets userAnswer to GRIZZLY BEAR  //id = 12

M14A = 'Striped back';     //sets question to M15  //stripedBack = true
M14B = 'Solid color back'; //sets question to M16  //solidBack = true

M15A = 'Striped tail';      //sets userAnswer to SKUNK     //id = 13
M15B = 'Solid color tail';  //sets userAnswer to CHIPMUNK  //id = 14

M16A = 'Holds tail up';   //sets userAnswer to TREE SQUIRREL  //id = 15
M16B = 'Holds tail down'; //sets question to M17   //tailDown = true

M17A = 'Quills on back'; //sets userAnswer to PORCUPINE    //id = 16
M17B = 'Smooth back';    //sets question to M18   //smooth = true

M18A = 'White mask'; //sets userAnswer to RACCOON   //id = 17
M18B = 'Plain face'; //sets question to M19  //plainFace = true

M19A = 'Long skinny neck'; //sets userAnswer to WEASEL  //id = 18
M19B = 'Thick neck';       //sets question to M20  //thick = true

M20A = 'Short legs'; //sets userAnswer to OTTER   //id = 19
M20B = 'Long legs';  //sets question to M21  //longLegs = true

M21A = 'Dog-like'; //sets question to M22  //dog = true
M21B = 'Cat-like'; //sets question to M24  //cat = true

M22A = 'Dark legs';  //sets userAnswer to FOX   //id = 20
M22B = 'Light legs'; //sets question to M23   //lightLegs = true

M23A = 'Light tail'; //sets userAnswer to WOLF    //id = 21
M23B = 'Dark tail';  //sets userAnswer to COYOTE  //id = 22

M24A = 'Plain face'; //sets userAnswer to COUGAR   //id = 23
M24B = 'Sideburns'; //sets userAnswer to BOBCAT   //id = 24

M25A = 'Non-branched'; //sets question to M26  //nonBranched = true
M25B = 'Branched';     //sets question to M27  //branched = true

M26A = 'Long, curled horns';  //sets userAnswer to BIGHORN SHEEP   //id = 25
M26B = 'Short, curved horns'; //sets userAnswer to BISON           //id = 26

M27A = 'Dewlap'; //sets userAnswer to MOOSE   //id = 27
M27B = 'Plain';  //sets question to M28  //plainNeck = true

M28A = 'Long tail';  //sets userAnswer to DEER  //id = 28
M28B = 'Short tail'; //sets userAnswer to ELK   //id = 29


const app = new Vue ({
	el: '#mammalApp',
	data: {
		question: M1,
		answerA: M1A,
		answerB: M1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/mammals/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 29) + 1),   //chooses a number between 1 and 29
		backImg: backImg
			},

	methods: { 
		//what happens when buttonA is clicked
		buttonA: function(){      
			console.log('Button A was pressed');
			if (this.question == M1) {
				hornAntlerAbsent = true,
				document.getElementById("speciesDescriptText").textContent += "without horns,";
				console.log('hornAntlerAbsent is true')};
			if (this.question == M2) {
				fly = true,
				document.getElementById("speciesDescriptText").textContent = "A flying mammal, without horns,"; 
				console.log('fly is true')};
			if (this.question == M3) {
				userAnswer = 'FLYING SQUIRREL'
				document.getElementById("speciesDescriptText").textContent += " and skin flaps.";
				console.log('Chosen answer is FLYING SQUIRREL')};
			if (this.question == M4) {
				hairless = true,
				document.getElementById("speciesDescriptText").textContent += " a hairless tail,";
				console.log('hairless is true')};
			if (this.question == M5) {
				userAnswer = 'BEAVER'
				document.getElementById("speciesDescriptText").textContent = " A walking mammal, without horns, and a hairless, paddle-like tail."; 
				console.log('Chosen answer is BEAVER')};
			if (this.question == M6) {
				userAnswer = 'ARMADILLO'
				document.getElementById("speciesDescriptText").textContent += " and an armored body.";
				console.log('Chosen asnwer is ARMADILLO')};
			if (this.question == M7) {
				earsUp = true,
				document.getElementById("speciesDescriptText").textContent += " stuck up ears,";
				console.log('earsUp is true)')};
			if (this.question == M8) {
				userAnswer = 'OPPOSSUM'
				document.getElementById("speciesDescriptText").textContent += " and long, distinct-claws.";
				console.log('Chosen answer is OPPOSSUM')};
			if (this.question == M9) {
				userAnswer = 'MOUSE'
				document.getElementById("speciesDescriptText").textContent += " and a short snout.";
				console.log('Chosen answer is MOUSE')};
			if (this.question == M10) {
				stubbyTail = true,
				document.getElementById("speciesDescriptText").textContent += " a stubby tail,";
				console.log('stubbyTail is true')};
			if (this.question == M11) {
				longEars = true,
				document.getElementById("speciesDescriptText").textContent += " long ears,";
				console.log('longEars is true')};
			if (this.question == M12) {
				userAnswer = 'COTTONTAIL'
				document.getElementById("speciesDescriptText").textContent += " and a round body.";
				console.log('Chosen answer is COTTONTAIL')};
			if  (this.question == M13) {
				userAnswer = 'BLACK BEAR'
				document.getElementById("speciesDescriptText").textContent += " and a non-humped back.";
				console.log('Chosen answer is BLACK BEAR')};
			if (this.question == M14) {
				stripedBack = true,
				document.getElementById("speciesDescriptText").textContent += " a striped back,";
				console.log('stripedBack is true')};
			if (this.question == M15) {
				userAnswer = 'SKUNK'
				document.getElementById("speciesDescriptText").textContent += " and a striped tail.";
				console.log('Chosen answer is SKUNK')};
			if (this.question == M16) {
				userAnswer = 'TREE SQUIRREL'
				document.getElementById("speciesDescriptText").textContent += " and a tail held up.";
				console.log('Chosen answer is TREE SQUIRREL')};
			if (this.question == M17) {
				userAnswer = 'PORCUPINE'
				document.getElementById("speciesDescriptText").textContent += " and quills on back.";
				console.log('Chosen answer is PORCUPINE')};
			if (this.question == M18) {
				userAnswer = 'RACCOON'
				document.getElementById("speciesDescriptText").textContent += " and a white mask.";
				console.log('Chosen answer is RACCOON')};
			if (this.question == M19) {
				userAnswer = 'WEASEL'
				document.getElementById("speciesDescriptText").textContent += " and a long, skinny neck.";
				console.log('Chosen answer is WEASEL')};
			if (this.question == M20) {
				userAnswer = 'OTTER'
				document.getElementById("speciesDescriptText").textContent += " and short legs.";
				console.log('Chosen answer is OTTER')};
			if (this.question == M21) {
				dog = true,
				document.getElementById("speciesDescriptText").textContent += " a dog-like body,";
				console.log('dog is true')};
			if (this.question == M22) {
				userAnswer = 'FOX'
				document.getElementById("speciesDescriptText").textContent += " and dark legs.";
				console.log('Chosen answer is FOX')};
			if (this.question == M23) {
				userAnswer = 'WOLF'
				document.getElementById("speciesDescriptText").textContent += " and a light-colored tail.";
				console.log('Chosen answer is WOLF')};
			if (this.question == M24) {
				userAnswer = 'COUGAR'
				document.getElementById("speciesDescriptText").textContent += " and a plain-face.";
				console.log('Chosen answer is COUGAR')};
			if (this.question == M25) {
				nonBranched = true,
				document.getElementById("speciesDescriptText").textContent = " A mammal, with non-branched horns,"; 
				console.log('nonBranched is true')};
			if (this.question == M26) {
				userAnswer = 'BIGHORN SHEEP'
				document.getElementById("speciesDescriptText").textContent = " A mammal, with non-branched, long, curled horns,"; 
				console.log('Chosen answer is BIGHORN SHEEP')};
			if (this.question == M27) {
				document.getElementById("speciesDescriptText").textContent += " and a dewlap.";
				userAnswer = 'MOOSE'
				console.log('Chosen answer is MOOSE')};
			if (this.question == M28) {
				userAnswer = 'DEER'
				document.getElementById("speciesDescriptText").textContent += " and a long tail.";
				console.log('Chosen answer is DEER')};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == M1) {
				hornAntlerPresent = true,
				document.getElementById("speciesDescriptText").textContent += "with horns,";
				console.log('hornAntlerPresent is true')};
			if (this.question == M2) {
				walk = true,
				document.getElementById("speciesDescriptText").textContent = "A walking mammal, without horns,"; 
				console.log('walk is true')};
			if (this.question == M3) {
				userAnswer = 'BAT'
				document.getElementById("speciesDescriptText").textContent += " and wings.";
				console.log('Chosen answer is BAT')};
			if (this.question == M4) {
				furry = true,
				document.getElementById("speciesDescriptText").textContent += " a furry tail,";
				console.log('furry is true')};
			if (this.question == M5) {
				thin = true,
				document.getElementById("speciesDescriptText").textContent = " A walking mammal, without horns, a hairless, long, thin tail,"; 
				console.log('thin is true')};
			if (this.question == M6) {
				plainBody = true,
				document.getElementById("speciesDescriptText").textContent += " a plain body,";
				console.log('plainBody is true')};
			if (this.question == M7) {
				userAnswer = 'SHREW'
				document.getElementById("speciesDescriptText").textContent += " and hidden ears.";
				console.log('chosen answer is SHREW')};
			if (this.question == M8) {
				smallClaws = true,
				document.getElementById("speciesDescriptText").textContent += " small claws,";
				console.log('smallClaws is true)')};
			if (this.question == M9) {
				document.getElementById("speciesDescriptText").textContent += " and a long snout.";
				userAnswer = 'RAT'};
			if (this.question == M10) {
				longTail = true,
				document.getElementById("speciesDescriptText").textContent += " a long tail,";
				console.log('longTail is true')};
			if (this.question == M11) {
				shortEars = true
				document.getElementById("speciesDescriptText").textContent += " short ears,";
				console.log('shortEars is true')};
			if (this.question == M12) {
				userAnswer = 'JACKRABBIT'
				document.getElementById("speciesDescriptText").textContent += " and a long, lean body.";
				console.log('Chosen answer is JACKRABBIT')};
			if (this.question == M13) {
				userAnswer = 'GRIZZLY BEAR'
				document.getElementById("speciesDescriptText").textContent += " and a humped back.";
				console.log('Chosen answer is GRIZZLY BEAR')};
			if (this.question == M14) {
				solidBack = true,
				document.getElementById("speciesDescriptText").textContent += " without a striped back,";
				console.log('solidBack is true')};
			if (this.question == M15) {
				userAnswer = 'CHIPMUNK'
				document.getElementById("speciesDescriptText").textContent += " and a solid-colored tail.";
				console.log('Chosen answer is CHIPMUNK')};
			if (this.question == M16) {
				tailDown = true,
				document.getElementById("speciesDescriptText").textContent += " tail-down,";
				console.log('tailDown is true')};
			if (this.question == M17) {
				smooth = true,
				document.getElementById("speciesDescriptText").textContent += " a smooth back,";
				console.log('smooth is true')};
			if (this.question == M18) {
				plainFace = true,
				document.getElementById("speciesDescriptText").textContent += " a plain-face,";
				console.log('plainFace is true')};
			if (this.question == M19) {
				thick = true,
				document.getElementById("speciesDescriptText").textContent += " a thick neck,";
				console.log('thick is true')};
			if (this.question == M20) {
				longLegs = true,
				document.getElementById("speciesDescriptText").textContent += " long legs,";
				console.log('longLegs is true')};
			if (this.question == M21) {
				cat = true,
				document.getElementById("speciesDescriptText").textContent += " a cat-like body,";
				console.log('cat is true')};
			if (this.question == M22) {
				lightLegs = true,
				document.getElementById("speciesDescriptText").textContent += " light-colored legs,";
				console.log('lightLegs is true')};
			if (this.question == M23) {
				userAnswer = 'COYOTE'
				document.getElementById("speciesDescriptText").textContent += " and a dark-colored tail.";
				console.log('Chosen answer is COYOTE')};
			if (this.question == M24) {
				userAnswer = 'BOBCAT'
				document.getElementById("speciesDescriptText").textContent += " and sideburns.";
				console.log('Chosen answer is BOBCAT')};
			if (this.question == M25) {
				branched = true,
				document.getElementById("speciesDescriptText").textContent = " A mammal, with branched horns,"; 
				console.log('branched is true')};
			if (this.question == M26) {
				userAnswer = 'BISON'
				document.getElementById("speciesDescriptText").textContent = " A mammal, with non-branched, short, curved horns,"; 
				console.log('Chosen answer is BISON')};
			if (this.question == M27) {
				plainNeck = true,
				document.getElementById("speciesDescriptText").textContent += " a plain neck,";
				console.log('plainNeck is true')};
			if (this.question == M28) {
				userAnswer = 'ELK'
				document.getElementById("speciesDescriptText").textContent += " and a short tail.";
				console.log('Chosen answer is ELK')};
			},


		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){      
			if (hornAntlerAbsent == true && this.question == M1) {
				this.question = M2
				this.answerA = M2A;
				this.answerB = M2B; 
				document.getElementById("li25").style.display = "none";  //hides antler animals
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(hornAntlerPresent = true && this.question == M1) {
				this.question = M25;
				this.answerA = M25A;
				this.answerB = M25B;
				document.getElementById("li1").style.display = "none"; //hides non antler
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
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";  
			}
			else if(fly == true && this.question == M2) {
				this.question = M3;
				this.answerA = M3A;
				this.answerB = M3B;
				document.getElementById("li3").style.display = "none";    //hides walk
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
				document.getElementById("li18").style.display = "none";
				document.getElementById("li19").style.display = "none";
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
				document.getElementById("li25").style.display = "none";
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(walk == true && this.question == M2) {
				this.question = M4;
				this.answerA = M4A;
				this.answerB = M4B;
				document.getElementById("li1").style.display = "none"; //hides flying
				document.getElementById("li2").style.display = "none";
			}
			else if(hairless == true && this.question == M4) {
				this.question = M5;
				this.answerA = M5A;
				this.answerB = M5B;
				document.getElementById("li9").style.display = "none";  //hides furry
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
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if (furry == true && this.question == M4) {
				this.question = M10;
				this.answerA = M10A;
				this.answerB = M10B;
				document.getElementById("li3").style.display = "none"; //hides hairless
				document.getElementById("li4").style.display = "none";
				document.getElementById("li5").style.display = "none";
				document.getElementById("li6").style.display = "none";
				document.getElementById("li7").style.display = "none";
				document.getElementById("li8").style.display = "none";
			}
			else if (thin == true && this.question == M5) {
				this.question = M6;
				this.answerA = M6A;
				this.answerB = M6B;
				document.getElementById("li3").style.display = "none";   //???

			}
			else if (plainBody == true && this.question == M6) {
				this.question = M7;
				this.answerA = M7A;
				this.answerB = M7B;
				document.getElementById("li4").style.display = "none";   //???

			}
			else if(earsUp == true && this.question == M7) {
				this.question = M8;
				this.answerA = M8A;
				this.answerB = M8B;
				document.getElementById("li5").style.display = "none";   //hides shrew
			}
			else if(smallClaws == true && this.question == M8) {
				this.question = M9;
				this.answerA = M9A;
				this.answerB = M9B;
				document.getElementById("li6").style.display = "none";   //hides oppossum
			}
			else if(stubbyTail == true && this.question == M10) {
				this.question = M11;
				this.answerA = M11A;
				this.answerB = M11B;
				document.getElementById("li13").style.display = "none";  //hides 13-29
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
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(longTail == true && this.question == M10) {
				this.question = M14;
				this.answerA = M14A;
				this.answerB = M14B;
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none";
				document.getElementById("li11").style.display = "none";
				document.getElementById("li12").style.display = "none";
			}
			else if(longEars == true && this.question == M11) {
				this.question = M12;
				this.answerA = M12A;
				this.answerB = M12B;
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
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(shortEars == true && this.question == M11) {
				this.question = M13;
				this.answerA = M13A;
				this.answerB = M13B;
				document.getElementById("li9").style.display = "none";  
				document.getElementById("li10").style.display = "none";  
			}
			else if(stripedBack == true && this.question == M14) {
				this.question = M15;
				this.answerA = M15A;
				this.answerB = M15B;
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
				document.getElementById("li26").style.display = "none";
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(solidBack == true && this.question == M14) {
				this.question = M16;
				this.answerA = M16A;
				this.answerB = M16B;
				document.getElementById("li13").style.display = "none";
				document.getElementById("li14").style.display = "none";
			}
			else if(tailDown == true && this.question == M16) {
				this.question = M17;
				this.answerA = M17A;
				this.answerB = M17B;
				document.getElementById("li15").style.display = "none";
			}
			else if(smooth == true && this.question == M17) {
				this.question = M18;
				this.answerA = M18A;
				this.answerB = M18B;
				document.getElementById("li16").style.display = "none";
			}
			else if(plainFace == true && this.question == M18) {
				this.question = M19;
				this.answerA = M19A;
				this.answerB = M19B;
				document.getElementById("li17").style.display = "none";
			}
			else if(thick == true && this.question == M19) {
				this.question = M20;
				this.answerA = M20A;
				this.answerB = M20B;
				document.getElementById("li18").style.display = "none";
			}
			else if(longLegs == true && this.question == M20) {
				this.question = M21;
				this.answerA = M21A;
				this.answerB = M21B;
				document.getElementById("li19").style.display = "none";
			}
			else if(dog == true && this.question == M21) {
				this.question = M22;
				this.answerA = M22A;
				this.answerB = M22B;
				document.getElementById("li23").style.display = "none";
				document.getElementById("li24").style.display = "none";
			}
			else if(cat == true && this.question == M21) {
				this.question = M24;
				this.answerA = M24A;
				this.answerB = M24B;
				document.getElementById("li20").style.display = "none";
				document.getElementById("li21").style.display = "none";
				document.getElementById("li22").style.display = "none";
			}
			else if(lightLegs == true && this.question == M22) {
				this.question = M23;
				this.answerA = M23A;
				this.answerB = M23B;
				document.getElementById("li20").style.display = "none";
			}
			else if(nonBranched == true && this.question == M25) {
				this.question = M26;
				this.answerA = M26A;
				this.answerB = M26B;
				document.getElementById("li27").style.display = "none";
				document.getElementById("li28").style.display = "none";
				document.getElementById("li29").style.display = "none";
			}
			else if(branched == true && this.question == M25) {
				this.question = M27;
				this.answerA = M27A;
				this.answerB = M27B;
				document.getElementById("li25").style.display = "none";
				document.getElementById("li26").style.display = "none";
			}
			else if(plainNeck == true && this.question == M27) {
				this.question = M28;
				this.answerA = M28A;
				this.answerB = M28B;
				document.getElementById("li27").style.display = "none";
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
				this.quizResult = 'Correct!';
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
			}
				
		},


		//these are for the buttons for the species select menu
		//tried making one reusable function using argument, but could not get it to work
		setM1: function() {
				this.correctAnswer = 'FLYING SQUIRREL';
				this.speciesImage = './img/mammals/flyingsquirrel.jpg';
				this.backImg = "'./img/mammals/flyingsquirrel.jpg'";
				console.log(this.correctAnswer);
		},
		setM2: function() {
			this.correctAnswer = 'BAT';
			this.speciesImage = './img/mammals/bat.jpg';
			this.backImg = "'./img/mammals/bat.jpg'"
			console.log(this.correctAnswer);
		},
		setM3: function() {
			this.correctAnswer = 'BEAVER';
			this.speciesImage = './img/mammals/beaver.jpg';
			this.backImg = "'./img/mammals/beaver.jpg'"
			console.log(this.correctAnswer);
		},
		setM4: function() {
			this.correctAnswer = 'ARMADILLO';
			this.speciesImage = './img/mammals/armadillo.jpg';
			this.backImg = "'./img/mammals/armadillo.jpg'"
			console.log(this.correctAnswer);
		},
		setM5: function() {
			this.correctAnswer = 'SHREW';
			this.speciesImage = './img/mammals/shrew.jpg';
			this.backImg = "'./img/mammals/shrew.jpg'"
			console.log(this.correctAnswer);
		},
		setM6: function() {
			this.correctAnswer = 'OPPOSSUM';
			this.speciesImage = './img/mammals/oppossum.jpg';
			this.backImg = "'./img/mammals/oppossum.jpg'"
			console.log(this.correctAnswer);
		},
		setM7: function() {
			this.correctAnswer = 'MOUSE';
			this.speciesImage = './img/mammals/mouse.jpg';
			this.backImg = "'./img/mammals/mouse.jpg'"
			console.log(this.correctAnswer);
		},
		setM8: function() {
			this.correctAnswer = 'RAT';
			this.speciesImage = './img/mammals/rat.jpg';
			this.backImg = "'./img/mammals/rat.jpg'"
			console.log(this.correctAnswer);
		},
		setM9: function() {
			this.correctAnswer = 'COTTONTAIL';
			this.speciesImage = './img/mammals/cottontail.jpg';
			this.backImg = "'./img/mammals/cottontail.jpg'"
			console.log(this.correctAnswer);
		},
		setM10: function() {
			this.correctAnswer = 'JACKRABBIT';
			this.speciesImage = './img/mammals/jackrabbit.jpg';
			this.backImg = "'./img/mammals/jackrabbit.jpg'"
			console.log(this.correctAnswer);
		},
		setM11: function() {
			this.correctAnswer = 'BLACK BEAR';
			this.speciesImage = './img/mammals/blackbear.jpg';
			this.backImg = "'./img/mammals/blackbear.jpg'"
			console.log(this.correctAnswer);
		},
		setM12: function() {
			this.correctAnswer = 'GRIZZLY BEAR';
			this.speciesImage = './img/mammals/grizzlybear.jpg';
			this.backImg = "'./img/mammals/grizzlybear.jpg'"
			console.log(this.correctAnswer);
		},
		setM13: function() {
			this.correctAnswer = 'SKUNK';
			this.speciesImage = './img/mammals/skunk.jpg';
			this.backImg = "'./img/mammals/skunk.jpg'"
			console.log(this.correctAnswer);
		},
		setM14: function() {
			this.correctAnswer = 'CHIPMUNK';
			this.speciesImage = './img/mammals/chipmunk.jpg';
			this.backImg = "'./img/mammals/chipmunk.jpg'"
			console.log(this.correctAnswer);
		},
		setM15: function() {
			this.correctAnswer = 'TREE SQUIRREL';
			this.speciesImage = './img/mammals/treesquirrel.jpg';
			this.backImg = "'./img/mammals/treesquirrel.jpg'"
			console.log(this.correctAnswer);
		},
		setM16: function() {
			this.correctAnswer = 'PORCUPINE';
			this.speciesImage = './img/mammals/porcupine.jpg';
			this.backImg = "'./img/mammals/porcupine.jpg'"
			console.log(this.correctAnswer);
		},
		setM17: function() {
			this.correctAnswer = 'RACCOON';
			this.speciesImage = './img/mammals/raccoon.jpg';
			this.backImg = "'./img/mammals/raccoon.jpg'"
			console.log(this.correctAnswer);
		},
		setM18: function() {
			this.correctAnswer = 'WEASEL';
			this.speciesImage = './img/mammals/weasel.jpg';
			this.backImg = "'./img/mammals/weasel.jpg'"
			console.log(this.correctAnswer);
		},
		setM19: function() {
			this.correctAnswer = 'OTTER';
			this.speciesImage = './img/mammals/otter.jpg';
			this.backImg = "'./img/mammals/otter.jpg'"
			console.log(this.correctAnswer);
		},
		setM20: function() {
			this.correctAnswer = 'FOX';
			this.speciesImage = './img/mammals/fox.jpg';
			this.backImg = "'./img/mammals/fox.jpg'"
			console.log(this.correctAnswer);
		},
		setM21: function() {
			this.correctAnswer = 'WOLF';
			this.speciesImage = './img/mammals/wolf.jpg';
			this.backImg = "'./img/mammals/wolf.jpg'"
			console.log(this.correctAnswer);
		},
		setM22: function() {
			this.correctAnswer = 'COYOTE';
			this.speciesImage = './img/mammals/coyote.jpg';
			this.backImg = "'./img/mammals/coyote.jpg'"
			console.log(this.correctAnswer);
		},
		setM23: function() {
			this.correctAnswer = 'COUGAR';
			this.speciesImage = './img/mammals/cougar.jpg';
			this.backImg = "'./img/mammals/cougar.jpg'"
			console.log(this.correctAnswer);
		},
		setM24: function() {
			this.correctAnswer = 'BOBCAT';
			this.speciesImage = './img/mammals/bobcat.jpg';
			this.backImg = "'./img/mammals/bobcat.jpg'"
			console.log(this.correctAnswer);
		},
		setM25: function() {
			this.correctAnswer = 'BIGHORN SHEEP';
			this.speciesImage = './img/mammals/bighornsheep.jpg';
			this.backImg = "'./img/mammals/bighornsheep.jpg'"
			console.log(this.correctAnswer);
		},
		setM26: function() {
			this.correctAnswer = 'BISON';
			this.speciesImage = './img/mammals/bison.jpg';
			this.backImg = "'./img/mammals/bison.jpg'"
			console.log(this.correctAnswer);
		},
		setM27: function() {
			this.correctAnswer = 'MOOSE';
			this.speciesImage = './img/mammals/moose.jpg';
			this.backImg = "'./img/mammals/moose.jpg'"
			console.log(this.correctAnswer);
		},
		setM28: function() {
			this.correctAnswer = 'DEER';
			this.speciesImage = './img/mammals/deer.jpg';
			this.backImg = "'./img/mammals/deer.jpg'"
			console.log(this.correctAnswer);
		},
		setM29: function() {
			this.correctAnswer = 'ELK';
			this.speciesImage = './img/mammals/elk.jpg';
			this.backImg = "'./img/mammals/elk.jpg'"
			console.log(this.correctAnswer);
		},


		mammalMenuSelect: function() {
			console.log('Please select a new mammal to identify');
			this.question = M1;
			this.answerA = M1A;
			this.answerB = M1B;
			userAnswer = null;
			hornAntlerAbsent = null;
			hornAntlerPresent = null;
			fly = null;
			walk = null;
			hairless = null;
			furry = null;
			thin = null;
			plainBody = null;
			earsUp = null;
			smallClaws = null;
			stubbyTail = null;
			longTail = null;
			longEars = null;
			shortEars = null;
			stripedBack = null;
			solidBack = null;
			tailDown = null;
			smooth = null;
			plainFace = null;
			thick = null;
			longLegs = null;
			dog = null;
			cat = null;
			lightLegs = null;
			nonBranched = null;
			branched = null;
			plainNeck = null;
		},

		//selects a new random correctAnswer and resets initial variable values
		randomMammal: function() {
			console.log('A new random mammal has been chosen');
			this.question = M1;
			this.answerA = M1A;
			this.answerB = M1B;
			userAnswer = null;
			hornAntlerAbsent = null;
			hornAntlerPresent = null;
			fly = null;
			walk = null;
			hairless = null;
			furry = null;
			thin = null;
			plainBody = null;
			earsUp = null;
			smallClaws = null;
			stubbyTail = null;
			longTail = null;
			longEars = null;
			shortEars = null;
			stripedBack = null;
			solidBack = null;
			tailDown = null;
			smooth = null;
			plainFace = null;
			thick = null;
			longLegs = null;
			dog = null;
			cat = null;
			lightLegs = null;
			nonBranched = null;
			branched = null;
			plainNeck = null;
			document.getElementById("speciesDescriptText").innerHTML = "A mammal, ";
			keyNumber = Math.floor((Math.random() * 29) + 1);   //randomly chooses a number between 1 & 29
			console.log(keyNumber);		   //logs the new random mammal name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'FLYING SQUIRREL'
					this.speciesImage = './img/mammals/flyingsquirrel.jpg'
					this.backImg = "'./img/mammals/flyingsquirrel.jpg'"
					break;
					case 2:
					this.correctAnswer = 'BAT'
					this.speciesImage = './img/mammals/bat.jpg'
					this.backImg = "'./img/mammals/bat.jpg'"
					break;
					case 3:
					this.correctAnswer = 'BEAVER'
					this.speciesImage = './img/mammals/beaver.jpg'
					this.backImg = "'./img/mammals/beaver.jpg'"
					break;
					case 4:
					this.correctAnswer = 'ARMADILLO'
					this.speciesImage = './img/mammals/armadillo.jpg'
					this.backImg = "'./img/mammals/armadillo.jpg'"
					break;
					case 5:
					this.correctAnswer = 'SHREW'
					this.speciesImage = './img/mammals/shrew.jpg'
					this.backImg = "'./img/mammals/shrew.jpg'"
					break;
					case 6:
					this.correctAnswer = 'OPPOSSUM'
					this.speciesImage = './img/mammals/oppossum.jpg'
					this.backImg = "'./img/mammals/oppossum.jpg'"
					break;
					case 7:
					this.correctAnswer = 'MOUSE'
					this.speciesImage = './img/mammals/mouse.jpg'
					this.backImg = "'./img/mammals/mouse.jpg'"
					break;
					case 8:
					this.correctAnswer = 'RAT'
					this.speciesImage = './img/mammals/rat.jpg'
					this.backImg = "'./img/mammals/rat.jpg'"
					break;
					case 9:
					this.correctAnswer = 'COTTONTAIL'
					this.speciesImage = './img/mammals/cottontail.jpg'
					this.backImg = "'./img/mammals/cottontail.jpg'"
					break;
					case 10:
					this.correctAnswer = 'JACKRABBIT'
					this.speciesImage = './img/mammals/jackrabbit.jpg'
					this.backImg = "'./img/mammals/jackrabbit.jpg'"
					break;
					case 11:
					this.correctAnswer = 'BLACK BEAR'
					this.speciesImage = './img/mammals/blackbear.jpg'
					this.backImg = "'./img/mammals/blackbear.jpg'"
					break;
					case 12:
					this.correctAnswer = 'GRIZZLYBEAR'
					this.speciesImage = './img/mammals/grizzlybear.jpg'
					this.backImg = "'./img/mammals/grizzlybear.jpg'"
					break;
					case 13:
					this.correctAnswer = 'SKUNK'
					this.speciesImage = './img/mammals/skunk.jpg'
					this.backImg = "'./img/mammals/skunk.jpg'"
					break;
					case 14:
					this.correctAnswer = 'CHIPMUNK'
					this.speciesImage = './img/mammals/chipmunk.jpg'
					this.backImg = "'./img/mammals/chipmunk.jpg'"
					break;
					case 15:
					this.correctAnswer = 'TREE SQUIRREL'
					this.speciesImage = './img/mammals/treesquirrel.jpg'
					this.backImg = "'./img/mammals/treesquirrel.jpg'"
					break;
					case 16:
					this.correctAnswer = 'PORCUPINE'
					this.speciesImage = './img/mammals/porcupine.jpg'
					this.backImg = "'./img/mammals/porcupine.jpg'"
					break;
					case 17:
					this.correctAnswer = 'RACCOON'
					this.speciesImage = './img/mammals/raccoon.jpg'
					this.backImg = "'./img/mammals/raccoon.jpg'"
					break;
					case 18:
					this.correctAnswer = 'WEASEL'
					this.speciesImage = './img/mammals/weasel.jpg'
					this.backImg = "'./img/mammals/weasel.jpg'"
					break;
					case 19:
					this.correctAnswer = 'OTTER'
					this.speciesImage = './img/mammals/otter.jpg'
					this.backImg = "'./img/mammals/otter.jpg'"
					break;
					case 20:
					this.correctAnswer = 'FOX'
					this.speciesImage = './img/mammals/fox.jpg'
					this.backImg = "'./img/mammals/fox.jpg'"
					break;
					case 21:
					this.correctAnswer = 'WOLF'
					this.speciesImage = './img/mammals/wolf.jpg'
					this.backImg = "'./img/mammals/wolf.jpg'"
					break;
					case 22:
					this.correctAnswer = 'COYOTE'
					this.speciesImage = './img/mammals/coyote.jpg'
					this.backImg = "'./img/mammals/coyote.jpg'"
					break;
					case 23:
					this.correctAnswer = 'COUGAR'
					this.speciesImage = './img/mammals/cougar.jpg'
					this.backImg = "'./img/mammals/cougar.jpg'"
					break;
					case 24:
					this.correctAnswer = 'BOBCAT'
					this.speciesImage = './img/mammals/bobcat.jpg'
					this.backImg = "'./img/mammals/bobcat.jpg'"
					break;
					case 25:
					this.correctAnswer = 'BIGHORN SHEEP'
					this.speciesImage = './img/mammals/bighornsheep.jpg'
					this.backImg = "'./img/mammals/bighornsheep.jpg'"
					break;
					case 26:
					this.correctAnswer = 'BISON'
					this.speciesImage = './img/mammals/bison.jpg'
					this.backImg = "'./img/mammals/bison.jpg'"
					break;
					case 27:
					this.correctAnswer = 'MOOSE'
					this.speciesImage = './img/mammals/moose.jpg'
					this.backImg = "'./img/mammals/moose.jpg'"
					break;
					case 28:
					this.correctAnswer = 'DEER'
					this.speciesImage = './img/mammals/deer.jpg'
					this.backImg = "'./img/mammals/deer.jpg'"
					break;
					case 29:
					this.correctAnswer = 'ELK'
					this.speciesImage = './img/mammals/elk.jpg'
					this.backImg = "'./img/mammals/elk.jpg'"
					break;
				} 
					console.log(this.correctAnswer);

				},

				vueRandomMammal: function() {
					setTimeout(this.randomMammal, 700);
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
			document.getElementById("li26").style.display = "block";
			document.getElementById("li27").style.display = "block";
			document.getElementById("li28").style.display = "block";
			document.getElementById("li29").style.display = "block";
		},

		//resets variable values and question/answer
		resetMammal: function() {
			console.log('Your quiz has been reset');
			this.question = M1;
			this.answerA = M1A;
			this.answerB = M1B;
			userAnswer = null;
			hornAntlerAbsent = null;
			hornAntlerPresent = null;
			fly = null;
			walk = null;
			hairless = null;
			furry = null;
			thin = null;
			plainBody = null;
			earsUp = null;
			smallClaws = null;
			stubbyTail = null;
			longTail = null;
			longEars = null;
			shortEars = null;
			stripedBack = null;
			solidBack = null;
			tailDown = null;
			smooth = null;
			plainFace = null;
			thick = null;
			longLegs = null;
			dog = null;
			cat = null;
			lightLegs = null;
			nonBranched = null;
			branched = null;
			plainNeck = null;
			document.getElementById("speciesDescriptText").innerHTML = "A mammal, ";
		},
		
		vueResetMammal: function() {
			setTimeout(this.resetMammal, 600);
		},

		chooseLi1: function() {
			userAnswer = 'FLYING SQUIRREL';
		},
		chooseLi2: function() {
			userAnswer = 'BAT';
		},
		chooseLi3: function() {
			userAnswer = 'BEAVER';
		},
		chooseLi4: function() {
			userAnswer = 'ARMADILLO';
		},
		chooseLi5: function() {
			userAnswer = 'SHREW';
		},
		chooseLi6: function() {
			userAnswer = 'OPPOSSUM';
		},
		chooseLi7: function() {
			userAnswer = 'MOUSE';
		},
		chooseLi8: function() {
			userAnswer = 'RAT';
		},
		chooseLi9: function() {
			userAnswer = 'COTTONTAIL';
		},
		chooseLi10: function() {
			userAnswer = 'JACKRABBIT';
		},
		chooseLi11: function() {
			userAnswer = 'BLACK BEAR';
		},
		chooseLi12: function() {
			userAnswer = 'GRIZZLY BEAR';
		},
		chooseLi13: function() {
			userAnswer = 'SKUNK';
		},
		chooseLi14: function() {
			userAnswer = 'CHIPMUNK';
		},
		chooseLi15: function() {
			userAnswer = 'TREE SQUIRREL';
		},
		chooseLi16: function() {
			userAnswer = 'PORCUPINE';
		},
		chooseLi17: function() {
			userAnswer = 'RACCOON';
		},
		chooseLi18: function() {
			userAnswer = 'WEASEL';
		},
		chooseLi19: function() {
			userAnswer = 'OTTER';
		},
		chooseLi20: function() {
			userAnswer = 'FOX';
		},
		chooseLi21: function() {
			userAnswer = 'WOLF';
		},
		chooseLi22: function() {
			userAnswer = 'COYOTE';
		},
		chooseLi23: function() {
			userAnswer = 'COUGAR';
		},
		chooseLi24: function() {
			userAnswer = 'BOBCAT';
		},
		chooseLi25: function() {
			userAnswer = 'BIGHORN SHEEP';
		},
		chooseLi26: function() {
			userAnswer = 'BISON';
		},
		chooseLi27: function() {
			userAnswer = 'MOOSE';
		},
		chooseLi28: function() {
			userAnswer = 'DEER';
		},
		chooseLi29: function() {
			userAnswer = 'ELK';
		},
	}
});
		

