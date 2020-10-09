(() => {
    let arr = ["rabbit", "monsta killa", "sad panda", "punk ass bitch", "kook", "jello shot", "bird", "sea anemone", "designer handbag", "pink manatee", "cow", "cheap whiskey", "depressed pirate", "fake zombie", "drunk koala", "part-time model", "friendly ballerina", "fashionista"];
    let rando = Math.floor(Math.random() * arr.length);
    let item = arr[rando];
    let wait = 250;
    let i = 0;
    let d = new Date();
    let year = d.getFullYear();
    const body = document.body;
    const itemDiv = document.getElementById("items");
    const mode = localStorage.getItem("dm");
    const loader = document.getElementsByClassName("progress");
    const fURL = "https://us-central1-jtokib.cloudfunctions.net/forecaster";
    const bURL = "https://us-central1-jtokib.cloudfunctions.net/buoy";
    const tURL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9414290&time_zone=lst_ldt&units=english&interval=hilo&format=json";

    //Print out random string to page
    let printItem = (str) => {
        if (navigator.userAgent.includes("Googlebot")) {
            itemDiv.innerHTML = item;
        } else if (itemDiv !== null) {
            setTimeout(function () {
                itemDiv.innerHTML += str.charAt(i).toUpperCase();
                if (i < str.length) {
                    printItem(str);
                    i++;
                } else {
                    itemDiv.innerHTML;
                }
            }, wait)
        } else {
            return;
        }
    }
    //Toggle dark-mode
    let toggleMode = () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.dm = "1";
        } else {
            localStorage.dm = "0";
        }
    }
    //Check if dark-mode is enabled on load
    let checkMode = () => {
        if (mode === "0") {
            body.classList.remove("dark-mode");
        }
        if (mode === "1") {
            body.classList.add("dark-mode");
        }
    }
    //Helper function to make a GET request to a URL with optional callback to manipulate data as needed
    let getUrl = (url, callback = false) => {
        fetch(url, {
                method: "GET",
                mode: "cors"
            })
            .then((res) => {
                return res.json();
            }).then((data) => {
                if (callback) {
                    callback(data)
                }
            })
            .catch((e) => {
                console.log("Fetch failed " + e);
            })
    }
    //Format results of forecast data and add to page
    let addForecast = (data) => {
        let tableStart = `<table class="col m12 highlight responsive-table" id="forecastTable"><thead><tr><td>Date</td><td>Time</td><td>Conditions</td><td>Size</td></tr></thead>`;
        let tableRows = ``;
        let tableEnd = `</tbody></table>`;
        let length = Object.keys(data).length;
        for (let i = 0; i < length; i++) {
            tableRows += `<tr><td>${data[i].date}</td><td>AM</td><td>${data[i].report.am.conditions}</td><td>${data[i].report.am.size}</td></tr><tr><td>${data[i].date}</td><td>PM</td><td>${data[i].report.pm.conditions}</td><td>${data[i].report.pm.size}</td></tr>`
        }
        let content = tableStart + tableRows + tableEnd;
        document.getElementById("forecast").insertAdjacentHTML("beforeend", content);
    }
    //Call the forecast endpoint
    let getForecast = (url) => {
        let qs = window.location.search.substring(0);
        if (qs === "?kc=test") {
            getUrl(url + qs);
        } else {
            getUrl(url, addForecast);
        }
    }
    //Add the buoy data to the page
    let addConditions = (data) => {
        let ft = (data.Hs * 3.281).toFixed(2);
        let content = `<h3>Stn 142</h3><p>${ft}ft @ ${data.Tp}s ${data.Dp}&deg;</p><a style="display:none" href="http://cdip.ucsd.edu/m/products/?stn=142p1" title="SF Bar Buoy" target="_blank" rel="noopener">CDIP 142</a>`;
        document.getElementById('conditions').innerHTML = content;
        loader[0].style.display = "none";
    }
    //Call the buoy endpoint and add the buoy data to the page
    let getConditions = (url) => {
        getUrl(url, addConditions);
    }
    //Add the tide data to the page
    let addTides = (data) => {
        //format the tide chart
        let tableStart = `<table class="col m12 highlight responsive-table" id="tideTable"><thead><tr><td>Time</td><td>Predicted</td><td>Low/High</td></tr></thead>`;
        let tableRows = ``;
        let tableEnd = `</tbody></table>`;
        let length = data.predictions.length;
        for (let i = 0; i < length; i++) {
            tableRows += `<tr><td>${data.predictions[i].t}</td><td>${(data.predictions[i].v)} ft</td><td>${data.predictions[i].type}</td></tr>`;
        }
        let tideChart = tableStart + tableRows + tableEnd;
        //Add tide chart to div
        document.getElementById('tides').insertAdjacentHTML("beforeend", tideChart);
    }
    //Call the tides endpoint and add the tide data to the page
    let getTides = (url) => {
        getUrl(url, addTides);
    }
    //Easter egg
    let love = () => {
        let special = document.getElementById("l");
        if (!special.classList.contains("shown")) {
            special.innerHTML = "I love you Kim!";
            special.classList.add("shown");
        } else {
            special.innerHTML = "";
            special.classList.remove("shown");
        }
    }
    //push to data layer
    jtokib.push({
        "item": item
    });
    //check dark-mode setting
    checkMode();
    //echo item to page
    printItem(item);
    //get forecast
    getForecast(fURL);
    //get buoy data
    getConditions(bURL);
    //get tide data
    getTides(tURL);
    //add copyright year
    document.getElementById("year").innerHTML = year;
    //add click handler to support dark-mode
    document.getElementById("toggle").addEventListener("mousedown", toggleMode);
    //add easter egg
    document.getElementById("k").addEventListener("mousedown", love);
    //load after DCL
    document.addEventListener('DOMContentLoaded', function () {
        //Lazyload images and iframes
        var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
        lazyImages.forEach((x) => {
            x.src = x.dataset.src
            x.classList.remove("lazy");
        })
        //Intialize Materialize Effects
        //parallax
        var parallaxEl = document.querySelectorAll('.parallax');
        M.Parallax.init(parallaxEl);
        //tabs
        var tabsEl = document.querySelector('.tabs');
        M.Tabs.init(tabsEl);
    });
})();