var TWEEN = require('./vendor/Tween.js');

// animates properties of <obj> to <to> over <duration> and calls <onComplete> on complete.
// duration defaults to 140ms, onComplete is optional
function animate(obj, to, duration, onComplete){
    duration = (duration !== undefined ? duration : 140); // 140ms = 8.4 frames @ 60fps
    var keys = [];
    var start = {};
    var key;
    for (key in to){
        keys.push(key);
        start[key] = obj[key];
    }
    var idx, len = keys.length;
    var tween = new TWEEN.Tween(start).to(to, duration)
    .onUpdate(function tweenUpdate(){
        for (idx=0; idx < len; idx++){
            key = keys[idx];
            obj[key] = this[key];
        }
    })
    .onComplete(function tweenComplete(){
        if (onComplete !== undefined){
            onComplete();
        }
    })
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();
    return tween;
}

module.exports = animate;
