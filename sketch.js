var world;

var markerZB;
var markerHiro;

function setup() {
  world = new World('ARScene');

  markerZB = world.getMarker('zb');
  markerHiro = world.getMarker('hiro');

  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)

  // var cylinder = new Cylinder({
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   radius: 0.5,    8.7
  //   height: 10,
  //   red: random(255),
  //   green: random(255),
  //   blue: random(255),
  //   rotationX: 90,
  // });
  // markerZB.addChild(cylinder);

  var plane = new Plane({
    x: 0,
    y: 0,
    z: -5,
    width: 3,
    height: 4.6,
    asset:'planeAsset',
    rotationX: -90,
  });
  markerZB.addChild(plane);

}


function draw() {



}
