

//descripcion del problema:
//given an string S, reorganize the characters of S so that any two adjacent characters are not the same.

var reorganizeString = function(S) {
    let map = new Map();
    
    for (let i = 0; i < S.length; i++) {
        if (map.has(S[i])) {
            map.set(S[i], map.get(S[i]) + 1);
        } else {
            map.set(S[i], 1);
        }
    }

    // Ordenar el mapa por frecuencia de caracteres
    const sortedChars = [...map.entries()].sort((a, b) => b[1] - a[1]);

    // Verificar si la reorganización es posible
    const maxFrequency = sortedChars[0][1];
    const totalLength = S.length;

    if (maxFrequency > Math.ceil(totalLength / 2)) {
        return ""; // No es posible reorganizar
    }

    // Construir la cadena reorganizada
    let result = new Array(totalLength);
    let currentIndex = 0;

    for (const [char, frequency] of sortedChars) {
        for (let i = 0; i < frequency; i++) {
            if (currentIndex >= totalLength) {
                currentIndex = 1; // Si alcanzamos el final, regresamos al segundo carácter
            }
            result[currentIndex] = char;
            currentIndex += 2; // Saltar al siguiente espacio disponible
        }
    }

    return result.join('');
};

// Ejemplo de uso
console.log(reorganizeString("aab")); // Ejemplo de salida: "aba"

