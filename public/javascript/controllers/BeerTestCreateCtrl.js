"use strict";
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var BeerTestCreateCtrl = (function () {
            function BeerTestCreateCtrl(BeerTestCreateService, $location) {
                this.BeerTestCreateService = BeerTestCreateService;
                this.$location = $location;
                this.beer = {};
            }
            BeerTestCreateCtrl.prototype.createBeer = function () {
                var _this = this;
                this.BeerTestCreateService.saveBeer(this.beer).then(function (res) {
                    _this.result = res;
                });
            };
            return BeerTestCreateCtrl;
        }());
        Controllers.BeerTestCreateCtrl = BeerTestCreateCtrl;
        angular.module("app").controller("BeerTestCreateCtrl", BeerTestCreateCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
