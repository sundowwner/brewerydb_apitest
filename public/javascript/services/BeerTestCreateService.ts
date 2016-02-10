"use strict";

namespace app.Services{
    export class BeerTestCreateService{
        public BeerResource;


        public saveBeer(beer) {
            return this.BeerResource.query(beer).$promise;
        }

        constructor(
            private $resource: ng.resource.IResourceService
        ){
            this.BeerResource = $resource("/beers/:id", null,
            {
                "update": { method: "PUT"}
            });
        }
    }
    angular.module("app").service("BeerTestCreateService",BeerTestCreateService);
}
