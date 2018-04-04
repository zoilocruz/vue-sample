new Vue({
  el: '#dynamic-css',
  data:{
    available: false,
    nearby: false
  },
  method:{},
  computed:{
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})
