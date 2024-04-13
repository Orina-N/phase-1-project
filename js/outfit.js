document.addEventListener("DOMContentLoaded", async(event)=>{
const outfits  = await getOutfits()
listOutfits(outfits)
displayOutfitDetails(outfits)
})

function listOutfits (outfits ) {
    const outfitsList = outfits.map(outfit => {
        return `  
        <li id="${outfit.id}" class="outfitNames categoryNames">${outfit.name}</li>        `
    })
    const outfitCarrier = document.querySelector("#outfitList")
    outfitCarrier.innerHTML = outfitsList
}

function displayOutfitDetails (outfits) {
    const parentOutfit = document.querySelector("#outfitCard")
    const childOutfit = document.createElement("div")
    const parentDescription = document.querySelector("#outfitDescription")
    const childDescription = document.createElement("div")



    const viewOutfits = document.querySelectorAll(".outfitNames")
    viewOutfits.forEach(oneOutfit => {
        oneOutfit.addEventListener("click", (event)=> {
            const foundOutfit = outfits.find((element) => element.id === event.target.id)
            childOutfit.innerHTML = ` 
            <img class="cardImage" src=${foundOutfit.image}>
            `

            childDescription.innerHTML = ` 
            <h2>${foundOutfit.name}</h2>
            <h4>Price:${foundOutfit.price}</h4>
            <p>${foundOutfit.description}</p>
            <button class="buybtn">Buy product</button>
            `
            parentOutfit.appendChild(childOutfit)
            parentDescription.appendChild(childDescription)
        })
    })
}


//backend logi
function getOutfits () {
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
  
  