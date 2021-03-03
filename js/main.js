new Vue({
  el : '#app',
  data : {
    diskList : [],
    genresList : [],
    userSelect : '',
    userTypeInput : '',
    apiKey : "genre"

  },
  mounted(){ 
    const self = this; 
    axios.get('http://localhost:8888/php-ajax-dischi/app/server.php')
    .then(function(response){
     self.diskList = response.data;
     self.getGenres(response.data);
    });

   },
  methods : {
    //funzione che estrae solo i generi senza creare doppioni
    getGenres : function(arrayData){
      let toFilter = [];
      arrayData.forEach((element) => {
        toFilter.push(element.genre)
      });
      newArray = toFilter.filter((element, index)=>{	
         return toFilter.indexOf(element) === index
      })
      this.genresList = newArray;
    },
    genreBySelect : function(){
      let self = this;
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiKey + "=" + this.userSelect)
      .then(function(response){
      self.diskList = response.data;
      });
    },
    genreByInput : function(){
      let self = this;
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiKey + "=" + this.userTypeInput)
      .then(function(response){
      self.diskList = response.data;
      });
    }
    
  }
});
Vue.config.devtools = true;