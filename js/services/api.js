class API {

    static addCharacters(){
        fetch("http://127.0.0.1:3000/characters")
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const{id, name, species, special_feature, color, image, show_id} = character
                new Character(id, name, species, special_feature, color, image, show_id)
            })
        })
    }
    
}