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

// comment out the next 2 lines to test functions below
// console.log( `log test empty function`, empty() );
// empty();


// Stretch Goals

// add a const variable maxItems
// create function isFull.

function addItem( addtobasket ){
  const maxItems = 5;
  console.log( `Max Items set to ${maxItems}` );
  console.log( `inside addtobasket`);
  isFull();
    function isFull() {
      if ( basket.length < maxItems ) {
        console.log( `inside the if isFull function` );
        basket.push( addtobasket );
        // if an item was added to the array return true
        console.log( `True, ${addtobasket} has been added to basket` );
        return false; // return false if the basket contains less than max number of items.
      } // End If
      else {
        // if there was no room and the item could not be added return false
        console.log( `False, Basket is full ${addtobasket} has not been added to basket!!` );
        return true; // return true otherwise (equal or more than maxitems)
      } // End else
    } // End isFull
} // End addtobasket


console.log( 'log test of true addItem jersey', addItem( `jersey` ) );
// addItem( `jersey` ); commented out as not to add duplicate items
console.log( 'log test of false addItem baseball', addItem( `baseball` ) );
// addItem( `baseball` ); commented out as not to add duplicate items

// create a function called removeItem
function removeItem( item ){
  let itemExist = basket.includes( item );
  let index = basket.indexOf( item );
  console.log( `Index of ${item}`, index );
  if ( itemExist ) {
      basket.splice(index, 1)
      console.log( `Removed ${item} from Basket` );
  } // End IF
  else {
    console.log( `${item} does not exist in Basket` );
  } // End else
} // End removeItem

console.log( `log test of removeItem that exist`, removeItem( `jersey` ) );
//removeItem( `jersey` );
console.log( `log test of removeItem that DOES NOT exist`, removeItem( `soccer ball` ) );
//removeItem( `Soccer Ball` );
