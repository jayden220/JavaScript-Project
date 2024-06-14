let getitems = JSON.parse(localStorage.getItem('products'))
let purchased = JSON.parse(localStorage.getItem('purchased')) || []
let menu = document.querySelector('.showNav')
let close = document.querySelector('.hideNav')
let table = document.querySelector('.showBought')

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

//show products in checkout
function showProduct(){
    table.innerHTML =''
    purchased.forEach(product => {
        table.innerHTML += `
         
                <tr>
                  <td class="contents">${product.brand}</td>
                  <td class="contents">${product.id}</td>
                  <td class="contents">${product.category}</td>
                  <td class="contents">${product.price}</td>
                  <td class="contents quantity"><button class="down" id="${product.id}"><</button><span class = "pQuan">${product.quantity}</span><button class="up" data-id="${product.id}">></button></td>
                  <td class="contents"><button class= "removeBtn" value=${product.id}>remove</button></td>

                </tr>
                

        `

        })

        localStorage.setItem('purchased',JSON.stringify(purchased))
        }
        showProduct();
        console.log(purchased);
    
        
let price1 = document.querySelectorAll('car-price')
let total = document.querySelector('.total_rand')

//INCREASE AND DECREASE QUANTITY


 let quanUp = document.querySelectorAll('.up')
 let quanDown = document.querySelectorAll('.down')
 let quan = document.querySelectorAll('.pQuan')







    




// del function
let deletebtn = document.querySelectorAll('.removeBtn')

deletebtn.forEach(item => {
    item.addEventListener('click', (event)=>{
        delproduct(event.target.value)
    })
})
function delproduct(a){
    
    let index = purchased.findIndex(item => item.id == a)
    console.log(index)
    purchased.splice(index, 1)
    localStorage.setItem('purchased', JSON.stringify(purchased))
    showProduct()
}

// Event listener for remove button clicks




//empty cart function
let clear = document.querySelector('.clear-cart')

clear.addEventListener('click' , emptyCart)

function emptyCart(){
    purchased = []
    localStorage.removeItem('purchased')
    table.innerHTML = ''
    alert('ji')

}









