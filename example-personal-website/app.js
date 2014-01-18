/**
 * Dependências
 */
var http = require( 'http' );
var fs = require( 'fs' );
var url = require( 'url' );

/**
 * Criar o servidor
 */
var server = http.createServer( function( req, res ) {
    var myurl = url.parse( req.url );
    var pathname = myurl.pathname;
    var httpStatus;
    var pathExists;
    var route;

    // Se estiver na home
    if( '/' === pathname ) {
        route = '/index.html';
    }
    else {
        /**
         * Verificar se existe o arquivo solicitado na URL.
         * Ex: /artigos procura pelo arquivo /artigos.html. Se não encontrar, redireciona para a página de erro.
         */
        pathExists = fs.existsSync( __dirname + pathname + '.html' );
        route = ( pathExists ? pathname : '/erro' ) + '.html';
    }

    /**
     * Se carregou a rota para um arquivo existente, passa o status 200 (OK).
     * Se cair na página de erro, passa o status 404 (Not found).
     */
     httpStatus = ( '/erro.html' === route ) ? 404 : 200;

    fs.readFile( __dirname + route, function( err, html ) {
        res.writeHeader( httpStatus, { 'Content-Type' : 'text/html' } );
        res.end( html );
    });
});

/**
 * Subir o servidor na porta 3000
 */
server.listen( 3000, function() {
    console.log( 'My personal website!' );
});