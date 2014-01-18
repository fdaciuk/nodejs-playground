var http = require( 'http' );
var fs = require( 'fs' );
var readSync = require( './sync' );
var readAsync = require( './async' );
var file = './node.zip';

var stream = fs.createWriteStream( file );
var download = 'http://nodejs.org/dist/v0.10.24/node-v0.10.24-linux-x64.tar.gz';

http.get( download, function( res ) {
    console.log( 'Fazendo download do NodeJS' );

    res.on( 'data', function( data ) {
        stream.write( data );
    });

    res.on( 'end', function() {
        stream.end();
        console.log( 'Download finalizado!' );

        readSync( file );
        readAsync( file );
    });
});