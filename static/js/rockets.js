FALCON1 = "5e9d0d95eda69955f709d1eb"
FALCON9 = "5e9d0d95eda69973a809d1ec"
FALCONHEAVY = "5e9d0d95eda69974db09d1ed"
STARSHIP = "5e9d0d96eda699382d09d1ee"
const MONTHS = "January February March April May June July August September October November December".split(" ")

const api = "https://api.spacexdata.com/v4/rockets"

$.getJSON(api, function(data) {
    console.log(data)

    var i;
    for (i = 0; i < data.length; i++) {


        let name = data[i].name

        function getRocketId(rocketName){
            if (rocketName == "Falcon 1") { return FALCON1 }
            else if (rocketName == "Falcon 9") { return FALCON9 }
            else if (rocketName == "Falcon Heavy") { return FALCONHEAVY }
            else if (rocketName == "Starship") { return STARSHIP }
        }

        $("#rocketList").append(
            `<a href="/rockets/${getRocketId(name)}" class="list-group-item list-group-item-action">${name}</a>`
        )

    }
})