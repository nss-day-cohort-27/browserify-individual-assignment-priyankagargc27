const $ = require("jquery")

//const $ = require("jquery")
const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = ""
            document.querySelector("#entryContent").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
            return `
                <fieldset class="placeField">
                    <label for="entryTitle">Name</label>
                    <input required type="text" id="entryTitle" placeholder="Place">
                </fieldset>
                <fieldset class="journalField">
                    <label for="entryContent">Favorite Place</label>
                    <input required type="text" id="entryContent" placeholder="Place">
                    
                </fieldset>
                <button id="saveEntryButton">Save Place</button>
            `
        }
    }

})


module.exports = FormManager
// const FormManager = Object.create(null, {
//     clearForm:{
//         value:()=>{
//             $("entryTitle").val("")
//         }
//     },
//     renderPlaceForm:{
//         value:()=>{
//             console.log("Favorite Places")
//             return
//             `<div id="Place-Container">
//             <h3>My Favroite Places </h3>
//             <label for="entryTitle">Title</label>
//             <input required type="text" id="entryTitle" placeholder="Favroite Place">
//             <button class="messageButton" id="save-place-btn">Save Place</button>
//             </div>
//             `
//         }
//     }
// })

// module.exports = FormManager