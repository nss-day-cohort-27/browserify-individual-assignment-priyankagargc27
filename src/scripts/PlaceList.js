const entryComponent = require("./Place")

const listElement = document.querySelector(".entryList")
const titleElement = () => {
    return `
        <div class="listHeader">
            <h3>
                Favorite Place List
            </h3>
        </div>
    `
}

const entryList = (entries) => {
    listElement.innerHTML = titleElement()

    entries.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}

module.exports = entryList


// const createPlace = require("./Place")
// const DataManager = require("./DataManager")
// const $=require("jquery")
// listPlace = () => {
//     DataManager.getPlaces() //calls function to get message from DB
//         .then(results => {
//             //console.log(results)
//             $("#PlaceList").empty() //clears div before rendering list of message
//             results.forEach(place => { //loops through each message grabbing info
//                 let placeComponent = createPlace(place.name,place.place, place.Id)
//                 writeMessageToDOM(placeComponent) //calls function to write 0 list to DOM
//             })
//         })
// }
// writeMessageToDOM = (place) => { //specifies id in index where message  get appended onto DOM
//     $("#PlaceList").append(place) 
//    // scrollBottom()//replaces innerHTML =+
// }

// module.exports = listPlace