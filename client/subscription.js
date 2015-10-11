Session.setDefault('searching', false);

Tracker.autorun(function() {
  if (Session.get('query')) {
    var searchHandle = Meteor.subscribe('instaSearch', Session.get('query'));
    Session.set('searching', ! searchHandle.ready());
  }
});