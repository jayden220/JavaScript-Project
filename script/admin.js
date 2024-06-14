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
    alert('hi')
    const phoneNav = document.querySelector('.phoneNav')
    phoneNav.style.display = 'none'
}

let name  = document.querySelector('.brand')
let lot  = document.querySelector('.lot')
let cat  = document.querySelector('.cat')
let price  = document.querySelector('.price')
let desc  = document.querySelector('.desc')




function AddProduct(id,brand,category,photo,description,quantity,price) {
    this.id = id
    this.brand = brand
    this.category = category
    this.photo = photo
    this.description = description
    this.quantity = quantity
    this.price = price
}




// localStorage.setItem('added', JSON.stringify(added))
let added = JSON.parse(localStorage.getItem('products'))
console.log(added)
let newproducts = document.querySelector('.admin-product')

function displayInfo() {
    added.forEach(product =>{
        newproducts.innerHTML += ` 
    
        <tbody class="admin-product">
                <tr>
                <td class="contents">${product.id}</td>
                <td class="contents">${product.brand}</td>
                <td class="contents">${product.category}</td>
                <td class="contents">${product.description}</td>
                <td class="contents">${product.price}</td>
                <button class="remove" >remove</button>
                </tr>
        </tbody>
        `
    })
    addProduct()
}

displayInfo()

let save = document.querySelector("#save-changes")

save.addEventListener('click', addProduct)

function addProduct(){
    alert('hi')
    products.push(AddProduct())
    displayInfo()
}

let input = document.querySelectorAll('input')

input.addEventListener('input', )

let remove = document.querySelectorAll('.remove')
