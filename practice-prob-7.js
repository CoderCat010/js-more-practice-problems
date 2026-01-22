//-----> find who's the tallest? 
let heights = [166, 170, 175, 178, 183, 185, 187, 190];

function getMax(numbers){
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}
console.log(getMax(heights));

