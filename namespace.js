const namespace = {
    EN: {
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
    },
    RU: {
        strength: 'Сила',
        finesse: 'Ловкость',
        intelligence: 'Интеллект',
        constitution: 'Телосложение',
        memory: 'Память',
        wits: 'Восприятие',

        dualWielding: 'Два оружия',
        ranged: 'Дальний бой',
        singlehanded: 'Одноручное',
        twohanded: 'Двуручное',
        leadership: 'Лидерство',
        perseverance: 'Стойкость',
        retribution: 'Воздаяние',
        aerothurge: 'Аэротургия',
        geomancer: 'Геомантия',
        huntsman: 'Мастерство охоты',
        hydrosophist: 'Гидрософистика',
        necromancer: 'Некромантия',
        polymorph: 'Превращение',
        pyrokinetic: 'Пирокинетика',
        scoundrel: 'Исскуство убийства',
        summoning: 'Призывание',
        warfare: 'Военное дело',

        bartering: 'Обмен',
        luckyCharm: 'Везучесть',
        persuasion: 'Убеждение',
        loremaster: 'Знание легенд',
        telekinesis: 'Телекинез',
        sneaking: 'Скрытность',
        thievery: 'Воровство',

        AllSkilledUp: 'Мастер на все руки',
        Ambidextrous: 'Ловкость рук',
        ArrowRecovery: 'Собиратель стрел',
        BiggerAndBetter: 'Находчивость',
        ComebackKid: 'Живчик',
        Demon: 'Демон',
        DuckDuckGoose: 'Изворотливость',
        ElementalAffinity: 'Единство со стихиями',
        ElementalRanger: 'Проводник стихий',
        Escapist: 'Мастер побега',
        Executioner: 'Палач',
        FarOutMan: 'Дальнобойность',
        FiveStarDiner: 'Гурман',
        GlassCannon: 'Стеклянная пушка',
        Guerilla: 'Партизан',
        Hothead: 'Горячая голова',
        Ice_King: 'Ледяной король',
        Leech: 'Пиявка',
        LivingArmour: 'Живой доспех',
        LoneWolf: 'Волк-одиночка',
        Mnemonic: 'Мнемоника',
        MorningPerson: 'Ранняя пташка',
        Opportunist: 'Оппортунист',
        ParryMaster: 'Мастер уклонения',
        PetPal: 'Друг животных',
        PictureofHealth: 'Здоровяк',
        SavageSortilege: 'Первозданная магия',
        Slingshot: 'Рогатка',
        Stench: 'Вонючка',
        ThePawn: 'Пешка',
        Torturer: 'Садист',
        Unstable: 'Нестабильность',
        WalkItOff: 'Само пройдет',
        WhatARush: 'Собранность',

        health: 'Здоровье',

        phArmor: 'Физическая броня',
        mArmor: 'Магическая броня',
        restorePhArmor: 'Восстановление физ. брони',
        restoreMArmor: 'Восстановление маг. брони',
        restoreArmorFromStatus: 'Восстановление брони от статусов',

        strDmg: 'Урон от силы, %',
        physDmg: 'Физический урон, %',
        SHDmg: 'Урон одноручным, %',
        THDmg: 'Урон двуручным, %',
        finDmg: 'Урон от ловкости, %',
        DWDmg: 'Урон от двух оружий, %',
        RangedDmg: 'Урон дальнего боя, %',
        SneakDmg: 'Урон от скрытности, %',
        intDmg: 'Урон от интеллекта, %',
        PoisonDmg: 'Урон ядом, %',
        FireDmg: 'Урон огнем, %',
        reflectDmg: 'Урон от воздаяния, %',
        MADmg: 'Урон от маг. брони, %',
        HGDmg: 'Урон с возвышенности, %',
        SummonDmg: 'Урон призванных сущ., %',

        critChance: 'Шанс крита, %',
        rangedCritChance: 'Шанс крита дальнего боя, %',
        critChanceFullHP: 'Шанс крита на полном здоровье, %',
        critChanceMultiplier: 'Множитель урона от крита',
        THCritChanceMultiplier: 'Множитель урона от двуручного',

        baseAcc: 'Точность, %',
        SHAcc: 'Точность одноручнм, %',
        FullHPAcc: 'Точность с полным здоровьем, %',

        dodge: 'Уклонение, %',
        necroHealing: 'Лечение некромантией, %',
        healingIncrease: 'Улучшение лечения, %',

        fire: 'Сопротивление огню, %',
        water: 'Сопротивление воде, %',
        earth: 'Сопротивление земле, %',
        air: 'Сопротивление воздуху, %',
        poison: 'Сопротивление яду, %',

        initiative: 'Инициатива',
        memorySlots: 'Ячейки памяти',
        moveSpeed: 'Скорость движения',
        maxAP: 'Максимальные ОД',
        startAP: 'Начальные ОД',
        turnAP: 'ОД на ход',
        moveWeight: 'Переносимый вес',
        carryWeight: 'Макс. переносимый вес'
    }
};

const descriptions = {
    EN: {
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
    },
    RU: {
        strength: 'Сила увеличивает урон от оружия и навыков, построенных' +
        ' на силе, и позволяет двигаться и переносить больший  вес.\n' +
        '\n' +
        '1 очко = +5% урона, +7.5кг веса, +10кг максимального веса',
        finesse: 'Ловкость увеличивает урон от оружия и навыков,' +
        ' построенных на ловкости.\n' +
        '\n' +
        '1 очко = +5% урона',
        intelligence: 'Интеллект увеличивает урон от оружия и навыков,\' +\n' +
        '        \' построенных на интеллекте.\n' +
        '\n' +
        '1 очко = +5% урона',
        constitution: 'Телосложение определяет количество жизни.\n' +
        '\n' +
        '1 очко = +7 % жизни',
        memory: 'Память определяет сколько скиллов можно запомнить для' +
        ' битвы.\n\n' +
        '1 очко = 1 ячейка памяти',
        wits: 'Восприятие влияет на шанс крита, инициатву и способность' +
        ' находить ловушки и секреты\n' +
        '\n' +
        '1 очко = 1% шанс крита, +1 инициатива',

        dualWielding: 'Два оружия увеливает урон и уклонение при' +
        ' использовании двух одноручных оружиях\t\n' +
        '\n' +
        '+5% урона и +1% шанс уклонения.',
        ranged: 'Дальний бой увеличивает урон и шанс крита при' +
        ' использовании луков и арбалетов.\t\n' +
        '\n' +
        '+5% урона и +1% шанс крита.',
        singlehanded: 'Увеличивает урон и точноть при использовании' +
        ' одноручного оружия (кинжал,' +
        ' меч, топор, булава или жезл) с щитом или пустой второй рукой.\t\n' +
        '\n' +
        '+5% урона и +5% точность.',
        twohanded: 'Увеличивает урон и множитель крита при использовании' +
        ' двуручного оружия (меч, топор, булава, копье или посох).\t\n' +
        '\n' +
        '+5% урона и +5% множитель урона от двуручного.',
        leadership: 'Лидерство дает бонус на уклонение и споротивление всем' +
        ' союзникам в радуисе 5 м.\t\n' +
        '\n' +
        '+2% уклонение и +3% ко всем сопротивлениям',
        perseverance: 'Стойкость восстанавливает магическую броню после' +
        ' статусов "заморожен" и "оглушен", и восстанавливает физическую' +
        ' броню после падений и окаменений.\t\n\n' +
        '+5% восстановление брони',
        retribution: 'Воздаяние отражает полученный урон во врага.\t\n' +
        '\n' +
        '5% урона отражается во врага.',
        aerothurge: 'Аэротургия увеличивает наносимый урон магической' +
        ' броне.\t\n\n' +
        '+10% урона магической броне',
        geomancer: 'Геомантия увеличвает урон ядом и восстановление' +
        ' физической брони.\t\n\n' +
        '+5% урона ядом. Восстановление физической брони получает +5% бонус.',
        huntsman: 'Увеличивает урон при атаке с возвышенности.\t\n\n' +
        '+5% урона с возвышенности.',
        hydrosophist: 'Гидрософистика увеличивает лечение и' +
        ' восстановление брони.\t\n\n' +
        'Лечение лучше на 5%. Восстановление магической брони +5%.',
        necromancer: 'Лечит при каждом ударе по здоровью врага.\t\n\n' +
        'Лечит +10% здоровья от урона, нанесенного по здоровью врага.',
        polymorph: 'Превращение дает дополнительно 1 очко качеств.\t\n\n' +
        '+1 очко качеств',
        pyrokinetic: 'Пирокинетика увеличивает урон от огня.\t\n' +
        '\n' +
        '+5% урона от огня.',
        scoundrel: 'Увеличивает скорость движения и множитель крита.\t\n' +
        '\n' +
        '+5% множитель крита, +0.03 скорость движения.',
        summoning: 'Увеличивает показатели призванных существ.\t\n\n' +
        'Призванное существо получает на 5% больше жизни, урона,' +
        ' физической и магической брони.',
        warfare: 'Увеличивает весь физиеской урон, который вы наносите.\t\n' +
        '\n' +
        '+5% физического урона.',

        bartering: 'Обмен улучшает общение с торговцами.\t\n\n' +
        'Торговцы скидывают 10%.',
        luckyCharm: 'Везучесть повышает шанс найти что-то стоящее в сундуках.',
        persuasion: 'Убеждение дает +4 за очко при убеждении в диалогах.\t\n\n' +
        '+4 очка при убеждении.',
        loremaster: 'Знание легенд позволяет определять предметы и свойства' +
        ' врагов.\t\n\n',
        telekinesis: 'Телекинез определяет расстояние и вес предметов,' +
        ' которые вы можете перемещать телепатически.\t\n\n',
        sneaking: 'Скрытность позволяет красться в тени.\t\n\n',
        thievery: 'Воровство улучшает карманные кражи и открывание замков.\t\n\n',

        AllSkilledUp: 'Дает 1 дополнительное очко в боевые и 1' +
        ' дополнительное очко в цивильные навыки.\n\n' +
        'Требование: Уровень 2',
        Ambidextrous: 'Уменьшает стоимость использования гранат и свитков на' +
        ' 1ОД, если вторая рука пустая.\n\n',
        ArrowRecovery: 'Дает 33% шанс вернут ьстрелу после выстрела.\n\n',
        BiggerAndBetter: 'Немедленно дает 2 очка качеств.\n\n' +
        'Требование: Уровень 2',
        ComebackKid: 'Позволяет один раз за бой вернуться к жизни с 20%' +
        ' здоровья, когда враг наносит смертельный удар. Если вы умрете в бою, ' +
        'но будете воскрешены, Живчик сможет сработать снова.\n\n',
        Demon: 'увеличивает Сопр. огню на 15%, но снижает Сопр. воде на 15%. ' +
        'Кроме того, макс. уровень Сопр. огню увеличивается на 10. \n\n' +
        'Требование: Пирокинетика 1\n' +
        'Не работает с Ледяным Королемю',
        DuckDuckGoose: 'Позволяет избегать "атак по возможности".\n\n' +
        'Требование: Мастерство охоты 1',
        ElementalAffinity: 'Сокращает число ОД для применения заклинаний на' +
        ' 1, если вы стоите на поверхности с той же стихией.',
        ElementalRanger: 'Стрелы будут наносить дополнительный стихийный урон, ' +
        'определяемый типом поверхности, на которой стоит ваша цель.\n\n' +
        'Требование: Мастерство охоты 1',
        Escapist: 'Позволяет бежать из боя даже в том случае, если' +
        ' противники находятся совсем близко.',
        Executioner: 'Дает вам 2 ОД, когда вы наносите смертельный удар..\n' +
        '\n' +
        'Требование: Военное дело 1\n' +
        'Не работает с Пешкой.',
        FarOutMan: 'Увеличивает дальность действия заклинаний и свитков на' +
        ' 2 м.',
        FiveStarDiner: 'Удваивает эффект еды.',
        GlassCannon: 'Позволяет вам начинать каждый раунд с максимальным' +
        ' количеством ОД, но магическая и физическая броня не защищают вас от эффектов.\n' +
        '\n' +
        'Требование: Не работает с Волком-одиночкой',
        Guerilla: 'Увеличивает урон от атак в скрытном режиме на 40%.\n\n' +
        'Требование: Скрытность 1',
        Hothead: 'Когда у вас максимум здоровья, дает вам +10% к шансу' +
        ' крит. удара и +10 к точности..\n',
        Ice_King: 'Увеличивает Сопр. воде на 15%, но снижает Сопр. огню на' +
        ' 15%. Кроме того, макс. уровень Сопр. воде увеличивается на 10..\n' +
        '\n' +
        'Требование: Гидрософистика 1\n' +
        'Не работает с Демоном.',
        Leech: 'Лечит при стоянии на крови.',
        LivingArmour: 'Добавляет 35% от здоровья, полученного за счет' +
        ' навыков и расходных материалов, к магической броне.',
        LoneWolf: 'Волк-одиночка дает +2 макс. ОД, ' +
        '+2 к восстановлению ОД, +30% к здоровью, +30% к физической броне, ' +
        '+30% к магической броне и удваивает очки, вложенные в качества и боевые умения, ' +
        'пока у вас не больше одного спутника. ' +
        'Если в вашей группе оказывается больше двух участников, действие временно приостанавливается.\n\n' +
        'Требование: Не работает со Стеклянной пушкой',
        Mnemonic: 'Дает 3 очка к Памяти.',
        MorningPerson: 'Восскрешает с полным здоровьем.',
        Opportunist: 'Позволяет проводить атаки по возможности.',
        ParryMaster: 'Дает 10% уклонения при использовании двух оружий.',
        PetPal: 'Умение говорить с животными.',
        PictureofHealth: 'Дает +3% к здоровью за каждое очко в Военном' +
        ' деле.\n\n' +
        'Требование: Военное дело 1',
        SavageSortilege: 'У всех заклинаний появляется критический шанс' +
        ' равный Вашему критическому шансу.',
        Slingshot: 'Добавляет 5 м к броску гранаты.',
        Stench: 'Уменьшает отношение к Вам на -25, но враги реже выбирают' +
        ' Вас как цель.',
        ThePawn: 'Дает 1 ОД на движение для каждого хода.\n\n' +
        'Требование: Искусство убийства 1\n' +
        'Не работает с Палачом',
        Torturer: 'Увеличивает на 1 ход длительность отрицательных статусов' +
        ' у врагов.',
        Unstable: 'Взрываешься при смерти, нанося 100% здоровья как' +
        ' физический урон в радиусе 3 м.\n',
        WalkItOff: 'Уменьшает длительность статусов на 1 ход.',
        WhatARush: 'Увеличивает макс. ОД и восстанавление ОД на 1, когда' +
        ' здоровье ниже 50%.',

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
    }
};

const groups = {
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

    health: 'base',
    initiative: 'base',
    memorySlots: 'base',
    moveSpeed: 'base',
    maxAP: 'base',
    startAP: 'base',
    turnAP: 'base',
    moveWeight: 'base',
    carryWeight: 'base',

    phArmor: 'armor',
    mArmor: 'armor',
    restorePhArmor: 'armor',
    restoreMArmor: 'armor',
    restoreArmorFromStatus: 'armor',

    strDmg: 'strDmg',
    physDmg: 'strDmg',
    SHDmg: 'strDmg',
    THDmg: 'strDmg',

    finDmg: 'finDmg',
    DWDmg: 'finDmg',
    RangedDmg: 'finDmg',
    SneakDmg: 'finDmg',

    intDmg: 'intDmg',
    PoisonDmg: 'intDmg',
    FireDmg: 'intDmg',

    reflectDmg: 'otherDmg',
    MADmg: 'otherDmg',
    HGDmg: 'otherDmg',
    SummonDmg: 'otherDmg',

    critChance: 'crit',
    rangedCritChance: 'crit',
    critChanceFullHP: 'crit',
    critChanceMultiplier: 'crit',
    THCritChanceMultiplier: 'crit',

    baseAcc: 'accuracy',
    SHAcc: 'accuracy',
    FullHPAcc: 'accuracy',

    dodge: 'otherDefence',
    necroHealing: 'otherDefence',
    healingIncrease: 'otherDefence',

    fire: 'resist',
    water: 'resist',
    earth: 'resist',
    air: 'resist',
    poison: 'resist'
};
const interfaceNamespace = {
    EN: {
        save: 'Save',
        load: 'Load',
        race: 'Race',
        level: 'Level',
        points: 'Points left',
        weapons: 'Weapons',
        defence: 'Defence',
        skills: 'Skills',
        personality: 'Personality',
        craft: 'Craftsmanship',
        nasty: 'Nasty deeds',
        basic: 'Basic',
        strBD: 'Strength-based Damage',
        finBD: 'Finesse-based Damage',
        intBD: 'Intelligence-based Damage',
        OTBD: 'Other-type Damage',
        crit: 'Critical chance',
        acc: 'Accuracy',
        arm: 'Armor',
        OD: 'Other Defences',
        resist: 'Resistance'
    },
    RU: {
        save: 'Сохранить',
        load: 'Загрузить',
        race: 'Раса',
        level: 'Уровень',
        points: 'Осталось очков',
        weapons: 'Оружие',
        defence: 'Защита',
        skills: 'Навыки',
        personality: 'Личность',
        craft: 'Мастерство',
        nasty: 'Мутные дела',
        basic: 'Базовые',
        strBD: 'Урон на основе Силы',
        finBD: 'Урон на основе Ловкости',
        intBD: 'Урон на основе Интеллекта',
        OTBD: 'Другой урон',
        crit: 'Критический шанс',
        acc: 'Точность',
        arm: 'Броня',
        OD: 'Другие защиты',
        resist: 'Сопротивление'

    }
};

export const getName = (key, lang) => {
    return namespace[lang][key]
};

export const getDescription = (key, lang) => {
    return descriptions[lang][key]
};

export const getGroup = (key) => {
    return groups[key]
};

export const translateInterface = (key, lang) => {
    return interfaceNamespace[lang][key]
};