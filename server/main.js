import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (ApiLogs.find().count() === 0) {
    var sampleLogs = [
      {
        client_name: faker.company.companyName(),
        endpoint_called: "/",
        result: "success",
        created_at: new Date(Date.now())
      },
      {
        client_name: faker.company.companyName(),
        endpoint_called: "/",
        result: "success",
        created_at: new Date(Date.now())
      }
    ];
    for (var i=0; i<1000; i++) {
      ApiLogs.insert({
        client_name: faker.company.companyName(),
        endpoint_called: "/",
        result: "success",
        created_at: new Date(Date.now()) });
    }

  }
});

Meteor.publish('logs', function(limit){
  return ApiLogs.find({}, {
    limit: limit || 5,
    sort: { timestamp: -1 }
  });
});
