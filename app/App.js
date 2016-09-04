
require('../bower_components/minimal-devices/css/imac.css');
require('../bower_components/minimal-devices/css/ipad.css');
require('../bower_components/minimal-devices/css/iphone.css');
require('../bower_components/minimal-devices/css/macbook.css');
require('gsap/src/uncompressed/easing/EasePack');
require('font-awesome/css/font-awesome.css');
require('./sass/main.scss');

require('./raf.js');
var Animation = require('./animation.js');

Animation.run({
	lineColor: '29,183,169', 
	circleColor: '29,183,169'
});
