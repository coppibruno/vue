new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: 'Bruno Coppi da Silva',
        IDADE: 19,
        LINK: 'https://i.pinimg.com/236x/30/9d/23/309d23bec8975c7f283891906204d65d.jpg'
    },
    methods: {
        idade3(){
            return this.IDADE * 3;
        },
        random(){
            return Math.random();
        }
    }
});
