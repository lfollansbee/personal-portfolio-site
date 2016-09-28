(function(){
  angular.module("LucyApp")
  .controller("MainController", MainController)

  MainController.$inject = ["$scope"];

  function MainController($scope){
    $scope.showGalvanize = true;
    $scope.showDenison = false;
    $scope.showHH = false;

    $scope.toGalvanize = function(){
      if($scope.showGalvanize === false){
        $scope.showGalvanize = true;
        $scope.showDenison = false;
        $scope.showHH = false;
      }
    }

    $scope.toDenison = function(){
      if($scope.showDenison === false){
        $scope.showGalvanize = false;
        $scope.showDenison = true;
        $scope.showHH = false;
      }
    }

    $scope.toHH = function(){
      if($scope.showHH === false){
        $scope.showGalvanize = false;
        $scope.showDenison = false;
        $scope.showHH = true;
      }
    }

  }
})();
