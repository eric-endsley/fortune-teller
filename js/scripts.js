$(document).ready(function(){
  $("form#fortune_survery").submit(function(event){
    event.preventDefault();

    let userResponses = [];
    $("input:checkbox[name=good-luck]:checked").each(function(){
      const goodLuckOmens = $(this).val();
      userResponses.push(goodLuckOmens);
    });

    let userResponses2 = [];
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      const badLuckOmens = $(this).val();
      userResponses2.push(badLuckOmens);
      console.log(userResponses)
      console.log(userResponses2)
    });




  
      function countAnswers(responses, input) {
        let count = 0;
        for (let i = 0; i < answers.length; i++) {
          if (answers[i] === input) {
            count++;
          }
        }
        return count;
      }
  
      const countGood = countAnswers(userResponses, "good");
      const countBad = countAnswers(userResponses2, "bad");

  
  });
});