new Vue({
    el: '#app',
    data: {
        iniciar: true,
        ataqueMostro: 0,
        ataqueJogador: 0,
        pontos: true,
        resultado: false,
        mostroLife: 100,
        jogadorLife: 100,
        mostroDerrotado: false,
        jogadorDerrotado: false,
        resultado: false,
        ataqueEspecialMostrar: true,
        fimjogo: true,
        condicao: true,


    },
    methods: {
        atacar() {
            let numero = Math.floor(Math.random() * 11);
            this.ataqueMostro = numero + 5
            this.ataqueJogador = numero
            this.mostroLife = this.mostroLife - this.ataqueJogador
            console.log("Mostro: " + this.mostroLife)
            this.jogadorLife = this.jogadorLife - this.ataqueMostro
            console.log("Jogador: " + this.jogadorLife)

            if (this.mostroLife <= 0) {
                this.mostroDerrotado = true
                this.resultado = true
                this.pontos = false
                this.fimjogo = false
                this.condicao = false
            } else if (this.jogadorLife <= 0) {
                this.jogadorDerrotado = true
                this.resultado = true
                this.pontos = false
                this.fimjogo = false
                this.condicao = false
            }
        },
        //resetar o jogo
        desistir(iniciar) {
            this.ataqueMostro = 0
            this.ataqueJogador = 0
            this.iniciar = true
            this.mostroLife = 100
            this.jogadorLife = 100
            this.ataqueEspecialMostrar = true
            this.resultado = false
            this.fimjogo = true
            this.condicao = true
            this.pontos = true
        },
        lifeConvertido() {
            if (this.mostroLife <= 0) {
                return this.mostroLife = 0
            } else {
                return this.mostroLife + "%"
            }
        },
        lifeJogadorConvertido() {
            if (this.jogadorLife <= 0) {
                return this.jogadorLife = 0
            } else {
                return this.jogadorLife + "%"
            }
        },
        ataqueEspecial() {
            this.ataqueEspecialMostrar = false
            return this.mostroLife = this.mostroLife - 20
        },

        curar() {
            return this.jogadorLife = this.jogadorLife + 10
        }
    },

})