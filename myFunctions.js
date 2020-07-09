 let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];
index = 0
let targetNameElement = document.getElementById('name')
let targetImageElement = document.getElementById('picture');
let targetNameElement2 = document.getElementById('name2')
let targetImageElement2 = document.getElementById('picture2');

let button = document.getElementById ('button');
button.addEventListener('click',function() {
    if(index > pokeArray.length -1) {
        index = 0
     } 
     
     if (index == 0){
        targetNameElement.innerHTML = pokeArray[index].name;
        targetImageElement.src = pokeArray[index].image;
        targetImageElement2.src = ''
        targetNameElement2.innerHTML=''
     } else {
        targetNameElement.innerHTML = pokeArray[index -1].name;
        targetImageElement.src = pokeArray[index -1].image;
        targetImageElement2.src =  pokeArray[index].image;
        targetNameElement2.innerHTML=pokeArray[index].name;
     }
     
    
    index++



})