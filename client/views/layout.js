Template.dashboard.created = function (){
  console.log('dashboard created');
};

Template.dashboard.rendered = function (){
  console.log('dashboard rendered');
};

Template.dashboard.destroyed = function (){
  console.log('dashboard destroyed');
};

Template.dashboard.helpers({
  instas: function() {
    return InstaCollection.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});

Template.dashboard.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var query = template.$('input[type=text]').val();
    if (query){
      Session.set('query', query);
    }
  }
});