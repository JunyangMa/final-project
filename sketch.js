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
  var cylinder = new Cylinder({
    x: 0,
    y: -1,
    z: -17,
    radius: 0.435,    //8.7
    height: 35.6,     //712
    asset:'cylinderAsset',
    rotationX: 90
  });
  markerZB.addChild(cylinder);

  var cylinder2 = new Cylinder({
    x: 0,
    y: -1,
    z: -17,
    radius: 0.435,    
    height: 35.6,     
    asset:'cylinderAsset',
    rotationX: 90
  });
  markerHiro.addChild(cylinder2);

  var cylinder3 = new Cylinder({
    x: 0,
    y: 17,
    z: 0,
    radius: 0.435,    
    height: 35.6,     
    asset:'cylinderAsset',
  });
  markerThird.addChild(cylinder3);

}


function draw() {



}
