/* function snapCrackle(maxValue){
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
 */


function snapCracklePrime(maxValue){
    let resultado = []
    for(counter = 1; counter <= maxValue; counter++){
        if (counter % 2 !== 0 && counter % 5 === 0){
            if (counter / 5 === 1){
                resultado.push('SnapCracklePrime');
            } else {
            resultado.push('SnapCrackle');
            }
        } else if (counter % 2 !== 0){
            let array = []
            for(let subcounter = 2; subcounter < counter; subcounter++){
                if (counter % subcounter === 0){
                    array.push(counter * -counter);
                } else {
                    array.push(counter);
                }
            }
            let total = array.reduce((valor1, valor2)=> valor1 + valor2, 0)
            if (total < 0 || counter === 1){
                resultado.push('Snap');
            } else {
                resultado.push('SnapPrime');
            }
            } else if (counter % 5 === 0){
            resultado.push('Crackle');
        } else if (counter / 2 === 1){
            resultado.push('Prime');
        } else {
            resultado.push(counter);
        }
    }
    return resultado.join(', ')
}
console.log(snapCracklePrime(30));
