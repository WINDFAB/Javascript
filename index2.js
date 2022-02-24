class Personnage {
    constructor(pseudo,classe) {
        this.pseudo = pseudo
        this.classe = classe
        this.inventaire = []
    }
}

class Equipement {
    constructor(nom,type,degat) {
        this.nom = nom
        this.type = type
        this.degat = degat
    }
}

var perso1 = new Personnage("Fab","Chevalier")
var perso2 = new Personnage("Anne","Magicienne")

var epee = new Equipement("Excalibur","Corps à corps",10)
var sort = new Equipement("Envoutement","Distance",100)

console.log(perso1)
console.log(perso2)
console.log(epee)
console.log(sort)

perso1.inventaire.push(epee) //on ajoute l'épée au personnage
console.log(perso1)
