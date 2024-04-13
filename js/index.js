document.addEventListener("DOMContentLoaded",async (event)=> {
  const rompers = await getRompers()
  displayRompers(rompers)
  displayRomperDetails(rompers)
}) 


//frontend logic
 
function displayRompers (rompers) {
    const romperNames = rompers.map(romper => {
        return ` 
      <li id="${romper.id}" class="romperList categoryName">${romper.name}</li>
        `
    })
    const rompersList = document.getElementById("rompers")
    rompersList.innerHTML= romperNames
}

function displayRomperDetails (rompers) {
    const parentRomper = document.querySelector("#romperCard")
    const childRomper = document.createElement("div")
    const parentDescription = document.querySelector("#romperDescription")
    const childDescription = document.createElement("div")


   const viewRompers = document.querySelectorAll(".romperList")
   viewRompers.forEach((oneRomper) => {
    oneRomper.addEventListener("click", (event)=>{
        const foundRomper = rompers.find((element)=> element.id === event.target.id)
        childRomper.innerHTML = ` 
        <img class="cardImage" src=${foundRomper.image}>

        `
        childDescription.innerHTML = `  
        <h2>${foundRomper.name}</h2>
        <h4>Price:${foundRomper.price}</h4>
        <p>${foundRomper.description}</p>
        <button class="buybtn">Buy product</button>
        `

        parentDescription.appendChild(childDescription)
        parentRomper.appendChild(childRomper)
    })
   })
}

//backend logic
function getData () {
    return fetch("https://json-server-nov7.onrender.com/Outfits",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => data)
}

function getRompers () {
  return fetch("https://json-server-nov7.onrender.com/Rompers",{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
      }
  })
  .then(resp => resp.json())
  .then(data => data)
}

function getHats () {
  return fetch("https://json-server-nov7.onrender.com/Hats",{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
      }
  })
  .then(resp => resp.json())
  .then(data => data)
}

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

