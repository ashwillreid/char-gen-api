const express = require( 'express' );
const testRouter = require( './routes/testRouter' );
const app = express();

app.listen( 3000 );

app.get( '/', ( req, res, next ) => {
	console.log( 'HUH?' )
	res.status(500).json( { message: 'this is a test' } );
} )

app.use( '/testRouter', testRouter)

