function snapCrackle(maxValue){
    let resultado = []
    for(counter = 1; counter <= maxValue; counter++){
        if (counter % 2 !== 0 && counter % 5 === 0){
            resultado.push('SnapCrackle');
        } else if (counter % 2 !== 0){
            resultado.push('Snap');
        } else if (counter % 5 === 0){
            resultado.push('Crackle');
        } else {
            resultado.push(counter);
        }
    }
    return resultado.join(', ')
}
console.log(snapCrackle(30));




