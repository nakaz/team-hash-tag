Meteor.publish('instaSearch', function(query){
  var self = this;
  try {
    var response = HTTP.get('https://api.instagram.com/v1/tags/' + query + '/media/recent?access_token=26446004.1677ed0.9f12cafae2e341de9d6ed12572ce428d');
    _.each(response.data, function(item){
      console.log(item);
      var data = item.data;
      var len = 200;
      self.added('instas', Random.id(), data);
    });
    self.ready();
  } catch(error) {
    console.log(error);
  }
});