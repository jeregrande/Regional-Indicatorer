# Regional-Indicatorer
A Discord bot that translates text into regional indicator emojis.  

Get it here: https://discord.com/api/oauth2/authorize?client_id=849347433896345640&permissions=2147559424&scope=bot  

# Setup  
1. Use the above link to invite the bot to your server.  
2. If you'd like to limit the bot to a specific channel, then:
  a. Fork the rep
  b. Copy the desired channel ID  
  c. Update the CHANNEL_ID secret  
  d. Add the condition "&& msg.channel.id == channelID" to line 18

# Usage  
Simply call the bot with "!t" and follow with the message you'd like to translate.

Example: "!t Tranlsate this"
