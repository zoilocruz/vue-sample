new Vue({
    el: '#vue-events-modifier',
    data: {

    },
    methods:{
      popOnce: function(){
        alert("You clicked me");
      },
      alerMe: function(){
        alert("this is triggered by the link");
      }
    }
})
