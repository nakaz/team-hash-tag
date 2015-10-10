Meteor.startup(function(){
  if(TweetCollection.find().count() === 0){
    var tweets = [{message: "Yo",
                  author: "nakaz"
                  },
                  {message: "What up",
                  author: "ahibono"
                  }];
    for (var i=0;i<tweets.length;i++){
      TweetCollection.insert({message: tweets[i].message, author: tweets[i].author});
    }
  }

  if(InstaCollection.find().count() === 0){
    var instas = [{pic: "My first pic",
                  author: "mete"
                  },
                  {pic: "Donuts",
                  author: "julz"
                  }];
    for (var i=0;i<instas.length;i++){
      InstaCollection.insert({pic: instas[i].pic, author: instas[i].author});
    }
  }
});