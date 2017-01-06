var Imp = require('./imp/imp.js');
console.log('imp?',Imp);
var testSuite = require('./imp/test-suite.js');

var impctx;
var App = (function(){

    function onDraw(){
        console.log('draw!');
    }
    function init(){
        var impctx = Imp.init(document.getElementById("canvas"));
        Imp.setBackground('#ff00ff');
        Imp.pushLayer(testSuite(Imp)());
        Imp.animate(onDraw());
    }

    init();
}());
