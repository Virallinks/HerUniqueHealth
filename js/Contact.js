function sendMail(){

    document.getElementById('submitButton').innerHTML = 'Sending...';
    document.getElementById('submitButton').disabled = true;
    

    if(document.getElementById('fromName').value == '' || document.getElementById('fromEmail').value == '' || document.getElementById('mobile').value == '' || document.getElementById('message').value == '' ){

        alert('Please complete the form before submitting');
        document.getElementById('submitButton').disabled = false;
        document.getElementById('submitButton').innerHTML = 'Send Message';
        return;

    }

    var tempParams = {
        from_name: document.getElementById('fromName').value,
        to_name: document.getElementById('FromEmail').value,
        mobile: document.getElementById('mobile').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_lksnmdh', 'template_bm275bo', tempParams)
    .then(function(res){
        
        console.log('success', res.status);
        window.location.replace("./ThankYou.html");
    })

}