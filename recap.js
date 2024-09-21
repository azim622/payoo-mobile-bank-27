
document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutInput = document.getElementById('input-cahout-ammount').value;
    const cashOutnumber = parseFloat(cashOutInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(cashOutInput, pinNumberInput);
    if(pinNumber = '1234'){
    const accountBalance = document.getElementById('account-balance');
    innerText;

    const balanceNumber=parseFloat(accountBalance)
    const  newBalance =balanceNumber - cashOutnumber;
    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('invalid password')
    }

})