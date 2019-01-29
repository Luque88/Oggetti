/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ar_griglia= [];

function Partecipante(pilota,auto){
     this.nome= nome;
     this.auto= auto;
     this.griglia= "";
     this.risultato= "";
       
     this.htmlTR= function(){
         let ris = "<tr><td>"   + this.nome 
                   "<tr><td>"   + this.auto 
                   "<tr><td>"   + this.risultato 
                   "<tr><td>"   + this.griglia
                   
         return ris;
     }   
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



function addIscrivi(){
    let newnome =document.getElementById("pilota").value;
    let newauto = document.getElementById("macchina").value;


//creo oggetto partecipante
let partecipante= new Partecipante(newnome, newauto);

ar_griglia.push(newpartecipante);
document.getElementById("nome_pilota").value = "";
document.getElementById("nome_auto").value = "";
document.getElementById("nome_pilota").focus();
printRis();

}
