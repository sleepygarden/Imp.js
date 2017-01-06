module.exports = (function testSuite(Imp){
    Imp.injectFPSTracker();

    var button = new Imp.Button({
        x : 20,
        y : 20,
        width : 200,
        height : 120,
        fillColor : "cyan",
        hoverColor : "red",
        click : function(){
            console.log('click');
        }
    });

    var topbutton = new Imp.Button({
        x : 100,
        y : 80,
        width : 200,
        height : 120,
        title : "on Top",
        textColor : "#ff36f3",
        click : function(){
            console.log('click! top');
        }
    });

    var shadowbutton = new Imp.ShadowButton({
        x : 20,
        y : 160,
        width : 200,
        height : 120,
        fillColor : "cyan",
        hoverColor : "red",
        click : function(){
            console.log('click');
        }
    });

    var label = new Imp.Label({
        x: 20,
        y : 300,
        text : "Hello, World!",
        fontSize : 40
    });

    var testImg = new Imp.Image({
        x : 20,
        y : 340,
        width : 200,
        height : 200,
        src : "http://www.freudenbergs.de/bert/publications/teapot-anim.gif"
    });

    var txtArea = new Imp.TextArea({
        x : 20,
        y : 540,
        width : 150,
        text : 'Hello world! I am some reasonably long text.\nWith\na few line breaks in it!'
    });

    var linkButton = new Imp.LinkButton({
        x : 20,
        y : 600,
        text : "click me! i'm a link~",
        click : function(){
            console.log('clicked link');
        }
    });

    var imgButton = new Imp.ImgButton({
        x : 400,
        y : 50,
        isCircle : true, // default false
        radius : 50,
        strokeStyle : "red", //"#445566"; //set the stroke to the bg color for smoother clipping effect
        lineWidth : 5, // if larger than 0 circle has a border
        isClipped : true, // default false
        src : "https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png",
        click : function(){
            console.log('clicked img button');
        }
    });

    var imgButtonSq = new Imp.ImgButton({
        x : 400,
        y : 150,
        width : 150,
        height : 150,
        inset : 50,
        src : "https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png",
        click : function(){
            console.log('clicked sq image button');
        }
    });

    return function(){
        var layer = new Imp.Layer({
            children : [
                button,
                topbutton,
                testImg,
                label,
                txtArea,
                shadowbutton,
                linkButton,
                imgButton,
                imgButtonSq
            ]
        });
        return layer;
    };
});
