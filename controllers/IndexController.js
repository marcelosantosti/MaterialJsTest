var app = angular.module('app');

app.controller('IndexController', function ($http, $scope, UnidadeService) {
	
    var main = this;
	$scope.teste = '';
	$scope.ndmode = 'indeterminate'
	$scope.cardunidadevisible = false;
	
	$scope.myDate = new Date();
	$scope.myDate2 = new Date();
	$scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
	$scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
	
    function get() {
		
		UnidadeService.get()
			.success(function (result) {
			  $scope.unidade = result;
			  $scope.ndmode = '';
			  $scope.cardunidadevisible = true;
			})
			.error(function (error) {
				$scope.ndmode = '';
				$scope.cardunidadevisible = true;
				alert(error);
			});
    }
	
    get();
});