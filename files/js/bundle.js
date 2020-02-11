const theGoodStuff = {
    run: () => {
        let arr = ["rabbit", "monsta", "drunk panda", "punk", "kook", "jello shot", "bird", "plane", "designer handbag", "manatee", "cow", "cheap whiskey"];
        let rando = Math.floor(Math.random() * arr.length);
        let item = arr[rando];
        let wait = 250;
        let i = 0;
        let d = new Date();
        let year = d.getFullYear();
        let body = document.body;
        let itemDiv = document.getElementById("items");
        let special = document.getElementById("l");
        let surf = document.getElementById("s");
        let mode = localStorage.getItem("dm");

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
            let tableEnd = `</tbody><tfoot><tr><td colspan="4">Source: <a href='URL HERE' title="Surfline OB Forecast" target="_blank" >URL HERE</a></td></tr></tfoot></table>`;
            let length = Object.keys(data).length;
            for (let i = 0; i < length; i++) {
                tableRows += `<tr><td align="left" valign="center">${data[i].date}</td><td align="left" valign="top">AM</td><td align="left" valign="top">${data[i].report.am.conditions}</td><td align="left" valign="top">${data[i].report.am.size}</td></tr><tr><td>${data[i].date}</td><td>PM</td><td>${data[i].report.pm.conditions}</td><td>${data[i].report.pm.size}</td></tr>`
            }
            return tableStart + tableRows + tableEnd;
        }

        let getUrl = (p) => {
            fetch(p, {
                    method: "GET",
                    mode: "cors"
                })
                .then((res) => {
                    return res.text();
                }).then((data) => {
                    surf.innerHTML += formatter(data);
                    console.log("Fetch success " + data);
                })
                .catch((e) => {
                    console.log("Fetch failed " + e);
                })
            document.querySelectorAll('img')[0].removeEventListener("dblclick", fulfill);
            document.querySelectorAll('img')[0].removeEventListener("touchstart", fulfill);
        }

        let fulfill = () => {
            let base = "https://us-central1-jtokib.cloudfunctions.net/fulfill";
            let qs = window.location.search.substring(0);
            if (qs === "?kc=test") {
                getUrl(base + qs);
            } else {
                getUrl(base);
                document.querySelectorAll('img')[0].removeEventListener("dblclick", fulfill);
                document.querySelectorAll('img')[0].removeEventListener("touchstart", fulfill);
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
        //add click handler to support dark-mod
        document.getElementById("toggle").addEventListener("mousedown", toggleMode);
        //add easter egg
        document.getElementById("k").addEventListener("mousedown", love);
        //add fulfill call
        document.querySelectorAll('img')[0].addEventListener("dblclick", fulfill);
        document.querySelectorAll('img')[0].addEventListener("touchstart", fulfill);
    }
};

theGoodStuff.run();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}