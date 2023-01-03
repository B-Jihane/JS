function firTree(n){
    for(let i = 1; i < n+1 ; i++){
        console.log(' '.repeat(n-i) + '* '.repeat(i));
    }
}

firTree(10)

module.exports = firTree;
