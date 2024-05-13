function displayAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function styleText() {
    var fancy = document.getElementById("fancyShmancy");
    var textArea = document.getElementById("textInput");
    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooFunction() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    textArea.value = sentences.join(". ").trim();
}