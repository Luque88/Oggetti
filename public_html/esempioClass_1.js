/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//prima parte definizione classi e sottoclassi

class Anagrafica {
    constructor(nome,tel,cod,sex){
        this.nome=nome.toUpperCase();
        this.tel=tel;
        this.cod=cod *1;
        let s=sex;
        s=s.substr(0,1).toUpperCase();
        this.sex=s;
    }
    saluta(){
        let ris="";
        let frasesex="";
        //salve sono luca curto, sono un uomo e il mio telefono è 333999000
        if (this.sex=="M"){
            frasesex="un uomo";
        } else {
            frasesex="una donna";
        
        }
        ris="Salve sono " + this.nome + ", sono " + frasesex + " e il mio telefono e' " + this.tel;
        return ris;
    }
}

class Giocatore extends Anagrafica {
    
    constructor(nome,tel,cod,sex,peso,ruolo){
        super(nome,tel,cod,sex);
        this.peso=peso;
        this.nome=nome; 
        this.ruolo=ruolo;
    }
     saluta(){
        let ris="";
        let frasesex="";
        if (this.sex=="M"){
            frasesex="un giocatore uomo";
        } else {
            frasesex="una giocatrice donna";
        
        }
        ris="Salve sono " + this.nome + ", sono " + frasesex + " e il mio ruolo e' " + this.ruolo;
        return ris;
    }
}
      
class Arbitro extends Anagrafica {
    
    constructor(nome,tel,cod,sex,categoria){
        super(nome,tel,cod,sex);
        this.categoria=categoria;
       
     }
     saluta(){
        let ris="";
        let frasesex="";
          if (this.sex=="M"){
            frasesex="un arbitro uomo";
        } else {
            frasesex="un arbitro donna";
        
        }
        ris="Salve sono " + this.nome + ", sono " + frasesex + " e la mia categoria e' " + this.categoria;
        return ris;
    }
}
      
class Team {
    constructor(nome,citta,colori,categoria){
        this.nome=nome;
        this.citta=citta;
        this.logo="";
        this.colori=colori;
        this.categoria=categoria;
        this.el_gioc=[];
        
    }
    elencoGiocBr(){
        let ris="";
         for (let i=0; i<this.el_gioc.length; i++){
            
           ris+=this.el_gioc[i].codice + "-" + this.el_gioc[i].nome + "-" + this.el_gioc[i].ruolo + " <br ";
            
        }
        return ris;
    }
    
    
    visTeam(){
        let ris = "";
        //squadra inter con sede a milano di prima categoria
        ris="Squadra " + this.nome + " con sede a " + this.citta + " di " + this.categoria + " categoria ";
        let el=this.elencoGiocBr();
        return ris + " <br> " + el;
    }
    compraGiocatore(objGiocatore){
        //allelenco dei giocatori della squadra aggiungo il giocatore che mi hai passato
        this.el_gioc.push(objGiocatore);
    }
    vendiGiocatore(codice){
        for (let i=0; i<this.el_gioc.length; i++){
            
            let cod=this.el_gioc[i].codice;
            if (codice==cod) // e' quello da togliere
            {
                // togliere 1 elemento i-esimo da array
                this.el_gioc.splice(i,1);
                break;
            }
        }
    }
}
  class Campionato {
      constructor(stagione){
          this.stagione=stagione;
          this.el_partite=[];
      }
      aggiungiPartita(objPartita){
          this.el_partite.push(objPartita);
      }
      visPartite(){
          let ris="";
          let elp="";
          let i=0;
           this.el_partite.forEach(
                 function (myp) {
                   elp+= "<option value='' + i + '>" +  myp.data + " - " + myp.sq1 + " vs " + myp.sq2 + " </option> ";
                   i++;
         }
      );
          
       ris="<select  multiple id='s_partite'>" + elp + "</select>";   
          return ris;
      }
  }
  
  
  
  
class Lega {
    constructor(nome,descrizione){
        this.nome=nome;
        this.descrizione=descrizione;
        this.el_squadre=[];
        this.el_arbitri=[];
        this.el_campionati=[];
        
     } 
     
      aggiungiCampionato(objCampionato){
            this.el_campionati.push(objCampionato);
    } 
   
     
     
     aggiungiArbitro(objArbitro){
            this.el_arbitri.push(objArbitro);
    } 
   
     
     
     aggiungiSquadra(objSquadra){
        //allelenco dei giocatori della squadra aggiungo il giocatore che mi hai passato
        this.el_squadre.push(objSquadra);
    } 
     
     
     
    visLega(){
     let ris="";
     /*lega IFL
      * campionato a squadre...
      * milan
      * inter
      * juve
      */
     ris += this.nome + "<br>" + this.descrizione + "<br>";
     let els="";
     
     for (let i=0; i<this.el_squadre.length; i++){
         els+=this.el_squadre[i].nome + "<br>";
     }
     // altro modo per scorrere array di oggetti in javascript
         els="";
         this.el_squadre.forEach(
                 function (mysq) {
                   els+= mysq.visTeam();
         }
      );
   
        return ris + "<br>" + els;
   }  

 }
 
  class Partita {
      constructor(data,luogo,sq1,sq2,arbitro){
          this.data=data;
          this.luogo=luogo;
          this.sq1=sq1;
          this.sq2=sq2;
          this.arbitro=arbitro;
          this.risultato="da giocare";
      }
      
  }
 

/*
const uomo = new Anagrafica("luca curto", "333999000", "007","Maschio");
alert(uomo.saluta());
const arbr = new Arbitro("mario", "222222", "009", "M",88,"quarterback");
alert(arbr.saluta());


var sq= new Team("Mastini","ivrea","grigio bianco","seconda divisione");

var gioc = new Giocatore("mario", "89900", "011", "M", 88, "quarterback");
sq.compraGiocatore(gioc);

gioc = new Giocatore("fabio spaccatutto", "484484", "011", "M", 123, "lineback");
sq.compraGiocatore(gioc);

gioc = new Giocatore("paolo fer", "480484", "010", "M", 122, "lineback");
sq.compraGiocatore(gioc);

alert (sq.visTeam());

const lega= new Lega("IFL", "campionato italiano di football americano con tre divisioni");

lega.aggiungiSquadra(sq);

alert(lega.visLega());

var camp= new Campionato("stagione 2019");
var part;
part= new Partita("2019-02-02","olbia","mastini","sirbons",19);
camp= new Campionato("stagione 2019");

part = new Partita("2019-05-06","ivrea", "mastini","cagliari", 19);
camp.aggiungiPartita(part);

part = new Partita("2019-07-06","cagliari", "terryfing","cagliari", 19);
camp.aggiungiPartita(part);

part = new Partita("2019-09-06","ivrea", "mastini","terryfing", 19);
camp.aggiungiPartita(part);

lega.aggiungiCampionato(camp);
lega.el_campionati[0].aggiungiPartita(part);
document.write(lega.el_campionati[0].visPartite());
*/

