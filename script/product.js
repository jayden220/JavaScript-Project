let shop = document.querySelector('.product-container')


function makeProduct(id,brand,category,photo,description,quantity,price) {
    this.id = id
    this.brand = brand
    this.category = category
    this.photo = photo
    this.description = description
    this.quantity = quantity
    this.price = price
}

let product1 = new makeProduct(1,'Ferrari 458','luxury','/HostedImages/product1.jpg','fast','1',2000000)
let product2 = new makeProduct(2,'Bugati','luxury','/HostedImages/product2.jpg','fast','1',2000000)
let product3 = new makeProduct(3,'Amg','sports','/HostedImages/product3.jpg','fast','1',2000000)
let product4 = new makeProduct(4,'Lambo','luxury','/HostedImages/product4.jpg','fast','1',2000000)
let product5 = new makeProduct(5,'Lfa','sports','/HostedImages/product5.jpg','fast','1',2000000)
let product6 = new makeProduct(6,'Supra','sports','/HostedImages/product6.jpg','fast','1',2000000)

let products = [product1,product2,product3,product4,product5,product6]
localStorage.setItem('products',JSON.stringify(products))


let bought =[]

products.forEach(product =>{
    shop.innerHTML += `



    <div class="product-container">
                <div class="product-grid-1">
                    <div class="product">
                        <img class="product-image" src="${product.photo}" alt="">
                        <h5 class="product-name">${product.brand}</h5>
                        <p class="product-cat">${product.category}</p>
                        <p class="product-price">R${product.price}</p>
                        <button class ="product-buy">buy</button><button class="product-info">more</button>
                    </div>
                    </div>
    </div>
    `
})



let input = document.querySelector('.searchInput');
let search = document.querySelector('.searchButton');

 
function searchItems() {
    let searchText = input.value.toUpperCase().trim();
    let filteredProducts = products.filter(product => {
        return Object.values(product).some(value => {
            if (typeof value === '') {
                return value.toUpperCase().includes(searchText);
            }
            return false;
        });
    });


    console.log(filteredProducts);
}

search.addEventListener('click', searchItems);


// let input = document.querySelector('.searchInput')
// let search = document.querySelector('.searchButton')

// function searchItems(){
//     let searchText = input.value.toUpperCase().trim()
//     let filterProducts = products.filter(found =>{
//         return Object.values(found).some(value => typeof value)
//     })
// }

// input.addEventListener('', searchItems)
// search.addEventListener('click', searchItems)