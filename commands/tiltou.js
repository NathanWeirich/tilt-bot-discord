const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tiltou")
    .setDescription("Avisa que tiltou"),
  async execute(interaction) {
    await interaction.reply("Tiltou!");
  },
};
