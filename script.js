let cartItemTextInput = document.getElementById('cartItemTextInput');
let cartItemsContainer = document.getElementById('cartItemsContainer');

function onAddCartItem(){
    let inputValue = cartItemTextInput.value;
    let Items = document.createElement("li");
    Items.textContent = inputValue ;
    cartItemTextInput.value = "";
    cartItemsContainer.appendChild(Items);
}
