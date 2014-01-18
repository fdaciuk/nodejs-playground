var fs = require( 'fs' );

var readAsync = function( file ) {
    console.log( 'Fazendo leitura assíncrona (não bloqueante)' );

    var startTime = new Date().getTime();
    fs.readFile( file );
    var endTime = new Date().getTime();

    console.log( 'Tempo de leitura assíncrona:', ( endTime - startTime ) + 'ms' );
};

module.exports = readAsync;