class Shape{

    Area:number 
   
    constructor(a:number) { 
        this.Area = a 
        console.log("I'm here Shape")
    } 

    engine():void { 
        console.log("I'm engine in shape") 
     } 
 } 

class Circle extends Shape { 
    yo:number

    constructor(a:number) {  
        console.log("I'm here Circle")
        super(a)
        this.yo=a
    } 

    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 

    engine():void { 
        console.log("I'm engine in circle")
        this.disp()
        super.engine()
     } 
 }


 
var obj = new Circle(223); 
obj.disp()
obj.engine()