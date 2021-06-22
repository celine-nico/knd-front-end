document.addEventListener("DOMContentLoaded", () => {
   API.getCharacters()
   Show.allShows()
   API.getAllCharacters()
   const char = document.getElementById("cartoon-network-characters")
})

function postCharacter(char_data) {
    fetch('http://127.0.0.1:3000/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json"
        },
        body: JSON.stringify({
          "name": char_data.name.value,
          "image": char_data.image.value,
          "likes": 0
  
        })
    })
    .then(res => res.json())
    .then((obj_character) => {
        renderCharacters(obj_character)
    })
}

function renderCharacters(character) {
    let h2 = document.createElement('h2')
    h2.innerText = character.name
  
    let img = document.createElement('img')
    img.setAttribute('src', character.image)
    img.setAttribute('class', 'character-avatar')
  
  
    let btn = document.createElement('button')
    btn.setAttribute('class', 'cartoon-like-btn')
    btn.setAttribute('id', character.id)
    btn.innerText = "like"
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset);
      likes(e)
    })
  
    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, img, p, btn)
    divCollect.append(divCard)
}