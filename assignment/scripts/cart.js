console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket
let basket = [];

console.log( `The array basket`, basket);

// Create a function called addItem
function addItem( addtobasket ){
  console.log( `inside addtobasket`);
  basket.push( addtobasket );
  return true;
} //end addToBasket

// Add items to array testing
addItem( `Socks` );
addItem( `Shoes` );
addItem( `Football` );
addItem( `Jersey` );

console.log( `log function test Helmet`, addItem( `Helmet` ) );


// Create a function called listItems

function listItems() {
  for ( let eachItem of basket ) {
    console.log( `Item's in the basket are ${eachItem}` );
  } // End of for of loop
  return `All items logged`;
} // End of listItems

console.log( `log test listItemss`, listItems() );
// listItems(); commentted out as to not add items again

// Create a function called empty
listItems();

function empty() {
  while (basket.length > 0) {
    console.log( `Items remaining in basket`, basket );
    basket.pop(basket);
  }
  return 'Removed all items';
}

console.log( `log test empty function`, empty() );
empty();
