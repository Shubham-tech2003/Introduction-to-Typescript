function display(id:number,name:string,mail?:string){
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail!=undefined)  
    console.log("Email Id",mail); 
 }
 display(123,"Soumyadip");
 display(111,"Soumyadip","Soumyadip.note@gmail.com");