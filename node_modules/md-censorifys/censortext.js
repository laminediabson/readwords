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
function addCensoredWord(word) {
    customCensoredWord.push(word);
}
function getCensoredWord() {
    return censoredWord.concat(customCensoredWord);
}
exports.censor=censor;
exports.censoredWord=addCensoredWord;
exports.customCensoredWord=getCensoredWord;