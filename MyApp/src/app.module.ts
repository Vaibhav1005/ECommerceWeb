import * as angular from 'angular';
import { MyFirstController } from './controllers/app.controller';
import { ProductCatalogController } from './controllers/product-catalog.controller';

angular.module('myApp', [])
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController);