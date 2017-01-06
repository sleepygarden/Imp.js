
var coreModules = require('./imp-modules.js');

module.exports = (function Imp(){
    /*

    canvas-imp is a helper for Canvas, and adds helper functions and UI modules

    Imp (capital I) is a singleton which manages the canvas context. it modifies the context to add this functionality,
    so you can also use canvas.getContext('2d') and get the imp (lowercase i) instance currently running. Imp owns a number of Modules,
    UI elements which can be futher combined into new Modules. Imp also owns a number of helper functions so make it simple to access
    an imp's custom features without having to dig the imp instance out of the Imp singleton every time

    an imp owns an array of layers, which it draws in order, 0 being at the bottom. Layers can have sublayers, which in turn can have more sublayers, a bit like this
    [ [ [a,b], c, d], e, [f, g] , h]
    each array is a layer, each array can contain modules, including other layers. no matter how deeply nested, the Z index, or depth, of a module
    if how far right it is in the entire layout. if an elements index in it's layer is 3, and it's layer's index is 2, and that layer is in the imp layer stack, it's Z index
    is 3 + 2 = 5
    an imp, in addition to everything a normal 2D context can do, keeps track of it's layers, if the mouse has been captured by a button (prevent clicks going through buttons to layers udnerneath),
    the current mouse position, whether the left-mouse is down, the current translation offset, rescale canvas to fit css on canvas element, the current animation frame, and
    background color (if null, no background is used, and the dom underneath is visible)

    */

    if (CanvasRenderingContext2D.prototype.setLineDash === undefined){
        CanvasRenderingContext2D.prototype.setLineDash = function(){};
    }

    var _context;

    function context(){
        return this._context;
    }

    function init(canvas){
        console.log("init start");

        canvas.classList.add("imp-canvas");
        var htmlLinkBox = document.createElement('div');
        htmlLinkBox.id = "imp-link-box";
        htmlLinkBox.style = "width: 100%;height: 100%;position: absolute;top: 0px;left: 0px;pointer-events: none;overflow: hidden;";
        canvas.parentNode.insertBefore(htmlLinkBox, canvas.nextSibling);

        var context = canvas.getContext('2d');
        context.mouse = {
            x : 0,
            y : 0,
            down : false
        };
        context.offset = {
            x : 0,
            y : 0
        };
        context.currentScale = {
            x : 1,
            y : 1
        };
        context.scaleStack = [context.currentScale];
        context.offsetStack = [context.offset];
        context.width = 0;
        context.height = 0;
        context.background = '#fff';
        context.layers = [];
        context.mouseCapture = false; // flag set to true during a single draw pass
        context.currentFrame = null;
        context.mousePointerOn = false;
        context.dpiScale = 1;
        context.currentFont = {
            face : "Helvetica",
            size : 14,
            weight : 400
        };
        context.fontStack = [context.currentFont];

        var onMove = function onMove(e){
            var rect = canvas.getBoundingClientRect();
            context.mouse.x = e.clientX - rect.left;
            context.mouse.y = e.clientY - rect.top;
        };

        var onMouseDown = function onMouseDown(e){
            if (e.button === 0){
                context.mouse.down = true;
            }
        };
        var onMouseUp = function onMouseUp(e){
            context.mouse.down = false;
        };

        var onResizeCanvas = function onResizeCanvas() {
            if (window.devicePixelRatio && context.dpiScale !== window.devicePixelRatio) {
                context.dpiScale = window.devicePixelRatio;
            }
            canvas.width = canvas.clientWidth * context.dpiScale;
            canvas.height = canvas.clientHeight * context.dpiScale;
        };

        canvas.addEventListener('mousemove',onMove,false);
        canvas.addEventListener('mousedown',onMouseDown,false);
        canvas.addEventListener('mouseup',onMouseUp,false);
        window.addEventListener('resize', onResizeCanvas, false);
        onResizeCanvas(); // initialize canvas size

        context._oldTranslate = context.translate;
        context._oldScale = context.scale;
        context._oldSave = context.save;
        context._oldRestore = context.restore;

        context.translate = function translate(x,y){
            this.offset.x += x;
            this.offset.y += y;
            this._oldTranslate(x,y);
        };
        context.scale = function scale(x,y){
            this.currentScale.x *= x;
            this.currentScale.y *= y;
            this._oldScale(x,y);
        };
        context.save = function save(){
            this.offsetStack.push({x : this.offset.x, y : this.offset.y});
            this.scaleStack.push({x : this.currentScale.x, y : this.currentScale.y});
            this.fontStack.push({face : this.currentFont.face, size : this.currentFont.size, weight : this.currentFont.weight});
            this._oldSave();
        };
        context.restore = function save(){
            this.offset = this.offsetStack.pop();
            this.currentScale = this.scaleStack.pop();
            this.currentFont = this.fontStack.pop();
            this._oldRestore();
        };
        context.clear = function clear(){
            this.clearRect(0,0,canvas.width,canvas.height);
            if (this.background !== null){
                this.save();
                this.fillStyle = this.background;
                this.fillRect(0,0,canvas.width,canvas.height);
                this.restore();
            }
        };

        // do not directly set the context font, or else the font stack won't work
        context.setFont = function setFont(face, size, weight){
            size = (size !== undefined ? size : this.currentFont.size);
            weight = (weight !== undefined ? weight : this.currentFont.weight);
            this.currentFont = {
                face : face,
                size : size,
                weight : weight
            };
            this.font = weight + " " + size + "px " + face;
        };
        context.setFontFace = function setFontFace(face){
            this.currentFont.face = face;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };
        context.setFontSize = function setFontSize(size){
            this.currentFont.size = size;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };
        context.setFontWeight = function setFontWeight(weight){
            this.currentFont.weight = weight;
            this.font = this.currentFont.weight + " " + this.currentFont.size + "px " + this.currentFont.face;
        };

        context.fillArc = function fillArc(x,y,radius, startAngle, endAngle, counterclockwise){
            startAngle = startAngle !== undefined ? startAngle : 0;
            endAngle = endAngle !== undefined ? endAngle : Math.PI*2;
            counterclockwise = counterclockwise !== undefined ? counterclockwise : false;
            this.beginPath();
            this.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            this.closePath();
            this.fill();
        };

        context.addMousePointer = function pointerMouse(){
            if (this.mousePointerOn === false){
                this.canvas.style.cursor = "pointer";
                this.mousePointerOn = true;
            }
        };
        context.removeMousePointer = function pointerMouse(){
            if (this.mousePointerOn === true){
                this.canvas.style.cursor = "auto";
                this.mousePointerOn = false;
            }
        };
        context.size = function size(){
            return {
                width : this.canvas.width * 1/this.dpiScale,
                height : this.canvas.height * 1/this.dpiScale,
            };
        };

        // Firefox appears to draw text a little low, bump it up to match chrome
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox){
            context._oldFillText = context.fillText;
            context._oldStrokeText = context.strokeText;
            context.fillText = function(text,x,y){
                this._oldFillText(text,x,y+3);
            };
            context.strokeText = function(text,x,y){
                this._oldStrokeText(text,x,y+3);
            };
        }

        context.extend = this.extend
        this._context = context; // context must be finished initing before any modules can be loaded
        console.log('prior',this);
        extend(this, coreModules(this));
        console.log('post', this);

        return this._context;
    }

    function setBackground(background){
        this._context.background = background;
    }

    // removes the first layer matching the layer you gave (not all)
    function removeLayer(layer){
        var idx = this._context.layers.indexOf(layer);
        if(idx != -1) {
            this._context.layers.splice(idx, 1);
        }
    }

    function insertLayer(layer,index){
        layer.update(); // get layer up to speed before first draw pass
        this._context.layers.splice(index, 0, layer);
    }

    // add a layer at a higher z index
    function pushLayer(layer){
        layer.update();
        this._context.layers.push(layer);
    }

    // removes the topmost z-index layer
    function popLayer(){
        this._context.layers.pop();
    }

    function onResize(inject){
        window.addEventListener('resize', function(e){
            inject();
        }, false);
    }

    function animate(inject){
        if (inject === undefined){
            inject = function inject(){};
        }
        var context = this._context;
        context.scale(1,1);
        context.translate(0,0);
        // hd scale
        function animationStep(){
            context.currentFrame = requestAnimationFrame(animationStep);
            context.save();
            context.clear();

            context.scale(context.dpiScale, context.dpiScale);
            for (var uIdx = context.layers.length - 1; uIdx >= 0; uIdx--){
                context.layers[uIdx].update(); // update top to bottom
            }
            for (var dIdx = 0, len = context.layers.length; dIdx < len; dIdx++){
                context.layers[dIdx].draw(); // draw bottom to top
            }
            if (context.mousePointerOn === true && context.mouseCapture === false){
                context.removeMousePointer();
            }
            context.mouseCapture = false;
            inject();
            context.restore();
        }
        context.currentFrame = requestAnimationFrame(animationStep);
    }

    function stop(){
        if (this._context.currentFrame !== null) {
            cancelAnimationFrame(this._context.currentFrame);
        }
    }

    function injectFPSTracker(){
        var script = document.createElement('script');
        script.onload = function(){
            var stats=new Stats();
            stats.domElement.style.cssText='position:fixed;right:0;top:0;z-index:10000';
            document.body.appendChild(stats.domElement);
            requestAnimationFrame(function loop(){
                stats.update();
                requestAnimationFrame(loop);
            });
        };
        script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
        document.head.appendChild(script);
    }

    function extend(recursive, extended){
        if ( Object.prototype.toString.call( recursive ) !== '[object Boolean]' ) {
            recursive = false
            deep = arguments[0];
            i++;
        }
    }

    // Vanilla JS copy of JQuery extend, modified from gomakethings.com to be self mutating
    // Pass in the objects to merge as arguments.
    // For a deep extend, set the first argument to `true`.
    function extend(){
        var extended; // what to extend
        var deep = false;
        var i = 0;
        var length = arguments.length;
        if (length <= 1){
            extended = this;
        }
        else if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
            deep = arguments[0];
            extended = arguments[1];
            i = 2;
        }
        else {
            extended = arguments[0];
            i = 1;
        }

        // Merge the object into the extended object
        var merge = function (obj) {
            for ( var prop in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                    // If deep merge and property is an object, merge properties
                    if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                        extended[prop] = extend( true, extended[prop], obj[prop] );
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for ( ; i < length; i++ ) {
            var obj = arguments[i];
            merge(obj);
        }
        return extended;
    }

    return {
        context : context,
        init : init,
        setBackground : setBackground,
        removeLayer : removeLayer,
        insertLayer : insertLayer,
        pushLayer : pushLayer,
        popLayer : popLayer,
        onResize : onResize,
        animate : animate,
        stop : stop,
        injectFPSTracker : injectFPSTracker,
        extend : extend
    };
}());
