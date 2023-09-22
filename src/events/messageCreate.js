const { EmbedBuilder } = require("@discordjs/builders");
const { GuildEmoji, ReactionEmoji } = require("discord.js");
const fs = require("fs");

module.exports = {
    eventName: "messageCreate",
    async response(message)
    {
        if (message.content.startsWith("!say"))
        {
            let msg = message.content.slice(5);
            message.delete();
            message.channel.send(msg);
        }
        else if (message.content === "!createrolesmsg" && message.author.id === "628480432467607552")
        {
            const roleIDs = JSON.parse(fs.readFileSync("./src/extras/reactroles.json"));

            let embed = new EmbedBuilder()
                .setTitle("Select Roles!")
                .setFields(
                    { name: "Leaderboards", value: "🔴 - BeatLeader \n🟡 - ScoreSaber", inline: true },
                    { name: "Platforms", value: "🥽 - Quest \n💻 - PCVR", inline: true },
                    { name: " ", value: " ", inline: true },

                    { name: "Content", value: "🤳 - TikTok        ▶️ - YouTube \n📸 - Instagram 🗨️ - Twitch", inline: true },
                    { name: "Categories", value: "🏃‍♀️ - Speed        💡 - Tech \n📈 - Accuracy  📳 - Vibro \n💃 - Dance        😎 - Casual", inline: true },
                    { name: " ", value: " ", inline: true },
                    { name: "Skill", value: "🟪 - Pro        🟥 - Expert+ \n🟧 - Expert  🟨 - Hard \n🟩 - Normal 🟦 - Easy", inline: true },
                    { name: " ", value: " ", inline: true },
                    { name: " ", value: " ", inline: true },
                )
                .setColor(0xffc0cb);
            let msg = await message.client.channels.cache.get('1098019458653626429').send({ embeds: [ embed ] });
            
            for (const emojiName in roleIDs)
            {
                msg.react(emojiName);
            }
        }
    }
}