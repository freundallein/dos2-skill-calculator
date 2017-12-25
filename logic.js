import {getName, getDescription, getGroup} from './namespace';

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

export const mapObject = (object, language) => {
    return Object.keys(object).map(function (key) {
        return {
            key: key,
            name: getName(key, language),
            value: object[key],
            description: getDescription(key, language),
            group: getGroup(key)
        }
    });
};

export const getBaseHealth = (level) => {
    const baseDmg = {
        1: 30,
        2: 45,
        3: 65,
        4: 85,
        5: 100,
        6: 135,
        7: 165,
        8: 200,
        9: 235,
        10: 285,
        11: 345,
        12: 415,
        13: 560,
        14: 685,
        15: 840,
        16: 1015,
        17: 1255,
        18: 1790,
        19: 2240,
        20: 2815,
        21: 3110
    };
    return baseDmg[level]
};

let character = {
    error: null,
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
    updateChar(state) {
        this.race = state.race;
        this.level = state.level;
        this.attributes = state.attributes;
        this.combat = state.combat;
        this.civil = state.civil;
        this.talents = state.talents;
        this.racialTalents = state.racialTalents;
    },
    getPoints() {
        return {
            attributes: 3 + 2 * (this.level - 1) + this.combat.polymorph + 60 - sumKeys(this.attributes) + ((this.talents.BiggerAndBetter) ? 2 : 0),
            combat: 2 + this.level - sumKeys(this.combat) + ((this.talents.AllSkilledUp) ? 1 : 0),
            civil: 1 + Math.floor((this.level / 4)) - sumKeys(this.civil) + ((this.talents.AllSkilledUp) ? 1 : 0),
            talents: 1 + Math.floor((this.level + 2) / 5) - sumBool(this.talents)
        };
    },
    getSummary() {
        const baseHealth = getBaseHealth(this.level);
        const vitFromConstitution = (this.talents.LoneWolf) ? (this.attributes.constitution - 10) * 14 : (this.attributes.constitution - 10) * 7;
        const otherVit = ((this.talents.PictureofHealth) ? ((this.talents.LoneWolf) ? this.combat.warfare * 6 : this.combat.warfare * 3) : 0) + (this.racialTalents.DwarvenGuile) ? 10 : 0;
        const allResist = (this.talents.LoneWolf) ? this.combat.leadership * 6 : this.combat.leadership * 3;
        return {
            health: Math.floor(baseHealth * (1 + (vitFromConstitution + otherVit) / 100)),

            phArmor: (this.talents.LoneWolf) ? 30 : 0,
            mArmor: (this.talents.LoneWolf) ? 30 : 0,
            restorePhArmor: (this.talents.LoneWolf) ? this.combat.geomancer * 10 : this.combat.geomancer * 5,
            restoreMArmor: (this.talents.LoneWolf) ? this.combat.hydrosophist * 10 : this.combat.hydrosophist * 5,
            restoreArmorFromStatus: (this.talents.LoneWolf) ? this.combat.perseverance * 10 : this.combat.perseverance * 5,

            strDmg: (this.talents.LoneWolf) ? this.attributes.strength * 10 : this.attributes.strength * 5,
            physDmg: (this.talents.LoneWolf) ? this.combat.warfare * 10 : this.combat.warfare * 5,
            SHDmg: (this.talents.LoneWolf) ? this.combat.singlehanded * 10 : this.combat.singlehanded * 5,
            THDmg: (this.talents.LoneWolf) ? this.combat.twohanded * 10 : this.combat.twohanded * 5,
            finDmg: (this.talents.LoneWolf) ? this.attributes.finesse * 10 : this.attributes.finesse * 5,
            DWDmg: (this.talents.LoneWolf) ? this.combat.dualWielding * 10 : this.combat.dualWielding * 5,
            RangedDmg: (this.talents.LoneWolf) ? this.combat.ranged * 10 : this.combat.ranged * 5,
            SneakDmg: (this.talents.Guerilla) ? 40 : 0,
            intDmg: (this.talents.LoneWolf) ? this.attributes.intelligence * 10 : this.attributes.intelligence * 5,
            PoisonDmg: (this.talents.LoneWolf) ? this.combat.geomancer * 10 : this.combat.geomancer * 5,
            FireDmg: (this.talents.LoneWolf) ? this.combat.pyrokinetic * 10 : this.combat.pyrokinetic * 5,
            reflectDmg: (this.talents.LoneWolf) ? this.combat.retribution * 10 : this.combat.retribution * 5,
            MADmg: (this.talents.LoneWolf) ? this.combat.aerothurge * 10 : this.combat.aerothurge * 5,
            HGDmg: (this.talents.LoneWolf) ? this.combat.huntsman * 10 : this.combat.huntsman * 5,
            SummonDmg: (this.talents.LoneWolf) ? this.combat.summoning * 10 : this.combat.summoning * 5,

            critChance: ((this.talents.LoneWolf) ? (this.attributes.wits - 10 ) * 2 : this.attributes.wits - 10) + ((this.racialTalents.Ingenious) ? 5 : 0),
            rangedCritChance: (this.talents.LoneWolf) ? this.combat.huntsman * 2 : this.combat.huntsman,
            critChanceFullHP: (this.talents.Hothead) ? 10 : 0,
            critChanceMultiplier: 150 + ((this.talents.LoneWolf) ? this.combat.scoundrel * 10 : this.combat.scoundrel * 5),
            THCritChanceMultiplier: (this.talents.LoneWolf) ? this.combat.twohanded * 10 : this.combat.twohanded * 5,

            baseAcc: 95,
            SHAcc: (this.talents.LoneWolf) ? this.combat.singlehanded * 10 : this.combat.singlehanded * 5,
            FullHPAcc: (this.talents.Hothead) ? 10 : 0,

            dodge: ((this.talents.LoneWolf) ? (this.combat.dualWielding + this.combat.leadership) * 2 : (this.combat.dualWielding + this.combat.leadership)) + ((this.talents.ParryMaster) ? 10 : 0) + ((this.racialTalents.DwarvenGuile) ? 5 : 0),
            necroHealing: (this.talents.LoneWolf) ? this.combat.necromancer * 20 : this.combat.necromancer * 10,
            healingIncrease: (this.talents.LoneWolf) ? this.combat.hydrosophist * 10 : this.combat.hydrosophist * 5,

            fire: allResist + ((this.racialTalents.Sophisticated) ? 10 : 0) + ((this.talents.Demon) ? 15 : 0) - ((this.talents.Ice_King) ? 15 : 0),
            water: allResist + ((this.talents.Ice_King) ? 10 : 0) - ((this.talents.Demon) ? 15 : 0),
            earth: allResist,
            air: allResist,
            poison: allResist + (this.racialTalents.Sophisticated) ? 10 : 0,

            initiative: (this.talents.LoneWolf) ? this.attributes.wits * 2 : this.attributes.wits,
            memorySlots: Math.floor(3 + ((this.talents.LoneWolf) ? this.attributes.memory * 2 : this.attributes.memory) - 10 + this.level/2),
            moveSpeed: 5 + ((this.talents.LoneWolf) ? this.combat.scoundrel * 0.6 : this.combat.scoundrel * 0.3),
            maxAP: 6 + ((this.talents.LoneWolf) ? 2 : 0),
            startAP: (this.talents.GlassCannon) ? (6 + ((this.talents.LoneWolf) ? 2 : 0)) : 4,
            turnAP: (this.talents.GlassCannon) ? (6 + ((this.talents.LoneWolf) ? 2 : 0)) : ((this.talents.LoneWolf) ? 6 : 4),
            moveWeight: Math.floor((this.talents.LoneWolf) ? this.attributes.strength * 15 : this.attributes.strength * 7.5),
            carryWeight: (this.talents.LoneWolf) ? this.attributes.strength * 20 : this.attributes.strength * 10
        }
    },
    levelUp() {
        (this.level < 20) ? this.level += 1 : this.error = 'Max level reached'
    },
    levelDown() {
        (this.level > 1) ? this.level -= 1 : this.error = 'Min level reached'
    },
    switchTalent(name) {
        if (this.getPoints().talents >= 0) {
            switch (name) {
                case 'LoneWolf':
                    if (!this.talents.GlassCannon) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Can't be chosen with Glass Cannon Talent"
                    }
                    break;
                case 'GlassCannon':
                    if (!this.talents.LoneWolf) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Can't be chosen with Lone Wolf Talent"
                    }
                    break;
                case 'BiggerAndBetter':
                case 'AllSkilledUp':
                    if (this.level >= 2) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Need 2 level"
                    }
                    break;
                case 'Demon':
                    if (!this.talents.Ice_King && this.combat.pyrokinetic > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Pyrokinetic skill must be above 0 and Ice King Talent mustn't to be chosen"
                    }
                    break;
                case 'Ice_King':
                    if (!this.talents.Demon && this.combat.hydrosophist > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Hydrosophist skill must be above 0 and Demon Talent mustn't to be chosen"
                    }
                    break;
                case 'ElementalRanger':
                case 'DuckDuckGoose':
                    if (this.combat.huntsman > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Huntsman skill must be above 0"
                    }
                    break;
                case 'Executioner':
                    if (!this.talents.ThePawn) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Can't be chosen with The Pawn Talent"
                    }
                    break;
                case 'ThePawn':
                    if (!this.talents.Executioner && this.combat.scoundrel > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Scoundrel skill must be above 0 and Executioner Talent mustn't to be chosen"
                    }
                    break;
                case 'PictureofHealth':
                    if (this.combat.warfare > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Warfare skill must be above 0"
                    }
                    break;
                case 'Guerilla':
                    if (this.combat.sneaking > 0) {
                        this.talents[name] = !this.talents[name];
                    } else {
                        this.error = "Sneaking skill must be above 0"
                    }
                    break;
                default:
                    this.talents[name] = !this.talents[name];
            }
        } else {
            this.error = "Not enough points"
            console.log(this.error)
        }
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
        (this[part][name] > min) ? this[part][name] -= 1 : null
    },
    hasPoints(part) {
        return this.getPoints()[part]
    },
    setRace(race) {
        this.nullifyRacialTalents();
        this.race = race;
        switch (race) {
            case 'human':
                this.switchRacialTalent('Ingenious');
                this.switchRacialTalent('Thrifty');
                break;
            case 'elf':
                this.switchRacialTalent('AncestralKnowledge');
                this.switchRacialTalent('CorpseEater');
                break;
            case 'lizard':
                this.switchRacialTalent('Sophisticated');
                this.switchRacialTalent('Spellsong');
                break;
            case 'dwarf':
                this.switchRacialTalent('DwarvenGuile');
                this.switchRacialTalent('Sturdy');
                break;
            case 'undead_human':
                this.switchRacialTalent('Ingenious');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_elf':
                this.switchRacialTalent('CorpseEater');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_lizard':
                this.switchRacialTalent('Sophisticated');
                this.switchRacialTalent('Undead');
                break;
            case 'undead_dwarf':
                this.switchRacialTalent('Sturdy');
                this.switchRacialTalent('Undead');
                break;
        }
    },
    nullifyRacialTalents() {
        nullifyObjectValues(this.racialTalents)
    }
};

export default character;
