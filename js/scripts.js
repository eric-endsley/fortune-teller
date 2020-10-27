$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
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
    });



  
      function countAnswers(responses, input) {
        let count = 0;
        for (let i = 0; i < responses.length; i++) {
          if (responses[i] === input) {
            count++;
          }
        }
        return count;
      }
  
      const countGood = countAnswers(userResponses, "good");
      const countBad = countAnswers(userResponses2, "bad");

      console.log(countGood)
      console.log(countBad)
  });
});