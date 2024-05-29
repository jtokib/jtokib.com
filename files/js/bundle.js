(() => {
    const arr = ["rabbit", "monsta killa", "sad panda", "lamp shade", "kook", "jello shot", "bird", "sea anemone", "designer handbag", "pink manatee", "cow", "cheap whiskey", "depressed pirate", "fake zombie", "drunk koala", "part-time model", "friendly ballerina", "fashionista"];
    const rando = Math.floor(Math.random() * arr.length);
    const item = arr[rando];
    const wait = 250;
    let i = 0;

    const d = new Date();
    const year = d.getFullYear();

    const body = document.body;
    const itemDiv = document.querySelector("#items");
    const mode = localStorage.getItem("dm");
    const loader = document.getElementsByClassName("progress");

    const bURL = "https://us-central1-jtokib.cloudfunctions.net/buoy";
    const tURL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9414290&time_zone=lst_ldt&units=english&interval=hilo&format=json";

    // Print out random string to page
    const printItem = (str) => {
        if (navigator.userAgent.includes("Googlebot")) {
            itemDiv.innerHTML = item;
        } else if (itemDiv !== null) {
            setTimeout(() => {
                itemDiv.innerHTML += str.charAt(i).toUpperCase();
                if (i < str.length) {
                    i++;
                    printItem(str);
                }
            }, wait);
        }
    };

    // Toggle dark mode
    const toggleMode = () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dm", body.classList.contains("dark-mode") ? "1" : "0");
    };

    // Check if dark mode is enabled on load
    const checkMode = () => {
        if (mode === "1") {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    };

    // Helper function to make a GET request to a URL with optional callback to manipulate data as needed
    const getUrl = (url, callback) => {
        fetch(url, { method: "GET", mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                if (callback) {
                    callback(data);
                }
            })
            .catch((e) => {
                console.error("Fetch failed", e);
            });
    };

    // Add the buoy data to the page
    const addConditions = (data) => {
        const ft = (data.Hs * 3.281).toFixed(2);
        const content = `<h3>SF Buoy</h3><p>${ft}ft @ ${data.Tp}s ${data.Dp}&deg;</p><a style="display:none" href="http://cdip.ucsd.edu/m/products/?stn=142p1" title="SF Bar Buoy" target="_blank" rel="noopener">CDIP 142</a>`;
        document.querySelector('#conditions').innerHTML = content;
        loader[0].style.display = "none";
    };

    // Call the buoy endpoint and add the buoy data to the page
    const getConditions = (url) => {
        getUrl(url, addConditions);
    };

    // Add the tide data to the page
    const addTides = (data) => {
        const tableStart = `<table class="col m12 highlight" id="tideTable"><thead><tr><td>Date & Time</td><td>Predicted</td><td>Low/High</td></tr></thead>`;
        const tableRows = data.predictions.map(prediction => 
            `<tr><td>${prediction.t.slice(5)}</td><td>${prediction.v} ft</td><td>${prediction.type}</td></tr>`
        ).join('');
        const tableEnd = `</tbody></table>`;
        const tideChart = tableStart + tableRows + tableEnd;
        document.querySelector('#tides').insertAdjacentHTML("beforeend", tideChart);
    };

    // Call the tides endpoint and add the tide data to the page
    const getTides = (url) => {
        getUrl(url, addTides);
    };

    // Easter egg
    const love = () => {
        const m = String.fromCharCode(73, 32, 76, 79, 86, 69, 32, 89, 79, 85, 32, 75, 73, 77, 33);
        const special = document.querySelector("#l");
        if (!special.classList.contains("shown")) {
            special.innerHTML = m;
            special.classList.add("shown");
        } else {
            special.innerHTML = "";
            special.classList.remove("shown");
        }
    };

    // Magic 8 ball
    const magic8b = () => {
        const results = Math.random() < 0.5 ? "Yeaaa brah!" : "Maybe tomorrow kook!";
        window.jtokib.push({ "answer": results });
        document.querySelector("#decide").style.display = "none";
        document.querySelector('#magic').innerText = results;
    };

    // Push to data layer
    window.jtokib.push({ "item": item });

    // Check dark-mode setting
    checkMode();

    // Echo item to page
    printItem(item);

    // Get buoy data
    getConditions(bURL);

    // Get tide data
    getTides(tURL);

    // Add copyright year
    document.querySelector("#year").innerHTML = year;

    // Add click handler to support dark-mode
    document.querySelector("#toggle").addEventListener("mousedown", toggleMode);

    // Add easter egg
    document.querySelector("#k").addEventListener("mousedown", love);

    // Magic 8 ball
    document.querySelector("#decide").addEventListener("mousedown", magic8b);

    // Load after DCL
    document.addEventListener('DOMContentLoaded', () => {
        // Lazyload images and iframes
        const lazyImages = Array.from(document.querySelectorAll(".lazy"));
        lazyImages.forEach((img) => {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
        });

        // Initialize Materialize Effects
        const parallaxEl = document.querySelectorAll('.parallax');
        M.Parallax.init(parallaxEl);

        const tabsEl = document.querySelector('.tabs');
        M.Tabs.init(tabsEl);
    });
})();