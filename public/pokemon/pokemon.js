
var bg = angular.module('bgFramework.pokemon', []);

(function () {
    angular
        .module('bgFramework.pokemon')
        .controller('pokemonController', pokemonController);

    pokemonController.$inject = [ ];

    function pokemonController() {
        var vm = this;
        vm.createPokemonCard = (newCard) => {
            var card = {
                image: 'default',
                level: 1,
                name: 'default',
                type: ['normal'],
                hp: 1,
                ability: 'none',
                evolution: 'none',
            };
            for (var key in newCard) {
                card[key] = newCard[key];
            }
            return card;
        };

        vm.displayPokemonCard = (card) => {
            var display = '';

            return display;
        };

        vm.currentCard = vm.createPokemonCard(
            {
                name: 'Bulbasaur',
                type: ['grass', 'poison'],
                hp: 2,
                evolution: 'ivysaur',
            }
        );


    }
}());
