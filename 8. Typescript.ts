interface IPerson{

        firstname:string,
        lastname:string,
        sayHi()
}




var customer:IPerson = { 
    firstname:"Soumyadip",
    lastname:"Chowdhury", 
    sayHi: ()=>{return "Hey :)"} 
 } 
 

 console.log("Customer Object ") 
 console.log(customer.firstname) 
 console.log(customer.lastname) 
 console.log(customer.sayHi())  
 
var customer1:IPerson = { 
    firstname:"Soumyadip",
    lastname:"Chowdhury", 
    sayHi: ():string=>{return "Hey :)"} 
 } 
 

 console.log("Customer1 Object ") 
 console.log(customer1.firstname) 
 console.log(customer1.lastname) 
 console.log(customer1.sayHi())  
 