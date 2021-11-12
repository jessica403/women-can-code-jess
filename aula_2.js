// para o js cada var é diferente aqui, ele é caseSensitive
//var nome= "jessica"

//var Nome = "jessica"

//var NOME = "jessica"

//tipos de declaraçoes

//var----+popular de variavel
//let---o+ usado,pode-se instanciar um novo valor dentro de 1 escopo
//const---var de escopo,mas nao é possivel alterar seu valor


//temos dois tipos de variaveis: global e local(escopo de variaveis)

var estado = "sp"

function imprimeEstadoCidade() {
    //esse let eu nao consigo acessar por fora desse escopo
    let cidade ="sao paulo"
    console.log(estado, cidade);
}

imprimeEstadoCidade();

//tipos de variaveis

var lista = ["consigo","colocar","varios","valores"]
var objeto = {chave: "valor",chaveNumero:10,chaveBoolean: false,chaveObejto:{}}


