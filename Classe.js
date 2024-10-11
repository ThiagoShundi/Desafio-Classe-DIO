class ClasseHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let metodoAtaque = "";
        metodoAtaque.toLocaleLowerCase;

        if(this.tipo === "Mago") {
            metodoAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            metodoAtaque = "espada";
        } else if (this.tipo === "monge") {
            metodoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            metodoAtaque = "shuriken";
        } else {
            metodoAtaque = "método não especificado"
        }

        console.log(`O ${this.nome} atacou usando ${metodoAtaque}`)
    }
}

let acao = new ClasseHeroi("Mario", "30", "monge")

acao.ataque()