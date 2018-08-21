const entryComponent = (item) => {
    return `
        <div class="entry">
            <header class="entry__header">
                <h2>${item.Name}:${item.FavoritePlaceName}</h2>
            </header>
            <article  id="place-image">${item.image}
            <img id="myImg" src="https://www.tmb.ie/wp/wp-content/uploads/2015/10/india-travel-tips.jpg" alt="TajMahal" width="304" height="228">
            </article>
            <button class="entry__delete" id="delete--${item.id}">Delete</button>
            </div>
            `
        }

module.exports = entryComponent
            // <article class="entry__content">
            //   <h2>  ${item.FavoritePlaceName}</h2>
            // </article>



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