console.log('The Bot is starting');

var Twit = require('twit');

var config = require('./config');

console.log(config);

var T = new Twit(config);



setInterval(tweetATweet, 90000);
//
//  tweet 'hello again...'
//
function tweetATweet() {
T.post('statuses/update', { status: 'I made another twitter bot that tweets a message like this and a number like ' + getRandomInt(99) }, function(err, data, response) {
  console.log(data)
  
})

}




function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


/*
// this does what it looks like it would do
T.get('search/tweets', { q: 'kurtcobain since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
*/