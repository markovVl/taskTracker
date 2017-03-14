angular.
module('taskList').
component('taskList', {
    templateUrl: 'task-list/task-list.html',
    controller:  ['$scope', 'dataService', TaskListController]

});


    function TaskListController($scope, dataService) {
        this.sortType = 'id'; // по умолчанию по имени
        this.sortReverse = false; // по умолчанию прямая
        this.tasks = dataService.tasks();
    }
