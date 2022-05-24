const answer = prompt('would you like to save?');

let save;
if(answer.toLowerCase() == 'yes'){
    save = true;
}else{
    save = false;
}
console.log(save)