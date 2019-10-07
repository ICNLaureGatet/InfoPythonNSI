let listeChap = ["premiersPas","tuplesListes"];
let listeSousPartie = [["variables","boucles","conditions"],["tuples","listes"]];
let contenuDiv = {};//j'en fais un objet plutôt qu'une liste
function initialization() {
    //Ma première idée était de cacher le contenu de chaque div
    /*for (let i=0;i<listeDiv.length;i++){
      document.getElementById(listeDiv[i]).style.visibility="hidden";
    }*/
    //Je récupère le contenu de chaque div de la page
    //Tout d'abord ceux des chapitres (de listeChap)
    for(let i=0;i<listeChap.length;i++){
      contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHtml;
    }
    //Et ceux des sous-parties
    for(i=0;i<listeChap.length;i++){
      for(let j=0;j<listeSousPartie.length;j++){
        contenuDiv[listeSousPartie[i][j]] = document.getElementById(listeSousPartie[i][j]).innerHTML;
      }
      contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHTML;
    }
    //On détruit enfin tout ce que contenait la page
    for(i=0;i<listeChap.length;i++){
      document.getElementById(listeChap[i]).innerHTML = ""
    }

    //Je crée enfin une div qui accueillera le contenu de ce qui sera affiché
    let newDiv = document.createElement('div');
    newDiv.id = "divConteneur";
    document.body.appendChild(newDiv);

    //gestion du clic sur un bouton
    for (prop in contenuDiv){
      document.getElementById("nav"+String(prop)).onclick = function() {
        let idtexte = this.id.substring(3);//L'id du menu est de la forme nav... donc j'enlève les 3 premiers caractères
        document.getElementById("divConteneur").innerHTML = contenuDiv[idtexte];
        console.log("idTexte:",idtexte,"  ",contenuDiv[idtexte])
      }
    }

}
function afficher(id){
  //Cette fonction va afficher le contenu de la div concernée, ou plutôt va compléter la div "divConteneur"
  document.getElementById("divConteneur").innerHTML = contenuDiv.id
}

window.onload = initialization;