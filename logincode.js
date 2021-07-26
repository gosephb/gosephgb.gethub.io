function checkCreds(){
    console.log("checkCreds() function started");
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var badgenumb = document.getElementById("badgeID").value;
    var fullName = firstname + " " + lastname;
    
   console.log("Full name is: " + fullName, + ", and the Badge ID is: "+ badgenumb);

   if(fullName.length > 20 || fullName.length < 2) {
    document.getElementById("loginStatus").innerHTML = "Invalid Full name! Please try again"
}else if (badgenumb > 999 || badgenumb < -999){
    document.getElementById("loginStatus").innerHTML = "Invalid badge number, please re enter"
} else {
    alert("Access granted, welcome "+ fullName);
    location.replace("UATSpacePage.html");
}
}