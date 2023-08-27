let button =document.getElementById("button");
let image =document.getElementById("image");
let namepoke =document.getElementById("name");
let number =document.getElementById("number");

const changePokemon = async()=>{

    let randomnumber = Math.ceil(Math.random()*150)+1 ;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomnumber}`;
     let data = await fetch(requestString);
     console.log(data);

     let response = await data.json();
     console.log(response);

     image.src =response.sprites.front_default ;
     number.textContent=`#${response.id}`;
     namepoke.textContent=response.name;

};

changePokemon()

button.addEventListener("click", changePokemon);