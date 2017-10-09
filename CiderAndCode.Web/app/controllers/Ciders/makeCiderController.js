app.controller("makeCiderController", ["$http", "$scope", function ($http, $scope) {
      
    $scope.makeCider = function () {
        let bushelId = $scope.bushelId;
        $http.post("api/cider",
            {
                bushelId: bushelId

            })
            .then(result => console.log(result))
            .catch(error => console.log(error));
    };

}]);