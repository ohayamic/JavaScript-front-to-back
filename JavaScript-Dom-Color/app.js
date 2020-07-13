// instantiate the colors for the page
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get the elements from the DOM
const color = document.querySelector('.color')
const btn = document.querySelector('#btn')

// add event to the button 
btn.addEventListener('click', ()=>{
    const randomNum = getRandom(3)
    color.textContent = colors[randomNum]
    color.style.color = colors[randomNum]
    document.body.style.background = colors[randomNum]
})



// define a random number
function getRandom(value){
    return Math.floor(Math.random(value) * 4)
}


