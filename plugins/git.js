const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/EC7OcQS.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `RDX BOT CREATED BY ABHIRAM SACHU 

🌐CREATOR NUMBER : wa.me/917594029466

🌐GIT LINK : https://github.com/SHIBI-SER/Achumwol

🌐 GROUP LINK : https://bit.ly/3Heg6PY

🌐 AND THANKS TO MY  COLLABORATORS 🥰

🌐THANKS TO SUPPORT 😊🥰

🌐Achumwol BOT🌐
`}) 

}));
