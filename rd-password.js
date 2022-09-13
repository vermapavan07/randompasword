const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const password1 = document.getElementById("first-password")
const password2 = document.getElementById("second-password")
const changeLength = document.getElementById("changeRange")
let size = 8;


function randompass() {
    let random = Math.floor(Math.random() * characters.length)
    return random;
}


function passwordGen() {
    let value1 = '';
    let value2 = '';
    for (let i = 0; i < size; i++) {
        let no = randompass()
        let val = characters[no];
        value1 += val;
    }
    for (let j = 0; j < size; j++) {
        let no = randompass();
        let val = characters[no];
        value2 += val;
    }
    password1.innerText = value1;
    password2.innerText = value2;
}

changeLength.onclick = function () {
    size = window.prompt('Please enter length of the Password', 8);
}


password1.onclick = function () {
    document.execCommand("copy");
}
password1.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", password1.textContent);
        console.log(event.clipboardData.getData("text"))
        password1.classList.add('dark')
        setTimeout(() => {
            password1.classList.remove('dark')
        }, 500);
    }
});

password2.onclick = function () {
    document.execCommand("copy");
}
password2.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", password2.textContent);
        console.log(event.clipboardData.getData("text"))
        password2.classList.add("dark")
        setTimeout(() => {
            password2.classList.remove("dark")
        }, 500);
    }
});