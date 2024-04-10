express = require( 'express' )

const router = express.Router()

//READING ROUTES TOP TO BOTTOM

router.get( '/', ( req, res, next ) => {
	console.log( 'HUH? in test router' )
	res.status(500).json( { message: 'this is a test of the router' } );
} )

router
	.route( '/:testParam' )
	.get( ( req, res, next ) => {
		console.log( 'testParam:', req.params.testParam )
		res.status(500).json( { message: req.params.testParam } );
	} )
	.put( ( req, res, next ) => {
		res.status(500).json( { message: req.params.testParam } );
	} )
	.delete( ( req, res, next ) => {
		res.status(500).json( { message: req.params.testParam } );
	} )

module.exports = router