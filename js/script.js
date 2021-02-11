var app = new Vue({
  el: '#root',
  data:{
    valoreInput: '',
    lang: 'it-IT',
    api: "ed7ae3f6b9b2bb241e47691c175aafdd",
    query: '',
    films: '',
    series: '',
    // immagine: 'https://image.tmdb.org/t/p/w342'
  },

  methods:{
    // METODO RICERCA DA INPUT
    ricerca(){
      // FILM
      axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          language: this.lang,
          api_key: this.api,
          query: this.valoreInput
        }
      })
      .then((result) => {
        this.films = result.data.results;
        this.valoreInput = '';

      })

      // SERIE
      axios
      .get("https://api.themoviedb.org/3/search/tv",{
        params: {
          language: this.lang,
          api_key: this.api,
          query: this.valoreInput
        }
      })
      .then((result) => {
        this.series = result.data.results;
        this.valoreInput = '';
      })
    }

  }
});
