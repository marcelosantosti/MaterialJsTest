var app = angular.module('app');

app.service('UnidadeService', function ($http, ENDPOINT_URI) {
	
    var service = this, path = 'Unidades';

    service.getUrl = function() {
		
      return ENDPOINT_URI + path;
    }

    service.get = function () {
		
		var url = service.getUrl();
		
		return $http.get(url);
    };
});