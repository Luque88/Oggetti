/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ar_esami= [];

  function addEsami(){ 
       let newnome =document.getElementById("in.nome").value;
       let newcognome =document.getElementById("in.cognome").value;
       let newvoto =document.getElementById("in.voto").value *1;
      //creo oggetto esame
       let alunno ={
          nome: newnome,
          cognome: newcognome,
          voto: newvoto,
          html: function () {
            let ris = this.nome + "" + this.cognome + " ha preso " + this.voto + " <br> ";
            return ris;
        }
      };
      
      ar_esami.push(alunno);
      
  }      

function stampaRisultati(){
    let tx="";
    let txo="";
    
    for(let i=0;i<ar_esami.length; i++){
    let es= ar_esami [i];
   // tx+=es.nome + "" + es.cognome + " ha preso " + es.voto + "<br>";
    tx += es.html();
  }
//output
 document.getElementById("div_risultato").innerHTML=tx + "<br>---<br>" + txo;
 
} 
 
 

    
