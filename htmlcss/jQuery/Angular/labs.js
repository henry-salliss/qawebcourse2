const myModule = angular.module("myModule", []);
const myController = ($scope, $http) => {
    $scope.ajaxMessage = null;
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
    
    $scope.character = null;

    const success = (response) => {
        $scope.ajaxMessage = 'loading...'
        $scope.character = response.data;
        console.log($scope.character)
        $scope.ajaxMessage = null;
    }

    const fail = (reason) => {
        console.log(reason.status)
        $scope.ajaxMessage = reason.status
        $scope.character = null
    }

    $scope.call = () => {
        const num = Math.floor((Math.random() * 100) + 1)
        $http({method: 'GET', url: `https://swapi.dev/api/people/${num}`}).then(success, fail)
    }
}

myModule.controller('myController', myController)