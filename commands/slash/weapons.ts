import { CommandInteraction, SlashCommandBuilder } from "discord.js";

import data from "@massif/lancer-data";

const weaponDescription = [];

data?.weapons?.forEach((item) => {
    weaponDescription.push({ name: item.name, value: item.description || "No description of this weapon was found." })
});

console.log(...weaponDescription)

export const command = new SlashCommandBuilder()
    .setName("weapon")
    .setDescription("Displays information about all weapons.")
    .addStringOption(option =>
        option.setName('name')
            .setDescription('Information pertaining to the weapon selected.')
            .setRequired(true)
            .addChoices(
                { name: 'Anti-Materiel Rifle', value: 'Anti-Materiel Rifle' },
                { name: 'Assault Rifle', value: 'Assault Rifle' },
                { name: 'Charged Blade', value: 'Charged Blade' },
            ));

export async function execute(interaction: CommandInteraction) {
    const selectedWeaponDescription = interaction.options.getString('name');

    return interaction.reply(selectedWeaponDescription);
}

