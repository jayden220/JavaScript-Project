let menu = document.querySelector('.showNav')
let close = document.querySelector('.hideNav')

//show side bar on click
menu.addEventListener('click', showBar)
function showBar() {
    const phoneNav = document.querySelector('.phoneNav')
    phoneNav.style.display = 'flex'
    
}


//close side bar on click 
close.addEventListener('click', hideBar)
function hideBar() {
    const phoneNav = document.querySelector('.phoneNav')
    phoneNav.style.display = 'none'
}