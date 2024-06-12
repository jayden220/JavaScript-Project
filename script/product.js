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




//Search Function
let input = document.querySelector('.searchBar');
let search = document.querySelector('.searchButton');

 
function searchItems() {
    let searchText = input.value.trim().toUpperCase();
    let filteredProducts = products.filter(product => {
        return Object.values(product).some(value => {
            if (typeof value === 'string') {
                return value.toUpperCase().includes(searchText);
            }
            return false;
            
            
        });
        

        
    });

    shop.innerHTML =""

    filteredProducts.forEach(product =>{
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


    return {filteredProducts}
}

search.addEventListener('click', searchItems);

//Sort button
let sort = document.querySelector('.sortButton')
function sorting() {
    products.sort(( a, b) =>{

        let sort1 = a.brand.toUpperCase()
        let sort2 = b.brand.toUpperCase()

        if(sort1 > sort2){
            return 1
        }
        
        if(sort1 < sort2){
            return -1

        }
        })
        

        
            return 0
            
            } 
    
            

sort.addEventListener('click',sorting)



//Filter function

// git
// let categoryCheckbox = document.querySelector('sportFil')
// function filter() {
    
//     alert('l')
//     if(products.category == 'sport'){
//         return products;


//     }
//     else{
//         return
//     }
//     }
    
//     categoryCheckbox.addEventListener('change',filter)
//     categoryCheckboxes.addEventListener('change',filter)