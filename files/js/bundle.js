(() => {
    let arr = ["rabbit", "monsta", "drunk panda", "punk", "kook", "jello shot", "bird", "plane", "designer handbag", "manatee", "cow", "cheap whiskey"];
    let rando = Math.floor(Math.random() * arr.length);
    let item = arr[rando];
    let wait = 250;
    let i = 0;
    let d = new Date();
    let year = d.getFullYear();
    const body = document.body;
    const itemDiv = document.getElementById("items");
    const special = document.getElementById("l");
    const surf = document.getElementById("s");
    const mode = localStorage.getItem("dm");
    const img = document.querySelectorAll("img")[0];
    const fURL = "https://us-central1-jtokib.cloudfunctions.net/forecaster";
    const bURL = "https://us-central1-jtokib.cloudfunctions.net/buoy";

    let printItem = (str) => {
        if (navigator.userAgent.includes("Googlebot")) {
            itemDiv.innerHTML = item + "!";
        } else if (itemDiv !== null) {
            setTimeout(function () {
                itemDiv.innerHTML += str.charAt(i).toUpperCase();
                if (i < str.length) {
                    printItem(str);
                    i++;
                } else {
                    itemDiv.innerHTML += "!";
                }
            }, wait)
        } else {
            return;
        }
    }

    let toggleMode = () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.dm = "1";
        } else {
            localStorage.dm = "0";
        }
    }

    let checkMode = () => {
        if (mode === "0") {
            body.classList.remove("dark-mode");
        }
        if (mode === "1") {
            body.classList.add("dark-mode");
        }
    }

    let love = () => {
        if (!special.classList.contains("shown")) {
            special.innerHTML = "I love you Kim!";
            special.classList.add("shown");
        } else {
            special.innerHTML = "";
            special.classList.remove("shown");
        }
    }

    let formatter = (data) => {
        let tableStart = `<table id="forecastTable" cellspacing="0"><thead><tr><td align="left" valign="top">Date</td><td align="left" valign="top">Time</td><td align="left" valign="top">Conditions</td><td align="left" valign="top">Size</td></tr></thead>`;
        let tableRows = ``;
        let tableEnd = `</tbody><tfoot><tr><td colspan="4"></td></tr></tfoot></table>`;
        let length = Object.keys(data).length;
        for (let i = 0; i < length; i++) {
            tableRows += `<tr><td align="left" valign="center">${data[i].date}</td><td align="left" valign="top">AM</td><td align="left" valign="top">${data[i].report.am.conditions}</td><td align="left" valign="top">${data[i].report.am.size}</td></tr><tr><td>${data[i].date}</td><td>PM</td><td>${data[i].report.pm.conditions}</td><td>${data[i].report.pm.size}</td></tr>`
        }
        return tableStart + tableRows + tableEnd;
    }

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

    let addForecast = (data) => {
        let content = formatter(data);
        surf.insertAdjacentHTML("afterend", content);
        img.addEventListener("click", function () {
            document.getElementById("forecastTable").classList.toggle("hide");
        });
    }

    let forecast = (url) => {
        let qs = window.location.search.substring(0);
        if (qs === "?kc=test") {
            getUrl(url + qs);
        } else {
            getUrl(url, addForecast);
            img.removeEventListener("dblclick", function () {
                forecast(fURL)
            });
            img.removeEventListener("touchstart", function () {
                forecast(fURL)
            });
        }
    }

    let addConditions = (data) => {
        let ft = (data.Hs * 3.281).toFixed(2);
        let content = `<p class="center"><strong>Current Conditions at <a href="http://cdip.ucsd.edu/m/products/?stn=142p1" title="SF Bar" target="_blank">SF Buoy</a></strong><br>${ft}ft @ ${data.Tp}s ${data.Dp}&deg;</p>`;
        surf.insertAdjacentHTML("afterbegin", content);
    }

    let conditions = (url) => {
        getUrl(url, addConditions);
    }

    //push to data layer
    jtokib.push({
        "item": item
    });
    //check dark-mode setting
    checkMode();
    //echo item to page
    printItem(item);
    //get buoy data
    conditions(bURL);
    //add copyright year
    document.getElementById("year").innerHTML = year;
    //add click handler to support dark-mode
    document.getElementById("toggle").addEventListener("mousedown", toggleMode);
    //add easter egg
    document.getElementById("k").addEventListener("mousedown", love);
    //add fulfill call for desktop
    img.addEventListener("dblclick", function () {
        forecast(fURL)
    });
    //ad fulfill call for mobile
    img.addEventListener("touchstart", function () {
        forecast(fURL)
    });

})();

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('sw.js', {
//             updateViaCache: 'all'
//         }).then((registration) => {
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, (err) => {
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }