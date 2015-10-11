SessionStore.set('isSearchQuery', null);

Tracker.autorun(function() {
  if (SessionStore.get('isSearchQuery')) {
    var searchHandle = Meteor.subscribe('instaSearch', Session.get('query'));
  }
});