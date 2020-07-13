// get the element to be manipulated
const count = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
 
//console.log(btn)
let counter = 0

btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        if(e.currentTarget.classList.contains('increment') ){
            counter++
            //console.log(counter)
            count.textContent = counter
            
        }else if(e.currentTarget.classList.contains('decrement') ){
            counter--
            count.textContent = counter
           
        }else{
            counter = 0
            count.textContent = counter
        }

        if(counter > 0){
            count.style.color = "green"
        }else if(counter < 0){
            count.style.color = "red"
        }else{
            count.style.color = "black"
        }

    })

    
})

