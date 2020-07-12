// let firstLi = document.querySelectorAll('li')
// let btn = document.querySelector('button')

// let firstUl = document.querySelector('ul')
// console.log(firstUl.childElementCount)

// btn.addEventListener('click', function(){
//     for(let i = 0; i<firstLi.length; i++){
//         let innerBtn = document.createElement('button')
//         innerBtn.textContent = "Remove"
//         firstLi[i].appendChild(innerBtn)     

//         if(firstUl.childElementCount>= 3){
//             firstUl.style.color = "blue"
//         }else{
            
//             firstUl.style.color = "red"
//         }
        
//         innerBtn.addEventListener('mouseover', ()=>{
//             firstLi[i].remove()
//         })

        
//     }
    
// })

// btn.removeEventListener('click', function(){
//     btn.style.display = "none"
// })

// get the elements
let show = document.querySelector('#show')
let hide = document.querySelector('#hide')
let add = document.querySelector('#add')
let getElement = document.querySelector('ul')


//Adding style using javaScript style property

// show.addEventListener('click', ()=>{
//     getElement.style.display = "block"
//     getElement.style.color = "blue"
//     getElement.style.fontSize="20px"
// })

// hide.addEventListener('click', ()=>{
//     getElement.style.display = "none"
// })

// Adding style using javaScript classList property and css class

show.addEventListener('click', ()=>{
    getElement.classList.add('ulStyle')
})

hide.addEventListener('click', ()=>{
    getElement.classList.remove('ulStyle')
})




add.addEventListener('click', ()=>{
    // Create elements
    let li = document.createElement('li')
    li.style.color = 'red'

    // get the input from the text input box and add it to the li element
    let text = document.querySelector('#text').value
    let getFirst = text[0] ? text[0].toUpperCase() : null//get the first xter and uppercase it
    let otherText = text.substring(1, text.length) // get other Xters
    let newText = getFirst + otherText  // merge the two Xters together
    li.textContent = `Item ${newText}`

    // if the value is zero then add nothing else add input value
    if(text){
        getElement.append(li)
    }
    
    document.querySelector('#text').value = ""
})
