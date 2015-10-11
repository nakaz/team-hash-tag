

    Meteor.startup(function() {

      Accounts.loginServiceConfiguration.remove({
        service : 'twitter'
      });

      Accounts.loginServiceConfiguration.insert({
        service     : 'twitter',
        consumerKey : 'XXXXXX',
        secret      : 'XXXXX'
      });

    });
