var ready = () => {
    let arr = ["rabbit", "monsta", "drunk panda", "punk", "kook", "jello shot", "bird", "plane", "designer handbag", "manatee", "cow", "cheap whiskey"];
    let rando = Math.floor(Math.random() * arr.length);
    let item = arr[rando];
    let wait = 250;
    let i = 0;
    let d = new Date();
    let year = d.getFullYear();
    let itemDiv = document.getElementById('items');
    let body = document.body;
    let special = document.getElementById('l');
    let mode = localStorage.getItem('dm');

    printItem = (str) => {
        if (navigator.userAgent.includes('Googlebot')) {
            itemDiv.innerHTML = item + "!";
        } else {
            setTimeout(function () {
                itemDiv.innerHTML += str.charAt(i).toUpperCase();
                if (i < str.length) {
                    printItem(str);
                    i++;
                } else {
                    itemDiv.innerHTML += "!";
                }
            }, wait)
        }
    }

    toggleMode = () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.dm = '1';
        } else {
            localStorage.dm = '0';
        }
    }

    checkMode = () => {
        if (mode === '0') {
            body.classList.remove('dark-mode');
        }
        if (mode === '1') {
            body.classList.add('dark-mode');
        }
    }

    love = () => {
        if (!special.classList.contains('shown')) {
            special.innerHTML = "I love you Kim!";
            special.classList.add('shown');
        } else {
            special.innerHTML = "";
            special.classList.remove('shown');
        }
    }

    //push to data layer
    jtokib.push({'item':item});
    //check dark-mode setting
    checkMode();
    //echo item to page
    printItem(item);
    //add copyright year
    document.getElementById('year').innerHTML = year;
    //add click handler to support dark-mod
    document.getElementById('toggle').addEventListener("mousedown", toggleMode);
    //add easter egg
    document.getElementById('k').addEventListener("mousedown", love);
};

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

ready();