const theGoodStuff = {
    run: () => {
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

        let getUrl = (url) => {
            fetch(url, {
                    method: "GET",
                    mode: "cors"
                })
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    let content = formatter(data);
                    surf.insertAdjacentHTML("afterend", content);
                    img.addEventListener("click", function () {
                        document.getElementById('forecastTable').classList.toggle('hide');
                    });
                })
                .catch((e) => {
                    console.log("Fetch failed " + e);
                })
            img.removeEventListener("dblclick", forecast);
            img.removeEventListener("touchstart", forecast);
        }

        let forecast = () => {
            let base = "https://us-central1-jtokib.cloudfunctions.net/forecaster";
            let qs = window.location.search.substring(0);
            if (qs === "?kc=test") {
                getUrl(base + qs);
            } else {
                getUrl(base);
                img.removeEventListener("dblclick", forecast);
                img.removeEventListener("touchstart", forecast);
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
        //add copyright year
        document.getElementById("year").innerHTML = year;
        //add click handler to support dark-mode
        document.getElementById("toggle").addEventListener("mousedown", toggleMode);
        //add easter egg
        document.getElementById("k").addEventListener("mousedown", love);
        //add fulfill call for desktop
        img.addEventListener("dblclick", forecast);
        //ad fulfill call for mobile
        img.addEventListener("touchstart", forecast);
    }
};

theGoodStuff.run();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', {updateViaCache: 'all'}).then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}