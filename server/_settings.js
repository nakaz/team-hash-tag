

    Meteor.startup(function() {

      Accounts.loginServiceConfiguration.remove({
        service : 'twitter'
      });

      Accounts.loginServiceConfiguration.insert({
        service     : 'twitter',
        consumerKey : 'uJbwaikF3EVYg3qObJkKrSsTJ',
        secret      : 'zDRdHaonjAr7r7DssDIq3AVOMwAgd22bAu5uKVuGAEdksgc9kI'
      });

    });