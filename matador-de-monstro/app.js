new Vue({
	el: '#app',
	data: {
		mostra_inciar: true,
		arrLog: [],
		danoAoJogador: 0,
		danoAoMonstro: 0,
		porcentagemJogador: 100,
		porcentagemMonstro: 100,
		criticoJogador: false,
		criticoMonstro: false,
		textoPlacar: '',
		barra_progresso_criticaJ: false,
		barra_progresso_criticaM: false,
		curaJogador: 0
	},
	computed: {
		retornaPorcentagemJogador() {
			return this.porcentagemJogador + '%'
		},
		retornaPorcentagemMonstro() {
			return this.porcentagemMonstro + '%'
		}
	},
	watch: {
		porcentagemJogador: function (val) {
			if (val <= 20){
				this.criticoJogador = true;
				this.barra_progresso_criticaJ = true;
			}

			if (val <= 0){
				this.porcentagemJogador = 0;
				this.finalJogo()
			}
		},
		porcentagemMonstro: function (val) {
			if (val <= 20){
				this.criticoMonstro = true;
				this.barra_progresso_criticaM = true;
			}

			if (val <= 0){
				this.porcentagemMonstro = 0;
				this.finalJogo()
			}
		},
	  },
	methods: {
		iniciarNovoJogo(){
			this.mostra_inciar = false;
			this.comecar();
		},
		ataque(){
			this.danoAoMonstro = Math.ceil(Math.random() * 12);
			this.danoAoJogador = Math.ceil(Math.random() * 12);
			
			if (parseInt(this.danoAoJogador) <= parseInt(this.danoAoMonstro) )
			this.ataque;

			var text = `MONSTRO ATINGIU O JOGADOR COM ${this.danoAoJogador}`
			var cls = 'monster'

			this.arrLog.unshift({ text, cls} );

			var text = `JOGADOR ATINGIU O MONSTRO COM ${this.danoAoMonstro}`
			var cls = 'jogador_class'
			
			this.arrLog.unshift({ text, cls} );

			this.diminuirPorcentagem()
		},
		ataque_especial(){
			this.danoAoMonstro = Math.ceil(Math.random() * 12);
			this.danoAoJogador = Math.ceil(Math.random() * 12);
			
			if (parseInt(this.danoAoMonstro) <= parseInt(this.danoAoJogador) )
			this.ataque_especial;
			var text = `MONSTRO ATINGIU O JOGADOR COM ${this.danoAoJogador}`
			var cls = 'monster'

			this.arrLog.unshift({ text, cls} );

			var text = `JOGADOR ATINGIU O MONSTRO COM ${this.danoAoMonstro}`
			var cls = 'jogador_class'
			
			this.arrLog.unshift({ text, cls} );

			this.diminuirPorcentagem()
		},
		curar(){
			this.danoAoMonstro = Math.ceil(Math.random() * 12);
			this.danoAoJogador = Math.ceil(Math.random() * 12);
			
			if (parseInt(this.danoAoJogador) >= parseInt(this.danoAoMonstro) )
			this.ataque;
		},
		comecar(){
			this.arrLog = []
		
			this.porcentagemJogador = 100;
			this.porcentagemMonstro = 100;

			this.criticoJogador = false
			this.criticoMonstro = false

			this.textoPlacar = '';

			this.barra_progresso_criticaJ = false;
			this.barra_progresso_criticaM = false;
	
		},
		desistir(){
			this.mostra_inciar = true;
			this.arrLog = []

			this.porcentagemJogador = 100;
			this.porcentagemMonstro = 100;

			this.criticoJogador = false
			this.criticoMonstro = false

			this.textoPlacar = '';

			this.barra_progresso_criticaJ = false;
			this.barra_progresso_criticaM = false;

		},
		diminuirPorcentagem(){
			this.porcentagemJogador = this.porcentagemJogador - this.danoAoJogador;
			this.porcentagemMonstro = this.porcentagemMonstro - this.danoAoMonstro;

			this.danoAoJogador = 0;
			this.danoAoMonstro = 0;

		},
		finalJogo(){
			if (this.porcentagemMonstro > this.porcentagemJogador){
				this.textoPlacar = 'Você perdeu';
			}else{
				this.textoPlacar = 'Você ganhou';
			}
			this.mostra_inciar = true;
			

		}
	},
});
