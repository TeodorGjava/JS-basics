function fun(input){
    let squareMeters = Number(input[0]);
    let price = (squareMeters *7.61);
    let discount = price *0.82;
    console.log(`The final price is: ${discount.toFixed(2)} lv.\nThe discount is: ${(price - discount).toFixed(2)} lv.`)
}