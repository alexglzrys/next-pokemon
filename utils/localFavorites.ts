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

export default {
    toggleFavorites
}