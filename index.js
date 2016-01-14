var sphero = require("sphero");
// replace with the uuid of your sphero droid
var orb = sphero("b1729af49ae543cfa0e1ecceee91461f");
var morse = require("morse");
var _ = require("lodash");
orb.connect( function () {

  function isEven (n) {
    return n % 2 === 0;
  }

  function changeLight (index, colorVal, duration) {
    var timeVal = total + 0;
    setTimeout( function () {
      orb.color(colorVal);
    }, timeVal );
    total += duration;
  }

  var msgTemp = morse.encode('Hello world').split('');
  console.log('morse code array:',JSON.stringify(msgTemp));
  var total = 0;
  msg = [];
  msgTemp.forEach( function (val, key) {
    msg.push(val);
    msg.push('BUFFER');
  });

  msg.forEach( function (val, key) {

    var duration;
    var color;
    var dotLength = 175;
    if ( !isEven(key) ) {
      color = 0x0;
      duration = dotLength * 1;
      changeLight(key,color, duration);
    } else {
      switch (val) {
        case ' ':
          duration = dotLength * 7; // x7 but we've already buffered x1
          color = 0x0;
          break;
        case '.':
          duration = dotLength * 1;
          color = 'white';
          break;
        case '-':
          duration =  dotLength * 3
          color = 'white';
          break;
      }
      changeLight(key, color, duration);
    }
  });

});
