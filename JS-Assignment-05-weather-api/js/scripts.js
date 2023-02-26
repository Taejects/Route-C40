// Setting Variables ---------------------- */
let fetchLocation, lat, long, APIresponse, result, today, tomorrow, afterTomorrow, dayName, locValue;

today = document.querySelector("#today-info");
tomorrow = document.querySelector("#tmrow-info");
afterTomorrow = document.querySelector("#afterTmrow-info");

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

// Detect User Location ------------------- */
const successCallback = (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    fetchLocation = `https://api.weatherapi.com/v1/forecast.json?key=0172ce68918244b8ac1104938232202&q=${lat},${long}&days=3`;
    fetchAPI(fetchLocation)
};

// Set Default Location ------------------- */
const errorCallback = (error) => {
    fetchLocation = `https://api.weatherapi.com/v1/forecast.json?key=0172ce68918244b8ac1104938232202&q=London&days=3`;
    fetchAPI(fetchLocation)
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// Request API ---------------------------- */
async function fetchAPI(location) {
    APIresponse = await fetch(location);

    if (APIresponse.ok && 400 != APIresponse.status) {
        result = await APIresponse.json();
        /* Check if search term is valid */
        if (result.length == 0) {
            document.querySelector(".alert").style.display = "block";
            document.querySelector(".search-result").innerHTML = "";
        } else {
            document.querySelector(".alert").style.display = "none";
        }
    } else {
        console.log("bad request")
    }

    /* If Search Result :: Run Query Only */
    if (location.indexOf('search') > -1) {
        listSearchResult(result);
        console.log(result);

    } else {
        /* If User Location or Default :: Run API */
        runAPI();
    }
    function runAPI() {
        document.querySelector("#location h1").innerHTML = `${result.location.name}<small class="mt-2">${result.location.country}</small>`;
        /* Spread Info in HTML Blocks */
        resultCurrentFn(today);
        resultForecastFn(tomorrow, 1);
        resultForecastFn(afterTomorrow, 2)

        /* Get API Weather Info For Current */
        function resultCurrentFn(day) {
            day.querySelector("h2").innerHTML = getDayName(result.current.last_updated, "eg-EG") + `<small class="d-flex align-items-start">${result.current.last_updated}</small>`;
            document.querySelector("#today-info h2 small").innerHTML = document.querySelector("#today-info h2 small").innerText.splice(11, 0, "<i class='fa-solid fa-clock ms-3 align-self-end me-1 fs-6 text-info'></i>");
            day.querySelector(".cityTemp").innerHTML = result.current.temp_c;
            day.querySelector(".cityCond").innerHTML = result.current.condition.text + `<img src="http:${result.current.condition.icon}">`;
        }
        /* Get API Weather Info For Forecast */
        function resultForecastFn(day, index) {
            day.querySelector("h2").innerHTML = getDayName(result.forecast.forecastday[index].date, "eg-EG") + `<small>${result.forecast.forecastday[index].date}</small>`;
            day.querySelector(".cityTemp").innerHTML = result.forecast.forecastday[index].day.avgtemp_c;
            day.querySelector(".cityCond").innerHTML = result.forecast.forecastday[index].day.condition.text + `<img src="http:${result.forecast.forecastday[index].day.condition.icon}">`;

        }
        /* Get Day Name */
        function getDayName(dateStr, locale) {
            dayName = new Date(dateStr);
            return dayName.toLocaleDateString(locale, { weekday: 'long' });
        }
        /* HIDE Loader Block*/
        document.querySelector(".loader").style.display = "none";
    };
}

// Search Function ---------------------------- */
async function search(term) {
    let apiStatus = await fetch(term);
    if (apiStatus.ok && 400 != apiStatus.status) {
        fetchAPI(term);
        document.querySelector("#location-value").style.backgroundSize = 0;
    } else {
        console.log("bad request")
    }
}

document.getElementById("location-submit").addEventListener("click", function (e) {
    e.preventDefault();
    if(document.querySelector("#location-value").value) {
        document.querySelector(".search-result").innerHTML = "";
        document.querySelector("#location-value").style.backgroundSize = "24px";
        locValue = document.querySelector("#location-value").value;
        fetchLocation = `https://api.weatherapi.com/v1/search.json?key=0172ce68918244b8ac1104938232202&q=${locValue}`;
        search(fetchLocation)
    } else {
        document.querySelector(".alert").style.display = "block";
    }   
});

function listSearchResult(resultItems) {
    console.log(resultItems)
    if (resultItems.length > 0) {
        for (i = 0; i < resultItems.length; i++) {
            document.querySelector(".search-result").innerHTML += `
            <a <a href="#!" onclick="fetchResult(${resultItems[i].lat}, ${resultItems[i].lon})" class="list-group-item list-group-item-action">${resultItems[i].name}, ${resultItems[i].country}</a>
    `
        }
    }
}
function fetchResult(lat, long) {
    /* SHOW Loader Block*/
    document.querySelector(".loader").style.display = "flex";
    fetchAPI(`https://api.weatherapi.com/v1/forecast.json?key=0172ce68918244b8ac1104938232202&q=${lat},${long}&days=3`);
    document.querySelector(".search-result").innerHTML = "";
    document.querySelector("#location-value").value = "";

}