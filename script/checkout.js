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
                  <td class="contents quantity"><button class="down" data-id="${product.id}"><</button>${product.quantity}<button class="up" data-id="${product.id}">></button></td>
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


function upBtn(id){
    let num = purchased.find(products => products.id === +id)
    if (num ) {
        num.quantity.innerHTML += 1
     {
        
        localStorage.setItem('purchased', JSON.stringify(purchased))
    }
    showProduct()
}
}

function downBtn(id){
    let num = purchased.find(products => products.id === +id)
    if (num && num.quantity > 0) {
        num.quantity -= 1
    
    
        localStorage.setItem('purchased', JSON.stringify(purchased))
    }
    showProduct()
}


quanUp.forEach(up =>{
    up.addEventListener('click', (event)=>{
        upBtn(event.target.dataset.id)

    })
})

quanDown.forEach(down =>{
    down.addEventListener('click', (event)=>{
        downBtn(event.target.dataset.id)
    })
})



//Remove from Table

function del(){
    purchased.splice(index, 1)
    localStorage.setItem('purchased', JSON.stringify(purchased))
}

let remove = document.querySelectorAll('.remove-Btn')
remove.forEach(del =>{
    del.addEventListener('click', (event)=>{
        remove(event.target.dataset.id)
        
    })
})





//Quantity Function Up


// function CalcTotal() {
//     total.innerHTML = eval(${product.price})
//     try{
//         if(product.price ==NaN) throw "error" ;
//     }
//     catch(err){
//         total.innerText = 'error'
//     }
// } 









