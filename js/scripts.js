
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

  $("#factorial").submit(function(event) {
    debugger;
    var total = 0;
    var n = parseInt($("#factNumber").val());
    for (var i = n; i > 2; i--) {
      total = n *= (i - 1);
    }
    $("#factResult").append("<li>" + n + "</li>");

      // var number = $("#factNumber").val();
      // // var control = $("#factNumber").val();
      // var factorial = function() {
      //   if (control <= 1) {
      //     $("#factResult").append("<li>" + number + "</li>");
      //   } else {
      //     return number * (number - 1);
      //     factorial(number);
      //   };
      // };
      // factorial(number);

    event.preventDefault();
  });
});
