//find largest value in array using by function
let arrElm = [11, 33, 4, 5555, 5, 66, 63, 383, 930];
function findLargest(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return max
}
console.log(findLargest(arrElm));
