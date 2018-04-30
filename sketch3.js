var world;

var markerZB;
var markerHiro;
var markerThird;

var planeZB, planeHiro, planeThird;

var planeMaster1, planeContainer1;
var planeMaster2, planeContainer2;

function setup() {
  world = new World('ARScene');

  markerZB = world.getMarker('zb');
  markerHiro = world.getMarker('hiro');
  markerThird = world.getMarker('third');


  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)
  planeContainer1 = new Container3D({y:-0.5});
  planeMaster1 = new Plane({
    x: 0,
    y: 0,
    z: 0,
    width: 3,
    height: 4.6,
    asset:'planeAsset',
    rotationX: -90,
    side: 'double'
  });
  planeContainer1.addChild(planeMaster1);
  markerZB.addChild(planeContainer1);

  planeContainer2 = new Container3D({y:-0.5, rotationZ:90});
  planeMaster2 = new Plane({
    x: 0,
    y: 0,
    z: 0,
    width: 3,
    height: 4.6,
    asset:'planeAsset',
    rotationX: -90,
    side: 'double'
  });
  planeContainer2.addChild(planeMaster2);
  markerHiro.addChild(planeContainer2);
}


function draw() {
  if (markerZB.isVisible()) {
    planeContainer1.show();
    planeContainer2.hide();
  }
  else if (markerHiro.isVisible()) {
    planeContainer1.hide();
    planeContainer2.show();
  }

}
