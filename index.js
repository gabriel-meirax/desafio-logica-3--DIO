class hero {
    constructor(name, age, type) {
        if (typeof name === "string" && typeof age === "number") {
            this.name = name
            this.age = age

            const verificarAtaque = this.attack.find(attack => attack.type === type);
            if (verificarAtaque) {
                this.type = type
                this.attackType = verificarAtaque.attackType
                console.log("Herói criado com sucesso")
            } else {
                console.log("Classe de herói indisponível")
            }
        } else {
            console.log("A criação do herói falhou")
        }
    }
    attack = [
        { attackType: "magia", type: "mago" },
        { attackType: "espada", type: "guerreiro" },
        { attackType: "artes marciais", type: "monge" },
        { attackType: "shuriken", type: "ninja" }
    ]

    atacar() {
        if (this.type) {
            console.log(`O ${this.type} atacou usando ${this.attackType}`)
        } else {
            console.log("indisponível")
        }
    }
}
console.log()
let personagem1 = new hero("Roberto", 18, "guerreiro")
personagem1.atacar()
console.log()
let personagem2 = new hero("Januário", 27, "mago")
personagem2.atacar()
console.log()
let personagem3 = new hero("Robson", 36, "atirador")
personagem3.atacar()
console.log()
let personagem4 = new hero("Dagoberto", 45, "monge")
personagem4.atacar()
console.log()
let personagem5 = new hero("Neyrio", 54, "ninja")
personagem5.atacar()
console.log()