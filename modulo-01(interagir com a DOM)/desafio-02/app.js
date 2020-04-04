new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(e){
            alert('alertou')
        },
        keydown(event){
            this.valor = event.target.value;
        }
    }
})