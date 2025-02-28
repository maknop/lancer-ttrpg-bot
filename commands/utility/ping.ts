import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export const execute = async (interaction: CommandInteraction) => {
    console.log("user initiated a `ping`, server is responding with `pong`")

    return interaction.reply("Pong!");
}

