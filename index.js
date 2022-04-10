const { exec } = require("child_process");
const { timeStamp } = require("console");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "$";

Client.on("ready", () => {
console.log("bot opérationnel")
Client.user.setStatus("idle")
Client.user.setActivity("Visual Studio Code");
})


Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //$help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#00D166")
            .setTitle("Liste des commandes")
            .setDescription("Voici la liste des commandes du bot :")
            .setThumbnail("https://zupimages.net/up/22/01/8w05.jpg")
            .addField("$help", "Affiche la liste des commandes")
            .addField("$play [nom de la musique]", "Joue de la musique dans votre channel vocal")
            .addField("$ban [@Mention]", "Banni la personne mentionné")
            .addField("$kick [@Mention]", "Exclut la personne mentionnée")
            .setTimestamp();
        message.channel.send({ embeds: [embed]});
    }
});


Client.login(process.env.TOKEN);