function openPopup() {
    var width = 500;
    var height = 300;
    var left = (window.innerWidth / 2) - (width / 2);
    var top = (window.innerHeight / 2) - (height / 2);
    window.open("", "popup", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}
setTimeout(function() {
    document.getElementById('result').textContent = "Tempo atrasado!";
}, 3000);
function encrypt(text, shift) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var ascii = char.charCodeAt(0);
        var encryptedAscii = (ascii - 65 + shift) % 26 + 65;
        var encryptedChar = String.fromCharCode(encryptedAscii);
        result += encryptedChar;
    }

    return result;
}

var encryptedText = encrypt("HELLO", 3);
document.getElementById('result').textContent = encryptedText;
var text = document.documentElement.innerHTML;
var wordToFind = "exemplo";

if (text.includes(wordToFind)) {
    document.getElementById('result').textContent = "Palavra encontrada!";
} else {
    document.getElementById('result').textContent = "Palavra não encontrada!";
}
document.getElementById('url').textContent = window.location.href;
window.location.href = "http://www.exemplo.com";
function displayTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
}

setInterval(displayTime, 1000);
var text = "Exemplo de texto original";
var newText = text.slice(0, -5) + " nova palavra";

document.getElementById('result').textContent = newText;
var text = "Este é um exemplo de texto";
var replacedText = text.replace("exemplo", "substituição");

document.getElementById('result').textContent = replacedText;
function multiply(a, b) {
    return a * b;
}

var result = multiply(5, 3);
document.getElementById('result').textContent = result;
