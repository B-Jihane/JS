function myStrCat(str1, str2) {
    return `${str1}${str2}`;
    //return str1 + str2;
}

// ' (touche 4) -> ne doit pas être utilisé
// " (touche 3) -> préféré lorseque pas de concaténation
// ` (alt gr + touche 7) -> préféré lorseque concaténation

module.exports = myStrCat;
