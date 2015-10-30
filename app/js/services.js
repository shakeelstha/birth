'use strict';

angular.module('birthGenderPredictorApp.services',[]).
	factory('birthGenderPredictorService', function(){
		var ageGenderPredictorData = [
                                        ['Girl','Boy','Girl','Boy','Boy','Boy','Boy','Boy','Boy','Boy','Boy','Boy'],                                               
                                        ['Boy','Girl','Boy','Girl','Girl','Boy','Boy','Boy','Boy','Boy','Girl','Girl'],
                                        ['Girl','Boy','Girl','Boy','Boy','Boy',	'Boy','Boy','Boy','Girl','Boy','Boy'],
                                        ['Boy','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl'],
                                        ['Girl','Boy','Boy','Girl','Boy','Girl','Girl','Boy','Girl','Girl','Girl','Girl'],
                                        ['Boy','Boy','Girl','Boy','Boy','Girl','Boy','Girl','Boy','Boy','Boy','Girl'],
                                        ['Boy','Girl','Boy','Boy','Girl','Boy','Boy','Girl','Girl','Girl','Girl','Girl'],
                                        ['Girl','Boy','Boy','Girl','Girl','Boy','Girl','Boy','Boy','Boy','Boy','Boy'],
                                        ['Boy','Girl','Boy','Girl','Girl','Boy','Girl','Boy','Girl','Girl','Girl','Girl'],
                                        ['Girl','Boy','Girl','Boy','Girl','Girl','Boy','Boy','Boy','Boy','Girl','Boy'],
                                        ['Boy','Girl','Boy','Girl','Girl','Girl','Boy','Boy','Boy','Boy','Girl','Girl'],
                                        ['Girl','Boy','Girl','Girl','Boy','Boy','Boy','Boy','Boy','Girl','Girl','Girl'],
                                        ['Boy','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Boy','Boy'],
                                        ['Boy','Girl','Boy','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Boy'],
                                        ['Boy','Girl','Boy','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Boy'],
                                        ['Girl','Boy','Girl','Boy','Girl','Girl','Girl','Boy','Girl','Girl','Girl','Boy'],
                                        ['Boy','Girl','Boy','Girl','Girl','Girl','Girl','Girl','Girl','Girl','Boy','Boy'],
                                        ['Boy','Boy','Girl','Boy','Girl','Girl','Girl','Boy','Girl','Girl','Boy','Boy'],
                                        ['Girl','Boy','Boy','Girl','Boy','Girl','Girl','Girl','Boy','Boy','Boy','Boy'],
                                        ['Boy','Girl','Boy','Boy','Girl','Boy','Girl','Boy','Girl','Boy','Girl','Boy'],
                                        ['Girl','Boy','Girl','Boy','Boy','Girl','Boy','Girl','Boy','Girl','Boy','Girl'],
                                        ['Boy','Girl','Boy','Boy','Boy','Girl','Girl','Boy','Girl','Boy','Girl','Girl'],
                                        ['Girl','Boy','Girl','Boy','Girl','Boy','Boy','Girl','Boy','Girl','Boy','Girl'],
                                        ['Boy','Girl','Boy','Girl','Boy','Girl','Boy','Boy','Girl','Boy','Girl','Boy'],
                                        ['Girl','Boy','Girl','Boy','Girl','Boy','Girl','Boy','Boy','Girl','Boy','Girl'],
                                        ['Boy','Girl','Boy','Girl','Boy','Girl','Boy','Girl','Boy','Boy','Boy','Boy'],
                                        ['Boy','Boy','Girl','Boy','Boy','Boy','Girl','Boy','Girl','Boy','Girl','Girl'],
                                        ['Girl','Boy','Boy','Girl','Girl','Girl','Boy','Girl','Boy','Girl','Boy','Boy']
                                    ];
    
        var monthsOfYear = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        var birthGenderPredictor = {};
        var minAge = 18;
        var maxAge = 45;
    
        //method that returns gender
        birthGenderPredictor.getChildsGender = function(cAge, cMonth){ 
            var gender = "N/A";
            var baseAge = 18;
            var currentAge = cAge;
            var index = currentAge - baseAge;
            var currentMonth = cMonth;
            
            if(currentAge > maxAge || currentAge < minAge){
                return gender;
            }
            return ageGenderPredictorData[index][currentMonth]; 
		}
        
        //method that return whole prediction gender 2D array data
        birthGenderPredictor.getAgeGenderPredictorData = function(){
            return ageGenderPredictorData;
        }
    
        //method that return months of year array
        birthGenderPredictor.getMonthsOfYear = function(){
            return monthsOfYear;
        }
        
        //method that return valid ages of to be mom
        birthGenderPredictor.getValidAges = function(){
            var validAges = [];
            for(var i = minAge; i <= maxAge; i++){
                validAges.push(i);
            }
            return validAges;            
        }
        
        //method that return minimum age of to be mom
        birthGenderPredictor.getMinAge = function(){
            return minAge;
        }
        
        //method that return maximum age of to be mom
        birthGenderPredictor.getMaxAge = function(){
            return maxAge;
        }
        
        return birthGenderPredictor;

	});