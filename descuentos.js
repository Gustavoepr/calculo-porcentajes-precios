function calcularPrecioConDescuento(precio, descuento){
    porcentajeDeDescuento = 100 - descuento;
    precioConDescuento = (precio * descuento) / 100;
    return precioConDescuento;
}

function onCLickCalculare(){
    const inputPrice = document.getElementById("InputPrice");
    const inputPriceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const inputDiscountValue = inputDiscount.value;

    const priceWhitDiscount = calcularPrecioConDescuento(inputPriceValue, inputDiscountValue);

    const resultP = document.getElementById("resultP");

    resultP.innerText = "El precio con descuento es $" + priceWhitDiscount;
}