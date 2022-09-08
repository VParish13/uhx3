export class Base {
    id: number;
    name: string;
    description?: string;
}

export class TriggerCondition {
    //Determine traits activation
}

export class CharacterRacialTrait extends Base {
    vision: number;
    condition?: TriggerCondition;
}

export class Equipment extends Base  {
    category: string;
    weight: number;
    cost: number;
}

export class CharacterProficiency extends Base {
    equipment: Equipment;
    classes: Array<CharacterClass>;
    races: Array<CharacterRace>;
    type: string;
}

export class CharacterSubRace extends Base {
    racialTraits: Array<CharacterRacialTrait>;
    proficiencies: Array<CharacterProficiency>;
    constitutionModifier: number;
    dexterityModifier: number;
    strengthModifier: number;
    wisdomModifier: number;
    intelligenceModifier: number;
    charismaModifier: number;
    language: string;
}

export class CharacterRace extends Base  {
    racialTraits: Array<CharacterRacialTrait>;
    subRace: CharacterSubRace;
    proficiencies: Array<CharacterProficiency>;
    constitutionModifier: number;
    dexterityModifier: number;
    strengthModifier: number;
    wisdomModifier: number;
    intelligenceModifier: number;
    charismaModifier: number;
    size: string;
    age: number;
    speed: number;
    alignment: string;
    language: string;
}

export class Feat extends Base {
    levelGain: number;
    prerequisite: string;
    prerequisiteType: string;
    conditions: Array<TriggerCondition>;
}

export class CharacterSubClass extends Base {
    skills: Array<string>;
    feats: Array<Feat>;
    armorProficiency: string;
    weaponProficiency: string;
    shield: boolean;
    spell: boolean;
}

export class Dice  extends Base {
    value: number;
}

export class Skill extends Base {
    ability: string;
}

export class CharacterClassFeature extends Base {
    levelGain: number;
    prerequisite: string;
    prerequisiteType: string;
    conditions: Array<TriggerCondition>;
}

export class SpellSlot {
    level: number;
    knownSpells: number;
}

export class CharacterClass extends Base {
    subClass: CharacterSubClass;
    hitDie: Dice;
    martialArts: Skill;
    sneakAttack: Skill;
    savingThrows: Array<Dice>;
    proficiencies: Array<CharacterProficiency>;
    classFeatures: Array<CharacterClassFeature>;
    sorceryPoints: number;
    rages: number;
    rageDamage: number;
    kiPoints: number;
    unarmoredMovement: number;
    spellSlots: Array<SpellSlot>;
}

export class Character extends Base {
    race: CharacterRace;
    class: CharacterClass;
    background: string;
}
