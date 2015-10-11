Meteor.startup(function(){

  var apiCall = function (apiUrl, callback){
    try {
      var response = HTTP.get(apiUrl).data;
      callback(null, response);
    } catch (error) {
      if (error.response) {
        var errorCode = error.response.data.code;
        var errorMessage = error.response.data.message;
      } else {
        var errorCode = 500;
        var errorMessage = 'Cannot access the API';
      }
      var myError = new Meteor.Error(errorCode, errorMessage);
      callback(myError, null);
    }
  };

  // if(TweetCollection.find().count() === 0){
  //   var tweets = [{message: "Yo",
  //                 author: "nakaz"
  //                 },
  //                 {message: "What up",
  //                 author: "ahibono"
  //                 }];
  //   for (var i=0;i<tweets.length;i++){
  //     TweetCollection.insert({message: tweets[i].message, author: tweets[i].author});
  //   }
  // }

  // if(InstaCollection.find().count() === 0){
  //   var instas = [{pic: "My first pic",
  //                 author: "mete"
  //                 },
  //                 {pic: "Donuts",
  //                 author: "julz"
  //                 }];
  //   for (var i=0;i<instas.length;i++){
  //     InstaCollection.insert({pic: instas[i].pic, author: instas[i].author});
  //   }
  // }
});

// https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=ACCESS-TOKEN
