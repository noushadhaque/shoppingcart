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














































