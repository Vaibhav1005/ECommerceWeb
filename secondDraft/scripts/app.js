$(document).ready(() =>{
    $("#btnLogin").click(() => {
        let email = $("#email").val();
        let password = $("#password").val();
        if(validate(email, password)){
            $("#message").html("Welcome");
        }else{
            $("#message").html("Invalid login");
        }
    })
})

function authenticate(email, password){
    
}