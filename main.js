const pokemonForm = document.querySelector("#form");
const pokeInput = document.querySelector("#input"); 
const pokeSort = document.querySelector("#select"); 
const pokeBox = document.querySelector("#pokewrapper");


if (typeof pokemons !== "undefined") {
    renderPokemon(pokemons);
} else {
    console.error("Error: 'pokemons' array is not defined!");
}


function renderPokemon(poke) {
    pokeBox.innerHTML = poke
        .map(
            (obyektlar) => `
        <div class="parent">
            <li class="lii">
                <span>${obyektlar.num}</span>
                <h2>${obyektlar.name}</h2>
                <img src="${obyektlar.img}" alt="${obyektlar.name}">
                <span>${obyektlar.type.join(", ")}</span>
            </li>
        </div>
    `
        )
        .join("");
}


pokemonForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchValue = pokeInput.value.toLowerCase();

    const filteredPokemons = pokemons.filter((poke) =>
        poke.name.toLowerCase().includes(searchValue)
    );

    renderPokemon(filteredPokemons);
});


pokeSort.addEventListener("change", () => {
    let sortedPokemons = [...pokemons]; 

    if (pokeSort.value === "A_Z") {
        sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (pokeSort.value === "Z-A") {
        sortedPokemons.sort((a, b) => b.name.localeCompare(a.name)); 
    }

    renderPokemon(sortedPokemons);
});
