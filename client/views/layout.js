if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.login.events({
    'click #signIn' : function() {
      Meteor.loginWithTwitter();
    }
  });

  Template.user.events({
    'click #signOut' : function() {
      Meteor.logout();
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
