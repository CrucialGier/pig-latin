
$(document).ready(function() {
  $("#countUpBy").submit(function(event) {
    debugger;
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      alert("only numbers please");
    }
    else if (firstNumber === "" || secondNumber === "") {
      alert("please fill out all the fields");
    }
    else if (firstNumber <= 0 || secondNumber <= 0) {
      alert("Only positive numbers.");
    }
    else if (firstNumber < secondNumber) {
      alert("Make sure your end value is larger than the number you are counting up by");
    }
    else {
      for (var count = 0; count <= firstNumber; count += secondNumber) {
    $("#countResult").append("<li>" + count + "</li>");
      };
    };
  event.preventDefault();
  });

  $("#wordPuzzle").submit(function(event) {
    var sentence = $("#sentence").val().toUpperCase();
    var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
    for (var i = 0; i < sentence.length; i++) {
      for (var v = 0; v < vowels.length; v++) {
        if (sentence.charAt(i) === vowels[v]) {
          sentence = sentence.replace(sentence.charAt(i),"-");
          // return sentence;
        };
    };
  };
  $("#replaceVowels").append("<li>" + sentence + "</li>");
  event.preventDefault();
  });
});
