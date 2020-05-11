new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'Valor Igual 37' : 'Valor Diferente de 37'    
        }
    },
    watch: {
        resultado(){
            console.log('entrou aqui..');
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    }
});