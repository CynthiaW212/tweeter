$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#topButton").fadeIn();
      $("nav").fadeOut();
    } else {
      $("#topButton").fadeOut();
      $("nav").fadeIn();
    }
  });

  $("#topButton").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    if ($("#new-tweet").css("display") === "none") {
      $("#new-tweet").slideToggle("slow");
      $("#tweet-text").focus();
    }
    return false;
  });
});