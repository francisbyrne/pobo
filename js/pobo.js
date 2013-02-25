view.viewSize = new Size( document.width, document.height );

pobo = {};

/* The ship object, which extends CompoundPath with two triangles
		one representing the hull and one the front of the ship. */
var ship = function () {

	var center = new Point( 100, 100 );
	var hullFillColor = 'white';
	var hullLineColor = 'black';
	var frontColor = 'red';
	var frontPoint = new Point( center - new Point( 0, 8 ) );
	var shipSize = 10;
	var hull = new Path.RegularPolygon( center, 3, shipSize );
	var front = new Path.RegularPolygon( frontPoint, 3, shipSize / 3 );

	var that = new CompoundPath( [ hull, front ] );
	that.hull = hull;
	that.front = front;
	that.hull.fillColor 	= hullFillColor;
	that.hull.strokeColor = hullLineColor;
	that.front.fillColor 	= frontColor;
	that.actionQueue 			= [];
	that.turnSpeed = 5;

	return that;
};

pobo.player = ship();

function onFrame( event ) {
	pobo.animate();
}

pobo.animate = function () {

	if ( Key.isDown( 'left' ) ) {
			pobo.player.rotate( -pobo.player.turnSpeed );
	}
	if ( Key.isDown( 'right' ) ) {
			pobo.player.rotate( pobo.player.turnSpeed );
	}
	if ( Key.isDown( 'up' ) ) {
		pobo.player.position += (pobo.player.front.position - pobo.player.hull.position) / 3;
	}

};