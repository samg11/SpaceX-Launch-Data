FALCON1 = "5e9d0d95eda69955f709d1eb"
FALCON9 = "5e9d0d95eda69973a809d1ec"
FALCONHEAVY = "5e9d0d95eda69974db09d1ed"
STARSHIP = "5e9d0d96eda699382d09d1ee"

const api = "https://api.spacexdata.com/v4/rockets/" + document.getElementById("rocketName").innerHTML

// separate number by commas
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

$.getJSON(api, function(data){
    console.log(data)

    $("#name").append(data.name)
    $("#pricePerLaunch").append(commaSeparateNumber(data.cost_per_launch))
    $("#height").append(`${data.height.meters} Meters`)
    $("#stages").append(`${data.stages}`)
    $("#desc").append(`${data.description}<br><a href="${data.wikipedia}" target="_blank" class="btn btn-primary">Wikipedia Aricle</a>`)
})

$("#name").append(name)