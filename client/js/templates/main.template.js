SessionStore.set('isSearchQuery', null);

Template.main.created = function (){
  console.log('main created');
};

Template.main.rendered = function (){
  console.log('main rendered');
};

Template.main.destroyed = function (){
  console.log('main destroyed');
};

Template.main.helpers({
  isSearchQuery: function (){
    return SessionStore.get('isSearchQuery');
  }
});

Template.main.events({
  'keypress #search-query': function(evt, tmpl){
    if (evt.keyCode === 13){
      submitSearchQuery(evt, tmpl);
    }
  }
});

function submitSearchQuery(evt, tmpl){
  var searchQuery = tmpl.find('#search-query').value;
  console.log(searchQuery);
  SessionStore.set('isSearchQuery', true);

}


