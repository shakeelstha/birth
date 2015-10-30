'use strict';

angular.module('birthGenderPredictorApp',[
	'birthGenderPredictorApp.services',
	'birthGenderPredictorApp.controllers',
	'ngRoute'
]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when("/date", {templateUrl: "views/date.html", controller: "DateController"}).
		when("/about", {templateUrl: "views/about.html", controller: "AboutController"}).
		otherwise({redirectTo: '/date'});
}]);