var censoredWord=["sad", "bad", "mad"];
var customCensoredWord=[];
function censor(inStr) {
    for(idx in censoredWord){
        inStr=inStr.replace(censoredWord[idx], "****");
    }
    for(idx in customCensoredWord){
        inStr=inStr.replace(customCensoredWord[idx], "****");
    }
    return inStr;
}
function getCensoredWord() {
    return censoredWord.concat(customCensoredWord);
}
function addCensoredWord(word) {
    customCensoredWord.push(word);
}

module.exports.censor=censor;
module.exports.censoredWord=addCensoredWord;
module.exports.customCensoredWord=getCensoredWord;