// const answer = prompt('would you like to save?');

// let save;
// if(answer.toLowerCase() === 'yes'){
//     save = true;
// }else{
//     const secondAnswer = prompt('are you sure?')
//     secondAnswer.toLowerCase() === 'yes' ? save = false : save = true;
// }
// console.log(save)
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const today = new Date().getDay();
console.log(days[today])

let i = 0;
let count = 0;
while(i <= 100){
    count += i;
    i++
}
console.log(count)

const oddNumbers = []

for(let i = 0; i <= 100; i++){
    if(!(i % 2 == 0)){
        oddNumbers.push(i);
    }
}

console.log(oddNumbers)


const multiplicationTable = (value, maxValue) => {
    const results = []

    for(let i = 1; i <= maxValue; i++){
        const answer = value * i;
        results.push(answer)
    }

    return results
}

const results = multiplicationTable(5, 12)
console.log(results)


const getNames = () => {
    const names = ['henry', 'tobi', 'molly', 'annabel', 'rosie']
    const ages = [21,21,21,24,27]

    for(let i = 0; i < names.length; i++){
        console.log(`${names[i]} is ${ages[i]} years old`)
    }
}

getNames();
