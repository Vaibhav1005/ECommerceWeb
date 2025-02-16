import angular from "angular";
import { User } from "../models/user.model";

export class LoginService {
    static $inject = ['$http','$location'];

    constructor(private $http: angular.IHttpService, private $location: angular.ILocationService) {

    }

    public getAppUsers(): angular.IPromise<User[]> {
        return this.$http.get<User[]>("./login-users.data.json")
            .then(response => response.data);
    }
}