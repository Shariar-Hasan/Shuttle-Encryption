// encrypt button function
function displayEncryption() {
    var en = document.getElementById("encryption");
    var de = document.getElementById("decryption");


    en.style.display = "block";
    de.style.display = "none";

    document.getElementById("btn-en").style.background = "#6C757D";
    document.getElementById("btn-de").style.background = "transparent";
}
// function started
function encrypt()
{
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charSetLen = charSet.length;
    var string = document.getElementById("string-e").value;
    var key = Math.floor(Math.random()*10%6+3);
    var decryptedText = "";
    var strLen = string.length;
    for(var i=0; i<strLen ; i++)
    {
        for(var j=0 ; j<key ; j++)
        {
            decryptedText+=charSet[Math.floor((Math.random()*100)%charSetLen)];
        }
        decryptedText += charSet[string.charCodeAt(i)%charSetLen]+Math.floor(string.charCodeAt(i)/charSetLen);
    }
    decryptedText+=key;
    document.getElementById("output-e").value = decryptedText;

}

// decrypt button function
function displayDecryption() {
    var en = document.getElementById("encryption");
    var de = document.getElementById("decryption");


    en.style.display = "none";
    de.style.display = "block";


    document.getElementById("btn-de").style.background = "#6C757D";
    document.getElementById("btn-en").style.background = "transparent";
}

// function started
function decrypt()
{
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charSetLen = charSet.length;
    var string = document.getElementById("string-d").value;
    var strLen = string.length;
    var key = Number(string[strLen-1]);
    var decryptedText = "";


    for(var i = key; i<strLen ; i=i+key)
    {
        var a = charSet.indexOf(string[i]);
        var b = Number(string[i+1]);
        // decryptedText += String.fromCharCode(b*charSetLen+a);
        decryptedText += String.fromCharCode(Number(string[i+1])*charSetLen+charSet.indexOf(string[i]));
        i=i+2;
    }



    document.getElementById("output-d").value = decryptedText;
}