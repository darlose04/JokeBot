const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
require("dotenv").config();

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  // if (msg.content === "ping") {
  //   msg.reply("pong");
  // }

  const getJoke = async () => {
    const url = "https://icanhazdadjoke.com/";

    let joke = await axios.get(url);

    console.log(joke);
  };

  if (msg.content[0] === "!") {
    getJoke();
  }
});

let token = process.env.TOKEN;

client.login(token);
