var BezierHelper = require('./bezierHelper.js');
var TWEEN = require('./vendor/Tween.js');
var animate = require('./animationHelper.js');

// standard modules for Imp and helper functions for all modules
// some module names are prefixed with an underscore to prevent collision, but will be normal on export
module.exports = (function ImpModules(Imp){
    var imp = Imp.context();
    // a frame is anything with an x, y, width, and height.
    // returns a boolean indicating if the mouse is over the rect under the current translation
    function mouseOverFrame(frame){
        var xIntersect = frame.x + imp.offset.x <= imp.mouse.x && frame.x + frame.width + imp.offset.x >= imp.mouse.x;
        var yIntersect = frame.y + imp.offset.y <= imp.mouse.y && frame.y + frame.height + imp.offset.y >= imp.mouse.y;
        return  xIntersect && yIntersect;
    }

    // does not take current translation into account
    function pointInCircle(x,y,circleCenterX,circleCenterY, radius){
        var dist = Math.sqrt( Math.pow(circleCenterX-x, 2) + Math.pow(circleCenterY-y, 2) );
        return dist <= radius;
    }

    ///// Layer
    // Layers compose groups of modules together. They z-index all of their children implictly (lower pos in children array, lower z)
    function _Layer(configs){
        this.x = 0;
        this.y = 0;

        this.scale = 1;
        this.opacity = 1;
        this.children = [];
        imp.extend(this,configs);
    }
    _Layer.prototype.constructor = _Layer;
    _Layer.prototype.type = "Layer";
    _Layer.prototype.update = function update(){
        imp.save();
        imp.translate(this.x,this.y);
        imp.scale(this.scale,this.scale);
        for (var idx=this.children.length-1, len = this.children.length; idx >= 0; idx--){
            this.children[idx].update();
        }
        imp.restore();
    };
    _Layer.prototype.draw = function draw(){
        imp.save();
        imp.translate(this.x,this.y);
        imp.scale(this.scale,this.scale);
        imp.globalAlpha *= this.opacity;
        for (var idx=0, len = this.children.length; idx < len; idx++){
            this.children[idx].draw();
        }
        imp.restore();
    };

    /////
    function _Image(configs){
        this.x = 0;
        this.y = 0;
        this.width = false; // if not set, defaults to full size
        this.height = false;
        this.sampleX = 0;
        this.sampleY = 0;
        this.sampleWidth = false;
        this.sampleHeight = false;

        this.resize = false;
        this.sample = false;

        this.src = "";
        this.loaded = false;
        this.loadFailed = false;
        this.retryCount = 0;

        imp.extend(true,this,configs);
        this.loadImage();
    }
    _Image.prototype.constructor = _Image;
    _Image.prototype.type = "Image";
    _Image.prototype.loadImage = function(){
        var self = this;
        this.image = new Image();
        this.image.onload = function(e){
            self.onLoad();
        };
        this.image.onerror = function(e){
            self.onError();
        };
        this.image.src = this.src;
    };
    _Image.prototype.onError = function(){
        if (this.retryCount++ < 5){
            this.loadImage();
        }
        else {
            this.loadFailed = true;
        }
    };
    _Image.prototype.onLoad = function onLoad(){
        if (this.image.width + this.image.height === 0){
            this.onError();
            return;
        }
        this.loaded = true;
        if (this.width === false){
            this.width = this.image.width;
        }
        if (this.height === false){
            this.height = this.image.height;
        }
        if (this.sampleWidth !== false || this.sampleHeight !== false){
            this.sample = true;
        }
        if (this.sample && this.sampleWidth === false){
            this.sampleWidth = this.image.width;
        }
        if (this.sample && this.sampleHeight === false){
            this.sampleHeight = this.image.height;
        }
    };
    _Image.prototype.update = function update(){}; // here is where we'd increment the animated gif frame, but we dont need to do that, so, yeah
    _Image.prototype.draw = function draw(){
        imp.save();
        if (this.loaded){
            /*
            ctx.drawImage(image, x, y);
            ctx.drawImage(image, x, y, width, height); // stretchy
            ctx.drawImage(image, sampleX, sampleY, sampleWidth, sampleHeight, x, y, width, height); // sample a section of the image, then draw that
            */
            if (this.sample){
                imp.drawImage(
                    this.image,
                    this.sampleX,this.sampleY,this.sampleWidth,this.sampleHeight,
                    this.x,this.y,this.width,this.height
                );

            }
            else {
                imp.drawImage(this.image,this.x,this.y,this.width,this.height);

            }
        }
        else {
            var width = this.width !== false ? this.width : 25;
            var height = this.height !== false ? this.height : 25;

            imp.beginPath();
            imp.strokeStyle = "rgba(0,0,0,0.3)";
            imp.lineWidth = 2;
            imp.moveTo(this.x,this.y);
            imp.lineTo(this.x+width,this.y);
            imp.lineTo(this.x+width,this.y+height);
            imp.lineTo(this.x,this.y+height);
            imp.closePath();
            imp.stroke();

            // draw border
            if (this.loadFailed) {
                imp.strokeStyle = "#f95a6c";
                imp.beginPath();
                imp.moveTo(this.x + width/2 - 5, this.y + height/2 - 5);
                imp.lineTo(this.x + width/2 + 5, this.y + height/2 + 5);
                imp.stroke();

                imp.beginPath();
                imp.moveTo(this.x + width/2 - 5, this.y + height/2 + 5);
                imp.lineTo(this.x + width/2 + 5, this.y + height/2 - 5);
                imp.stroke();
            }
            else {
                // draw loader
                var gradient = imp.createLinearGradient(this.x,this.y,this.x+width,this.y+height);
                gradient.addColorStop(0,"#888");
                gradient.addColorStop(1,"white");

                var offset = performance.now() % 1000 / 1000 * 360 ; // 1000 millis to a full rotation
                var startAngle = 0 + offset;
                var endAngle = 75 + offset; // 75 degree length
                startAngle *= Math.PI/180;
                endAngle *= Math.PI/180;
                imp.lineCap = "round";
                imp.strokeStyle = gradient;
                imp.beginPath();
                imp.arc(this.x + width/2, this.y + height/2, 10, startAngle,endAngle, false);
                imp.stroke();
            }
        }
        imp.restore();
    };

    /////
    // Label
    function _Label(configs){
        this.x = 0;
        this.y = 0;

        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.text = "Label";

        this.textColor = "black";

        // "left" || "right" || "center" || "start" || "end"
        this.textAlign = "left";

        //"top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
        this.textBaseline = "top";

        imp.extend(this,configs);
    }
    _Label.prototype.constructor = _Label;
    _Label.prototype.type = "Label";
    _Label.prototype.measureWidth = function(){
        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        var width = imp.measureText(this.text).width;
        imp.restore();
        return width;
    };
    _Label.prototype.update = function update(){};
    _Label.prototype.draw = function draw(){
        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        imp.textAlign = this.textAlign;
        imp.textBaseline = this.textBaseline;
        imp.fillStyle = this.textColor;
        imp.fillText(this.text, this.x, this.y);
        imp.restore();
    };

    // Button
    function _Button(configs){
        // defaults
        this.x = 0;
        this.y = 0;
        this.width = 60;
        this.height = 28;

        this.fillColor = "#000";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.textColor = "#fff";

        this.fontFace = "Helvetica";
        this.fontSize = 30;
        this.title = "Button";
        this.textAlign = "center";

        this.click = function(){};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this,configs);
    }
    _Button.prototype.constructor = _Button;
    _Button.prototype.type = 'Button';
    _Button.prototype.update = function update(){
        if (imp.mouseCapture === true){ // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }
        var newHovered = mouseOverFrame(this);
        if (newHovered !== this.isHovered){
            // hover state change
            if (newHovered === false) { // did exit hover
                this.isDown = false;
            }
            else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered){
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown){
                //down state change
                if (newDown === false){
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    _Button.prototype.draw = function draw(){
        imp.save();
        if (this.isDown){
            imp.fillStyle = this.downColor;
        }
        else if (this.isHovered){
            imp.fillStyle = this.hoverColor;
        }
        else {
            imp.fillStyle = this.fillColor;
        }

        imp.fillRect(this.x,this.y,this.width,this.height);
        imp.setFont(this.fontFace, this.fontSize);
        imp.fillStyle = this.textColor;
        imp.textAlign = this.textAlign;
        imp.textBaseline = "middle";
        imp.fillText(this.title, this.x + this.width/2, this.y + this.height/2);
        imp.restore();
    };


    /////
    function _TextArea(configs){
        this.x = 0;
        this.y = 0;

        this.width = 0;
        this.lineHeight = 1.4;
        this.text = "";

        this.fontFace = "texgyreadventorregular";
        this.fontSize = 30;

        this.textColor = "#fff";
        this.textAlign = "left";

        imp.extend(this,configs);
    }
    _TextArea.prototype.constructor = _TextArea;
    _TextArea.prototype.type = "TextArea";
    _TextArea.prototype.update = function(){};
    _TextArea.prototype.draw = function(){
        imp.save();
        imp.fillStyle = this.textColor;
        imp.textBaseline = "top";
        imp.textAlign = this.textAlign;
        imp.fillStyle = this.textColor;
        imp.setFont(this.fontFace, this.fontSize);

        var lineHeight = this.fontSize * this.lineHeight;

        var lines = this.text.split("\n");
        var x = this.x, y = this.y;
        for (var i = 0; i < lines.length; i++) {

            var words = lines[i].split(' ');
            var line = '';

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + ' ';
                var metrics = imp.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > this.width && n > 0) {
                    imp.fillText(line, x, y);
                    line = words[n] + ' ';
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            imp.fillText(line, x, y);
            y += lineHeight;
        }
        imp.restore();
    };
    function ShadowButton(configs){
        this.x = 0;
        this.y = 0;
        this.width = 124;
        this.height = 30;

        this.shadowColor = "rgba(0,0,0,.5)";

        this.hoverBlend = 0;
        this.tween = null;

        this.strokeShadow = false;
        this.fillColor = "#f00";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.textColor = "#fff";
        this.fontWeight = 400;
        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.title = "Button";
        this.textAlign = "center";

        this.click = function(){};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this,configs);
    }
    ShadowButton.prototype.constructor = ShadowButton;
    ShadowButton.prototype.type = "ShadowButton";
    ShadowButton.prototype.containsPoint = function containsPoint(x,y){
        var radius = this.height / 2;
        var offsetX = this.x + imp.offset.x;
        var offsetY = this.y + imp.offset.y;

        // it's not within the right y range
        if (y < offsetY || y > offsetY + this.height){
            return false;
        }

        if (x < offsetX + radius){
            if (x >= offsetX){
                return pointInCircle(x, y, offsetX + radius, offsetY + radius, radius);
            }
            else {
                return false;
            }
        }
        if (x > offsetX + this.width - radius){
            if (x <= offsetX + this.width){
                return pointInCircle(x, y, offsetX + this.width - radius, offsetY + radius,radius);
            }
            else {
                return false;
            }
        }
        else { // it must be in the center rect
            return true;
        }
    };
    ShadowButton.prototype.tweenBlend = function(val){
        if (this.hoverBlend === val){
            return;
        }
        this.tween = animate(this,{
            hoverBlend : val
        }, 130, function(){
            this.tween = null;
        });
    };
    ShadowButton.prototype.update = function(){
        if (imp.mouseCapture === true){ // someone with a higher Z index is already hovered,
            this.hoverBlend = 0;
            this.isHovered = false;
            this.isDown = false;
            return;
        }
        var newHovered = this.containsPoint(imp.mouse.x,imp.mouse.y);
        if (newHovered !== this.isHovered){
            // hover state change
            if (newHovered === false) { // did exit hover
                if (this.isDown){
                    // did drag out, dont tween
                    this.hoverBlend = 0;
                }
                else {
                    this.tweenBlend(0);
                }
                this.isDown = false;
            }
            else {
                imp.addMousePointer();
                this.tweenBlend(1);
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered){
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown){
                //down state change
                if (newDown === false){
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    ShadowButton.prototype.drawRoundedBox = function drawRoundedBox(){
        var radius = this.height/2;
        imp.beginPath();
        imp.moveTo(this.x + radius,this.y);
        imp.lineTo(this.x + this.width - radius, this.y);
        imp.arc( this.x + this.width - radius, this.y + radius, radius, Math.PI * 1.5, Math.PI / 2, false);
        imp.lineTo(this.x + radius, this.y + this.height);
        imp.arc( this.x + radius, this.y + radius, radius, Math.PI / 2, Math.PI * 1.5, false);
        imp.closePath();
    };
    ShadowButton.prototype.draw = function(){
        // draw down shadow
        imp.save();
        imp.fillStyle = this.shadowColor;
        if (!this.isDown){
            imp.translate(0,3);
        }
        this.drawRoundedBox();
        imp.fill();
        imp.restore();

        imp.save();
        if (this.isDown){
            imp.translate(0,3);
            this.drawRoundedBox();
            imp.fillStyle = this.downColor;
            imp.strokeStyle = this.downColor;
            imp.fill();
        }
        else {
            this.drawRoundedBox();
            if (this.hoverBlend === 1){
                imp.fillStyle = this.hoverColor;
                imp.fill();
            }
            else if (this.hoverBlend === 0){
                imp.fillStyle = this.fillColor;
                imp.fill();
            }
            else {
                imp.fillStyle = this.fillColor;
                imp.fill();

                imp.save();
                imp.globalAlpha *= this.hoverBlend;
                imp.fillStyle = this.hoverColor;
                imp.fill();
                imp.restore();
            }

        }

        if (this.strokeShadow) {
            imp.strokeStyle = this.shadowColor;
            imp.lineWidth = 2;
            imp.stroke();
        }

        imp.setFont(this.fontFace, this.fontSize, this.fontWeight);
        imp.fillStyle = this.textColor;
        imp.textAlign = this.textAlign;
        imp.textBaseline = "middle";
        imp.fillText(this.title.toUpperCase(), this.x + this.width/2, this.y + this.height/2);
        imp.restore();
    };

    function LinkButton(configs){
        this.x = 0;
        this.y = 0;

        this.fillColor = "#0f0";
        this.hoverColor = "#0ff";
        this.downColor = "#ff0";

        this.fontFace = "Helvetica";
        this.fontSize = 14;
        this.text = "Link";
        this.textAlign = "left";
        this.textBaseline = "top";

        this.click = function(){};

        this.isHovered = false;
        this.isDown = false;

        imp.extend(this,configs);

    }
    LinkButton.prototype.constructor = LinkButton;
    LinkButton.prototype.type = 'LinkButton';
    LinkButton.prototype.update = function update(){
        if (imp.mouseCapture === true){ // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }

        imp.save();
        imp.setFont(this.fontFace, this.fontSize);
        var width = imp.measureText(this.text).width;
        imp.restore();

        var offsetX = this.x;
        if (this.textAlign === "center"){
            offsetX -= width/2;
        }
        var newHovered = Imp.mouseOverFrame({
            x: offsetX,
            y: this.y,
            width: width,
            height: this.fontSize+4 // lil bit of padding for odd font face
        });
        if (newHovered !== this.isHovered){
            // hover state change
            if (newHovered === false) { // did exit hover
                this.isDown = false;
            }
            else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered){
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown){
                //down state change
                if (newDown === false){
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    LinkButton.prototype.draw = function draw(){
        imp.save();
        if (this.isDown){
            imp.fillStyle = this.downColor;
        }
        else if (this.isHovered){
            imp.fillStyle = this.hoverColor;
        }
        else {
            imp.fillStyle = this.fillColor;
        }
        imp.setFont(this.fontFace, this.fontSize);
        imp.textAlign = this.textAlign;
        imp.textBaseline = this.textBaseline;
        imp.fillText(this.text,this.x, this.y);
        imp.restore();
    };

    ///// HTML Link Button
    // For some specific cases, you need a real <a> tag, and not a canvas link lookalike. Thats what this is for.
    // It is always above the entire canvas
    function HTMLLinkButton(configs){
        this.x = 0;
        this.y = 0;

        this.text = "Link";
        this.href = "http://www.example.com";

        imp.extend(this,configs);

        this.element = document.createElement('a');
        this.element.style['pointer-events'] = "all";
        this.element.innerHTML = this.text;
        this.element.classList.add('imp-link');
        this.element.setAttribute('target','_blank');
        this.element.setAttribute('href',this.href);
        document.getElementById('imp-link-box').appendChild(this.element);
    }
    HTMLLinkButton.prototype.constructor = HTMLLinkButton;
    HTMLLinkButton.prototype.type = 'HTMLLinkButton';
    HTMLLinkButton.prototype.update = function update(){};
    HTMLLinkButton.prototype.draw = function draw(){
        var scale = {
            x : imp.currentScale.x / imp.dpiScale,
            y : imp.currentScale.y / imp.dpiScale
        };

        this.element.css('transform','scale(' + scale.x + ',' + scale.y + ')');
        var x = (this.x * scale.x + imp.offset.x) - (this.element.width()/2 * (1 - scale.x));
        var y = (this.y * scale.y + imp.offset.y) - (this.element.height()/2 * (1 - scale.y));

        // Again, Firefox text setting offset
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox){
            x -= 3 * (scale.x);
            y -= 3 * (scale.x);
        }
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    };


    function ImgButton(configs){
        this.x = 0;
        this.y = 0;

        //square buttons
        this.width = false; // if not set, defaults to full size
        this.height = false;

        // circle buttons
        this.isCircle = false;
        this.radius = 200;
        this.strokeStyle = "white";
        this.lineWidth = 0; // default no stroke
        this.isClipped = false;
        this.inset = 5; // how many px to inset the img on down state

        this.click = function(){};

        this.isHovered = false;
        this.isDown = false;

        this.src = "";
        this.loaded = false;
        this.loadFailed = false;
        this.retryCount = 0;

        imp.extend(true,this,configs);
        this.loadImage();
    }
    ImgButton.prototype.constructor = ImgButton;
    ImgButton.prototype.type = 'ImgButton';
    ImgButton.prototype.loadImage = function(){
        var self = this;
        this.image = new Image();
        this.image.onload = function(e){
            self.onLoad();
        };
        this.image.onerror = function(e){
            self.onError();
        };
        this.image.src = this.src;
    };
    ImgButton.prototype.onError = function(){
        if (this.retryCount++ < 5){
            this.loadImage();
        }
        else {
            this.loadFailed = true;
        }
    };
    ImgButton.prototype.onLoad = function onLoad(){
        this.loaded = true;
        if (this.isCircle) {
            this.width = this.radius*2;
            this.height = this.width;
        }
    };
    ImgButton.prototype.update = function update(){
        if (imp.mouseCapture === true){ // someone with a higher Z index is already hovered,
            this.isHovered = false;
            this.isDown = false;
            return;
        }

        var newHovered = false;
        if (this.isCircle){
            newHovered = pointInCircle(imp.mouse.x, imp.mouse.y, this.x + this.radius + imp.offset.x, this.y + this.radius + imp.offset.y, this.radius);
        }
        else {
            newHovered = Imp.mouseOverFrame(this);
        }

        if (newHovered !== this.isHovered){
            // hover state change
            if (newHovered === false) { // did exit hover
                this.isDown = false;
            }
            else {
                imp.addMousePointer();
            }
            this.isHovered = newHovered;
        }
        if (this.isHovered){
            imp.mouseCapture = true;
            var newDown = imp.mouse.down;
            if (newDown !== this.isDown){
                //down state change
                if (newDown === false){
                    // did exit down state (clicked!)
                    this.click();
                }
                this.isDown = newDown;
            }
        }
    };
    ImgButton.prototype.draw = function draw(){
        imp.save();

        if (this.loaded){

            var x = this.x, y = this.y, width = this.width, height = this.height;

            if (this.isDown){
                x += this.inset;
                y += this.inset;
                width -= this.inset*2;
                height -= this.inset*2;
            }
            else if (this.isHovered){
                x -= this.inset;
                y -= this.inset;
                width += this.inset*2;
                height += this.inset*2;
            }

            if (this.isCircle){
                // draw a circle
                imp.beginPath();
                imp.arc(x + width/2, y + width/2, width/2, 0, Math.PI * 2, true);
                imp.closePath();

                imp.save(); // save context to avoid clipping stroke
                // clip image to circle
                if (this.isClipped) {
                    imp.clip();
                }
                imp.drawImage(this.image, x, y, width, height);
                imp.restore(); // undo clipping

                // add a stroke
                if (this.lineWidth > 0) {
                    imp.strokeStyle = this.strokeStyle;
                    imp.lineWidth = this.lineWidth;
                    imp.stroke();
                }
            }
            else {
                imp.drawImage(this.image, x, y, width, height);
            }

        }
        else {
            var width = this.width !== false ? this.width : 25;
            var height = this.height !== false ? this.height : 25;

            imp.beginPath();
            imp.strokeStyle = "rgba(0,0,0,0.3)";
            imp.lineWidth = 2;
            imp.moveTo(this.x,this.y);
            imp.lineTo(this.x+width,this.y);
            imp.lineTo(this.x+width,this.y+height);
            imp.lineTo(this.x,this.y+height);
            imp.closePath();
            imp.stroke();

            // draw border
            if (this.loadFailed) {
                imp.strokeStyle = "#f95a6c";
                imp.beginPath();
                imp.moveTo(this.x + width/2 - 5, this.y + height/2 - 5);
                imp.lineTo(this.x + width/2 + 5, this.y + height/2 + 5);
                imp.stroke();

                imp.beginPath();
                imp.moveTo(this.x + width/2 - 5, this.y + height/2 + 5);
                imp.lineTo(this.x + width/2 + 5, this.y + height/2 - 5);
                imp.stroke();
            }
            else {
                // draw loader
                var gradient = imp.createLinearGradient(this.x,this.y,this.x+width,this.y+height);
                gradient.addColorStop(0,"#888");
                gradient.addColorStop(1,"white");

                var offset = performance.now() % 1000 / 1000 * 360 ; // 1000 millis to a full rotation
                var startAngle = 0 + offset;
                var endAngle = 75 + offset; // 75 degree length
                startAngle *= Math.PI/180;
                endAngle *= Math.PI/180;
                imp.lineCap = "round";
                imp.strokeStyle = gradient;
                imp.beginPath();
                imp.arc(this.x + width/2, this.y + height/2, 10, startAngle,endAngle, false);
                imp.stroke();
            }
        }
        imp.restore();
    };


    function Curve(config){
        this.accuracy = 0.01; //smaller the number, more precise the curve, also more expensive to render
        this.lineDash = 5;
        this.lineColor = "#ff2222";
        this.lineWidth = 5;
        this.lineCap = "round";

        this.traversePercent = 0;
        this.traverseLineColor = "#ff8888";

        this.startPoint = {
            x : 0,
            y : 0
        };
        this.endPoint = {
            x : 0,
            y : 0
        };

        this.curveStyle = "bezier";
        this.curveFunc = function(){return {x : 0, y : 0};};
        this._canvasSize = {
            w : -1,
            h : -1
        };
        this.needsRecalc = true;
        imp.extend(true,this,config);
    }
    Curve.prototype.constructor = Curve;
    Curve.prototype.type = "Curve";
    Curve.prototype.update = function update(){
        if (this.needsRecalc === true) {
            this.curveFunc = BezierHelper.createCurve(this.startPoint,this.endPoint,this.curveStyle);
            this.needsRecalc = false;
        }
    };
    Curve.prototype.draw = function draw(){
        var start = this.curveFunc(0);
        var colorEnd = this.curveFunc(this.traversePercent);
        var end = this.curveFunc(1);
        imp.save();

        imp.setLineDash(this.lineDash);
        imp.lineCap = this.lineCap;
        imp.lineWidth = this.lineWidth;
        imp.beginPath();
        imp.moveTo(start.x, start.y);
        imp.strokeStyle = this.lineColor;
        var idx = 0, p;
        for (idx = 0; idx < 1; idx+=this.accuracy){
            p = this.curveFunc(idx);
            imp.lineTo(p.x, p.y);
        }
        imp.lineTo(end.x, end.y);
        imp.stroke();

        imp.beginPath();
        imp.moveTo(start.x, start.y);
        imp.strokeStyle = this.traverseLineColor;
        for (idx = 0; idx < this.traversePercent; idx+=this.accuracy){
            p = this.curveFunc(idx);
            imp.lineTo(p.x, p.y);
        }
        imp.lineTo(colorEnd.x, colorEnd.y);
        imp.stroke();

        imp.restore();
    };


    return {
        mouseOverFrame : mouseOverFrame,
        pointInCircle : pointInCircle,
        Layer : _Layer,
        Button : _Button,
        Image : _Image,
        Label : _Label,
        TextArea : _TextArea,
        ShadowButton : ShadowButton,
        LinkButton : LinkButton,
        HTMLLinkButton : HTMLLinkButton,
        ImgButton : ImgButton,
        Curve : Curve
    };
});
