angular.module("listaTelefonica").controller("novoContatoCtrl", 
		function($location, $scope, operadoras, serialGenerator, contatosAPI){
            $scope.operadoras = operadoras.data;

            $scope.adicionarContato = function(contato) {
                contato.serial = serialGenerator.generate();
                contatosAPI.saveContato(contato).then(function() {
                    delete $scope.contato;
                    //$scope.contatoForm.$setPristine();
                    $location.path("/contact");
                });
            };
});