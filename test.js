var sphero = require("sphero");
var orb = sphero("b1729af49ae543cfa0e1ecceee91461f");

// cycle BB8's LEDs between 3 colors
orb.connect(function() {
  // sets color to the provided r/g/b values
  orb.color({ red: 255, green: 0, blue: 255 });

  setTimeout(function() {
    console.log("color 1");
    // sets color to the provided hex value
    orb.color(0xff0000);
  }, 1000);

  setTimeout(function() {
    console.log("color 2");
    // hex numbers can also be passed in strings
    orb.color(0x0);
  }, 2000);

  setTimeout(function() {
    console.log("color 3");
    // sets color to the provided color name
    orb.color("magenta");
  }, 3000);
});
