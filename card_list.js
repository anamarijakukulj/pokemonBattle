const POKEMON_BASE_API = 'https://pokeapi.co/api/v2/pokemon/';


const pokemonInfoViewHtmlId = "pokemon_list";
const pokemonListViewHtmlId = "pokemonInfo";

((window, document) => {
    let count = null;
    let next = null;
    let previous = null;
    let pokemonList = [];
    let pokemon = null;

    function fetchPokemon(pokemonUrl) {
        const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/${id}';
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
               name: data.name,
               image: data.sprites["front_default"],
               type: data.types.map(type => type.type.name).join(","),
               ability: data.abilities.map(ability = > ability.ability.name).join(",")
    }

    function fetchPokemons() {
        fetch(POKEMON_BASE_API)
            .then(response => response.json())
            .then(data => {
                count = data['count']
                next = data['next']
                previous = data['previous']
                pokemonList = data['results']
            });
    }

    function fetchPokemonsNext() {
        if (next == null) return;

        fetch(next)
            .then(response => response.json())
            .then(data => {
                count = data['count']
                next = data['next']
                previous = data['previous']
                pokemonList = data['results']
            });
    }

    function fetchPokemonsPrevious() {
        if (previous == null) return;

        fetch(previous)
            .then(response => response.json())
            .then(data => {
                count = data['count']
                next = data['next']
                previous = data['previous']
                pokemonList = data['results']
            });
    }

    function onBtnNextClick() {
        fetchPokemonsNext();
    }

    function onBtnPreviousClick() {
        fetchPokemonsPrevious();
    }

    function onPokemonClick(event) {
        fetchPokemon(pokemonUrl);
        generatePokemonView(pokemonUrl);
    }

    function createPokemonHtmlElementList() {
        let pokemonHtmlElementList = []

        for (let i = 0; i < pokemonList.length; i++) {
            let pokemonListItemHtmlElement = generatePokemonListItemHtmlElement();
            pokemonHtmlElementList.push(pokemonListItemHtmlElement)
        }
         document.querySelector('pokemon_list').appendChild(pokemonListItemHtmlElement);
    }

    function generatePokemonListItemHtmlElement() {
        document.getElementById("pokemon_list");
        return Math.floor(Math.random("pokemon_list");
        // todo generate and return 1 html list item
    }

    function togglePokemonListView(display) {
            if(!display) {
              pokemonInfoViewHtmlId.style.visibility = "hidden";
            } else {
              pokemonInfoViewHtmlId.style.visibility = "visible";
        // todo display = true or false, display or hide List view
    }

    function createPokemonInfoHtmlElement() {
        document.getElementById("pokemonInfo");
        // todo generate div element from pokemon info
    }

    function togglePokemonInfoView(display) {
        if(!display) {
            pokemonListViewHtmlId.style.visibility = "hidden";
        } else {
            pokemonListViewHtmlId.style.visibility = "visible";
        // todo display = true or false, display or hide pokemon view
    }

    function init() {
        // runtime
        fetchPokemons()
    }

    init();
})(window, document);