
$(document).ready(function() {
  $("#go").click(function() {
    debugger;
    var word = $("#sentence").val();
    var vowels = ['a' , 'e', 'i', 'o', 'u', 'y'];

    if (word.charAt(0) === "q" && word.charAt(1) === "u") {
      word = word.replace("qu", "");
      word = word + "quay";
    } else {
      for (var v = 0; v < vowels.length; v++) {
        if (word.charAt(0) === vowels[v]) {
          word = word + "ay";
        } else {
          for (var i = 0; i < word.length; i++) {
            for (var j = 0; j < vowels.length; j++) {
              if (word.charAt(i) === vowels[j]) {
                word = word.slice(i) + word.slice(0, i) + "ay";
                break;
              };
              if (word.charAt(0) === vowels[j]) {
                break;
              };
            };
            if (word.charAt(0) === vowels[j]) {
              break;
            };
          };
        };
        break;
      };
    };


    alert(word);


  });
});
