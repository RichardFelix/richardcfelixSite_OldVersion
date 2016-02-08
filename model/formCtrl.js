app.controller('formCtrl',function($scope,$http){
    $scope.formData = {};
        $scope.submit = function() {
            
            console.log('greta');
            document.getElementById('name').style.opacity = 0;
            document.getElementById('email').style.opacity = 0;
            document.getElementById('message').style.opacity = 0;
            document.getElementById('submit').style.opacity = 0;
            document.getElementById('thankYou').style.opacity = 1; 

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