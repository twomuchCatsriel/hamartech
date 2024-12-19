// variables 
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const regBut = document.getElementById("regBut");
const nameplaceholder = document.getElementById("nameplaceholder");
const error = document.getElementById("error");

const unregisteredSect = document.getElementById("main");
const registeredSect = document.getElementById("registered");

// functions
document.body.onload = function(){ //reset textbixes on load 
    if(localStorage.getItem("nm") !== null){
        unregisteredSect.style.display = "none";
        nameplaceholder.innerHTML = localStorage.getItem("nm"); 
        registeredSect.style.display = "inline";
    }

    nameField.value = "";
    emailField.value = "";
}

function validEmailPassed(){    
    localStorage.setItem("nm", nameField.value);
    localStorage.setItem("em", emailField.value);

    unregisteredSect.style.display = "none";
    nameplaceholder.innerHTML = localStorage.getItem("nm"); // oh shit
    registeredSect.style.display = "inline";

    error.style.display = "none";
}

function invalidEmail(){
    error.style.display = "inline";
}

regBut.onclick = function(){ // saves the data in the textboxes to LocalStorage (Not a real database)
    if(nameField.value !== "" && emailField.value !== ""){
        let nameV = nameField.value;
        let emailV = emailField.value;

        if(emailV.indexOf("@") !== -1){
            console.log(emailV.indexOf("@"))
            let emailAt = emailV.substring(emailV.indexOf("@"), emailV.length)

            if(emailAt === "@gmail.com"){
                validEmailPassed();
            }
            else if(emailAt === "@hotmail.com"){
                validEmailPassed();
            } 
            else if(emailAt === "@outlook.com"){
                validEmailPassed();
            }
            else if(emailAt === "@imkatta.no"){
                validEmailPassed();
            }
            
            else{
                invalidEmail();
            }
        }
        else 
        {
            invalidEmail();
        }
    }
}

function forceReset(){ // Console only commands, removes nm og em and v (quiz)
    localStorage.removeItem("nm");
    localStorage.removeItem("em");
    localStorage.removeItem("v");

    console.log("reset successful");
}