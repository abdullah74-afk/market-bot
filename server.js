// ✅ Express setup for Render
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Market bot is alive!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

// ✅ Discord bot setup
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// ✅ Bot ready
client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

// ✅ Message handler
client.on('messageCreate', message => {
  if (message.author.bot) return; // لا ترد على البوتات

  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

// ✅ Login with bot token
client.login(process.env.TOKEN).catch(err => {
  console.error('❌ Failed to login:', err.message);
});
