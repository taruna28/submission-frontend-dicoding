import Data from './data-source.js';
const main = () => {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("#clubList");

  const onButtonSearchClicked = async () => {
      try{
          const result = await Data.searchId(searchElement.value);
          renderResult(result);
          console.log(result)
      } catch (message) {
          fallbackResult(message)
      }
  };

  // const renderResult  = function(results){
  //   clubListElement.innerHTML = "";
  //   results.forEach(function(element){
  //       const {original_title}= club;
  //       const clubElement = document.createElement("div");
  //   });
  // }

  const renderResult =  results => {
      clubListElement.innerHTML = "";
      results.forEach(club => {
          const {original_title, poster_path, overview} = club;
          const clubElement = document.createElement("div");
          clubElement.setAttribute("class", "club");

          clubElement.innerHTML = `
            <img class="fan-art-club" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="Fan Art">
             <div class="club-info">
                 <h2>${original_title}</h2>
                 <p>${overview}</p>
             </div>`;

          clubListElement.appendChild(clubElement);
      })
  };

  const fallbackResult = message => {
      clubListElement.innerHTML = "";
      clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;