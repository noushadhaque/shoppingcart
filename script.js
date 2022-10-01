// writing in function for case
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number-field');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = parseInt(productNumber) * price;
    calculateTotal();
}
// update total
function getInputValue(product){
    const productInput = document.getElementById(product + '-number-field');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 500;
    const caseTotal = getInputValue('case') * 10;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
// case add and deduct
// plus
document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateProductNumber('case', 10, true);
})
// minus
document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateProductNumber('case', 10, false);
})

// phone add and deduct
// plus
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 500, true);
})
// minus
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 500, false);
})


// writing in function for phone
// function updatePhoneNumber(isIncreasing) {
//     const phoneInput = document.getElementById('phone-number-field');
//     let phoneNumber = phoneInput.value;
//     if (isIncreasing == true) {
//         phoneNumber = parseInt(phoneNumber) + 1;
//     } else if (phoneNumber > 0) {
//         phoneNumber = parseInt(phoneNumber) - 1;
//     }
//     phoneInput.value = phoneNumber;

//     const phoneTotal = document.getElementById('phone-total');
//     phoneTotal.innerText = parseInt(phoneNumber) * 500;
// }














































