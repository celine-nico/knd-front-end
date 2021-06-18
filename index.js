document.addEventListener("DOMContentLoaded",function(){
   API.addCharacters()
   const char = document.getElementById("cartoon-network-characters")
   char.addEventListener("click",function(){
    console.log("You Clicked!")
   })
})

