new Vue({
    el: '#vue-app',
    data: {
        name:'Zoilo',
        job:'Web Developer'
    },
    methods:{
      greet:function(time){
        return 'Good ' + time + ' ' + this.name
      }
    }
})
