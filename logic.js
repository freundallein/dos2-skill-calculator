const sumKeys = (obj) => {
    return Object.keys(obj)
        .reduce(function (sum, key) {
            return sum + parseFloat(obj[key]);
        }, 0);
};
const sumBool = (obj) => {
    return Object.keys(obj)
        .reduce(function (sum, key) {
            return sum + ((obj[key]) ? 1 : 0);
        }, 0);
};
const nullifyObjectValues = (obj) => {
    Object.keys(obj).map((key) => obj[key] = false);
};


let character = {
    name: null,
    race: null,
    gender: true,
    level: 1,
    attributes: {
        strength: 10,
        finesse: 10,
        intelligence: 10,
        constitution: 10,
        memory: 10,
        wits: 10
    },
    combat: {
        dualWielding: 0,
        ranged: 0,
        singlehanded: 0,
        twohanded: 0,
        leadership: 0,
        perseverance: 0,
        retribution: 0,
        aerothurge: 0,
        geomancer: 0,
        huntsman: 0,
        hydrosophist: 0,
        necromancer: 0,
        polymorph: 0,
        pyrokinetic: 0,
        scoundrel: 0,
        summoning: 0,
        warfare: 0
    },
    civil: {
        bartering: 0,
        luckyCharm: 0,
        persuasion: 0,
        loremaster: 0,
        telekinesis: 0,
        sneaking: 0,
        thievery: 0
    },
    talents: {
        AllSkilledUp: false,
        Ambidextrous: false,
        ArrowRecovery: false,
        BiggerAndBetter: false,
        ComebackKid: false,
        Demon: false,
        DuckDuckGoose: false,
        ElementalAffinity: false,
        ElementalRanger: false,
        Escapist: false,
        Executioner: false,
        FarOutMan: false,
        FiveStarDiner: false,
        GlassCannon: false,
        Guerilla: false,
        Hothead: false,
        Ice_King: false,
        Leech: false,
        LivingArmour: false,
        LoneWolf: false,
        Mnemonic: false,
        MorningPerson: false,
        Opportunist: false,
        ParryMaster: false,
        PetPal: false,
        PictureofHealth: false,
        SavageSortilege: false,
        Slingshot: false,
        Stench: false,
        ThePawn: false,
        Torturer: false,
        Unstable: false,
        WalkItOff: false,
        WhatARush: false,
    },
    racialTalents: {
        AncestralKnowledge: false,
        CorpseEater: false,
        DwarvenGuile: false,
        Ingenious: false,
        Sophisticated: false,
        Spellsong: false,
        Sturdy: false,
        Thrifty: false,
        Undead: false,
    },
    stat: {},
    getPoints() {
        return {
            attributes: 3 + 2 * (this.level - 1) + this.combat.polymorph + 60 - sumKeys(this.attributes) + ((this.talents.BiggerAndBetter) ? 2 : 0),
            combat: 2 + this.level - sumKeys(this.combat) + ((this.talents.AllSkilledUp) ? 1 : 0),
            civil: 1 + Math.floor((this.level / 4)) - sumKeys(this.civil) + ((this.talents.AllSkilledUp) ? 1 : 0),
            talents: 1 + Math.floor((this.level + 2) / 5) - sumBool(this.talents)
        };
    },
    levelUp() {
        (this.level < 20) ? this.level += 1 : null
    },
    levelDown() {
        (this.level > 1) ? this.level -= 1 : null
    },
    switchTalent(name) {
        this.talents[name] = !this.talents[name];
    },
    switchRacialTalent(name) {
        this.racialTalents[name] = !this.racialTalents[name];
    },
    setUp(part, name) {
        let max;
        switch (part) {
            case 'attributes':
                max = 30;
                break;
            case 'combat':
                max = 10;
                break;
            case 'civil':
                max = 10;
                break;
        }
        (this[part][name] < max && this.hasPoints(part)) ? this[part][name] += 1 : null
    },
    setDown(part, name) {
        let min;
        switch (part) {
            case 'attributes':
                min = 10;
                break;
            default:
                min = 0;
        }
        (this[part][name] > min && this.hasPoints(part)) ? this[part][name] -= 1 : null
    },
    hasPoints(part) {
        return this.getPoints()[part]
    },
    setRace(race) {
        switch (race) {
            case 'human':
                this.nullifyRacialTalents();
                this.switchRacialTalent('Ingenious');
                this.switchRacialTalent('Thrifty');
                break;
            case 'elf':
                this.nullifyRacialTalents();
                this.switchRacialTalent('AncestralKnowledge');
                this.switchRacialTalent('CorpseEater');
                break;
            case 'lizard':
                this.nullifyRacialTalents();
                this.switchRacialTalent('Sophisticated');
                this.switchRacialTalent('Spellsong');
                break;
            case 'dwarf':
                this.nullifyRacialTalents();
                this.switchRacialTalent('DwarvenGuile');
                this.switchRacialTalent('Sturdy');
                break;
            case 'undead_human':
                this.nullifyRacialTalents();
                this.switchRacialTalent('Ingenious');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_elf':
                this.nullifyRacialTalents();
                this.switchRacialTalent('CorpseEater');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_lizard':
                this.nullifyRacialTalents();
                this.switchRacialTalent('Sophisticated');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_dwarf':
                this.nullifyRacialTalents();
                this.switchRacialTalent('Sturdy');
                this.switchRacialTalent('Undead');
                break;
        }
    },
    nullifyRacialTalents() {
        nullifyObjectValues(this.racialTalents)
    }
};


console.log(character.racialTalents);
console.log(character.getPoints());
character.setRace('undead_human');
console.log(character.racialTalents);
console.log(character.getPoints());
