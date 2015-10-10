if (typeof Meteor.settings === 'undefined') {
  Meteor.settings = {};

  _.defaults(Meteor.settings, {
    twitter: {
      consumerKey: "uJbwaikF3EVYg3qObJkKrSsTJ",
      secret: "zDRdHaonjAr7r7DssDIq3AVOMwAgd22bAu5uKVuGAEdksgc9kI"
    }
  });

  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: Meteor.settings.twitter.consumerKey,
        secret: Meteor.settings.twitter.secret
      }
  });

  ServiceConfiguration.configurations.remove({
      service: "instagram"
  });
    ServiceConfiguration.configurations.insert({
      service: "instagram",
      clientId: "e56af2319b304822a584c0288632f447",
      scope:'basic',
      secret: "4b9ec825088449a9873f84f4c4f77014"
  });
}