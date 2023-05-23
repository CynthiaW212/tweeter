

$(document).ready(function() {
  // --- our code goes here ---
  let $input = $('#tweet-text');
  $input.on('input', function() {
    let inputText = $(this).val();
    let $counter = $('output[name="counter"]');
    let remainChars = 140 - inputText.length;
    
    $counter.text(remainChars);
    if (remainChars < 0) {
      $counter.addClass('exceeded');
    } else {
      $counter.removeClass('exceeded');
    }

  });

});