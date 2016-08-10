var censor=require("md-censorify");
//console.log(censor.getCensoredWord());
console.log(censor.censor("Some very bad sad and mad text ."));
//console.log(censor.getCensoredWord());
//censor.addCensoredWord("gloomy");
//console.log(censor.getCensoredWord());
console.log(censor.censor("A very bad gloomy day ."));
console.error(censor.getCensoredWord());
