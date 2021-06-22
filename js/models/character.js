class Character{

    constructor(id, name, species, special_feature, color, image, likes, show_id){
        this.id = id 
        this.name = name
        this.species = species
        this.special_feature = special_feature
        this.color = color
        this.image = image
        this.likes = likes
        this.show_id = show_id

        // rendering the page
        this.renderCharacter()
    }

    //render method creating div, append to page
    renderCharacter() {
        const characterHolder = document.getElementById("cartoon-network-characters")
        const characterContainer = document.createElement("div")

        characterContainer.dataset.id = this.id
        characterContainer.id = this.id
        characterContainer.classList.add= "character-card"
        characterContainer.innerHTML += this.characterHTML()
        characterHolder.appendChild(characterContainer)

        characterContainer.addEventListener("click", e => {this.charLikes(e, characterContainer.id)})
    }

    charLikes(e, id) {
        // debugger
        let likes = parseInt(e.target.parentElement.parentElement.querySelector(".character-like").innerText)
        const charID = e.target.parentElement.parentElement.id

        if (e.target.className == "cartoon-like-btn") {
            let likesNew = likes + 1
            e.target.parentElement.parentElement.querySelector(".character-like").innerText = likesNew

            const charObj = {
                likes: likesNew
            }

            const link = `http://127.0.0.1:3000/characters/${charID}`

            fetch (link, {
                method: 'PATCH',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    likes: likesNew
                })
                
            })
            
        }
    }


    characterHTML() {
        return `
        <div id="all-char">
            <img id="char-image" src=${this.image}>
            <h3 class="character-name">${this.name}</h3>
            Likes<h3 class="character-like">${this.likes}</h3>
            <p><button class="cartoon-like-btn">Like!</button></p>
        </div>
        `
    }
}