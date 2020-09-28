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

  const renderResult =  meals => {
      clubListElement.innerHTML = "";
      meals.forEach(current => {
          const {strMeal, strMealThumb, strInstructions} = current;
          const clubElement = document.createElement("div");
          clubElement.setAttribute("class", "club");

          clubElement.innerHTML = `
            <img class="fan-art-club" src=${strMealThumb} alt="Fan Art">
             <div class="club-info">
                 <h2>${strMeal}</h2>
                 <p>${strInstructions}</p>
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