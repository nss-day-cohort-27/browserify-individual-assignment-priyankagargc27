const FormManager = require("./placeForm")
const DataManager = require("./DataManager")
const placeList = require("./PlaceList")
const $=require("jquery")

// Render the journal entry form
document.querySelector("#Placeform").innerHTML = FormManager.renderEntryForm()

// Render the list of entries
const listEntries = () => {
    DataManager.getPlaces()
        .then(allEntries => placeList(allEntries))
}

listEntries()

// Handle delete button clicks
document.querySelector(".entryList").addEventListener("click", evt => {
    if (evt.target.classList.contains("entry__delete")) {
        const id = parseInt(evt.target.id.split("--")[1])
        DataManager.deletePlaces(id).then(listEntries)
    }
})

// Add an event listener for the save button
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newPlace = {
        Place: document.querySelector("#entryTitle").value,
        FavLocation: document.querySelector("#entryContent").value
    }

    // POST to API
    DataManager.savePlaces(newPlace).then(() => {
            // Clear the form fields
            FormManager.clearForm()
            $("#entryList").html("")
            // DataManager.getPlaceEntry()
            //     .then(places => {
            //         placeList(places);
                    placeList()
                })
        })




// const DataManager=require("./DataManager")
// const FormManager = require("./PlaceForm")
// const listPlace = require("./PlaceList")
// const $=require("jquery")


// $("#PlaceForm").innerHTML = FormManager.renderPlaceForm()


// // const listEntries = () => {
// //     DataManager.getPlaces()
// //         .then(allEntries => entryList(allEntries))
// // }

// // listEntries()

// // Add an event listener for the save button
// $("#PlaceForm").on("click", "#save-place-btn", event => {
// //document.querySelector("#save-place-btn").addEventListener("click", () => {
//     // Get form field values
//     // Create object from them
//     // Add timestamp
//     const newEntry = {
//         title:$("#entryTitle").val("")

//         //content: $("#entryContent").value,
//         //date: Date.now()
//     }
//     DataManager.savePlaces(newEntry)
//     .then(() => {
//         // Clear the form fields
//         FormManager.clearForm()
//         listPlace()
//     })
// })


// $("#PlaceForm").on("click", "#message-btn", event => {
//     let user = JSON.parse(sessionStorage.getItem("activeUser"))
//     const newMessage = {
//         message: $("#message-input").val(),
//         userId: user.id,
//         userName: user.name
//     }
//     //console.log(newMessage)
//     DataManager.saveMessage(newMessage).then(() => {
//         MessageFormManager.clearForm()
//         $("#messageList").html("") //clears page before rerendering list from DB
//         listMessage()
//     })

// })