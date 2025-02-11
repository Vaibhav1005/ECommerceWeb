app.controller("LoginController", function($scope){
    $scope.user = {
        "email":"vaibhav@gmail.com",
        "password":"Vaibhav1005"
    };
    $scope.users = [
        {
            "email":"alex@gmail.com",
            "password":"alex1005"
        },
        {
            "email":"swapnil@gmail.com",
            "password":"swapnil1006"
        },
        {
            "email":"nasir@gmail.com",
            "password":"nasir1007"
        },
        {
            "email":"pravin@gmail.com",
            "password":"pravin1008"
        },
        {
            "email":"onkar@gmail.com",
            "password":"onkar1009"
        },
        {
            "email":"lalit@gmail.com",
            "password":"lalit1010"
        }
    ]
    $scope.onValidate = function(){
        if($scope.user.email === "vaibhav@gmail.com" && $scope.user.password === "Vaibhav1005"){
            console.log("Welcome");
        }else{
            console.log("Invalid");
        }
    }
})