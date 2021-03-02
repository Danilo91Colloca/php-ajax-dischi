new Vue({
  el : '#app',
  data : {
    diskList : []

  },
  mounted(){ 
    const self = this; 
    axios.get('http://localhost:8888/php-ajax-dischi/app/server.php')
    .then(function(response){
     self.diskList = response.data;
    });
   },
  methods : {

  }

});
Vue.config.devtools = true