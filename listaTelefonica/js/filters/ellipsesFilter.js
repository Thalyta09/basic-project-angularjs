angular.module("listaTelefonica").filter("ellipses", function() {
    return function(input, size) {
        if (input.length <= (size || 5)) return input;
        var output = input.substring(0,(size || 5)) + "...";
        return output;
    };
});