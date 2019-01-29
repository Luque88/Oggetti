/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Bottiglia(marca, capacita, qta_corrente){
    this.marca= marca;
    this.capacita= capacita;
    this.qta_corrente= qta_corrente;
    this.colore= "azure";
    this.bevo = function (quanto) {
        let ris= 0;
        //decremento la quantità bevuta
        //se qta maggiore di quanto ok ...
        if (this.qta_corrente - quanto >=0) {
        this.qta_corrente = this.qta_corrente - quanto;
        ris = quanto;
        }
        else {
           ris = 0;
        }
        return ris;
    }
    
     this.riempioFull = function (quanto) {
        let ris=0;
        //decremento la quantità bevuta
        //se sta maggiore di quanro ok ...
        //mi salvo quanto ce ne era
        let qt_prima= this.qta_corrente; 
        //sporco ma metto tutto
        this.qta_corrente = this.qta_corrente + quanto*1;
        // se ho sforato guardo quanto era prima e lo sottraggo alla capacità della bottiglia
        if (this.qta_corrente > this.capacita){
            this.qta_corrente = this.capacita;
            ris = this.capacita-qt_prima;
        }else {// tutto ok l'ho riempito di quanto
            ris=quanto;
        }
        return ris;
    }
    
    
    
    this.riempio = function (quanto) {
        let ris=0;
        //decremento la quantità bevuta
        //se sta maggiore di quanro ok ...
        if (this.qta_corrente + quanto*1 <= this.capacita) {
        this.qta_corrente = this.qta_corrente + quanto;
        ris = quanto;
        }
        else {
           ris = this.capacita-this.qta_corrente;
        }
        return ris;
    }
    
  this.stato= function () {
      let ris=""
      // Sono una bottiglia Santanna di capacita' 100 e me ne rimangono 60
      ris = "Sono una bottiglia" + this.marca + "di capacita'" + this.capacita + "e me ne rimangono 60" + this.qta_corrente;
      return ris;
  }  
}

//creo variabili globali una volta sola
var bot;
var dris;
var sp_bevo;
var sp_riempio;
var in_riempio;
var in_bevo;

function refresh(){
    sp_bevo.innerHTML=in_bevo.value;
    sp_riempio.innerHTML=in_riempio.value;
}

function disBottiglia(){
    // mi serve la qta corrente
    let qta=bot.qta_corrente;
    let heightMax=document.getElementById("dbox").client.Height;
    let cap=bot.capacita;
    let newh=heightMax*qta/cap;
    document.getElementById("dbot").style.height=newh +px;
    
}




function creaBottiglia (){
    //inizializzo oggetti globali
    dris = document.getElementById("div_ris");
    sp_bevo = document.getElementById("sp_bevo");
    sp_riempio=document.getElementById("sp_riempio");
    in_bevo=document.getElementById("in_quantobevo");
    in_riempio=document.getElementById("in_quantoriempio");
    
    let marca= document.getElementById("in_marca").value;
    let capacita= document.getElementById("in_capacita").value;
    bot = new Bottiglia (marca, capacita,capacita);
    dris = document.getElementById("div_ris");
    let prn=bot.stato();
    dris.innerHTML=prn;
    disBottiglia();
    
}

function bevoBottiglia (){
    //recupero le info
    let bevoqta= in_bevo.value *1;
    //eseguo la bevuta
    let ris=bot.bevo(bevoqta);
    //preparo l'output
    let prn="Sono riuscito a bere " + ris;
    prn += "<br>" + bot.stato();
    //visualizzo l'output
    dris.innerHTML=prn;
    disBottiglia();
}
 function riempioBottiglia (){
     let riempioqta= in_riempio.value *1;
     let ris=bot.riempio(riempiqta);
     let prn="Sono riuscito a riempire" + ris;
     prn += "<br>" + bot.stato();
     dris.innerHTML=prn;
     disBottiglia();
 }





/*
 dvs = document.getElementById("div_stato");
 var bot = new Bottiglia() ("santanna", 100, 100);
 var prn = bot.stato();
 prn += "<br> ho bevuto" + bot.bevo(60);
 prn += "<br>" + bot.stato();
 prn += "<br>" + bot.stato(60);
 prn= bot.stato();
 prn = prn + "<br>" + bot.stato(10);
 
 //vedo output in div dvs
 dvs.innerHTML=prn;
 */
 
 

 
 
