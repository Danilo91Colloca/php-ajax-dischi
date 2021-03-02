new Vue({
  el : '#app',
  data : {
    diskList : []

  },
  mounted(){ 
    const self = this; 
    axios.get('http://localhost:8888/php-ajax-dischi/app')
    .then(function(queryReturn){
     self.diskList = queryReturn.data.response;
    });
   },
  methods : {

  }

});
Vue.config.devtools = true