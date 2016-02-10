"use strict";
namespace app.Controllers {
    export class BeerTestCreateCtrl{
        public beer = {};
        public result

        public createBeer() {
            this.BeerTestCreateService.saveBeer(this.beer).then((res) =>   {
                this.result = res;
            })
        }

        constructor(
            private BeerTestCreateService: app.Services.BeerTestCreateService,
            private $location: ng.ILocationService
        ){

        }
    }
    angular.module("app").controller("BeerTestCreateCtrl", BeerTestCreateCtrl);
}
