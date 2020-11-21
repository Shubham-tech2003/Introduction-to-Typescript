var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
        console.log("I'm here Shape");
    }
    Shape.prototype.engine = function () {
        console.log("I'm engine in shape");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(a) {
        var _this = this;
        console.log("I'm here Circle");
        _this = _super.call(this, a) || this;
        _this.yo = a;
        return _this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    Circle.prototype.engine = function () {
        console.log("I'm engine in circle");
        this.disp();
        _super.prototype.engine.call(this);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.disp();
obj.engine();
