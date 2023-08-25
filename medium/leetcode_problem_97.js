
//Descripcion del problema 
//given three strings s1, s2, and s3, determine whether s3 is formed by an interleaving of s1 and s2.
//an interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:
    //s = s1 + s2 + ... + sn
    //t = t1 + t2 + ... + tm
    // |n - m| <= 1
    //The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

//para este ejercicio use el metodo de tabulacion de progrmacion dinamica
function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    //se crea un arreglo bidimensional donde las filas son los caracteres de s1 y las columnas los caracteres de s2
    //rellenando sus valores con false
    const tabu = new Array(s1.length + 1).fill(false).map(() => new Array(s2.length + 1).fill(false));
    tabu[0][0] = true;
    
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            const k = i + j - 1;
            if (i > 0 && s1[i - 1] === s3[k]) {
                tabu[i][j] = tabu[i][j] || tabu[i - 1][j];
            }
            
            if (j > 0 && s2[j - 1] === s3[k]) {
                tabu[i][j] = tabu[i][j] || tabu[i][j - 1];
            }
        }
    }
    return  tabu[s1.length][s2.length];
}

