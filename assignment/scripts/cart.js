console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket
let basket = [];

console.log( `The array basket`, basket);

function addToBasket( addItem ){
  console.log( `inside addItem`);
  basket.push( addItem );
  return true;
} //end addToBasket

addToBasket( `Socks` );
addToBasket( `Shoes` );
addToBasket( `Football` );
addToBasket( `Jersey` );

console.log( `log test addToBasket Socks`, addToBasket( `Socks` ) );
console.log( `log test addToBasket Shoes`, addToBasket( `Shoes` ) );
console.log( `log test addToBasket Football`, addToBasket( `Football` ) );
console.log( `log test addToBasket Jersey`, addToBasket( `Jersey` ) );
