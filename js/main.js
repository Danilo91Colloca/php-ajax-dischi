new Vue({
  el : '#app',
  data : {
    diskList : [],
    genresList : [],
    userSelect : '',
    userTypeInput : '',
    apiGenre : 'genre',
    apiArtist : 'artist',
    apiTitle : 'title'

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
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiGenre + "=" + this.userSelect)
      .then(function(response){
      self.diskList = response.data;
      });
    },
    genreByInput : function(){
      let self = this;
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiGenre + "=" + this.userTypeInput)
      .then(function(response){
      self.diskList = response.data;
      });
    },
    artistByInput : function(){
      let self = this;
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiArtist + "=" + this.userTypeInput)
      .then(function(response){
      self.diskList = response.data;
      });
    },
    titleByInput : function(){
      let self = this;
      axios.get('http://localhost:8888/php-ajax-dischi/app/server.php?' + this.apiTitle + "=" + this.userTypeInput)
      .then(function(response){
      self.diskList = response.data;
      });
    },
    allSearch : function(){
      this.artistByInput();
      this.titleByInput();
      this.genreByInput();
    }
    
  }
});
Vue.config.devtools = true;