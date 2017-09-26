﻿app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
        .when("/pickapples",
        {
            templateUrl: "/app/views/PickApples/pickApples.html",
            controller: "pickApplesController"
        })
        .when("/listbushels",
        {
            templateUrl: "/app/views/Bushels/listBushels.html",
            controller: "listBushelsController"
        });
}]);