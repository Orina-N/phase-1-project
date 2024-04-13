document.addEventListener("DOMContentLoaded", async (event)=> {
 const diapers = await getDiapers()
 displayDiapers(diapers)
 displayDiapersDetails(diapers)
})

//frontend logic
function displayDiapers (diapers) {
    const diaperNames = diapers.map(diaper => {
        return `<li id="${diaper.id}" class="diaperName categoryName">${diaper.name}</li>`
    })
    const diaperCarrier = document.querySelector("#diapers")
    diaperCarrier.innerHTML = diaperNames
}

function displayDiapersDetails (diapers) {
    const parentDiaper = document.querySelector("#diaperCard")
    const childDiaper = document.createElement("div")
    const parentDescription = document.querySelector("#diaperDescription")
    const childDescription = document.createElement("div")


   const viewDiaper = document.querySelectorAll(".diaperName")
   viewDiaper.forEach((oneDiaper) => {
    oneDiaper.addEventListener("click", (event)=>{
        const foundDiaper = diapers.find((element)=> element.id === event.target.id)
        childDiaper.innerHTML = ` 
       <img class="cardImage" src=${foundDiaper.image}>

        `
        childDescription.innerHTML = `  
        <h2>${foundDiaper.name}</h2>
        <h4>Price:${foundDiaper.price}</h4>
        <p>${foundDiaper.description}</p>
        <button class="buybtn">Buy product</button>
        `

        parentDescription.appendChild(childDescription)
        parentDiaper.appendChild(childDiaper)
    })
   })
}

//backend logic
function getDiapers () {
    return fetch("https://json-server-nov7.onrender.com/Diapers",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => data)
  }
  
  