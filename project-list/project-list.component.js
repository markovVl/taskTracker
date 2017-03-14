angular.
module('projectList').
component('projectList', {
    templateUrl: 'project-list/project-list.html',
    controller:  ['$scope', 'dataService', ProjectListController]

});


    function ProjectListController($scope, dataService) {
        this.sortType = 'id'; // по умолчанию по id
        this.sortReverse = false; // по умолчанию прямая
        this.projects = dataService.projects();
    }
