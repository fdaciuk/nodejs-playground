var http = require( 'http' );
var fs = require( 'fs' );

var readSync = function( file ) {
    console.log( 'Fazendo leitura síncrona (bloqueante)' );

    var startTime = new Date().getTime();
    fs.readFileSync( file );
    var endTime = new Date().getTime();

    console.log( 'Tempo da leitura síncrona:', ( endTime - startTime ) + 'ms' );
};

module.exports = readSync;