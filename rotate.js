(() => {
    let arr = ["rabbit", "panda", "punk", "kook", "jello shot", "bird", "plane"];
    let rando = Math.floor(Math.random() * arr.length);
    let wait = 250;
    let i = 0;

    rotateCase = (str) => {
        setTimeout(function () {
            document.getElementById('promo').innerHTML += str.charAt(i).toUpperCase();
            if (i < str.length) {
                rotateCase(str);
                i++;
            } else {
                document.getElementById('promo').innerHTML += "!";
            }
        }, wait)
    }
    rotateCase(arr[rando]);
 })();