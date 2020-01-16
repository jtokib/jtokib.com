(() => {
    let arr = ["rabbit", "monsta", "panda", "punk", "kook", "jello shot", "bird", "plane", "designer handbag", "manatee", "cow"];
    let rando = Math.floor(Math.random() * arr.length);
    let wait = 250;
    let i = 0;
    let d = new Date();
    let year = d.getFullYear();
    let items = document.getElementById('items');
    let body = document.body;
    let special = document.getElementById('l');
    let mode = localStorage.getItem('dm');

    rotateCase = (str) => {
        setTimeout(function () {
            items.innerHTML += str.charAt(i).toUpperCase();
            if (i < str.length) {
                rotateCase(str);
                i++;
            } else {
                items.innerHTML += "!";
            }
        }, wait)
    }

    toggleMode = () => {
        if (mode === null) {
            body.classList.add('dark-mode');
            localStorage.setItem('dm', '1');
        }
        if (mode === '0') {
            body.classList.add('dark-mode');
            localStorage.setItem('dm', '1');
        }
        if (mode === '1') {
            body.classList.remove('dark-mode');
            localStorage.setItem('dm', '0');
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

    checkMode();
    rotateCase(arr[rando]);
    document.getElementById('year').innerHTML = year;
    document.getElementById('toggle').addEventListener("mousedown", toggleMode);
    document.getElementById('k').addEventListener("mousedown", love);
})();