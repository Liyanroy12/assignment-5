const qutaBtn = document.getElementById('quta-btn');
qutaBtn.addEventListener('click', function(){
    const qutaInput = showInputValue('quta-input');
    const qutaBalance = showInputText('quita-balace');
    const balanceAccount = showInputBalance('account-balance');
    
    if(qutaInput > balanceAccount){
        return alert('not enough money for donation');
    }

    if(isNaN(qutaInput) || qutaInput <= 0){
        return alert('invalid donation try again')
    }

    const qutaNewBalance = qutaBalance + qutaInput;
    const qutaBalanceNew = balanceAccount - qutaInput;


    document.getElementById('account-balance').innerText = qutaBalanceNew;
    document.getElementById('quita-balace').innerText = qutaNewBalance;
    document.getElementById('quta-input').value = '';
})