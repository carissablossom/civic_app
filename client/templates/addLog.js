Template.addLog.events({
  'submit form': function(e) {
    e.preventDefault();
    var newLog = {
      client_name: event.target.client_name.value,
      endpoint_called: event.target.endpoint.value,
      result: event.target.result.value,
      created_at: new Date(Date.now())
    };


    Meteor.call('logInsert', newLog, function(error, result) {
    	if (error) {
        alert(error);
        return false;
      }

    	Router.go('listLogs');
    });
  },
  'click #btnLogList': function(e) {
    e.preventDefault();

    Router.go('listLogs');
  }
});
