var kata = 'Hello World!'

function balikString (inputText) {
    var hasil='';
    
    for (var i=1; i<= inputText.length;i++) {
        hasil += inputText[inputText.length-i];
    }

    return hasil;
}

console.log(balikString(kata));