function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.getDistance = function(point2){
    var xDiff = this.x - point2.x;
    var yDiff = this.y - point2.y;

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function Circle(x, y, r){
    Point.call(this, x, y);
    this.r = r;
}

Circle.prototype = Object.create(Point.prototype);
Circle.prototype.getCircumference = function(){
    return 2 * 3.1415 * this.r;
}
Circle.prototype.getArea = function(){
    return 3.1415 * this.r * this.r;
}
Circle.prototype.intersects = function(c2){
    var xDiff = c2.x - this.x;
    var yDiff = c2.y - this.y;
    var diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(this.r + c2.r < diff){
        return true;
    }

    return false;
}

function Rectangle(x,y,a,b){
    Point.call(this,x,y);
    this.a = a;
    this.b = b;
}

Rectangle.prototype = Object.create(Point.prototype);

Rectangle.prototype.getPerimeter = function(){
    return 2 * this.a + 2 * this.b;
}

Rectangle.prototype.getArea = function(){
    return this.a * this.b;
}

Rectangle.prototype.getLengthOfDiagonals = function(){
    return Math.sqrt(this.x*this.x + this.y*this.y);
}

Rectangle.prototype.getBiggestCircle = function(){
    var side = Math.min(this.a, this.b);

    return new Circle(this.x + this.a/2, this.y + this.b/2, side/2);
}


let rect = new Rectangle(0,0,3,4);

function RectanglePrism(x,y,a,b,c){
    Rectangle.call(this, x,y,a,b);
    this.c = c;
}

RectanglePrism.prototype = Object.create(Rectangle.prototype);
Object.defineProperty(RectanglePrism.prototype, 'constructor', {
    value:RectanglePrism,
    writable:false,
    enumerable:false
});

RectanglePrism.prototype.getVolume = function(){
    return this.a * this.b * this.c;
}

let recPrism1 = new RectanglePrism(0,0,3,3,3);