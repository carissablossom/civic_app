Template.body.helpers({
  logs: function() {
    return ApiLogs.find();
  }
});

Template.listLogs.onCreated(function() {
  this.subscribe('logs');
});
