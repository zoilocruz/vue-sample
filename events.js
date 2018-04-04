new Vue({
    el: '#vue-events',
    data: {
      age: 21,
      x: 0,
      y: 0
    },
    methods:{
      add: function(inc) {
        this.age += inc;
      },
      subtract: function (dec) {
        this.age -= dec;
      },
      updateXY: function(event) {
        console.log(event);
        this.x = event.offsetX;
        this.y = event.offsetY;
      }

    }
})
