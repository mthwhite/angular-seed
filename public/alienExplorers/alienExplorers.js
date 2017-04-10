
var bg = angular.module('bgFramework.alienExplorers', []);

(function () {
    angular
        .module('bgFramework.alienExplorers')
        .controller('alienExplorersController', alienExplorersController);

    alienExplorersController.$inject = [ ];

    function alienExplorersController() {
        var vm = this;
        vm.display = "Alien Explorers"
    }
}());
