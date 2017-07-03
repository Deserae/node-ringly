var noble = require('noble');


noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

//TODO: this should only return true or false, not undefined
var isDesRingly = function(peripheral){
  return peripheral && peripheral.advertisement && peripheral.advertisement.localName && 
    peripheral.advertisement.localName.includes('RINGLY - WOOD (18d5)');
}

var onDiscover = function(peripheral) {
  console.log("found peripheral: ", peripheral.address);

  var isthisaringly = isDesRingly(peripheral);
  console.log(isthisaringly);

  if (isthisaringly) {
    console.log("found ringly: ", peripheral.advertisement.localName);
    noble.stopScanning();

  var onConnect = function(error) {
    console.log("connected");
    //TODO: Discover Service EBDF3D60706F636F90770002A5D5C51B
    //TODO: Discover Characteristic EBDF00A0706F636F90770002A5D5C51B
    //TODO: write blue bytes (0x00010E0000FF0000000005050100000000) bytes to Characteristic
  }

    peripheral.connect(onConnect);
  }
}

noble.on('discover', onDiscover);