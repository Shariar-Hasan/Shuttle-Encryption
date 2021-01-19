// encrypt button function
function displayEncryption() {
    var en = document.getElementById("encryption");
    var de = document.getElementById("decryption");


    // show hide
    en.style.display = "block";
    de.style.display = "none";
    document.getElementById("all-part").style.display = "block";
    document.getElementById("text-hide").style.display = "none";


    // button color 
    document.getElementById("btn-en").style.background = "#6C757D";
    document.getElementById("btn-de").style.background = "transparent";
}
// encrypt function started
function encrypt() {
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charSetLen = charSet.length;


    var string = document.getElementById("string-e").value;
    var strLen = string.length;


    if (strLen != 0) {
        var key = Math.floor(Math.random() * 10 % 6 + 3);
        var decryptedText = "";

        for (var i = 0; i < strLen; i++) {
            for (var j = 0; j < key; j++) {
                decryptedText += charSet[Math.floor((Math.random() * 100) % charSetLen)];
            }
            decryptedText += charSet[string.charCodeAt(i) % charSetLen] + Math.floor(string.charCodeAt(i) / charSetLen);
        }
        decryptedText += key;
        document.getElementById("output-e").value = decryptedText;
    }


}

// decrypt button function
function displayDecryption() {
    var en = document.getElementById("encryption");
    var de = document.getElementById("decryption");

    // show hide
    en.style.display = "none";
    de.style.display = "block";
    document.getElementById("all-part").style.display = "block";
    document.getElementById("text-hide").style.display = "none";

    // button color 
    document.getElementById("btn-de").style.background = "#6C757D";
    document.getElementById("btn-en").style.background = "transparent";
}


// decrypt function started
function decrypt() {
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charSetLen = charSet.length;
    var string = document.getElementById("string-d").value;
    var strLen = string.length;
    var key = Number(string[strLen - 1]);
    var decryptedText = "";


    for (var i = key; i < strLen; i = i + key) {
        var a = charSet.indexOf(string[i]);
        var b = Number(string[i + 1]);
        // decryptedText += String.fromCharCode(b*charSetLen+a);
        decryptedText += String.fromCharCode(Number(string[i + 1]) * charSetLen + charSet.indexOf(string[i]));
        i = i + 2;
    }



    document.getElementById("output-d").value = decryptedText;
}

// copy function starts
function textCopy() {
    document.getElementById("output-e").select();
    document.getElementById("output-d").select();
    document.execCommand("copy");
}




//changing theme part

function changeTheme() {
    // previous color 474787
    var getBody = document.getElementById("body");
    var getTheme = document.getElementById("theme-change");
    var getHeader = document.getElementById("header");
    var getChecked = document.getElementById("checkbox");
    var getBox = document.getElementById("box");
    if (!getChecked.checked) {
        getBody.style.background = "#ececec";
        getBody.style.color = "black";
        getBox.style.background = "#808e9b";
        getHeader.style.background = "#ececec";
        getTheme.innerHTML = "Dark Theme";

    }
    else {

        getBody.style.background = "#485460";
        getBody.style.color = "white";
        getBox.style.background = "#1e272e";
        getHeader.style.background = "#485460";
        getTheme.innerHTML = "Light Theme";
    }
}