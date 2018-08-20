const entryComponent = (item) => {
    return `
        <div class="entry">
            <header class="entry__header">
                <h2>${item.Name}</h2>
            </header>
            <article class="entry__content">
                ${item.FavoritePlaceName}
            </article>
            
            <button class="entry__delete" id="delete--${item.id}">Delete</button>
        </div>
    `
}

module.exports = entryComponent



// const craetePlace=(Place)=>{
//     retunr `
//     <div class="entry">
//     <header class="entry__header">
//         <h2>${Place.title}</h2>
//     </header>
//     <article class="entry__content">
//         ${Place.content}
//     </article>

//     <button class="message__delete" id="deleteMessage--${id}">Delete Meassage</button>
//     </div>`
// }
// module.exports=craetePlace