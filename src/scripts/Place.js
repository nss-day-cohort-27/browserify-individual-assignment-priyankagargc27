const entryComponent = (item) => {
    return `
    <div class="card" style="width: 18rem; height 18rem;">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.Name}</h5>
    <p class="card-text">${item.FavoritePlaceName}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <button class="entry__delete" id="delete--${item.id}">Delete</button>
</div>
    `
        }

module.exports = entryComponent
            // <article class="entry__content">
            //   <h2>  ${item.FavoritePlaceName}</h2>
            // </article>


    // <div class="entry">
    //     <header class="entry__header">
    //         <h2>${item.Name}:${item.FavoritePlaceName}</h2>
    //     </header>
    //     <article  id="place-image">
    //     <img id="myImg" src="${item.image}" alt="${item.FavoritePlaceName}" style="width:304; height:228;">
    //     </article>
    //     <button class="entry__delete" id="delete--${item.id}">Delete</button>
    //     </div>

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