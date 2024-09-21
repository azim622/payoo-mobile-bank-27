// step-1: event handlar

document.getElementById('btn-login').addEventListener('click',function(event){

    // step-2:prevent defult behavoir(prevent reloding browser)
    event.preventDefault();

    // step-3:get the phone number
    const phoneNumber = document.getElementById('phn-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)


    // step-4:validate phone and pin(this is not idal way.plese ignore it.)
    if(phoneNumber === '01618506709' && pinNumber ==='azim123@'){
        console.log('you are logIn')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or password')
    }
})