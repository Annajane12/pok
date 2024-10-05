$(document).ready(function(){

    fetch("pokedex.json")
    .then((rawData) => rawData.json())
    .then(pokedex => {

        let linkId = 0;
        pokedex.forEach(pokemon => {
           

            let id = pokemon["id"];
            let name = pokemon["name"]["english"];
            let image = pokemon["image"]["hires"];
            let types = pokemon["type"];
            let typesHtml = "";
            types.forEach (type => {
                typesHtml += `<span class="${type}">${type}</span>`
            });

            let species = pokemon["species"];


            $('.pokemon-container').append(
                ` <div class="pokemon-card">
                    <div><img src="${image}" alt="${name}"></div>
                        <div class="shadow"></div>
                        <div class="pokemon-data">
                            <ul type="none">
                                <li class="pokemon-id">#${id}</li>
                                <li class="pokemon-name">
                                <a href="pages/pokemon.html?id=${linkId++}">${name}</a></li>
                                <li class="pokemon-type">${typesHtml}</li>
                            </ul>
                        </div>
                    </div>`
            )

        })

    })

})