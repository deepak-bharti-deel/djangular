'use strict';

angular.module('try').
	config(
		function(
			$locationProvider,
			$routeProvider
		){
			$locationProvider.html5Mode({
	          enabled:true;
	        })
		$routeProvider.
			when("/",{
				template : "<blog-list-here></blog-list-here>",
			}).when("/blog/1/",{
				template: '<h1><Hi blog 1<h1>',
			}).when("/blog/2/",{
				template: "blog 2",
			}).otherwise({
				template:"Not Found",
			})

});


