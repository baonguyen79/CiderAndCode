app.controller("listBushelsController",["$http","$scope",function($http, $scope) {
    $scope.bushels = [];
  
    $http.get("/api/Bushels")
        .then(function (result) {
            $scope.bushels = result.data;
            
        });

    $scope.deleteBushel = function (Id) {
        $http.delete(`/api/Bushels/${Id}`);
                        
    }

}]);