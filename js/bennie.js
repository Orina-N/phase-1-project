document.addEventListener("DOMContentLoaded", async (event)=> {
   const hats = await getHats()
   displayHats(hats)
   displayHatDetails(hats)
})


//frontend

function displayHats ( hats){
    const bennieNames = hats.map(bennie => {
        return ` 
        <li
        id="${bennie.id}" class="bennieNames categoryNames" >${bennie.name}
        </li>
        
        `
    })
    const bennieLists = document.querySelector("#benniesList")
    bennieLists.innerHTML = bennieNames
 }

 function displayHatDetails (hats) {
    const parentBennie = document.querySelector("#bennieCard")
    const childBennie = document.createElement("div")
    const parentDescription = document.querySelector("#bennieDescription")
    const childDescription = document.createElement("div")


    const viewBennies = document.querySelectorAll(".bennieNames")
    viewBennies.forEach((oneBennie=> {
        oneBennie.addEventListener("click", (event)=>{
            const foundBennie = hats.find((element) => element.id === event.target.id)
            childBennie.innerHTML = ` 
            <img class="cardImage" src="${foundBennie.image}">
            `
         childDescription.innerHTML = `  
           <h2>${foundBennie.name}</h2>
           <h4>${foundBennie.price}</h4>
           <p>${foundBennie.description}</p>
         `
            parentDescription.appendChild(childDescription)
            parentBennie.appendChild(childBennie)
        })
    }))
       
 }

//backend
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