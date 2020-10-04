FALCON1 = "5e9d0d95eda69955f709d1eb"
FALCON9 = "5e9d0d95eda69973a809d1ec"
FALCONHEAVY = "5e9d0d95eda69974db09d1ed"
STARSHIP = "5e9d0d96eda699382d09d1ee"

const api = "https://api.spacexdata.com/v4/launches/next"

$.getJSON(api, function(data) {
    console.log(data)

    // GET ROCKET NAME
    let rocketName
    let rocket_id = data.rocket
    switch(rocket_id){
        case FALCON1:
            rocketName = "Falcon 1"
            break
        case FALCON9:
            rocketName = "Falcon 9"
            break
        case FALCONHEAVY:
            rocketName = "Falcon Heavy"
            break
        case STARSHIP:
            rocketName = "Starship"
            break
    }

    // GET ALL OTHER DATA

    // get mission name
    let missionName = data.name

    // get launch date and time

    const MONTHS = "January February March April May June July August September October November December".split(" ")

    let dateInfo = data.date_utc.split('T')[0].split('-')

    let launchYear = dateInfo[0];let launchMonth = dateInfo[1];let launchDay = dateInfo[2];
    let launchDate = `${MONTHS[parseInt(launchMonth) - 1]} ${launchDay}, ${launchYear}` // actual launch date

    let launchTime = data.date_utc.split('T')[1].split('.')[0].slice(0, -3) // actual launch time

    // get crew
    let crew = data.crew
    switch(crew.length){
        case 0:
            crew = "N/A"
            break
        default:
            crew = crew.join(', ')
    }

    // APPENDS
    $("#launchDate").append(launchDate)
    $("#launchTime").append(launchTime)
    $("#rocketName").append(rocketName)
    $("#missionName").append(missionName)
    $("#crew").append(crew)
})