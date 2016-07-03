Template.logForm.events({
  'submit form': function(event) {
    event.preventDefault();
    var newLog = {
      client_name: event.target.client_name.value,
      endpoint_called: event.target.endpoint.value,
      result: event.target.result.value,
      created_at: new Date(Date.now())
    };
    ApiLogs.insert(newLog)
  }
})
