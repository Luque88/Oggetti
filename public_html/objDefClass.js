/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lega;

function init(){
//creo la lega
 lega= new Lega("IFL", "campionato italiano di football americano con tre divisioni");
//crea arbitro
let arbr = new Arbitro("mario", "222222", "009", "M");
//crea giocatori e squadre
var sq= new Team("Mastini","ivrea","grigio bianco","seconda divisione");
var gioc = new Giocatore("mario", "89900", "011", "M", 88, "quarterback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("fabio spaccatutto", "484484", "011", "M", 123, "lineback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("paolo fer", "480484", "010", "M", 122, "lineback");
sq.compraGiocatore(gioc);
lega.aggiungiSquadra(sq);
//creo altra squadra e giocatori
var sq= new Team("Sirbons","ivrea","rossi bianco","seconda divisione");
var gioc = new Giocatore("mario", "89900", "011", "M", 88, "quarterback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("fabio tred", "484484", "011", "M", 153, "lineback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("paul pirus", "480384", "012", "M", 222, "lineback");
sq.compraGiocatore(gioc);
lega.aggiungiSquadra(sq);
//creo altra squadra e giocatori
var sq= new Team("Lancieri","novara","azzurri","terza divisione");
var gioc = new Giocatore("mario", "89900", "011", "M", 88, "quarterback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("fabio rossi", "484484", "081", "M", 153, "lineback");
sq.compraGiocatore(gioc);
gioc = new Giocatore("paul bianchi", "480384", "015", "M", 222, "lineback");
sq.compraGiocatore(gioc);
lega.aggiungiSquadra(sq);
var camp= new Campionato("stagione 2019");
part= new Partita("2019-02-02","Olbia","Mastini","Sirbons",19);
camp.aggiungiPartita(part);
part = new Partita("2019-03-02","ivrea", "Sirbons","Mastini", 19);
camp.aggiungiPartita(part);
part= new Partita("2019-02-22","Ivrea","Mastini","Sirbons",19);
camp= new Campionato("stagione 2019");
part = new Partita("2019-03-22","Novara", "Lancueri","Sirbons", 19);
camp.aggiungiPartita(part);
lega.aggiungiCampionato(camp);
document.getElementById("d_ris").innerHTML = lega.el_campionati[0].visPartite();
}

function selPartita(){
    let ris=0;
    return ris;
}
function addRisultato(){
    let pt1=document.getElementById("inpt1").value*1;
    let pt2=document.getElementById("inpt2").value*1;
    let indexP=document.getElementById("s_partite").value;
    let camp=lega.el_campionati[0];
    let part=camp.el_partite[indexP];
    part.pt1=pt1;
    part.pt2=pt2;
 document.getElementById("d_ris").innerHTML = lega.el_campionati[0].visPartite();   
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


