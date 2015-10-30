'use strict';

angular.module('birthGenderPredictorApp.controllers', []).
/* Date Controller */
controller('DateController', ['$scope', 'birthGenderPredictorService', function($scope, birthGenderPredictorService) {

	this.submit = function() {
        
        var currentAge = utility.calculateAge(this.dob);
        $scope.currentAge = currentAge;
        var currentMonth = new Date().getMonth();
        
        var gender = birthGenderPredictorService.getChildsGender(currentAge, currentMonth);
        if(gender == 'N/A'){
            $scope.showError = true;
            $scope.showResult = false;
        }else{
            var monthNames = utility.getMonthNames();
            $scope.date = monthNames[new Date().getMonth()] + ", " + new Date().getFullYear();
            $scope.gender = gender;
            $scope.isBoy = gender == "Boy" ? true : false;
            
            $scope.showError = false;
            $scope.showResult = true;
        }
    }
}]).
/* About Page Controller */
controller('AboutController', ['$scope', 'birthGenderPredictorService', function($scope, birthGenderPredictorService){
    $scope.monthsOfYear = birthGenderPredictorService.getMonthsOfYear();
    $scope.validAges = birthGenderPredictorService.getValidAges();
    $scope.ageGenderPredictorData = birthGenderPredictorService.getAgeGenderPredictorData();
    $scope.minAge = birthGenderPredictorService.getMinAge();
}]);