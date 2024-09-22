const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click', function(){
    const donateInput = parseFloat(document.getElementById('donate-input').value);
    const balanceDonate = parseFloat(document.getElementById('balance-donate').innerText);
    // console.log(donateInput)
    const balanceAccount = parseFloat(document.getElementById('account-balance').innerText);

    const newBalance = balanceAccount - donateInput;
    const newDonateBalance = balanceDonate + donateInput;
    document.getElementById('account-balance').innerText = newBalance.toFixed(2);
    document.getElementById('balance-donate').innerText = newDonateBalance.toFixed(2);
    document.getElementById('donate-input').value = '';
})