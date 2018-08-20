const APIManager = Object.create(null, {

getPlaces: {
    value: () => {
        return fetch("http://localhost:8088/Places")
            .then(res => res.json())
    }
},

savePlaces: {
    value: (place) => {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(place)
        })
        .then(response => response.json())
    }
},
deletePlaces: {
    value: (id) => {
        return fetch(`http://localhost:8088/Places/${id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
    }
}

})

module.exports=APIManager