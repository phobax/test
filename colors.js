function hsvToRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}


var COLORS = [
      "#ff0",
      "#0f0",
      "#00f"
];


function initColors (N) {
  COLORS = [];

  for (var i=0; i<N; i++) {

    var _color_rgb = hsvToRGB(
      i/N/4,
      0.6,
      Math.random()*0.2+0.8
    );

    var r = _color_rgb.r;
    var g = _color_rgb.g;
    var b = _color_rgb.b;


    COLORS.push("rgb("+r+","+g+","+b+")");
  }

  console.log(COLORS);
}
