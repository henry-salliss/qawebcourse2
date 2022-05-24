const div = document.getElementById('divNames')

// lab 2

// const answer = prompt('would you like to save?');

// let save;
// if(answer.toLowerCase() === 'yes'){
//     save = true;
// }else{
//     const secondAnswer = prompt('are you sure?')
//     secondAnswer.toLowerCase() === 'yes' ? save = false : save = true;
// }
// console.log(save)

// lab 3

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

// lab 4

const multiplicationTable = (value, maxValue) => {
    const results = []

    for(let i = 1; i <= maxValue; i++){
        const answer = value * i;
        results.push(answer)
    }

    return results
}

const results = multiplicationTable(3, 12)
console.log(results)
results.map(result => {
    const item = document.createElement('td')
    item.innerHTML = result;
    div.appendChild(item)
    const br = document.createElement('br')
    div.appendChild(br)
})

console.log(div)

// lab 4 and 5

// const getNames = () => {
//     const names = ['henry', 'tobi', 'molly', 'annabel', 'rosie']
//     const ages = [21,21,21,24,27]
//     let result = ''
//     for(let i = 0; i < names.length; i++){
//         result += `${names[i]} `;
        
//         div.innerHTML = names;
//     }

//     return result;
// }

// const names = getNames();




const bigNumbers = () => {
    const numbers = document.querySelectorAll('td')
    // numbers.map(number => console.log(number))
    numbers.forEach(number => {
        if(+(number.innerText > 10))
        number.classList.add('bigNumber')
    })
}

bigNumbers();