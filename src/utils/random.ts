
function getNumberRandom(max:number,min:number):number{
    return Math.floor(Math.random() * (max  - min)) + 1
}

export default getNumberRandom