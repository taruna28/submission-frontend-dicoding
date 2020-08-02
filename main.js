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

  const renderResult =  results => {
      clubListElement.innerHTML = "";
      results.forEach(club => {
          const {name, fanArt, description} = club;
          const clubElement = document.createElement("div");
          clubElement.setAttribute("class", "club");
{/* <img class="fan-art-club" src="${fanArt}" alt="Fan Art"></img> */}
          clubElement.innerHTML = `
            
             <div class="club-info">
                 <h2>${name}</h2>
                 <p>${description}</p>
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