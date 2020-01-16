(() => {
    let arr = ["rabbit", "panda", "punk", "kook", "jello shot", "bird", "plane", "designer handbag", "manatee", "cow"];
    let rando = Math.floor(Math.random() * arr.length);
    let wait = 250;
    let i = 0;
    let d = new Date();
    let year = d.getFullYear();
    let items = document.getElementById('items');

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
    rotateCase(arr[rando]);

    document.getElementById('year').innerHTML = year;
 })();