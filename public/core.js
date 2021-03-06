
var Todo = angular.module('Todo', []);

function mainController($scope, $http) {    // main controller
    $scope.formData = {};

    /*          display the list of To-dos when loading the page        */
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    /*      Add the new to-do to the DB using the node api        */
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so that the user is ready to enter another
                $scope.todos = data;
                console.log(data);     // log req data to console
            })
            .error(function(data) {
                console.log('Error: ' + data);   // log the error to console
            });
    };

    /*      Delete the particular to-do from the DB using the node api  */
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);      // log req data to console
            })
            .error(function(data) {
                console.log('Error: ' + data);   // log the error to console
            });
    };

}
