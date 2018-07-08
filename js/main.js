var apiURL = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';


$('#question').on('click', function(){
  $('li').remove()
  $('#display').empty()
  $.ajax({
    url: apiURL,

    success: function(r){
      console.log(r)
      $('h2').html(r.results[0].category)
      $('.question').html('Question: ' + r.results[0].question)
      $('ul').append('<li>' + r.results[0].correct_answer + '</li>')
      r.results[0].incorrect_answers.forEach(function(el){
        console.log(el)
        $('ul').append('<li>' + el + '</li>')
      })
      $('#answer').on('click', function(){
        $('#display').html('Answer: ' + r.results[0].correct_answer).toggleClass('answer')
      });
    },
    error: function(er){
      console.log(er)
    },
  });
});
