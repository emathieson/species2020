$(document).ready(function(){
    
$(".option").click(function(){
    $("#menu").animate({opacity: 0}, 300);
    $("#menu").css('z-index', '0');
    $(".option").animate({opacity: 0}, 300);
    $("#catInstruct").animate({opacity: 0}, 300);
    $("#quiz").delay( 400 ).animate({opacity: 1}, 800);
    $("#quiz").delay( 400 ).css('z-index', '1');
});

$("#answerA").click(function(){
    $("#questionText").animate({opacity: 0}, 200);
    $("#answerAText").delay( 0 ).animate({opacity: 0}, 200);
    $("#answerBText").delay( 0 ).animate({opacity: 0}, 200);
    $("#answerAText").delay( 400 ).animate({opacity: 1}, 600);
    $("#answerBText").delay( 400 ).animate({opacity: 1}, 600);
    $("#questionText").delay( 400 ).animate({opacity: 1}, 600);
});

$("#answerB").click(function(){
    $("#questionText").animate({opacity: 0}, 200);
    $("#answerAText").delay( 0 ).animate({opacity: 0}, 200);
    $("#answerBText").delay( 0 ).animate({opacity: 0}, 200);
    $("#answerAText").delay( 400 ).animate({opacity: 1}, 600);
    $("#answerBText").delay( 400 ).animate({opacity: 1}, 600);
    $("#questionText").delay( 400 ).animate({opacity: 1}, 600);
});

$("#dropdown").click(function(){
    $("#list").css('display', 'block');
    $("#list").animate({opacity: 1}, 700);
    $("li").animate({opacity: 1}, 900);
    $("#speciesDescript").delay(500).css('display', 'none');
    $('#speciesDescriptText').animate({opacity: 0}, 600);
});

$("#resultsNew").click(function(){
    $("#results").animate({opacity: 0}, 700);
		$("#menu").delay( 700 ).animate({opacity: 1}, 700);
    $("#menu").delay( 700 ).css('z-index', '1');
    $(".option").delay( 700 ).animate({opacity: .65}, 700);
		$("#catInstruct").delay( 700 ).animate({opacity:1}, 700);
		$("#selectMenu").css('z-index', '1');
    $("#quiz").css('z-index', '0');
    $('#results').delay(200).queue(function (next) {
      $(this).css('z-index', 0);
        next();
        });
    $("#quiz").animate({opacity: 0}, 700);
    $("#menu").delay( 700 ).animate({opacity: 1}, 700);
    $("#menu").delay( 700 ).css('z-index', '1');
    $(".option").delay( 700 ).animate({opacity: .65}, 700);
    $("#catInstruct").delay( 700 ).animate({opacity:1}, 700);
    $("#selectMenu").css('z-index', '1');
    $('#quiz').delay(200).queue(function (next) {
      $(this).css('z-index', 0);
      next();
      });
    $('#list').delay(700).queue(function (next) {
        $(this).css('display', 'none');
        next();
        });
    $("#list").delay(700).animate({opacity: 0}, 700);
    $('#speciesDescript').delay(700).queue(function (next) {
        $(this).css('display', 'block');
        next();
        });
    $(".li").delay(700).animate({opacity: 0}, 500);
    $('#speciesDescriptText').delay(700).animate({opacity: 1}, 600);
});

$("#selectNew").click(function(){
    $("#quiz").animate({opacity: 0}, 700);
    $("#menu").delay( 700 ).animate({opacity: 1}, 700);
    $("#menu").delay( 700 ).css('z-index', '1');
    $(".option").delay( 700 ).animate({opacity: .65}, 700);
    $("#catInstruct").delay( 700 ).animate({opacity:1}, 700);
    $("#selectMenu").css('z-index', '1');
    $('#quiz').delay(200).queue(function (next) {
      $(this).css('z-index', 0);
      next();
      });
    $('#list').delay(700).queue(function (next) {
        $(this).css('display', 'none');
        next();
        });
    $("#list").delay(700).animate({opacity: 0}, 700);
    $('#speciesDescript').delay(700).queue(function (next) {
        $(this).css('display', 'block');
        next();
        });
    $(".li").delay(700).animate({opacity: 0}, 500);
    $('#speciesDescriptText').delay(700).animate({opacity: 1}, 600);
});

$("#resultsRandom").click(function(){
    $("#results").animate({opacity: 0}, 700);
		$("#quiz").delay( 700 ).animate({opacity: 1}, 700);
    $("#quiz").delay( 700 ).css('z-index', '1');
    $("#selectMenu").css('z-index', '1');
    $('#results').delay(200).queue(function (next) {
        $(this).css('z-index', 0);
        next();
        });
    $("#background").delay( 300 ).animate({opacity: 0}, 350);
    $("#background").delay( 300 ).animate({opacity: .1}, 350);
    $("#imgCol").delay( 300 ).animate({opacity: 0}, 350);
    $("#imgCol").delay( 300 ).animate({opacity: 1}, 350);
    $("#dropdown").delay( 300 ).animate({opacity: 0}, 350);
    $("#dropdown").delay( 300 ).animate({opacity: 1}, 350);
    $("#speciesDescript").delay( 300 ).animate({opacity: 0}, 350);
    $('#speciesDescript').queue(function (next) {
        $(this).css('display', 'block');
        next();
        });
    $("#speciesDescript").delay( 300 ).animate({opacity: 1}, 350);
    $("#questionContainer").delay( 300 ).animate({opacity: 0}, 350);
    $("#questionContainer").delay( 300 ).animate({opacity: 1}, 350);
    $("#answerRow").delay( 300 ).animate({opacity: 0}, 350);
    $("#answerRow").delay( 300 ).animate({opacity: 1}, 350);
    $("#speciesDescript").animate({opacity: 1}, 350);
    $("#list").delay(300).animate({opacity: 0}, 350);
    $('#speciesDescriptText').animate({opacity: 1}, 350);
    $('#list').delay(250).queue(function (next) {
        $(this).css('display', 'none');
        next();
        });
});

$("#newRandom").click(function(){
    $("#background").delay( 300 ).animate({opacity: 0}, 350);
    $("#background").delay( 300 ).animate({opacity: .1}, 350);
    $("#imgCol").delay( 300 ).animate({opacity: 0}, 350);
    $("#imgCol").delay( 300 ).animate({opacity: 1}, 350);
    $("#dropdown").delay( 300 ).animate({opacity: 0}, 350);
    $("#dropdown").delay( 300 ).animate({opacity: 1}, 350);
    $("#speciesDescript").delay( 300 ).animate({opacity: 0}, 350);
    $('#speciesDescript').queue(function (next) {
        $(this).css('display', 'block');
        next();
        });
    $("#speciesDescript").delay( 300 ).animate({opacity: 1}, 350);
    $("#questionContainer").delay( 300 ).animate({opacity: 0}, 350);
    $("#questionContainer").delay( 300 ).animate({opacity: 1}, 350);
    $("#answerRow").delay( 300 ).animate({opacity: 0}, 350);
    $("#answerRow").delay( 300 ).animate({opacity: 1}, 350);
    $("#speciesDescript").animate({opacity: 1}, 350);
    $("#list").delay(300).animate({opacity: 0}, 350);
    $('#speciesDescriptText').animate({opacity: 1}, 350);
    $('#list').delay(250).queue(function (next) {
        $(this).css('display', 'none');
        next();
        }); 
});

$("#resetQuiz").click(function(){
    $("#speciesDescriptText").delay( 300 ).animate({opacity: 0}, 350);
    $("#speciesDescriptText").delay( 300 ).animate({opacity: 1}, 350);
    $("#questionText").delay( 300 ).animate({opacity: 0}, 350);
    $("#questionText").delay( 300 ).animate({opacity: 1}, 350);
    $("#answerAText").delay( 300 ).animate({opacity: 0}, 350);
    $("#answerAText").delay( 300 ).animate({opacity: 1}, 350);
    $("#answerBText").delay( 300 ).animate({opacity: 0}, 350);
    $("#answerBText").delay( 300 ).animate({opacity: 1}, 350);

$("#list").css('display', 'none');
    $("#list").delay(400).animate({opacity: 0}, 700);
    $(".li").animate({opacity: 0}, 500);
    $("#speciesDescript").delay(500).css('display', 'block');
    $('#speciesDescriptText').animate({opacity: 1}, 600);
});

$("#hide").click(function(){
    $("#list").css('display', 'none');
    $("#list").delay(400).animate({opacity: 0}, 700);
    $(".li").animate({opacity: 0}, 500);
    $("#speciesDescript").delay(500).css('display', 'block');
    $('#speciesDescriptText').animate({opacity: 1}, 600);
});

$(".option").mouseover(function() {
    $(this).css("opacity","1");
    }).mouseout(function() {
    $(this).css("opacity","0.55");
});
      
});

