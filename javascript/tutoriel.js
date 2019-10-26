let listeChap = ["premiersPas", "tuplesListes", "imagesExemples"];
let listeSousPartie = [
    ["variables", "boucles", "conditions", "fonctions"],
    ["tuples", "listes"],
    []
];
let contenuDiv = {}; //j'en fais un objet plutôt qu'une liste
let numImage = 0;
let listeImages = ["testsVariables.PNG", "testsBoucles.PNG", "testsConditions.PNG", "testsFonctions.PNG", "testsTuples.PNG", "testsListes.PNG"];
let commentDiapo = ["Test de commandes sur des variables",
    "Tests sur des boucles",
    "Tests sur des instructions conditionnelles",
    "Tests sur des fonctions",
    "Tests sur des tuples",
    "Tests sur des listes"
]

function initialization() {
    //Ma première idée était de cacher le contenu de chaque div
    /*for (let i=0;i<listeDiv.length;i++){
      document.getElementById(listeDiv[i]).style.visibility="hidden";
    }*/
    //Je récupère le contenu de chaque div de la page
    //Tout d'abord ceux des chapitres (de listeChap)
    for (let i = 0; i < listeChap.length; i++) {
        contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHTML;
    }
    //Et ceux des sous-parties
    for (i = 0; i < listeChap.length; i++) {
        if (listeSousPartie[i].length > 0) {
            for (let j = 0; j < listeSousPartie[i].length; j++) {
                contenuDiv[listeSousPartie[i][j]] = document.getElementById(listeSousPartie[i][j]).innerHTML;
            }
        }
        contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHTML;
    }
    //On détruit enfin tout ce que contenait la page
    for (i = 0; i < listeChap.length; i++) {
        document.getElementById(listeChap[i]).innerHTML = ""
    }

    //Je crée enfin une div qui accueillera le contenu de ce qui sera affiché
    let newDiv = document.createElement('div');
    newDiv.id = "divConteneur";
    document.body.appendChild(newDiv);

    //gestion du clic sur un bouton
    for (prop in contenuDiv) {
        document.getElementById("nav" + String(prop)).onclick = function() {
            let idtexte = this.id.substring(3); //L'id du menu est de la forme nav... donc j'enlève les 3 premiers caractères
            document.getElementById("divConteneur").innerHTML = contenuDiv[idtexte];
            if (idtexte = "imagesExemples") {
                actionBtns(); //JE remets les actions sur les boutons
            }
        }
    }

}

function actionBtns() {
    //Action des boutons "Précédent" et "Suivant" du diaporama
    document.getElementById("precedent").style.visibility = "hidden"
    document.getElementById("precedent").onclick = function() {
        numImage = Math.max(numImage - 1, 0); //
        document.getElementById("imageDiapo").src = "images/" + listeImages[numImage];
        if (numImage == 0) { //Je cache le bouton précédent"
            document.getElementById("precedent").style.visibility = "hidden";
            document.getElementById("precedent").style.display = "none";
        }
        document.getElementById("suivant").style.visibility = "visible";
        document.getElementById("suivant").style.display = "inline";
        document.getElementById("commentDiaporama").innerHTML = commentDiapo[numImage];
    }
    document.getElementById("suivant").onclick = function() {
        numImage = Math.min(numImage + 1, listeImages.length - 1); //
        document.getElementById("imageDiapo").src = "images/" + listeImages[numImage];
        if (numImage == listeImages.length - 1) { //Je cache le bouton précédent"
            document.getElementById("suivant").style.visibility = "hidden";
            document.getElementById("suivant").style.display = "none";
        }
        document.getElementById("precedent").style.visibility = "visible";
        document.getElementById("precedent").style.display = "inline"
        document.getElementById("commentDiaporama").innerHTML = commentDiapo[numImage]
    }
}

window.onload = initialization;
