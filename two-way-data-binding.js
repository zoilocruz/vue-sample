new Vue({
  el: '#vue-two-way-data-binding',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function(){
      console.log("you have entered your name");
    },
    logAge: function () {
      console.log("you have entered you age");
    }
  }
})
