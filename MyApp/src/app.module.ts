import * as angular from 'angular';
import { MyFirstController } from './controllers/app.controller';
import { ProductCatalogController } from './controllers/product-catalog.controller';
import { ShoppingController } from './controllers/shopping.controller';
import { LoginController } from './controllers/login.controller';

angular.module('myApp', [])
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)
.controller('ShoppingController',ShoppingController)
.controller('LoginController',LoginController)