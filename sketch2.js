var world;

var markerZB;
var markerHiro;
var markerThird;

var cylinderZB, cylinderHiro, cylinderThird;

function setup() {
  world = new World('ARScene');

  markerZB = world.getMarker('zb');
  markerHiro = world.getMarker('hiro');
  markerThird = world.getMarker('third');


  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)
  cylinderZB = new Cylinder({
    x: 0,
    y: -0.5,
    z: -17,
    radius: 0.435,    //8.7
    height: 35.6,     //712
    asset:'cylinderAsset',
    rotationX: 90
  });
  markerZB.addChild(cylinderZB);

  cylinderHiro = new Cylinder({
    x: 0,
    y: -0.5,
    z: -17,
    radius: 0.435,
    height: 35.6,
    asset:'cylinderAsset',
    rotationX: 90
  });
  markerHiro.addChild(cylinderHiro);

  cylinderThird = new Cylinder({
    x: 0,
    y: 16.5,
    z: 0,
    radius: 0.435,
    height: 35.6,
    asset:'cylinderAsset',
  });
  markerThird.addChild(cylinderThird);

}


function draw() {
  if (markerThird.isVisible()) {
    cylinderZB.hide();
    cylinderHiro.hide();
    cylinderThird.show();
  }
  else if (markerZB.isVisible()) {
    cylinderZB.show();
    cylinderHiro.hide();
    cylinderThird.hide();
  }
  else if (markerHiro.isVisible()) {
    cylinderZB.hide();
    cylinderHiro.show();
    cylinderThird.hide();
  }


}
