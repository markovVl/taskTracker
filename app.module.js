var app = angular.module('App', ['projectList', 'taskList', 'selectTask', 'ngMaterial', 'ngMessages', 'timer']);
app.value('clientId', 'sdf4f34fjk34fh');


app.service('dataService', function() {

    this.tasks = function () {
        return [{
                project_id: 0,
                id: 0,
                name: 'Task',
                time: 20,
                body: '0 project 1 task'
            },
            {
                project_id: 1,
                id: 1,
                name: 'Bug',
                time: 30,
                body: '1 project 1 task (bug)'
            },
            {
                project_id: 2,
                id: 2,
                name: 'Task',
                time: 30,
                body: '2 project 1 task'
            },
            {
                project_id: 2,
                id: 3,
                name: 'Bug',
                time: 30,
                body: '2 project 2 task (bug)'
            },
        ];
    }






    this.projects = function () {
        return [{
                id: 0,
                name: 'Project 0',
                time: 200
            },
            {
                id: 1,
                name: 'Project 1',
                time: 20
            },
            {
                id: 2,
                name: 'Project 2',
                time: 30
            },
        ];
    }





});






app.controller('DataController', function($scope, dataService) {
    $scope.projects = dataService.projects();
    $scope.tasks = dataService.tasks();
});
