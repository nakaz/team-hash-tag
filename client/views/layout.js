if (Meteor.isClient) {


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

  });

  Template.dashboard.events({

  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
