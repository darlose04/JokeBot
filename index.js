const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const fetch = require("node-fetch");

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

    let joke = fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    console.log(joke);
  };

  if (msg.content[0] === "!") {
    getJoke();
  }
});

let token = process.env.TOKEN;

client.login(token);
