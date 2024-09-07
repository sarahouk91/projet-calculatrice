let operation = '';
let resultat = 0;

function ajouterEcran(text) {
    const ecran = document.getElementById("ecran");
    //si la fonction effacerEcran renvoi true alors on efface le contenu de l'écran
    if (effacerEcran(ecran.textContent)) {
        ecran.textContent = "";
    }
    ecran.textContent = ecran.textContent + text;
}

//cette fonction sert à évaluer les différentes conditions à verrifier pour savoir si il faut effacer le contenu de l'écan
//il faut effacer le contenu de l'écran qd un calcul vient d'être réalisé et qu'il s'agit d'une opération qui est tape juste après cad qu'on commence une nouvelle opération 
//il faut que opération soit reinitialiser a vide cad qu'il y aucune opération en cours
function effacerEcran(screenContent){
    let test = false;
    if ( estUneOperation(screenContent) || screenContent === String(resultat) && operation ==='' ){
        test = true;
    }
    else {
        test = false;
    }
    return test ;
}
//sert à écrire les opérations 
function estUneOperation(text) {
    return text === '+' || text === '-' || text === '*' || text === '/';
}

function supprimerEcran() {
    //qd on efface le contenu de l'écran, on reaffecte la valeur 0 à resultat ( pour les prochaines itérations)
    resultat = 0;
    document.getElementById("ecran").textContent = "";
}

function definirOperation(op) {
    operation = op;
    //parseFloat  : pour convertir le resultat en reel 
    resultat = parseFloat(document.getElementById("ecran").textContent);
    document.getElementById("ecran").textContent = op;
}

function calculer() {
    //switch case : enchainement de if avec les differentes conditions en case. Le break sert à sortir de la boucle une fois l'opération en question réalisée
    const ecran = document.getElementById("ecran");
    switch (operation) {
        case '+':
            resultat += parseFloat(ecran.textContent);
            break;
        case '-':
            resultat -= parseFloat(ecran.textContent);
            break;
        case '/':
            if (parseFloat(ecran.textContent) === 0) {
                ecran.textContent = "Erreur";
                operation = '';
                return;
            }
            resultat /= parseFloat(ecran.textContent);
            break;
        case '*':
            resultat *= parseFloat(ecran.textContent);
            break;
        default:
            ecran.textContent = "Erreur";
            return;
    }
    ecran.textContent = resultat; //on affiche le résultat
    operation = ''; //on réinitialise opération
}
