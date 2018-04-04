new Vue({
  el: '#computed-properties',
  data:{
    age: 20,
    a: 0,
    b: 0
  },
  methods:{
    //this was commented because if one is updated both function executes
    /*addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    }*/
  },
  computed:{
    addToA: function() {
      console.log('addToA()');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('addToB()');
      return this.b + this.age;
    }
  }
})
