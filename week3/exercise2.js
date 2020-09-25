
const fetch = require("node-fetch");

/*
Use information from this link to find the first movie in which  Luke Skywalker  appeared
Use information from this link to find the first species, which appeared in this movie
Use information from this link to find the planet (homeworld) for this species


*/

const getPlanetforFirstSpeciesInFirstMovieForPerson = id => {
    const obj = {}

    fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => {
            obj.name = data.name
        //Nested fetch as data.films returns a url
        fetch(data.films[0])
            .then(res => res.json())
            .then(data => {
            obj.firstFilm = data.title
            //Another nested fetch to get species?
            fetch(data.species[0])
            .then(res=> res.json())
            .then(data => {
                obj.species = data.name
            });
        });


    fetch(data.homeworld)
    .then(res => res.json())
    .then(data => {
        obj.homeWorld = data.name;
            console.log(obj)
        });
    });


}

//getPlanetforFirstSpeciesInFirstMovieForPerson(1);

// The clean version
const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async id => {
    let person = {};
    try {
      const character = await fetch(
        `https://swapi.dev/api/people/${id}`
      )
      .then(res => res.json());

      person.name = character.name;

      const film = await fetch(character.films[0]).then(res => res.json());

      const homeworld = await fetch(character.homeworld).then(res => res.json());

      person.firstFilm = film.title;

      person.homeWorld = homeworld.name;

    } catch (error) {
      console.error(error);
    }
    console.log(person);
  };

  getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);