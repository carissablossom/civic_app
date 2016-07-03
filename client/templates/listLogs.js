Template.listLogs.onCreated(function() {
  var template = this;

	template.autorun(function() {
    var skipCount = (currentPage() - 1) * Meteor.settings.public.recordsPerPage;
    template.subscribe('logs', skipCount);
  });
});

Template.listLogs.helpers({
	logs: function() {
		return ApiLogs.find();
	},
  prevPage: function() {
    var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
    return Router.routes.listLogs.path({page: previousPage});
  },
  nextPage: function() {
    var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
    return Router.routes.listLogs.path({page: nextPage});
  },
  prevPageClass: function() {
    return currentPage() <= 1 ? "disabled" : "";
  },
  nextPageClass: function() {
    return hasMorePages() ? "" : "disabled";
  }
});

Template.listLogs.events({
	'click #btnAddLog': function(e) {
		e.preventDefault();

		Router.go('addLog');
	}
});

var hasMorePages = function() {
  var totalLogs = ApiLogs.get('logCount');
  return currentPage() * parseInt(Meteor.settings.public.recordsPerPage) < totalLogs;
}

var currentPage = function() {
  return parseInt(Router.current().params.page) || 1;
}
