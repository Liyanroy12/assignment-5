const faniBtn = document.getElementById('fani-btn-donated');
faniBtn.addEventListener('click', function () {
    const faniInput = showInputValue('fani-donate-input');
    const faniBalanceDonated = showInputText('fani-balance');
    const balanceAccount = showInputBalance('account-balance');
    
    if(faniInput > balanceAccount){
        return alert('not enough money for donation');
    }
    if(isNaN(faniInput) || faniInput <= 0){
        return alert('invalid donation try again');
    }
    const newFaniBalnce = balanceAccount - faniInput;
    const balanceFaniNew = faniBalanceDonated + faniInput;
    document.getElementById('fani-balance').innerText = balanceFaniNew.toFixed(2);
    document.getElementById('account-balance').innerText = newFaniBalnce.toFixed(2)
    document.getElementById('fani-donate-input').value = '';
})

