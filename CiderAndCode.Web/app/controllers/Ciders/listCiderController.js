app.controller("listCiderController", ["$http", "$scope", function ($http, $scope) {
    $scope.ciders = [];

    $http.get("api/cider")
        .then(function (result) {
            $scope.ciders = result.data;

        });


}]);