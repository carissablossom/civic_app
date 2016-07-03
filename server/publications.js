Meteor.publish('logs', function(skipCount) {
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

  Counts.publish(this, 'logCount', ApiLogs.find(), {
    noReady: true
  });

  return ApiLogs.find({}, {
    limit: parseInt(Meteor.settings.public.recordsPerPage),
    skip: skipCount
  });
});
