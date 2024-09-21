// step-1 : added handlar
document.getElementById('btn-add-money').
addEventListener('click', function(event){
    event.preventDefault();

    // step-2:get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step-3: get the pin number provided 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)

    // verify pin number
    if(pinNumberInput ==='1234'){
        console.log('adding money to your ammount')
   
    //step-4: get the current balance
    const accountBalance = document.getElementById('account-balance').innerText;
    console.log(accountBalance)

    // step-5:add addMoney input with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber =parseFloat(accountBalance);
    const newbalance =addMoneyNumber + balanceNumber;
    console.log(newbalance);

    // update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newbalance;
    }

    else{
        alert('failed to added')
    }
})
