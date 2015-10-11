Meteor.startup(function(){

  if(TweetCollection.find().count() === 0){
    var tweets = [{message: "Yo",
                  author: "nakaz",
                  hastag: "#selfie"
                  },
                  {message: "What up",
                  author: "ahibono",
                  hastag: "#dogs"
                  }];
    for (var i=0;i<tweets.length;i++){
      TweetCollection.insert({message: tweets[i].message, author: tweets[i].author});
    }
  }

  if(InstaCollection.find().count() === 0){
    var instas = [{pic: "My first pic",
                  author: "mete",
                  hastag: "#firsts"
                  },
                  {pic: "Donuts",
                  author: "julz",
                  hastag: "#food"
                  }];
    for (var i=0;i<instas.length;i++){
      InstaCollection.insert({pic: instas[i].pic, author: instas[i].author});
    }
  }
});

// https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=ACCESS-TOKEN
