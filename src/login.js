const rohan = document.querySelector("#pubali");
pubali.addEventListener("submit", function(e)
{
  var x=document.querySelector(".mail").value; 
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf("."); 
  var firstpassword=document.querySelector(".firstpassword");
  var secondpassword=document.querySelector(".secondpassword");
  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
  {
    var newTextEmail = document.createElement("p");
    newTextEmail.innerText = "Please enter a valid email";
    var error1 = document.querySelector(".error-msg1");
    error1.appendChild(newTextEmail);
    e.preventDefault();
  }
   else if (firstpassword.value == "") 
  {
    var password1 = document.createElement("p");
    password1.innerText = "Please enter a valid password";
    var error2 = document.querySelector(".error-msg2");
    error2.appendChild(password1);
    e.preventDefault();
  } 
  else if (secondpassword.value == "") 
  {
    var password2 = document.createElement("p");
    password2.innerText = "Please confirm password";
    var error3 = document.querySelector(".error-msg3");
    error3.appendChild(password2);
    e.preventDefault();
  } 
  else if (secondpassword.value !== firstpassword.value)
  {
    var errorText = document.createElement("p");
    errorText.innerText = "Passwords dont match";
    var error4 = document.querySelector(".error-msg3");
    error4.appendChild(errorText);
    e.preventDefault();
  }  
  
})

