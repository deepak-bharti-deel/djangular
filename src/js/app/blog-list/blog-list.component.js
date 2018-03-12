'use strict'; 

angular.module('blogList').
	component('blogListHere',{
		// template : 	"<div class=''><p>Its {{var}}</p><button ng-click='someClickTest()'>Click me if you can!!</button></div>",
		templateUrl : "/templates/blog-list.html",

		controller: function($scope){

			var blogItems = [
				{id:1, title : 'cool', description:'awesome cool', publishDate:'22-09-2018'},
				{id:2, title : 'noway', description:'fabulous', publishDate:'23-10-2018'},
				{id:3, title : 'surya', description:'fantastic', publishDate:'24-11-2018'},
				{id:4, title : 'bhvya', description:'luniatic', publishDate:'25-12-2018'},
				{id:5, title : 'cats', description:'ferari', publishDate:'26-13-2018'},
			]

			$scope.items = blogItems

			console.log('its cool')
			$scope.var = 'random strange'
			$scope.clicks=0
			console.log($scope.clicks)
			$scope.someClickTest = function(){   
			console.log('clicked ')
			$scope.clicks+=1
			$scope.var = "Clicked "+ $scope.clicks + ' times'
			}
		}					
	});

	// controller('BlogListcontroller',function($scope){
	// 	console.log('its cool')
	// 	$scope.var = 'random strange';
	// 	$scope.clicks=0;
	// 	console.log($scope.clicks);
	// 	$scope.someClickTest = function(){
	// 		console.log('clicked ')
	// 		$scope.clicks+=1
	// 		$scope.var = "Clicked "+ $scope.clicks + ' times'
	// 	}
	// });