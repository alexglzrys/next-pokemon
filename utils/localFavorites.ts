const toggleFavorites = (id: number) => {
    // Leer el localstorage
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Guardar o eliminar el pokemon favorito
    if (favorites.includes(id)) {
        // eliminar
        favorites = favorites.filter(pokemon_id => pokemon_id !== id);
    } else {
        // guardar
        favorites.push(id);
    }

    // Guardar cambios en localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number) => {
    // Esta función primero se ejecuta en el servidor, por ello es importante condicionar
    // No es recomendable hacer esta comprobación aqui, ya que podemos tener una respuesta con dos versiones diferentes
    // En el server es False, pero en el cleinte True (en caso de que el pokemon este agregado a favoritos)
    // Es por ello que se recomienda invocar esta función desde un efecto secundario, cuando lo pagina ya este renderizada

    // if (typeof window === 'undefined') return false;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    // Verficar si el ID del pokemon se encuentra en Favoritos
    return favorites.includes(id);
}

const pokemons = () => {
    // Regresar todo el listado de pokemons favoritos
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorites,
    existInFavorites,
    pokemons
}