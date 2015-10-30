'use strict';

// Utility methods
var utility = {
    calculateAge: function (dob){
        var ageDate = new Date(new Date() - new Date(dob)); // miliseconds from epoch
        var currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        return currentAge;
    },
    
    getMonthNames: function (){
        var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];
        return monthNames;
    }
};
