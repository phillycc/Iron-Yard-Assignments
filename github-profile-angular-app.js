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

         if(user.repos.fork){
             user.repos.icon = "<span class='octicon octicon-repo-forked'></span>";
         } else {
             user.repos.icon = "<span class='octicon octicon-repo'></span>";
         }
      });

   }]);

})();
