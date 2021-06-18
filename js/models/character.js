class Character{

    constructor(id, name, species, special_feature, color, image, show_id){
        this.id = id 
        this.name = name
        this.species = species
        this.special_feature = special_feature
        this.color = color
        this.image = image
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
    }

    characterHTML() {
        console.log(this.image)
        return `
        <h3 class="character-name">${this.name}</h3>
        <img src="https://static.wikia.nocookie.net/knd/images/a/a9/Numbuh_4.jpg"/>
        <button id='cartoon-like-btn'>Like!</button>
        `
    }
}