/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_griglia= [];

function addIscrivi(){
    let newnome =document.getElementById("pilota").value;
    let newauto = document.getElementById("macchina").value;
    
    let gara ={
        nome: newnome,
        auto: newauto,
     griglia: function(){
         let ris = this.nome + "" + " con la " + this.auto + "<br>";
         return ris;
     }   
    };
    ar_griglia.push(gara);
    
}
 function stampaIscrizioni (){
     let tx="";
     
     for(let i=0;i<ar_griglia.length; i++){
    let es= ar_griglia [i];
    tx+= es.griglia();
    
 }

document.getElementById("div_stampa").innerHTML=tx + tx;

 }
 
 function addGrigliadipartenza (){
    
    for(let i=0; i<ar_griglia.length;i++){
    let es = ar_griglia [i];
    es.griglia = i + 1;
    
   printRis();
    }
}; 