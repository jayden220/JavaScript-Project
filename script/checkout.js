let getitems = JSON.parse(localStorage.getItem('products'))
let purchased = JSON.parse(localStorage.getItem('bought')) || []
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
    purchased.forEach(product => {
        table.innerHTML += `
         
                <tr>
                  <td class="contents">${product.brand}</td>
                  <td class="contents">${product.id}</td>
                  <td class="contents">${product.category}</td>
                  <td class="contents">${product.price}</td>
                  <td class="contents quantity"><button class="down" data-id="${product.id}"><</button><span class = "pQuan">1</span><button class="up" data-id="${product.id}">></button></td>
                  <td class="contents"><button class= "removeBtn">remove</button></td>

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



    




//del function
let deletebtn = document.querySelectorAll('.removeBtn')
function delproduct(a){
    purchased.splice(a, 1)
}

//empty cart function
let clear = document.querySelector('.clear-cart')


function emptyCart(){
    bought = [] || JSON.parse(localStorage.getItem('bought'))
    localStorage.setItem('bought', JSON.stringify(bought))
    }

clear.addEventListener('click' , emptyCart)









