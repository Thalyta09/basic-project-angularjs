angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/contact", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function(contatosAPI) {
                return contatosAPI.getContatos();
            },
            operadoras: function(operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/new-contact", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function(operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/details-contact/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function(contatosAPI, $route) {
                return contatosAPI.getContato(
                    $route.current.params.id
                );
            }
        }
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html",
    });
    $routeProvider.when("/errorConnection", {
        templateUrl: "view/errorConnection.html",
    });
    $routeProvider.otherwise({redirectTo: "/contact"});
});