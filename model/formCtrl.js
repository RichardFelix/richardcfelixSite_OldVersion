app.controller('formCtrl',function($scope,$http){
$scope.formData = {};
    $scope.submit = function() {
        
        $http({
              method  : 'POST',
              url     : '/form',
              params    : $scope.formData
         })
        .success(function(data){
            console.log(data);
            console.log(':-)');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };    
});