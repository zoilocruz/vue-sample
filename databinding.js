new Vue({
    el: '#vue-binding',
    data: {
        name:'Zoilo',
        job:'Web Developer',
        website:'https://www.google.com.ph/',
        webtag: '<a href="https://www.google.com.ph/"> a href tag link </a>'
    },
    methods:{
      greet:function(time){
        return 'Good ' + time + ' ' + this.name
      }
    }
})
