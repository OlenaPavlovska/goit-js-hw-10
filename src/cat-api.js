const API_KEY = "live_7s9NgXPwVAFCyhFXTGhLvjUvqG9jRJJYimlUQ0Lg7AIWlTgF652Mgjs0KmKkC1fe";

function fetchBreeds() {
  
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json()
    }
  })
}
function fetchCatByBreed(breedId){
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then(res => {
     if (res.ok) {
      return res.json()
    }
  })
  } ;

export { fetchBreeds, fetchCatByBreed };