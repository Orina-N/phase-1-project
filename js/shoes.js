document.addEventListener("DOMContentLoaded",async (event)=> {
    const shoes = await getShoes()
    displayShoes(shoes)
    displayShoeDetails(shoes)
    
  }) 
  
//frontend logic
function displayShoes(shoes) {
    const shoesNames = shoes.map(shoe => {
        return ` 
      <li id="${shoe.id}" class="shoeNames categoryName">${shoe.name}</li>
        `
    })
    const shoeList = document.getElementById("shoes")
    shoeList.innerHTML= shoesNames
}

function displayShoeDetails (shoes) {
    const parentShoes = document.querySelector("#shoesCard")
    const childShoes = document.createElement("div")
    const parentDescription = document.querySelector("#shoesDescription")
    const childDescription = document.createElement("div")


   const viewShoes = document.querySelectorAll(".shoeNames")
   viewShoes.forEach((oneShoe) => {
    oneShoe.addEventListener("click", (event)=>{
        const foundShoe = shoes.find((element)=> element.id === event.target.id)
        childShoes.innerHTML = ` 
        <img class="cardImage " src=${foundShoe.image}>

        `
        childDescription.innerHTML = `  
        <h2 class="shoesdes">${foundShoe.name}</h2>
        <h4>Price:${foundShoe.price}</h4>
        <p>${foundShoe.description}</p>
        <button class="buybtn">Buy Product</button>
        `

        parentDescription.appendChild(childDescription)
        parentShoes.appendChild(childShoes)
    })
   })
}

//backend logic 
function getShoes () {
    return fetch("https://json-server-nov7.onrender.com/Shoes",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => data)
  }