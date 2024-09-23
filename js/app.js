const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function () {

    const donateInput = showInputValue('donate-input');
    const balanceDonate = showInputText('balance-donate');
    const balanceAccount = showInputBalance('account-balance');

    console.log(donateInput);
    if (donateInput > balanceAccount) {
        alert('not enough money for donation');
        return;
    }



    if (isNaN(donateInput) || donateInput <= 0) {
        alert('invalid donation try again');
        return;
    }

    const newBalance = balanceAccount - donateInput;
    const newDonateBalance = balanceDonate + donateInput;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('balance-donate').innerText = newDonateBalance.toFixed(2);
    document.getElementById('donate-input').value = '';
})


// fani donated 



const loadedPage = document.getElementById('page-loaded');
loadedPage.addEventListener('click', function () {
    console.log('blocked added');
    window.location.href = './block.html';
})