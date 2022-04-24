function fun(input){
    let squareMeters = Number(input[0]);
    let price = (squareMeters *7.61);
    let discount = price *0.18;
    let priceWithDiscount = price-discount;
    console.log(`The final price is: ${priceWithDiscount.toFixed(2)} lv.\nThe discount is: ${ discount.toFixed(2)} lv.`)
}