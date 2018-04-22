var world;

var markerZB;
var markerHiro;
var markerThird;

function setup() {
  world = new World('ARScene');

  markerZB = world.getMarker('zb');
  markerHiro = world.getMarker('hiro');
  markerThird = world.getMarker('third');


  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)
  var plane = new Plane({
    x: 0,
    y: 0,
    z: -5,
    width: 3,
    height: 4.6,
    asset:'planeAsset',
    rotationX: -90
  });
  markerZB.addChild(plane);

  var plane2 = new Plane({
    x: 0,
    y: 0,
    z: -5,
    width: 3,
    height: 4.6,
    asset:'planeAsset',
    rotationX: -90,
    rotationZ: 90
  });
  markerHiro.addChild(plane2);

}


function draw() {



}
