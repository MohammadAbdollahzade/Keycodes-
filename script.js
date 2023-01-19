let $ = document

let firstContent = $.querySelector('.first-content')
let mainContent = $.querySelector('.main-content')
let key = $.querySelector('.key')
let which = $.querySelector('.key-which')
let locationKey = $.querySelector('.location')
let whichOut = $.querySelector('.which')
let code = $.querySelector('.code')



$.body.addEventListener('keydown',(event)=>{

    firstContent.style.display = 'none'
    mainContent.style.display = 'block'
    console.log(event)
    key.innerHTML = event.key
    which.innerHTML = event.which
    locationKey.innerHTML = event.location
    whichOut.innerHTML = event.which
    code.innerHTML = event.code
})
