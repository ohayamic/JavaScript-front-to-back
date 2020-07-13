// initialise the hex values 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// get element from DOM
const color = document.querySelector('.color')
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    let newHex = ""
    for(let i=0; i < 6; i++){
        const getRandom = randomNum(hex.length)
        newHex += hex[getRandom]
    }

    // assign desired value to elements
    color.style.color = `#${newHex}`
    color.textContent = `#${newHex}`
    document.body.style.background = `#${newHex}`
})

function randomNum(value){
    return Math.floor(Math.random(value) * 12)
}
