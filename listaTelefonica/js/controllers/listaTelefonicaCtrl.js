angular.module("listaTelefonica").controller("listaTelefonicaCtrl", 
		function($scope, contatos, operadoras, serialGenerator){
            $scope.app = "Lista Telefonica";
            $scope.operadoras = operadoras.data;
            $scope.contatos = contatos.data;

            var init = function() {
                generateSerial($scope.contatos);
            };

            var generateSerial = function (contatos) {
                contatos.forEach(function (item) {
                    item.serial = serialGenerator.generate();
                });
            };

            $scope.apagarContatos = function(contatos) {
                $scope.contatos = contatos.filter(function (contato){
                    if (!contato.selecionado) return contato
                });
                $scope.verificarContatoSelecionado($scope.contatos);
            };

            $scope.verificarContatoSelecionado = function(contatos) {
                $scope.hasContatoSelecionado = contatos.some(
                    contato => contato.selecionado = contato.selecionado
                );
            };
            
            $scope.ordenarPor = function(campo) {
                $scope.ordenacao = campo;
                $scope.direcao = !$scope.direcao;
            };

            init();

});