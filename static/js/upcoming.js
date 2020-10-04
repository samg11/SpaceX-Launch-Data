FALCON1 = "5e9d0d95eda69955f709d1eb"
FALCON9 = "5e9d0d95eda69973a809d1ec"
FALCONHEAVY = "5e9d0d95eda69974db09d1ed"
STARSHIP = "5e9d0d96eda699382d09d1ee"
const MONTHS = "January February March April May June July August September October November December".split(" ")

const api = "https://api.spacexdata.com/v4/launches/upcoming"

$.getJSON(api, function(data) {
    console.log(data)

    var i;
    for (i = 0; i < data.length; i++) {

        // mission name
        let missionName =  data[i].name

        // date and time
        let dateInfo = data[i].date_utc.split('T')[0].split('-')
        let launchYear = dateInfo[0];let launchMonth = dateInfo[1];let launchDay = dateInfo[2];
        let launchDate = `${MONTHS[parseInt(launchMonth) - 1]} ${launchDay}, ${launchYear}` // actual date
        let launchTime = data[i].date_utc.split('T')[1].split('.')[0].slice(0, -3) + " UTC"// actual time
        switch (launchTime) {
            case "00:00 UTC":
                launchTime = "No Time Data"
        }

        // rocket name
        let rocketName
        let rocketId = data[i].rocket
        switch(rocketId){
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

        $("#upcomingTableBody").append(
            `<tr><td>${launchDate}</td><td>${launchTime}</td><td>${missionName}</td><td>${rocketName}</td></tr>`
        )
    }
})