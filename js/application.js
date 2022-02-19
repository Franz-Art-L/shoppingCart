// update subtotal
var updateSubTotal = function(element) {
    let itemPrice = parseFloat($(element).find('.price input').val());
    let quantity = parseFloat($(element).find('.quantity input').val());

    let subTotalVal = itemPrice * quantity;
    $(element).children('.subTotal').html(subTotalVal);
    
    return subTotalVal || 0;
}

var sum = (a, b) => { return a + b; };

var updateTotalPrice = function() {
    var subTotalValues = [];

    $('tbody tr').each(function(index, element) {
        var subTotalValLocal = updateSubTotal(element);
        subTotalValues.push(subTotalValLocal);
    });

    var totalPriceToBeAdded = subTotalValues.reduce(sum);
    $('#totalPrice').html(totalPriceToBeAdded);
}

$(document).ready(function() {
    updateTotalPrice();

    $(document).on('click', '.btn.remove', function(event) {
        $(this).closest('tr').remove();
        updateTotalPrice();
    });

    var timeout;
    $(document).on('input', 'tr input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            updateTotalPrice();
        }, 1000);
    });

    $('#newItem').on('submit', function(event) {
        event.preventDefault();
        var name = $(this).children('[name=name]').val();
        var price = $(this).children('[name=price]').val();
        var subTotal = $(this).children('[name=subTotal]').val();
        var quantity = $(this).children('[name=quantity]').val();

        $('tbody').append('<tr>' + '<td class="name">' + name + '</td>' +
        '<td class="price"><input type="number" value="' + price + '" /></td>' +
        '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
        '<td class="subTotal"></td>' +
        '<td></td>' +
        '<td><button class="btn btn-warning btn-sm remove">remove</button></td>' + '<tr>');

        updateTotalPrice();

        
        $(this).children('[name=name]').val('');
        $(this).children('[name=price]').val('');
        $(this).children('[name=quantity]').val('');
        
    });
});