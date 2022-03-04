// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [


	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "ISL Format",
	},
	{
		name: "[Gen 8] Draft",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace + Libero', 'Darkrai',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Eternatus',
			'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja + Protean', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base + Sheer Force', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian',
			'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Arena Trap', 'Battle Bond', 'Moody',
			'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'Bright Powder', 'King\'s Rock', 'Lax Incense', 'Razor Fang',
			'Quick Claw', 'Baton Pass', 'Buginium Z','Darkinium Z','Dragonium Z','Electrium Z','Fairium Z','Fightinium Z','Firium Z','Flyinium Z',
			'Ghostium Z','Grassium Z','Icium Z','Normalium Z','Poisonium Z','Psychium Z','Rockium Z','Steelium Z','Waterium Z','Aloraichium Z','Decidium Z','Evium Z',
			'Incinium Z','Kommonium Z','Lunalium Z','Lycanium Z','Marshadium Z','Mewnium Z','Mimikium Z','Pikanium Z','Pikashunium Z','Primarium Z','Snorlium Z','Solganium Z',
			'Tapunium Z','Ultranecrozium Z', 'Abomasnow-Mega', 'Absol-Mega', 'Aerodactyl-Mega', 'Aggron-Mega', 'Alakazam-Mega', 'Altaria-Mega', 'Ampharos-Mega', 'Audino-Mega',
			'Banette-Mega', 'Beedril-Mega', 'Blastoise-Mega', 'Blaziken-Mega', 'Camerupt-Mega', 'Charizard-Mega', 'Diancie-Mega', 'Gallade-Mega', 'Garchomp-Mega', 'Gardevoir-Mega',
			'Gengar-Mega', 'Glalie-Mega', 'Gyarados-Mega', 'Heracross-Mega', 'Houndoom-Mega', 'Kangaskhan-Mega', 'Latias-Mega', 'Latios-Mega', 'Loppuny-Mega', 'Lucario-Mega', 'Manectric-Mega',
			'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo-Mega', 'Pidgeot-Mega', 'Pinsir-Mega', 'Rayquaza-Mega', 'Sableye-Mega', 'Salamance-Mega', 'Sceptile-Mega', 'Scizor-Mega',
			'Sharpedo-Mega', 'Slowbro-Mega', 'Steelix-Mega', 'Swampert-Mega', 'Tyranitar-Mega', 'Venusaur-Mega', 'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick',
			'Twineedle', 'Sonic Boom', 'Dragon Rage', 'Meditate', 'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Bubble',
			'Dizzy Punch', 'Flash', 'Psywave', 'Sharpen', 'Spider Web', 'Nightmare', 'Feint Attack', 'Foresight', 'Return', 'Frustration', 'Magnitude', 'Pursuit', 'Hidden Power', 'Smelling Salts', 'Assist',
			'Refresh', 'Snatch', 'Secret Power', 'Camouflage', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle', 'Signal Beam', 'Sky Uppercut', 'Water Sport', 'Miracle Eye',
			'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Trump Card', 'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Magnet Bomb', 'Captivate', 'Heal Order',
			'Ominous Wind', 'Telekinesis', 'Flame Burst', 'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow', 'Heart Stamp', 'Steamroller', 'Rototiller', 'Ion Deluge',
		],
	},
	{
		section: "Other Formats",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
];
