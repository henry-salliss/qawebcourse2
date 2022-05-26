const myModule = angular.module("myModule", []);
const myController = ($scope) => {
    $scope.testMessage = 'Hello there!';
    $scope.products = [
        {name: 'bagel', unitPrice: 1.5, stockLevel: 50},
        {name: 'brioche', unitPrice: 2, stockLevel: 100},
        {name: 'protein yoghurt', unitPrice: 1, stockLevel: 15}
    ]
}

myModule.controller('myController', myController)