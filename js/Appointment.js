function sendMail2(){
    document.getElementById('submitButton').innerHTML = "Schedulling appointment...";
    document.getElementById('submitButton').disabled = true;

    if(document.getElementById('fName').value == '' || document.getElementById('lName').value == '' || document.getElementById('email').value == '' || document.getElementById('mobile').value == '' || document.getElementById('date').value == '' || document.getElementById('time').value == ''){

        alert('Please complete the form before submitting');
        document.getElementById('submitButton').disabled = false;
        document.getElementById('submitButton').innerHTML = 'Submit';
        return;

    }

    var tempParams = {
        first_name: document.getElementById('fName').value,
        last_name: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
    };

    emailjs.send('service_lksnmdh', 'template_i6oeard', tempParams)
    .then(function(res){
        
        console.log('success', res.status);
        window.location.replace("./ThankYou.html");
    })
}