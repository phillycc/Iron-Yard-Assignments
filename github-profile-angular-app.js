(function(){
   var app = angular.module('user',[]);

   app.controller('UserController', ['$http', '$log', function($http,$log){
     var user = this;
     user.info = [];
     user.starred = [];
     user.repos = [];
     $http.get('https://api.github.com/users/phillycc').success(function(data){
       user.info = data;
     });

     $http.get('https://api.github.com/users/phillycc/starred').success(function(data){
        user.starred = data;
      });

     $http.get('https://api.github.com/users/phillycc/repos').success(function(data){
        user.repos = data;

        angular.forEach(user.repos, function(repo) {
          if (repo.fork){
            repo.icon = "-forked";
          } else {
            repo.icon = "";
          }
        });
      });
   }]);

})();
