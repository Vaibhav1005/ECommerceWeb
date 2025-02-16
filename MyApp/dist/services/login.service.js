var LoginService = /** @class */ (function () {
    function LoginService($http, $location) {
        this.$http = $http;
        this.$location = $location;
    }
    LoginService.prototype.getAppUsers = function () {
        return this.$http.get("./login-users.data.json")
            .then(function (response) { return response.data; });
    };
    LoginService.$inject = ['$http', '$location'];
    return LoginService;
}());
