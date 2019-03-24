var wins = 0;
var loss = 0;

var data = [
    {
    questions: "Some quesiton here1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here2",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here4",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here5",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here6",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here7",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  {
    questions: "Some quesiton here8",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    rightanswer: 0,
    },
  ];


function gameQuestions(){
  for(var i = 0; i < data.length; i++){
    var questionsDiv  = $("<div>");
    questionsDiv.attr("class", "questions");
    questionsDiv.html(data[i].questions);
    questionsDiv.appendTo("#questions");
    for(var j = 0; j < 4 ; j++){

    var answersDiv = $("<div>");//creating a div not doing anything yet
    var radioBtn = $('<input type="radio"/>');

    answersDiv.attr("class", "answers display-inline");
    radioBtn.attr("name", "btn" + i);
    answersDiv.html(data[i].answers[j]);

    radioBtn.appendTo('#questions');
    answersDiv.appendTo("#questions");
    if (data[i].rightanswer === name[j]){
      wins++;
      console.log(wins);
    }
    else {
      loss++;
      console.log(loss);
    }
  }

  }
  var submit = $("<button>");
          submit.addClass("letter-button letter letter-button-color");
          submit.attr("data-letter", "submit") //kind of like a variable inside of the button, use item its like your i in a for loop
          submit.text("submit"); // making the actual letters on the buttons on the fridge
          submit.appendTo("#buttons"); //appending to buttons div
}
$("document").ready(function(){
  $("#button-start").on("click", function(){
    $(".submit").show();
    $("#questions").show();
    gameQuestions();
    var counter = 30;
    var intervalId = setInterval(function(){
      $("#timer").html("Time Remaining: " + counter)
      counter--;
      if(counter === -1){
        clearInterval(intervalId);
        $("#questions").hide();
        $(".submit").hide();
        $("#timer").hide();
        $("#button-start").hide();
      }
    }, 1 * 1000,)
  });
$(".submit").on("click", function(){
  $("#questions").hide();
  $(".submit").hide();
  gameQuestions();
});

});
