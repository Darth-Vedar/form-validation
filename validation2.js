function checkPhone(e) {
    var KeyID = (window.event) ? event.keyCode : e.which;
    if((KeyID >= 48 && KeyID <= 57) || KeyID == 0 || KeyID == 8 || KeyID == 13 || KeyID == 32 || KeyID == 43 || KeyID == 45)    
    return true;            
    else
    return false;
}

function submiton(e) {
    // console.log("test");
    let fname = document.getElementById("fname");
    var filter = /^[a-zA-Z\s ]*$/g;
    if(fname.value == "") {
        alert("Please enter your first name.");
        document.getElementById("fnameError").innerHTML = "*Please enter your first name.";
        e.preventDefault();
        return;
    }
    else {
        if(!filter.test(fname.value)) {
            fname.value = "";
            fname.focus();
            alert("Please enter a valid first name. Use only characters.")
            document.getElementById("fnameError").innerHTML = "*Please enter a valid first name. Use only characters..";
            e.preventDefault();
            return;
        }
    }
    document.getElementById("fnameError").innerHTML = "";

    let lname = document.getElementById("lname");
    var filter = /^[a-zA-Z\s ]*$/g;
    if(lname.value == "") {
        alert("Please enter your last name.");
        document.getElementById("lnameError").innerHTML = "*Please enter your last name.";
        e.preventDefault();
        return;
    }
    else {
        if(!filter.test(lname.value)) {
            lname.value = "";
            lname.focus();
            alert("Please enter a valid last name. Use only characters.");
            document.getElementById("lnameError").innerHTML = "*Please enter a valid last name. Use only characters.";
            e.preventDefault();
            return;
        }
    }
    document.getElementById("lnameError").innerHTML = "";

    let mobielNo = document.getElementById("mobielNo");
    var filter2 = /^[0-9\s ]*$/g;
    if(mobielNo.value == "") {
        alert("Please enter your mobile number.");
        document.getElementById("mobileNoError").innerHTML = "*Please enter your mobile number.";
        e.preventDefault();
        return;
    }
    else {
        if(!filter2.test(mobielNo.value) || mobielNo.value.length != 10) {
            mobielNo.value = "";
            mobielNo.focus();
            alert("Please enter a valid 10 digit mobile number.");
            document.getElementById("mobileNoError").innerHTML = "*Please enter a valid 10 digit mobile number.";
            e.preventDefault();
            return;
        }
    }
    document.getElementById("mobileNoError").innerHTML = "";

    let gender = document.querySelector('input[name="gender"]:checked');
    if(gender == "") {
        alert("Please select your gender.");
        gender.focus();
        document.getElementById("genderError").innerHTML = "*Please select your gender.";
        e.preventDefault();
        return;
    }
    document.getElementById("genderError").innerHTML = "";

    let country = document.getElementById('country');
    if(country.value == "") {
        alert("Please select country.");
        country.focus();
        document.getElementById("countryError").innerHTML = "*Please select country.";
        e.preventDefault();
        return;
    }
    document.getElementById("countryError").innerHTML = "";

    let address = document.getElementById("address");
    var regex = /(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/;
    var regex2 = /[a-z0-9]+\.(com|in|en|net|org|co|edu|us|me|es|cc)/;
    if(address.value == "") {
        alert("Please enter your address.");
        address.focus();
        document.getElementById("addressError").innerHTML = "*Please enter your address.";
        e.preventDefault();
        return;
    }
    else {
        if(regex.test(address.value) || regex2.test(address.value)) {
            address.value = "";
            address.focus();
            alert("Please enter a valid address.");
            document.getElementById("addressError").innerHTML = "*Please enter a valid address.";
            e.preventDefault();
            return;
        }
    }
    document.getElementById("addressError").innerHTML = "";

    let message = document.getElementById("message");
    if(message.value == "") {
        alert("Please enter your message.");
        message.focus();
        document.getElementById("messageError").innerHTML = "*Please enter your message.";
        e.preventDefault();
        return;
    }
    else {
        if(regex.test(message.value) || regex2.test(message.value)) {
            message.value = "";
            message.focus();
            alert("Please enter a valid message.");
            document.getElementById("messageError").innerHTML = "*Please enter a valid message.";
            e.preventDefault();
            return;
        }
    }
    document.getElementById("messageError").innerHTML = "";
}