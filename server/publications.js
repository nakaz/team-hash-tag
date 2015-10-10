Meteor.publish('tweets', function(){
  return TweetCollection.find();
});

Meteor.publish('instas', function(){
  return InstaCollection.find();
});