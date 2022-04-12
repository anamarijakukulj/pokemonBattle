import React, {useState, useEffect} from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';


document.querySelector('#start').addEventListener('click', () => {
    getNewPokemon();
})

document.querySelector('#battle-btn').addEventListener('click', () => {
    battlePokemon();
});


// Makes API call and then gets two Pokemon Object
function firstPokemon() {
    let id = Math.floor(Math.random() * 1126) + 1;
    fetch('https://pokeapi.co/api/v2/pokemon/${id}')
        .then(response => response.json())
        .then(data => {
               name: data.name,
               image: data.sprites["front_default"],
               type: data.types.map(type => type.type.name).join(","),
               ability: data.abilities.map(ability => ability.ability.name).join(",")
               statistics: data.stats[i].base_state;
        });
    };
};

function secondPokemon() {
    let id = Math.floor(Math.random() * 1126) + 1;
    fetch('https://pokeapi.co/api/v2/pokemon/${id}')
        .then(response => response.json())
        .then(data => {
               name: data.name,
               image: data.sprites["front_default"],
               type: data.types.map(type => type.type.name).join(","),
               ability: data.abilities.map(ability => ability.ability.name).join(",")
               statistics: data.stats[i].base_state;
        });
    };
};


async function renderPokemon() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="p_card">
                            <img src="{data.sprites["front_default"]}" >
                            <p>{data.name}</p>
                        </div>`;

        html += htmlSegment;
    });

}

renderUsers();

const getNewPokemon = async() => {
    const randomFirstPokemon = firstPokemon();
    const randomSecondPokemon = secondPokemon();

const pokeDataArr = await pokemonDataSync(randomFirstPokemon, randomSecondPokemon);


await renderPokemonSync(pokeDataArr);
};

document.getElementById(".second_screen").innerHTML = 

const pokemonDataSync = async (num1, num2) => {
    let pokeDataArr = [];
    const pokemonOne = await makeApiCall(num1);
    const pokemonTwo = await makeApiCall(num2);

    pokeDataArr.push(pokemonOne);
    pokeDataArr.push(pokemonTwo);

    return pokeDataArr;
}

const renderPokemonSync = (pokeDataArr) => {
    pokemonDataSync.forEach( pokemon => {
        let card = `<div class="p_card">
                    <img src={}`
    })
}


const battlePokemon = () => {
    const battleResult = document.createElement('h1');
    const pokemonOne = document.querySelectorAll('data.name')[0].innerText;
    const pokemonTwo = document.querySelectorAll('.data.name')[1].innerText;

    if (randomFirstPokemon.statistics < randomSecondPokemon.statistics) {
        battleResult.innerText = `Winner`;
        secondPokemon.style.visibility = visible;
        getNewPokemon();
    } else {
        battleResult.innerText = `Winner`
        firstPokemon.style.visibility = visible;
        getNewPokemon();
    }
}

const displayPokemonData = async (data) => {
    const pokeContainer = document.createElement('div');
    pokeContainer.setAttribute('class', 'pokeCard');
    const name = document.createElement('h3');
    name.setAttribute('class', 'pokemon-name');
    const img = document.createElement('img');
    const hp = document.createElement('p');
    const moves = document.createElement('p');

    name.innerText = data.data.name;
    img.src = data.data.sprites.front_shiny;
    hp.innerText = `HP: ${data.data.stats[5].base_stat}`;
    moves.innerText = 'Moves:';

    const container = document.querySelector('.data');

    pokeContainer.appendChild(name);
    pokeContainer.appendChild(img);
    pokeContainer.appendChild(hp);
    pokeContainer.appendChild(moves);

    // Add randomly chosen moves right under 'Moves:'
    let movesHistory = [];

    for (let i = 0; i < 4; i++) {
        const movesIndex = getUniqueNumber(movesHistory, data.data.moves.length);
        const move = document.createElement('p');
        const chosenMove = data.data.moves[movesIndex];
        const moveUrl = chosenMove.move.url;

        const movePowerPoints = await makeMovesApiCall(moveUrl);

        move.innerText = `${chosenMove.move.name} PP: ${movePowerPoints.data.pp}`;
        pokeContainer.appendChild(move);
    }
    // console.log(data.data.sprites.back_shiny);

    if (data.data.sprites.back_shiny != null) {
        img.addEventListener('mouseover', () => {
            img.style.transition = '.5s ease';
            img.src = data.data.sprites.back_shiny;
        })
    }
    
    pokeContainer.addEventListener('mouseover', () => {
        pokeContainer.style.transform = 'scale(1.05)';
    })
    
    img.addEventListener('mouseleave', () => {
        img.style.transition = '.5s ease';
        img.src = data.data.sprites.front_shiny;
    })

    pokeContainer.addEventListener('mouseleave', () => {
        pokeContainer.style.transform = 'scale(1)';
    })

    container.appendChild(pokeContainer);
}