/**
 * I just pasted this into the console to get all the variables as a .JSON file.
 * This can also be achieved using Nodejs.
 * After the translation, the .JSON file will be converted into js code.
 */

// this creates a dictionary with all the variables
var dict = {
    i18n,
    strSHelp,
    strAddC,
    strAddW,
    strSel,
    strMove,
    strDel,
    strRot,
    strProp,
    strNum
};

console.log(dict);
// making a .JSON string from the dictionary
var jsonContent = JSON.stringify(dict);
jsonContent = JSON.parse(jsonContent);
console.log(jsonContent);

// function to download the .JSON file from the browser
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// downloading the file, setting it's name and text format
download(jsonContent, 'en-us.json', 'text/plain');