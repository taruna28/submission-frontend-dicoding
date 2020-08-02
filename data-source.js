class Data{
    static searchId(search){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=7155a867a7fd8ce86a46e8a64a16bb56&language=en-US&query=${search}&page=1&include_adult=false`)
        // return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${search}`)
        .then(response => {
          return response.json();
        })
        // .then(responseJson => {
        //   console.log(responseJson);
        // })
        .then(responseJson => {
          if(responseJson.results) {
              return Promise.resolve(responseJson.results);
          } else {
              return Promise.reject(`${keyword} is not found`);
          }
      })
    }
    
}
// let search = "spiderman"
// console.log(Data.searchId("spiderman"))