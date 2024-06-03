const wrapper = document.querySelector(".sliderWrapper");
const sliderDescription = document.querySelector(".sliderDescription");
const products = [
    {
        id: 1,
        title: "Iphone 15 PRO MAX",
        price: 1500,
        description: "The new Iphone 15 PRO MAX is here, order now!!",
        colors: [
            {
                code: "black",
                img: "./img/i15pmb.png",
            },
            {
                code: "white",
                img: "./img/i15pmw.png",
            },
        ]
    },
    {
        id: 2,
        title: "Xiaomi 13",
        price: 900,
        description: "",
        colors: [
            {
                code: "black",
                img: "./img/x13b.png",
            },
            {
                code: "white",
                img: "./img/x13w.png",
            },
        ]
    },
    {
        id: 3,
        title: "S24 ULTRA",
        price: 1000,
        description: "The newest model of Samsung!!",
        colors: [
            {
                code: "black",
                img: "./img/s24ub.png",
            },
            {
                code: "violet",
                img: "./img/s24uv.png",
            },
        ]
    }
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = "translateX(" + (-100 * index) + "vw)";

        choosenProduct = products[index];

 
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductDescription.textContent = choosenProduct.description;

       
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

        sliderDescription.textContent = choosenProduct.description;
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const addToCartButton = document.querySelector(".ProductButton");
const cartItemCount = document.getElementById("count");
const cartTotal = document.getElementById("total");
const cartItemContainer = document.getElementById("cartItem");
const increaseQuantityButton = document.getElementById("increaseQuantity");
const decreaseQuantityButton = document.getElementById("decreaseQuantity");

let cart = [];
let total = 0;

addToCartButton.addEventListener("click", () => {

    const cartItem = {
        id: choosenProduct.id,
        title: choosenProduct.title,
        price: choosenProduct.price,
        image: choosenProduct.colors[0].img,
        quantity: 1
    };


    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
        
        cart[existingItemIndex].quantity++;
    } else {
        
        cart.push(cartItem);
    }

    
    updateCartUI();

    
    calculateTotal();
});


function updateCartUI() {
    cartItemCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemContainer.innerHTML = "";
    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cartItem");
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cartItemImage">
            <div class="cartItemDetails">
                <h3 class="cartItemTitle">${item.title}</h3>
                <p class="cartItemPrice">$${item.price} x ${item.quantity}</p>
                <button id="increaseQuantity" class="quantityButton">+</button>
                <button id="decreaseQuantity" class="quantityButton">-</button>
            </div>
        `;
        cartItemContainer.appendChild(cartItemElement);
    });
}


function calculateTotal() {
    total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotal.textContent = "$" + total.toFixed(2);
}


cartItemContainer.addEventListener("click", event => {
    if (event.target.id === "increaseQuantity") {
        const index = getIndexFromEvent(event);
        cart[index].quantity++;
        updateCartUI();
        calculateTotal();
    }
});


cartItemContainer.addEventListener("click", event => {
    if (event.target.id === "decreaseQuantity") {
        const index = getIndexFromEvent(event);
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            
            cart.splice(index, 1);
        }
        updateCartUI();
        calculateTotal();
    }
});



function getIndexFromEvent(event) {
    const cartItemElement = event.target.closest(".cartItem");
    return Array.from(cartItemContainer.children).indexOf(cartItemElement);
}

const checkoutButton = document.querySelector(".checkoutButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

checkoutButton.addEventListener("click" , ()=>{ if (cart.length === 0) {
    alert("Your cart is empty. Please add some items before proceeding to checkout.");
} else {
    payment.style.display="flex"}
})

close.addEventListener("click" , ()=>{
    payment.style.display="none"
})

const payButton = document.querySelector(".payButton");
const clearCartButton = document.querySelector(".clearCartButton"); 

payButton.addEventListener("click", () => {
    const inputs = document.querySelectorAll('.payInput');
    const hasEmptyField = Array.from(inputs).some(input => !input.value.trim());

    if (hasEmptyField) {
        alert("Please insert all the requierd data to proceed.");
    } else if (cart.length === 0) {
        alert("Your cart is empty. Please add some items before proceeding to checkout.");
    } else {
        payment.style.display = "none";
        cart = []; 
        updateCartUI(); 
        calculateTotal(); 

        setTimeout(() => {
            alert("Thank you for your purchase!");
        }, 2000);
    }
});



