const myModule = angular.module("myModule", []);
const myController = ($scope) => {
    $scope.testMessage = 'Hello there!';
    $scope.products = [
        {name: 'bagel', unitPrice: 1.5, stockLevel: 50},
        {name: 'brioche', unitPrice: 2, stockLevel: 100},
        {name: 'protein yoghurt', unitPrice: 1, stockLevel: 15}
    ]

    $scope.currentProduct = null;

    $scope.products.selectProduct = (product) => {
        $scope.currentProduct = product;
    }

    $scope.btnClick = (product) => {
        console.log(product.name)
    }

    $scope.getDetails = (e) => {
        alert(`clicked at ${e.clientX} and ${e.clientY}`)
    }
}

myModule.controller('myController', myController)