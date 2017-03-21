angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {
  $scope.addPost = function() {
    if ($scope.postBody) {
      PostsSvc.create({
        username: 'bwinward',
        body: $scope.postBody
      }).success(function(post) {
        $scope.posts.unshift(post);
        $scope.postBody = null;
      });
    }
  }
});
