const namespace = {
        strength: 'Strength',
        finesse: 'Finesse',
        intelligence: 'Intelligence',
        constitution: 'Constitution',
        memory: 'Memory',
        wits: 'Wits',

        dualWielding: 'Dual wielding',
        ranged: 'Ranged',
        singlehanded: 'Single-handed',
        twohanded: 'Two-handed',
        leadership: 'Leadership',
        perseverance: 'Perseverance',
        retribution: 'Retribution',
        aerothurge: 'Aerothurge',
        geomancer: 'Geomancer',
        huntsman: 'Huntsman',
        hydrosophist: 'Hydrosophist',
        necromancer: 'Necromancer',
        polymorph: 'Polymorph',
        pyrokinetic: 'Pyrokinetic',
        scoundrel: 'Scoundrel',
        summoning: 'Summoning',
        warfare: 'Warfare',

        bartering: 'Bartering',
        luckyCharm: 'Lucky charm',
        persuasion: 'Persuasion',
        loremaster: 'Loremaster',
        telekinesis: 'Telekinesis',
        sneaking: 'Sneaking',
        thievery: 'Thievery',

        AllSkilledUp: 'All skilled up',
        Ambidextrous: 'Ambidextrous',
        ArrowRecovery: 'Arrow recovery',
        BiggerAndBetter: 'Bigger and better',
        ComebackKid: 'Comeback kid',
        Demon: 'Daemon',
        DuckDuckGoose: 'Duck Duck Goose',
        ElementalAffinity: 'Elemental affinity',
        ElementalRanger: 'Elemental ranger',
        Escapist: 'Escapist',
        Executioner: 'Executioner',
        FarOutMan: 'Far-out-man',
        FiveStarDiner: 'Five-star diner',
        GlassCannon: 'Glass cannon',
        Guerilla: 'Guerilla',
        Hothead: 'Hothead',
        Ice_King: 'Ice king',
        Leech: 'Leech',
        LivingArmour: 'Living armour',
        LoneWolf: 'Lone wolf',
        Mnemonic: 'Mnemonic',
        MorningPerson: 'Morning person',
        Opportunist: 'Opportunist',
        ParryMaster: 'Parry master',
        PetPal: 'Pet pal',
        PictureofHealth: 'Picture of health',
        SavageSortilege: 'Savage sortilege',
        Slingshot: 'Slingshot',
        Stench: 'Stench',
        ThePawn: 'The pawn',
        Torturer: 'Torturer',
        Unstable: 'Unstable',
        WalkItOff: 'Walk it off',
        WhatARush: 'What a rush',

        health: 'Health',

        phArmor: 'Physical Armor',
        mArmor: 'Magic Armor',
        restorePhArmor: 'Physical Armor restoration',
        restoreMArmor: 'Magic armor restoration',
        restoreArmorFromStatus: 'Armor restored by status',

        strDmg: 'Strength damage, %',
        physDmg: 'Physical damage, %',
        SHDmg: 'Single-handed damage, %',
        THDmg: 'Two-handed damage, %',
        finDmg: 'Finesse damage, %',
        DWDmg: 'Dual wielding damage, %',
        RangedDmg: 'Ranged damage, %',
        SneakDmg: 'Sneaking damage, %',
        intDmg: 'Intelligence damage, %',
        PoisonDmg: 'Poison damage, %',
        FireDmg: 'Fire damage, %',
        reflectDmg: 'Retribution reflect dmg, %',
        MADmg: 'Magic Armor damage, %',
        HGDmg: 'Damage from high ground, %',
        SummonDmg: 'Summoning damage, %',

        critChance: 'Critical chance, %',
        rangedCritChance: 'Ranged critical chance, %',
        critChanceFullHP: 'Critical chance at Full HP, %',
        critChanceMultiplier: 'Critical strike damage multiplier',
        THCritChanceMultiplier: 'Two-handed crit damage multiplier',

        baseAcc: 'Base accuracy, %',
        SHAcc: 'Single-handed accuracy, %',
        FullHPAcc: 'Accuracy at Full HP, %',

        dodge: 'Dodge, %',
        necroHealing: 'Necromancer healing, %',
        healingIncrease: 'Healing increase, %',

        fire: 'Fire resistance, %',
        water: 'Water resistance, %',
        earth: 'Earth resistance, %',
        air: 'Air resistance, %',
        poison: 'Poison resistance, %',

        initiative: 'Initiative',
        memorySlots: 'Memory slots',
        moveSpeed: 'Move speed',
        maxAP: 'Max action points',
        startAP: 'Start turn action points',
        turnAP: 'Each turn action points',
        moveWeight: 'Move weight',
        carryWeight: 'Carry weight'
};

const descriptions = {
        strength: 'Strength increases damage dealt with strength-based weapons and skills, and allows you to move and carry heavier items.\n' +
        '\n' +
        '1 point = +5% damage, +7.5kg Move Weight, +10kg Carry Weight',
        finesse: 'Finesse increases damage dealt with finesse-based weapons and skills.\n' +
        '\n' +
        '1 point = +5% damage',
        intelligence: 'Intelligence increases damage dealt with intelligence-based weapons and skills.\n' +
        '\n' +
        '1 point = +5% damage',
        constitution: 'Constitution determines how much Vitality you have.\n' +
        '\n' +
        '1 point = +7 % Vitality',
        memory: 'Memory is a new stat that determines how many Skills can be memorized at any one time.  Unlike in previous versions, there is no limit on how many skills can be learned, only how many will be available during combat.  Most skills only require a single memory slot but more powerful skills may require multiple.\n' +
        '\n' +
        '1 point = 1 Memory Slot',
        wits: 'Wits affects your Critical Chance, Initiative, and ability to detect traps and find hidden treasures.\n' +
        '\n' +
        '1 point = 1% Critical Chance, +1 Initiative',

        dualWielding: 'Dual Wielding increases damage and Dodging when dual-wielding two one-handed weapons.\t\n' +
        '\n' +
        '+5% Damage and +1% Dodge Chance.',
        ranged: 'Ranged increase damage and Critical Chance with bows and crossbows.\t\n' +
        '\n' +
        '+5% Damage and +1% Critical Chance.',
        singlehanded: 'Single-handed increase damage and Accuracy when using a one-handed weapon (dagger, sword, axe, mace or wand) with a shield or empty off-hand.\t\n' +
        '\n' +
        '+5% Damage and +5% Accuracy.',
        twohanded: 'Two-Handed increase damage and critical multiplier when using two-handed melee weapon (Sword, axe, mace, spear or staff).\t\n' +
        '\n' +
        '+5% Damage and +5% Critical Multiplier.',
        leadership: 'Leadership grants dodging and resistance bonuses to all allies in a 5m radius.\t\n' +
        '\n' +
        '+2% Dodging and +3% to all Resistances',
        perseverance: 'Perseverance restores Magic Armor after you recover from Frozen or Stunned, and restores Physical Armor after knocked down or Petrified.\t\n' +
        '\n' +
        '+5% Armor restored',
        retribution: 'Retribution reflects received damage to your attacker.\t\n' +
        '\n' +
        '5% damage reflected.',
        aerothurge: 'Aerotheurge increase all damage you deal to Magic Armour.\t\n' +
        '\n' +
        '+10% Damage dealt to magic armor',
        geomancer: 'Geomancer increase all Poison damage you dealt and any Physical Armour restoration that you cause.\t\n' +
        '\n' +
        '+5% Poison Damage. Restoring Physical Armour gets a +5% bonus.',
        huntsman: 'Huntsman increases the damage bonus when attacking from high ground.\t\n' +
        '\n' +
        '+5% Damage from high ground.',
        hydrosophist: 'Hydrosophist increases all healing and Armour restoration that you cause.\t\n' +
        '\n' +
        'Healing increased by +5%. Restoring Magic Armour is increased by +5%.',
        necromancer: 'Necromancer heals you every time you deal damage to Vitality. Damage from reflection effects yields half heal.\t\n' +
        '\n' +
        'Heal +10% of the damage dealt to Vitality.',
        polymorph: 'Polymorph provides one free attribute point per point invested.\t\n' +
        '\n' +
        '+1 Attribute Point',
        pyrokinetic: 'Pyrokinetic increase all Fire damage you deal.\t\n' +
        '\n' +
        '+5% Fire Damage.',
        scoundrel: 'Scoundrel increase movement speed and boosts your Critical Modifier.\t\n' +
        '\n' +
        '+5% Critical Multiplier, +0.03 Movement speed.',
        summoning: 'Summoning increases Vitality, Damage, Physical Armour and Magical Armour of your summons and totems.\t\n' +
        '\n' +
        'Summons starts with 5% more Vitality, Damage, Physical Armour and Magical Armour.',
        warfare: 'Increases all physical damage you deal.\t\n' +
        '\n' +
        '+5% Physical Damage.',

        bartering: 'Bartering improves your haggling skills with traders.\t\n' +
        '\n' +
        'Level 1: Traders will drop 10% off their base price. You can earn 10% more profit when you sell items.',
        luckyCharm: 'Lucky Charm increases your likelihood of finding extra treasure whenever loot is stashed.',
        persuasion: 'Persuasion boosts your score with +4 per point when persuading characters in a dialog.\t\n' +
        '\n' +
        '+4 score when persuading characters.',
        loremaster: 'Loremaster identifies enemies and allows you to identify items. Increasing Loremaster allows you to identify more, faster.\t\n' +
        '\n' +
        'To identify, use an identifying glass and click on the item you want to identify. To examine a monster or NPC, right click them and choose Examine.',
        telekinesis: 'Telekinesis determines the range and weight of items you can move telepathically.\t\n' +
        '\n' +
        'Increase the range of your telekinesis.',
        sneaking: 'Sneaking determines how well you can sneak without getting caught.\t\n' +
        '\n' +
        'A higher sneaking ability improves your movement speed while sneaking and shrinks NPC sight cones.',
        thievery: 'Thievery improves your lockpicking and pickpocketing skills.\t\n' +
        '\n' +
        'To lockpick, use a lockpick and click on the item you want to lockpick.',

        AllSkilledUp: 'Grants 1 extra Combat Ability Point and 1 extra Civil Ability Point.\n' +
        '\n' +
        'Requirement: Level 2',
        Ambidextrous: 'Reduces the cost of using grenades and scrolls by 1AP if your offhand is free.\n' +
        '\n' +
        'Requirement: None',
        ArrowRecovery: 'Grants a 33% chance to recover a special arrow after firing it.\n' +
        '\n' +
        'Requirement: None',
        BiggerAndBetter: 'Immediately grants 2 extra attribute points.\n' +
        '\n' +
        'Requirement: Level 2',
        ComebackKid: 'Once per combat, if an enemy lands a fatal blow, Comeback Kid will help you bounce back to life with 20% health. If you die and are resurrected in combat, Comeback Kid will be available again.\n' +
        '\n' +
        'Requirement: None',
        Demon: 'Gain 15% fire resistance and 15% water weakness. Max fire resistance also increases by 10. \n' +
        '\n' +
        'Requirement: Pyrokinetic 1\n' +
        'Cannot be used with Ice King',
        DuckDuckGoose: 'Lets you evade attacks of opportunity.\n' +
        '\n' +
        'Requirement: Huntsman 1',
        ElementalAffinity: 'Lowers the Action Point cost of spells by 1 when standing in a surface of the same element.',
        ElementalRanger: 'Arrows will deal bonus elemental damage depending on the surface the target is standing in.\n' +
        '\n' +
        'Requirement: Huntsman 1',
        Escapist: 'Allows you to flee combat even when enemies are right next to you.',
        Executioner: 'Gain 2 AP after dealing a killing blow.\n' +
        '\n' +
        'Requirement: Warfare 1\n' +
        'Does not work with The Pawn.',
        FarOutMan: 'Increase the range of spells and scrolls by 2m.',
        FiveStarDiner: 'Doubles the effect of foods.',
        GlassCannon: 'You start every combat round with Maximum AP, but Magic and Physical Armour do not protect you from statuses.\n' +
        '\n' +
        'Requirement: Incompatible with Lone Wolf',
        Guerilla: 'While sneaking, your attack damage is increased by 40%.\n' +
        '\n' +
        'Requirement: Sneaking 1',
        Hothead: 'While you are at maximum Vitality, Hothead grants you an extra 10% critical chance and 10% more accuracy.\n',
        Ice_King: 'Grants +15% Water resistance and +15% fire weakness. Max water resistance is raised by 10.\n' +
        '\n' +
        'Requirement: Hydrosophist 1\n' +
        'Cannot be used with Demon.',
        Leech: 'Heals you when standing in blood.',
        LivingArmour: '35% of all healing you receive is added to your Magic Armour.',
        LoneWolf: 'Grants +2AP, +2AP Recovery, +30% Vitality, +30% Physical Armour, +30%Magical Armour and doubles all invested points into attributes and combat abilities (except Polymorph). These effects are only active if you are alone, or in a party of 2. While travelling with 3 or more people, the effects shut off.\n' +
        '\n' +
        'Requirement: Incompatible with Glass Cannon',
        Mnemonic: 'Gives you 3 extra points in your Memory attribute.',
        MorningPerson: 'When ressurected, you resurrect to full health.',
        Opportunist: 'Gives you the ability to perform attacks of opportunity.',
        ParryMaster: 'Gives you a 10% bonus dodge chance while dual wielding.',
        PetPal: 'Enables you to talk to animals.',
        PictureofHealth: 'Grants +3% extra Vitality for every point of Warfare.\n' +
        '\n' +
        'Requirement: Warfare 1',
        SavageSortilege: 'Gives all magical skills a critical chance equal to your critical chance score.',
        Slingshot: 'Adds an extra 5m range to your grenade throws.',
        Stench: 'Decreases everyone\'s attitude towards you by 25, but melee combatants will find you less attractive.',
        ThePawn: 'Permits your character 1 AP worth of free movement per turn.\n' +
        '\n' +
        'Requirement: Scoundrel 1\n' +
        'Cannot be used with Executioner',
        Torturer: 'Increases the duration of status effects you inflict by 1 turn.',
        Unstable: 'You explode upon death, dealing 100% of your vitality as physical damage in a 3 meter radius.\n',
        WalkItOff: 'Reduces all status durations by 1 turn. This also affects positive stances.',
        WhatARush: 'Increases your recovery and maximum Action Points by 1 when your health is below 50%.',

        health: 'Health',

        phArmor: 'Physical Armor',
        mArmor: 'Magic Armor',
        restorePhArmor: 'Physical Armor restoration',
        restoreMArmor: 'Magic armor restoration',
        restoreArmorFromStatus: 'Armor restored by status',

        strDmg: 'Strength damage',
        physDmg: 'Physical damage',
        SHDmg: 'Single-handed damage',
        THDmg: 'Two-handed damage',
        finDmg: 'Finesse damage',
        DWDmg: 'Dual wielding damage',
        RangedDmg: 'Ranged damage',
        SneakDmg: 'Sneaking damage',
        intDmg: 'Intelligence damage',
        PoisonDmg: 'Poison damage',
        FireDmg: 'Fire damage',
        reflectDmg: 'Retribution reflect damage',
        MADmg: 'Magic Armor damage',
        HGDmg: 'Damage from high ground',
        SummonDmg: 'Summoning damage',

        critChance: 'Critical chance',
        rangedCritChance: 'Ranged critical chance',
        critChanceFullHP: 'Critical chance at Full Health',
        critChanceMultiplier: 'Critical strike damage multiplier',
        THCritChanceMultiplier: 'Two-handed crit damage multiplier',

        baseAcc: 'Base accuracy',
        SHAcc: 'Single-handed accuracy',
        FullHPAcc: 'Accuracy at Full Health',

        dodge: 'Dodge',
        necroHealing: 'Healing from Necromancer',
        healingIncrease: 'Healing increase',

        fire: 'Fire resistance',
        water: 'Water resistance',
        earth: 'Earth resistance',
        air: 'Air resistance',
        poison: 'Poison resistance',

        initiative: 'Initiative',
        memorySlots: 'Memory slots',
        moveSpeed: 'Move speed',
        maxAP: 'Max action points',
        startAP: 'Start turn action points',
        turnAP: 'Each turn action points',
        moveWeight: 'Move weight',
        carryWeight: 'Carry weight'
};

const skillGroups = {
        dualWielding: 'weapons',
        ranged: 'weapons',
        singlehanded: 'weapons',
        twohanded: 'weapons',

        leadership: 'defence',
        perseverance: 'defence',
        retribution: 'defence',

        aerothurge: 'skills',
        geomancer: 'skills',
        huntsman: 'skills',
        hydrosophist: 'skills',
        necromancer: 'skills',
        polymorph: 'skills',
        pyrokinetic: 'skills',
        scoundrel: 'skills',
        summoning: 'skills',
        warfare: 'skills',

        bartering: 'personality',
        luckyCharm: 'personality',
        persuasion: 'personality',

        loremaster: 'craftsmanship',
        telekinesis: 'craftsmanship',

        sneaking: 'nasty',
        thievery: 'nasty',
};
export const getName = (key) => {
    return namespace[key]
};
export const getDescription = (key) => {
    return descriptions[key]
};
export const getSkillGroup = (key) => {
    return  skillGroups[key]
};