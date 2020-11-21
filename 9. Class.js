var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.dip = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
var sx4 = new Car("1000CC");
sx4.dip();
