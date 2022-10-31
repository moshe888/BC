 

// var cartItemContainer = document.querySelector('.cart-items')
// var cartRows = cartItemContainer.querySelectorAll('.cart-row')
// console.log(cartRows)
// var cartRow = cartRows[0]
// console.log(cartRow)

// var priceElement = cartRow.querySelector('.cart-price')
// var price = parseFloat(priceElement.innerText.replace('$', ''))

// console.log(priceElement)
// console.log(price)


document.addEventListener('')




function ready() {
 

    var addToCartButtons = document.querySelectorAll('.shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.querySelector('.btn-purchase').addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.querySelector('.cart-items')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.querySelector('.shop-item-title').innerText
    var price = shopItem.querySelector('.shop-item-price').innerText
    var imageSrc = shopItem.querySelector('.shop-item-image').src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.querySelector('.cart-items')
    var cartItemNames = cartItems.querySelectorAll('.cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <div class="cart-item-title">
            <span>${title}</span>
        </div>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="  btn-remove  btn btn-sm" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelector('.btn-remove').addEventListener('click', removeCartItem)
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.querySelector('.cart-items')
    var cartRows = cartItemContainer.querySelectorAll('.cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.querySelector('.cart-price')
        var quantityElement = cartRow.querySelector('.cart-quantity-input')
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.querySelector('.cart-total-price').innerText = '$' + total
}