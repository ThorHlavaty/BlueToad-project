let randomResult = [];
let randomDogArray = []
function randomResults(dogArray){
  while (randomResult.length < 20){
    let element = dogArray.splice(Math.floor(Math.random()*dogArray.length), 1)
    randomResult.push(element[0])
  }
  return randomResult
}

function renderdogs(dogArray){
  randomDogArray = randomResults(dogArray)
  randomResult = []
  let dogHtmlArray = randomDogArray.map((currentDog) => {
      return `
      <img class="dogpic" src="${currentDog}" alt="Card image cap">
      `
    });
  return dogHtmlArray.join('');
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', (e)=>{
        if(e.target.id === 'search'){
          e.preventDefault();
          let searchString = $('.search-bar').val();
          let urlEncodedSearchString = encodeURIComponent(searchString);
          const dogContainer = document.querySelector('.dog-container');
          axios.get(`https://dog.ceo/api/breed/${urlEncodedSearchString}/images`)
            .then((response)=>{
              
              dogContainer.innerHTML = renderdogs(response.data.message);
              dogData = response.data.Search;
            })
            .catch(err => {
              dogContainer.innerHTML = `<h1>Sorry, we didn't find that breed. Try again!</h1>`
            })
        }
    })
    
})