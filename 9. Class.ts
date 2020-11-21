class Car{


    engine:string;

    constructor(engine:string){
        this.engine=engine
    }
    
    display():void{
        console.log("Engine is : "+this.engine)
    }

}

var sx4=new Car("1000CC")
sx4.display()