var app = new Vue({
  el: '#root',
  data:{
    lang: 'it-IT',
    api: "ed7ae3f6b9b2bb241e47691c175aafdd",
    query: '',
    films: ''
  },

  methods:{
    // METODO RICERCA DA INPUT
    ricerca(){
      axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          language: this.lang,
          api_key: this.api,
          query: this.query
        }
      })
      .then((result) => {
        this.films = result.data.results;
      })
    }

  }
});
