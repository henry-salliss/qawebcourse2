const myModule = angular.module("myModule", []);
const myController = ($scope) => {
    $scope.message = 'Hello world';
    $scope.jedi = [
        {name: 'Obi Wan Kenobi', lightsaberColor: 'blue'},
        {name: 'Mace Windu', lightsaberColor: 'purple'},
        {name: 'Luke Skywalker', lightsaberColor: 'green'},
    ]
};

myModule.controller("myController", myController);