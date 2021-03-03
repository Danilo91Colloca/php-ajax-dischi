new Vue({
  el : '#app',
  data : {
    diskList : [],
    genresList : [],
    userTypeInput : '',
    userSelect : ''

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
    }
  }
});
Vue.config.devtools = true