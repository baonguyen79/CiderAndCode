app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
        .when("/pickapples",
        {
            templateUrl: "/app/views/PickApples/pickApples.html",
            controller: "pickApplesController"
        })
        .when("/makecider",
        {
            templateUrl: "/app/views/Ciders/makeCider.html",
            controller: "makeCiderController"
        })
        .when("/listciders",
        {
            templateUrl: "/app/views/Ciders/listCiders.html",
            controller: "listCiderController"
        })
        .when("/listbushels",
        {
            templateUrl: "/app/views/Bushels/listBushels.html",
            controller: "listBushelsController"
        });
}]);