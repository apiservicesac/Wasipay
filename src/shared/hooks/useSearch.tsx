import Fuse from 'fuse.js';

export const useSearch = () => {
    const search = (dataList: any[], search: string | null, keys: string[]): any[] => {
        if (!search || search.trim() === '') {
            return dataList;
        }

        const fuse = new Fuse(dataList, {
            keys: keys,
            isCaseSensitive: false, // No diferencia entre mayúsculas y minúsculas
            includeScore: true, // Incluye la puntuación para ordenar los resultados
            shouldSort: true, // Ordena los resultados por relevancia
            includeMatches: false, // No incluye detalles de las coincidencias
            findAllMatches: false, // No busca todas las coincidencias posibles
            minMatchCharLength: 1, // Longitud mínima de caracteres para coincidencia
            location: 0, // Ubicación desde donde empezar la búsqueda
            threshold: 0.3, // Umbral de coincidencia; valores más bajos son más estrictos
            distance: 100, // Distancia máxima para coincidencias
            useExtendedSearch: false, // No usa búsqueda extendida
            ignoreLocation: false, // No ignora la ubicación en la cadena
            ignoreFieldNorm: false, // No ignora la normalización del campo
            fieldNormWeight: 1, // Peso de la normalización del campo
        });

        // Realiza la búsqueda y devuelve los resultados más relevantes
        const result = fuse.search(search);
        const filteredResults = result
            .filter(({ score }) => score !== undefined && score < 0.3) // Filtra los resultados según la puntuación
            .map(({ item }) => item);

        return filteredResults;
    };

    return {
        search
    };
};
