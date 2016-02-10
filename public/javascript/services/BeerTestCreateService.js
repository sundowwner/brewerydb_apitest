"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var BeerTestCreateService = (function () {
            function BeerTestCreateService($resource) {
                this.$resource = $resource;
                this.BeerResource = $resource("/beers/:id", null, {
                    "update": { method: "PUT" }
                });
            }
            BeerTestCreateService.prototype.saveBeer = function (beer) {
                return this.BeerResource.query(beer).$promise;
            };
            return BeerTestCreateService;
        }());
        Services.BeerTestCreateService = BeerTestCreateService;
        angular.module("app").service("BeerTestCreateService", BeerTestCreateService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
