/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

//Function: calculate the date difference from now
const dateFromToday = function(dateTimestamp) {
  
  const givenDate = new Date(dateTimestamp);
  const currentDate = new Date();
  // Calculate the time difference in milliseconds then convert it to days
  const daysDifference = Math.floor((currentDate.getTime() - givenDate.getTime()) / (1000 * 60 * 60 * 24));
  
  return daysDifference;
};

const createTweetElement = function(tweet) {
  const $tweet = $(`
  <section class="new-tweet">
          <form>
              <article class="tweet" >
                <header>
                  <div>
                    <img src="${tweet.user.avatars}">
                    <h4 class="user">${tweet.user.name}</h4>
                  </div>
                  <h4 class="atUser">${tweet.user.handle}</h4>
                </header>
                <p>${tweet.content.text}</p>
                <footer>
                  <span>${dateFromToday(tweet.created_at)} days ago</span>
                  <span>
                    <i class="fa-sharp fa-solid fa-flag"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-heart"></i>
                  </span>
                </footer>
              </article>
           </div>
        </form>
      </section>`);

  return $tweet;
};

const renderTweets = function(data) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  data.forEach(e => {
    const $tweet = createTweetElement(e);
    $('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  });
};

// renderTweets(data);

