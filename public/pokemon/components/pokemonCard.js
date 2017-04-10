(function () {
    angular.module('bgFramework.pokemon').component('pokemonCard', {
        templateUrl: 'pokemon/components/pokemon-card.html',
        controller: pokemonCardController,
        controllerAs: '$ctrl',
        bindings: {
            card: '<'
        }
    });

    pokemonCardController.$inject = [];

    function pokemonCardController() {
        const vm = this;
    }
}());
