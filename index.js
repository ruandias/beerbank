const inputSearch = document.getElementById('inputSearch');
console.log(inputSearch);

async function getBeers() 
{
  let response = await fetch(`https://api.punkapi.com/v2/beers`);
  let data = await response.json()
  return data;
}

console.log(getBeers());