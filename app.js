var display = document.getElementById("display");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = ";/?()=@_$%-!<|^>:#%";
var length = 10;

const allChars = upperCase + lowerCase + number + symbol

function createPasword() {
    let Pasword = '';
    Pasword += upperCase[Math.floor(Math.random() * upperCase.length)]
    Pasword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    Pasword += number[Math.floor(Math.random() * number.length)]
    Pasword += symbol[Math.floor(Math.random() * symbol.length)]
    console.log(Pasword);

    while (length > Pasword.length) {
        Pasword += allChars[Math.floor(Math.random() * allChars.length)]
    }
    display.value = Pasword
}
function copyPasword() {
    display.select();
    // display.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(display.value);
    display.value = ""
}