function login(){

    if(document.getElementById("username").value == 'admin' && document.getElementById("password").value == '1234' ){
        window.location.assign("./adminview.html");
        
    }
    else if (document.getElementById("username").value == 'user' && document.getElementById("password").value == '1234' ){
        window.location.assign("./userview.html");

    } else {
        alert("Invalid Login Credentials. Please try again!");
        
    }
}