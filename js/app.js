const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function () {
    const donateInput = parseFloat(document.getElementById('donate-input').value);
    const balanceDonate = parseFloat(document.getElementById('balance-donate').innerText);
    const balanceAccount = parseFloat(document.getElementById('account-balance').innerText);

    if (donateInput > balanceAccount) {
        return alert('not enough money for donation');
    }

    if (isNaN(donateInput) || donateInput <= 0) {
        return alert('invalid donation try again')
    }
    
    const newBalance = balanceAccount - donateInput;
    const newDonateBalance = balanceDonate + donateInput;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('balance-donate').innerText = newDonateBalance.toFixed(2);
    document.getElementById('donate-input').value = '';
})


const loadedPage = document.getElementById('page-loaded');
loadedPage.addEventListener('click', function(){
    console.log('blocked added');
    window.location.href='../block.html';
})