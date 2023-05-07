temperature;

function clicked() {
    const options = { method: 'GET' };

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.68&lon=-117.82&appid=1068d6439f6a7dfd311dcd1027070f81", options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //let weqth = response.coord, lon
            temperature = Math.round((response.main.temp - 273.15) * (9.0 / 5.0) + 32);
            const feels_like = Math.round((response.main.feels_like - 273.15) * (9.0 / 5.0) + 32);
            const min_temp = Math.round((response.main.temp_min - 273.15) * (9.0 / 5.0) + 32);
            const max_temp = Math.round((response.main.temp_max - 273.15) * (9.0 / 5.0) + 32);
            document.getElementById("display").innerHTML = "The temperature in Irvine today is " + temperature + "° F"
            document.getElementById("display2").innerHTML = "Feels like " + feels_like + "° F"
            document.getElementById("display3").innerHTML = "Today's minimum temperature is " + min_temp + "° F"
            document.getElementById("display4").innerHTML = "Today's maximum temperature is " + max_temp + "° F"

            if(temperature >= 80) {
                document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/80Casual.jpg" alt="Default Image"/>`
                document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/>80FC.jpg" alt="Default Image"/>'
            }
            if(temperature <= 79 || temperature > 67) {
                document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/79MC.jpg" alt="Default Image"/>`
                document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/79-65FC.jpg" alt="Default Image"/>'
            }
            if(temperature <= 67 || temperature > 55) {
                document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/67MC.jpg" alt="Default Image"/>`
                document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/67FC.jpg" alt="Default Image"/>'
            }
            if(temperature <= 55) {
                document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/55>MC.jpg" alt="Default Image"/>`
                document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/55>FC.jpg" alt="Default Image"/>'
            }
            document.getElementById('label1').innerHTML = ''
            document.getElementById('label2').innerHTML = ''
        })

        .catch(err => console.error(err))
}

function popup1() {

    alert("Masculine Outfit successfully added to Favorites")
}

function popup2() {

    alert("Femimine Outfit successfully added to Favorites")
}

function refreshPage1() {
    if(temperature >= 80) {
        document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/>80MDU.jpg" alt="Default Image"/>`
    }
    if(temperature <= 79 || temperature > 67) {
        document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/79MDU.jpg" alt="Default Image"/>`
    }
    if(temperature <= 67 || temperature > 55) {
        document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/67MDU.jpg" alt="Default Image"/>`
    }
    if(temperature <= 55) {
        document.getElementById('masc').innerHTML = `<img width=400px height=650px src="./images/55>MDU.jpg" alt="Default Image"/>`
    }
    document.getElementById('label1').innerHTML = 'Dressed Up'
}

function refreshPage2() {
    if(temperature >= 80) {
        document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/>80FDU.jpg" alt="Default Image"/>'
    }
    if(temperature <= 79 || temperature > 67) {
        document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/79-65FDU.jpg" alt="Default Image"/>'
    }
    if(temperature <= 67 || temperature > 55) {
        document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/67FDU.jpg" alt="Default Image"/>'
    }
    if(temperature <= 55) {
        document.getElementById('fem').innerHTML = '<img width=400px height=650px src="./images/55>FDU.jpg" alt="Default Image"/>'
    }
    document.getElementById('label2').innerHTML = 'Dressed Up'
}

// function Images() {
//     const myImage = new Image()
//     myImage.src = ">80Casual.jpg"
// }