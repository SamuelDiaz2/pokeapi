let pokemones = [];
let totalPokes = 10;

//conexion para obtener la lista de pokemon

async function Conexion() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();
    return data.results;
}

//cargar todos los pokemon al iniciar

async function General() {
    if (pokemones.length === 0){
        pokemones = await Conexion();
    }
    Home(pokemones);
    console.log(pokemones[2].name)
}

General()