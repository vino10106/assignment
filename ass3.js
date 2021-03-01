function validateform() {
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;

    var error_message = document.getElementById("error_message");

    error_message.style.padding = "20px";

    var text;
    if (fname.length < 5 && lname.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }

    var phone1 = document.getElementById("first").value;
    var phone1 = document.getElementById("second").value;
    var phone1 = document.getElementById("third").valuue;

    if (phone1.length != 3 && phone2.length != 3 && phone3.length != 4) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    var email = document.getElementById("email").value;

    var text;
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    var message = document.getElementById("message").value;

    error_message.style.padding = "10px";
    if (message.length <= 50) {
        text = "Please Enter More Than 50 Characters";
        error_message.innerHTML = text;
        return false;
    }
    var zipcode = document.getElementById("zipcode").value;

    error_message.style.padding = "10px";
    if (zipcode.lenght<6 ) {
        text = "Not valid code";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!");
    return false;
    
    }
    