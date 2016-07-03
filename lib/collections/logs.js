ApiLogs = new Mongo.Collection( 'logs' );

Meteor.methods({
  logInsert: function(logAttributes) {
		check(logAttributes, {
			client_name: String,
			endpoint_called: String,
			result: String,
      created_at: Date
		});

		Customers.insert(logAttributes);
	}
});
