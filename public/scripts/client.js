/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  $("#tweet-form").on("submit", function(event) {
    event.preventDefault();
    console.log("form  was submit. ");
    const tweetText = $("#tweet-text").val();
    const data = $(this).serialize();
    //error handler
    if (!tweetText) {
      return showError("empty message");
    }
    if (tweetText.length > 140) {
      return showError("Too long. the limit is 140 !");
    }
    $.post("/tweets", data)
      .then(() => {
        loadTweets(); //render tweets
        $("#tweet-text").val(""); //clean text
        $("#tweet-text").attr("placeholder", "What are you humming about?");//reset placeholder
        $(".counter").val("140");//reset counter
        $("#errContainer").css("display", "none");
      })
      .catch(function() {
        console.log("error occured");
      });
  });
  //animation to show new tweet
  $("#write-tweet").click(function() {
    $("#new-tweet").slideToggle("slow");
    $("#tweet-text").focus();
  });

  //Function: show error when it ocurred
  const showError = function(message) {
    $("#errMsg").text(message);
    $("#errContainer").slideDown();
    $("#errContainer").css("display", "flex");
  };
  //Function: add new tweet
  const createTweetElement = function(tweet) {
    const $tweet = $(`
              <article class="tweet" >
                <header>
                  <div>
                    <img src="${tweet.user.avatars}">
                    <h4 class="user">${tweet.user.name}</h4>
                  </div>
                  <h4 class="atUser">${tweet.user.handle}</h4>
                </header>
                <p class="tweetContent"></p>
                <footer>
                  <span>${timeago.format(tweet.created_at)}</span>
                  <span>
                    <i class="fa-sharp fa-solid fa-flag"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-heart"></i>
                  </span>
                </footer>
              </article>
           `);
    // Sanitize the tweetText before posting
    $tweet.find('p.tweetContent').text(tweet.content.text);
    return $tweet;
  };
  //Function: render tweets
  const renderTweets = function(data) {
    data.forEach(e => {
      const $tweet = createTweetElement(e);
      $('.tweets-container').prepend($tweet);
    });
  };
  //Function: load all tweets
  const loadTweets = function() {
    $.get("/tweets", (data) => {
      renderTweets(data);
    });
  };

  loadTweets();
});

