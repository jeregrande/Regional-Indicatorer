const Discord = require("discord.js");
const client = new Discord.Client();
const keepAlive = require("./server");
const loginToken = process.env['TOKEN'];
const channelID = process.env['CHANNEL_ID'];

keepAlive();
client.login(loginToken);

client.on("ready", () => {
  console.log(`Logged in as 
  ${client.user.tag}.`);
});

client.on("message", msg => {
let tokens = msg.content.split(" ");

  if (tokens[0] === "!t" && msg.channel.id == channelID) {
    let keywords = "Provide something to translate.";

    if (tokens.length > 1) {
      translatedKeywords = translateKeywords(tokens);
      msg.reply(translatedKeywords);
    } else {
      msg.reply(keywords);
      console.log("Translated without arguments.")
    }
  }

})

function translateKeywords(theTokens) {
  let tokens = theTokens;
  let keywords = tokens.slice(1, tokens.length).join(" ");
  let keyChars = keywords.split("");
  let translatedChars = [];

  for (x in keyChars) {
    if(keyChars[x] === " ") {
      currentChar = "  ";
    } else if (isCharacterALetter(keyChars[x])) {
      lowercaseChar = String(keyChars[x]).toLowerCase();
      currentChar = ":regional_indicator_" + lowercaseChar + ":";
    } else if (keyChars[x] === "!") {
      currentChar = ":grey_exclamation:";
    } else if (keyChars[x] === "?") {
      currentChar = ":grey_question:";
    } else if (keyChars[x] === "+") {
      currentChar = ":heavy_plus_sign:";
    } else if (keyChars[x] === "-") {
      currentChar = ":heavy_minus_sign:";
    } else if (keyChars[x] === "%") {
      currentChar = ":heavy_division_sign:";
    } else if (keyChars[x] === "$") {
      currentChar = ":heavy_dollar_sign:";
    } else {
      currentChar = "";
    }
    
    translatedChars.push(currentChar);
  }

  console.log("translatedChars is " + translatedChars)
  translatedText = translatedChars.join(" ");
  return translatedText;
}

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}