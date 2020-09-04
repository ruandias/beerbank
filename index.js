const inputSearch = document.getElementById('inputSearch')

const container = document.getElementById('container')
container.setAttribute('class', 'container')


async function getBeers() 
{
  let response = await fetch(`https://api.punkapi.com/v2/beers`)
  let data = await response.json()
  data.forEach(function({ image_url, name, tagline }) {
    console.log(customBeer(image_url, name, tagline))

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const img = document.createElement('img')
    img.src = image_url

    const h1 = document.createElement('h1')
    h1.textContent = name

    const p = document.createElement('p')
    p.textContent = tagline


    container.appendChild(card)
    card.appendChild(img)
    card.appendChild(h1)
    card.appendChild(p)
  })
}

getBeers()




function customBeer(image_url, name, tagline) {
  const beer = {
    image: image_url,
    name: name,
    tagline: tagline 
  }
  return beer
}
