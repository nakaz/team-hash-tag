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

// Meteor.loginWithInstagram(function (err, res) {
//     if (err !== undefined)
//       console.log('sucess ' + res)
//     else
//       console.log('login failed ' + err)
// });