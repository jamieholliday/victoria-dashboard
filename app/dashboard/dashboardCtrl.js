;(function() {
	'use strict';
	angular.module('dashboard')
	.controller('dashboardCtrl', function dashboardCtrl(dataService) {
		var vm = this;

		vm.burndownData = dataService.getData('burndown');

	});

})();