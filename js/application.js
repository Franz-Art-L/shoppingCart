var updateItemSubTotal = element => {
    var itemPrice = parseFloat($(element).find('.item-price item-name').val());
    
    var itemQuantity = parseFloat($(element).find('.item-qty').val());

   return console.log(itemPrice);
}