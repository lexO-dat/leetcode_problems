
//Descripcion del problema 
//given an integer columNumber, return its corresponding column title as appear in an Excel sheet.

/*
    for example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
*/
var convertToTitle = function(columnNumber) {
    let ans = '';
    
    while (columnNumber > 0) {
        columnNumber--;
        let curr = columnNumber % 26;
        columnNumber = Math.floor(columnNumber / 26);
        ans = String.fromCharCode(curr + 'A'.charCodeAt(0)) + ans;
    }
    return ans;
}
