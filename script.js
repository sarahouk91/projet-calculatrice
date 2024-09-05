let operation = '';
let resultat = 0;

function ajouterEcran(text) {
    const ecran = document.getElementById("ecran");
    if (estUneOperation(ecran.textContent) || (ecran.textContent === resultat.toString() && operation === '')) {
        ecran.textContent = "";
    }
    ecran.textContent = ecran.textContent + text;
}

function estUneOperation(text) {
    return text === '+' || text === '-' || text === '*' || text === '/';
}

function supprimerEcran() {
    resultat = 0;
    document.getElementById("ecran").textContent = "";
}

function definirOperation(op) {
    operation = op;
    resultat = parseFloat(document.getElementById("ecran").textContent);
    document.getElementById("ecran").textContent = op;
}

function calculer() {
    switch (operation) {
        case '+':
            resultat += parseFloat(document.getElementById("ecran").textContent);
            document.getElementById("ecran").textContent = resultat;
            break;
        case '-':
            resultat -= parseFloat(document.getElementById("ecran").textContent);
            document.getElementById("ecran").textContent = resultat;
            break;
        case '/':
            resultat /= parseFloat(document.getElementById("ecran").textContent);
            document.getElementById("ecran").textContent = resultat;
            break;
        case '*':
            console.log(resultat, parseFloat(document.getElementById("ecran").textContent), resultat * parseFloat(document.getElementById("ecran").textContent))
            resultat *= parseFloat(document.getElementById("ecran").textContent);
            document.getElementById("ecran").textContent = resultat;
            break;
        default:
            document.getElementById("ecran").textContent = "Erreur";
    }
    operation = '';
}
