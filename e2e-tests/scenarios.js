'use strict';

// Test Suite For Service
describe('Testing birthGenderPredictorService', function(){
    var birthPredictorService;

    beforeEach(function(){
        module('birthGenderPredictorApp');
        inject(function($injector){
            birthPredictorService = $injector.get('birthGenderPredictorService');
        });
    });

    it('should return months of year', function() {
        var months = birthPredictorService.getMonthsOfYear();
        expect(months.length).toEqual(12);
        expect(months).toContain('JAN');
        expect(months).toContain('DEC');
        expect(months).toContain('AUG');
    });
    
    it('should return min age of mother to be', function(){
        var minAge = birthPredictorService.getMinAge();
        expect(minAge).toEqual(18);
    });
    
    it('should return max age of mother to be', function(){
        var maxAge = birthPredictorService.getMaxAge();
        expect(maxAge).toEqual(45);
    });
    
    it('should get the valid ages of mother to be', function(){
        var validAges = birthPredictorService.getValidAges();        
        expect(validAges.length).toEqual(28);
        expect(validAges[0]).toEqual(18);
        expect(validAges[27]).toEqual(45);
    });
    
    it('should get the birth chart', function(){
        var predictorData = birthPredictorService.getAgeGenderPredictorData();      
        expect(predictorData.length).toEqual(28);
        expect(predictorData[0].length).toEqual(12);
        expect(predictorData[0][0]).toEqual('Girl');
    });
    
    it('should get the child\'s gender', function(){
        var childGender = birthPredictorService.getChildsGender(29, 8);
        expect(childGender).toEqual('Boy');
    });
});

// Test Suite For Utility
describe('Testing utility', function(){

    beforeEach(function(){
        jasmine.addMatchers(utility);
    });
   
    it('should return current age of mother to be', function() {
        var currentAge = utility.calculateAge('11/11/1986');
        expect(currentAge).toEqual(28);
    });
    
    it('should return current month year',function(){        
        var monthNames = utility.getMonthNames();
        // This test will fails every new month
        expect(monthNames[new Date().getMonth()] + ", " + new Date().getFullYear()).toEqual('October, 2015');
    });
});

// Test Suite For Controllers
describe('Testing Controllers', function(){
    var $controller;
    beforeEach(function(){
        module('birthGenderPredictorApp');
        inject(function($injector){
          $controller = $injector.get('$controller');
        });
    });

    it('nothing for controller testing', function(){        
        expect(true).toEqual(true);
    });
});