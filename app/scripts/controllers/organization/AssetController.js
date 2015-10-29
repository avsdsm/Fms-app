(function (module) {
    mifosX.controllers = _.extend(module, {
    	AssetController: function (scope, resourceFactory, location) {
            scope.assets = [];
            scope.routeTo = function (id) {
                location.path('/viewasset/' + id);
            };

            if (!scope.searchCriteria.assets) {
                scope.searchCriteria.assets = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.assets;

            scope.onFilter = function () {
                scope.searchCriteria.assets = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.assetResource.getAllAssets(function(data) {
                scope.assets = data;
            });
        }
    });
    mifosX.ng.application.controller('AssetController', ['$scope', 'ResourceFactory', '$location', mifosX.controllers.AssetController]).run(function ($log) {
        $log.info("AssetController initialized");
    });
}(mifosX.controllers || {}));
