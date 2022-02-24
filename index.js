const  animal = {
    name:"",
    age:"",
    noise:"",
    makeNoise: function(animalNoise) {
        console.log("i make " + animalNoise)
    }
}

var chat1 = Object.create(animal)
chat1.name="Félix"
chat1.age=5
chat1.noise="meow"
console.log(chat1)
chat1.makeNoise(chat1.noise)


var chien1 = Object.create(animal)
chien1.name="Medor"
chien1.age=10
chien1.noise="waff"
console.log(chien1)
chien1.makeNoise(chien1.noise)

class Animal {
    constructor(nom, race) {
        this.nom = nom
        this.race = race
    }
}

var chat = new Animal("Félix","Européen")
console.log(chat)

class Chat extends Animal {
    constructor(nom, race,cri) {
        super(nom, race)
        this.cri = cri
    }
}

var chat1 = new Chat("Félix", "Européen", "Miaulement")
console.log(chat1)



