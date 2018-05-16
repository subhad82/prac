//chart.js
angular
.module('app')
.controller('tableview' , tableview)




tableview.$inject = ['$scope','$http'];

function tableview ($scope,$http){
$scope.subha = "subhadeep de ";
    $http.get("js/dummy.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log($scope.myWelcome);
    });
       
    // $scope.marry = "disnbu"; 
    
      $scope.update = function(){
        $scope.updatedata = this.y;
       
       
    }
   $scope.dosomething = function($event){
        $event.stopPropagation();
        $event.preventDefault();
        
        return false;
        //here I want to prevent handler from second directive
    } 
   
   
   
   
}

// app.directive('myDatepicker', function () {
//     return {
//         require : 'ngModel',
//         link : function (scope, element, attrs, ngModelCtrl) {
//             $(function(){
//                 element.datepicker({
//                     showOn:"both",
//                     changeYear:true,
//                     changeMonth:true,
//                     dateFormat:'yy-mm-dd',
//                     maxDate: new Date(),
//                     yearRange: '1920:2012',
//                     onSelect:function (dateText, inst) {
//                         ngModelCtrl.$setViewValue(dateText);
//                         scope.$apply();
//                     }
//                 });
//             });
//         }
//     }
// });


