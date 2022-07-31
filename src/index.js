module.exports = function reverse (n) {
    let nArr = Math.abs(n).toString().split('');
    let temp = '';

    for (i=0; i < Math.ceil(nArr.length) / 2; i++){
        temp = nArr[i];
        nArr[i] = nArr[nArr.length-1-i]
        nArr[nArr.length-1-i] = temp;
    };

    return +nArr.join('');
}

console.log(module.exports(71348));