

$(document).ready(function() {
  // --- our code goes here ---
  let $input = $('#tweet-text');
  $input.on('input', function() {
    let inputText = $(this).val();
    let $counter = $('output[name="counter"]');
    console.log(this);
    let remainChars = 140 - inputText.length;
    console.log(remainChars);
    $counter.text(remainChars);
    if (remainChars < 0) {
      $counter.addClass('exceeded');
    } else {
      $counter.removeClass('exceeded');
    }

  });

});