// Compose a Curve function out of a start, end, and style preference, where a curve is a function which accepts `t` between 0.0 and 1.0.
// curve(0) = the first {x: x,y: y} position of the start of the curve, and curve(1) is the end 


// returns a {x:number,y:number} where x,y = distance t along bezier curve defined by p0,1,2,3
// t : is a value between 0 and 1 which represents point on the bezier line (.5 is 50% along the curve)
// points are { x : number, y : number } objects
// p0 is x,y to start from
// p1 is the control point attached to p0
// p2 is the control point attached to p3
// pr is the x,y to end at
function bezierCurve(t, p0,p1,p2,p3){
    var cX = 3 * (p1.x - p0.x),
    bX = 3 * (p2.x - p1.x) - cX,
    aX = p3.x - p0.x - cX - bX;

    var cY = 3 * (p1.y - p0.y),
    bY = 3 * (p2.y - p1.y) - cY,
    aY = p3.y - p0.y - cY - bY;

    var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
    var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;

    return {x: x, y: y};
}

// calculates a curve and stores it in a helper function for value retrival
function createCurve(start, end, style){
    style = (style !== undefined ? style : "bezier");

    if (style === "bezier"){
        var segment = createCurveSegment(start, end, "default");
        return function curve(t){
            return segment(t);
        };
    }
    else if (style === "double"){
        var halfPoint = pointBetween(start,end,0.5);
        var segment1 = createCurveSegment(start, halfPoint, "default");
        var segment2 = createCurveSegment(halfPoint, end, "default");
        return function curve(t){
            var segment, distTraveled, duration;
            if (t <= 0.5){
                segment = segment1;
                distTraveled = 0;
                duration = 0.5;
            }
            else {
                segment = segment2;
                distTraveled = 0.5;
                duration = 0.5;
            }
            return segment((t - distTraveled) * (1 / duration));
        };
    }
}

// given two { x,y } points, find a point between them which is <percentage> distance between them.
// ex, percentage of .5 will return the midpoint. the lower the number, the closer to start
function pointBetween(start,end,percentage){
    var x = start.x + percentage * (end.x - start.x);
    var y = start.y + percentage * (end.y - start.y);
    return {
        x : x,
        y : y
    };
}

// distance between two {x,y} points
function distance(p1,p2){
    return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

function findLine(p1,p2){
    var slope, yIntercept;
    slope = (p2.y - p1.y) / (p2.x - p1.x);
    yIntercept = p1.y - (slope * p1.x);

    return {
        m : slope,
        b : yIntercept,
    };
}

function perpendicularLine(line){
    return {
        m : -1 / line.m,
        b : line.b
    };
}

function findYOnLine(x,line){
    return line.m * x + line.b;
}

function findXOnLine(y,line){
    return y / line.m - line.b;
}

function createCurveSegment(start, end, style){
    var startControl = pointBetween(start,end,0.33);
    var endControl = pointBetween(start,end,0.66);
    var dist = distance(start,end);

    if (style === "default"){
        if (start.y > end.y){
            startControl.y -= dist/4;
            endControl.y += dist/4;
        }
        else {
            startControl.y += dist/4;
            endControl.y -= dist/4;
        }
        if (start.x > end.x) { // eastbound
            startControl.x += dist/4;
            endControl.x -= dist/4;
        }
        else {
            startControl.x -= dist/4;
            endControl.x += dist/4;
        }
    }

    return function segment(t){
        return bezierCurve(t,start,startControl,endControl,end);
    };
}


module.exports = {
    createCurve : createCurve
};
