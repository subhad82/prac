angular.module('app').controller('arrivals',arrivals);


arrivals.$inject = ['$scope' , '$http'];
function arrivals($scope , $http){
    
        $http.get("js/dummy.json")
    .then(function(response) {
        $scope.arrivalsarray = response.data;
        console.log($scope.arrivalsarray);
    });
       
    $scope.marry = "disnbu"; 
    
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