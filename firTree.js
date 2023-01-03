
function level1(n){
    for(let i = 1; i < n+1 ; i++){
        console.log(' '.repeat(n-i) + '* '.repeat(i));
    }
}

function level2(n){
    for(let i = 0; i < n; i++){
        console.log(' '.repeat(n-i) + '*'.repeat(2i+1))
    }

}



function firTree(n, tr=0){
    if (tr === 0 ){
        level1(n)
    }
    else {
        level2(n, tr)
    }
}

firTree(10)

module.exports = firTree;
