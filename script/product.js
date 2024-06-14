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

let product1 = new makeProduct(1,'Ferrari 458','luxury','/HostedImages/product1.jpg','The Ferrari 458 Italia (Type F142) is an Italian mid-engine sports car produced by Ferrari. The 458 is the successor of the F430, and was first officially unveiled at the 2009 Frankfurt Motor Show.It was succeeded by the 488 GTB (Gran Turismo Berlinetta) in 2015.','1',7999990)
let product2 = new makeProduct(2,'Golf 8 GTI','luxury','/HostedImages/product2.jpg','The Golf 8 GTI is a hot hatchback version that is powered by a 2.0-litre turbocharged direct-injection petrol engine (TSI) producing 245 PS (180 kW; 241 hp) and 370 N⋅m (273 lbf⋅ft). The bodywork is nearly identical to the GTE, however the GTI is equipped with different wheels, badges, and red grille accents. The rear bumper has dual exit exhausts. Vehicle Dynamics Manager allows for more adjustability of the adaptive suspension dampers, while an Individual setting joins the other driving modes. The suspension is lowered by 15 mm (0.6 in). Inside, plaid upholstery is standard, with additional red accents on the seats and steering wheel. 17-inch wheels are standard in Europe, with optional 18-inch and 19-inch wheels','1',2000000)
let product3 = new makeProduct(3,'Porsche 918 Spyder','sports','/HostedImages/product3.jpg','','1',861597450)
let product4 = new makeProduct(4,'Lambo','luxury','/HostedImages/product4.jpg','fast','1',500)
let product5 = new makeProduct(5,'Lfa','sports','/HostedImages/product5.jpg','fast','1',500)
let product6 = new makeProduct(6,'Supra','sports','/HostedImages/product6.jpg','fast','1',600)

let products = [product1,product2,product3,product4,product5,product6]
localStorage.setItem('products',JSON.stringify(products))
let checkoutItems = JSON.parse(localStorage.getItem('purchased'))
console.log(checkoutItems);


let bought = checkoutItems || []

products.forEach(product =>{
    shop.innerHTML += ` 
    <div class="product-container">
                <div class="product-grid-1">
                    <div class="product">
                        <img class="product-image" src="${product.photo}" alt="">
                        <h5 class="product-name">${product.brand}</h5>
                        <p class="product-cat">${product.category}</p>
                        <p class="product-price">R${product.price}</p>
                        <button class ="product-buy" value="${product.id}">buy</button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${product.id}">More</button>
                        <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${product.brand}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                 <img class="info-image" src="${product.photo}" alt="" width="100px">
                                <p>${product.description}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    </div>
    `
})

//Add to Cart Button Functionality

let addButtons = document.querySelectorAll('.product-buy')
function addToCart(id){
    let index = bought.findIndex(object=> object.id== id)
    if(index == -1){
        console.log('IF MET');
        bought.push({
           ...products.find(item => item.id == id),
           quantity : 1
        })
    } else{
        bought[index].quantity ++
    }
        console.log(bought)
        localStorage.setItem('purchased', JSON.stringify(bought))
}


addButtons.forEach(btn =>{
    btn.addEventListener('click',(event)=>{
        addToCart(event.target.value);
    })
})





//More Info
let infoButtons = document.querySelectorAll('.product-info')
infoButtons.forEach(btn =>{
    btn.addEventListener('click',()=>{
    
    })
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

input.addEventListener('input', searchItems);





