/*
Name: Alexis Brum
Date Created:2018-10-02
Most recent revision: 
*/


function verifyForm(){

  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var phone = document.forms["contact"]["phone"].value;

  if( !name || !email || !phone){
    alert("Please input a name, email, and phone number.");
  } else{

    document.getElementById("message").style.display = "block";
    document.getElementById("submitMessage").innerText = "Thank you! We will be in touch soon.";
  }

  return false;
}
