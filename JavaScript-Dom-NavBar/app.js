// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const Links = document.querySelector('.links')
//const navHeader = document.querySelector('')

navToggle.addEventListener('click', ()=>{
    
    // One can use the normal programming if-else

    // console.log(Links.classList)
    // if(Links.classList.contains('show-links')){
    //     Links.classList.remove('show-links')
    // }else{
    //     Links.classList.add('show-links')

    // }

    // Or just use the normal toggle function from javascript
    Links.classList.toggle('show-links')
})