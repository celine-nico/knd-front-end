class API {

    static getCharacters(){
        document.getElementById("cartoon-network-characters").innerHTML = " "
        fetch("http://127.0.0.1:3000/characters")
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const{id, name, species, special_feature, color, image, likes, show_id} = character
                new Character(id, name, species, special_feature, color, image, likes, show_id)
            })
        })
    }

    static addShowFilter(show){
        let select = document.getElementById("show-filter")
        let btn = document.createElement("button")

        btn.dataset.id = show.id
        btn.id = show.id
        btn.innerHTML = `${show.show_name} <br>`
        select.append(btn)

        let url = `http://127.0.0.1:3000/shows/${btn.dataset.id}/characters`

        console.log(show.show_name)
        btn.addEventListener("click", function(){
            API.getCharactersFromShow(url, this.dataset.id)
        })
    }

    static getCharactersFromShow(url, btnID){
        // clearing div to print out something new
        document.getElementById("cartoon-network-characters").innerHTML = " "

        fetch(url)
        .then(response => response.json())
        .then(characters =>{
            characters.forEach(character => {
                const{id, name, species, special_feature, color, image, likes, show_id} = character
                new Character(id, name, species, special_feature, color, image, likes, show_id)
            })
        })
    }

    static getAllCharacters(){
        let bttn = document.getElementById("all-characters")

        bttn.addEventListener("click", function(){
            API.getCharacters()
        })
    }
    
}