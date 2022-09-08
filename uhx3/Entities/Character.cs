using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace uhx3.Entities
{ 
    public class Base 
    {
        public int id {get;set;}
        public string name {get;set;}
        public string description {get;set;}
    }

    public class SpellSlot : Base 
    {
        public int level {get;set;}
        public int knownSpells {get;set;}
    }
    public class Equipment : Base  
    {
        public string category {get;set;}
        public int weight {get;set;}
        public int cost {get;set;}
    }
    public class CharacterProficiency : Base
    {
        public Equipment equipment {get;set;}
        public List<CharacterClass> classes {get;set;}
        public List<CharacterRace> races {get;set;}
        public string type {get;set;}
    }

    public class TriggerCondition : Base 
    {

    }

    public class CharacterClassFeature : Base
    {
        public int levelGain {get;set;}
        public string prerequisite {get;set;}
        public string prerequisiteType {get;set;}
        public List<TriggerCondition> conditions {get;set;}
    }
    public class Skill 
    {
        public int Id {get; set;}
        public string ability {get;set;}
    }
    public class Dice
    {
        public int Id { get; set; }

    }
    public class CharacterSubClass
    {
        public int Id { get; set; }

    }
    public class CharacterRacialTrait : Base {
        public int vision {get;set;}
        public TriggerCondition condition {get;set;}
    }


    public class CharacterSubRace : Base 
    {
    public List<CharacterRacialTrait> racialTraits {get;set;}
    public List<CharacterProficiency> proficiencies {get;set;}
    public int constitutionModifier {get;set;}
    public int dexterityModifier {get;set;}
    public int strengthModifier {get;set;}
    public int wisdomModifier {get; set;}
    public int intelligenceModifier {get;set;}
    public int charismaModifier {get;set;}
    public string language {get;set;}
}
    public class CharacterRace : Base
    {
        public List<CharacterRacialTrait> racialTraits {get;set;}
        public CharacterSubRace subRace {get;set;}
        public List<CharacterProficiency> proficiencies {get;set;}
        public int consititutionModifier {get;set;}
        public int dexterityModifier {get;set;}
        public int strengthModifier {get;set;}
        public int wisdomModifier {get;set;}
        public int intelligenceModifier {get;set;}
        public int charismaModifier {get;set;}
        public string size {get;set;}
        public int age {get;set;}
        public int speed {get;set;}
        public string alignment {get;set;}
        public string language {get;set;}
    }
    public class CharacterClass : Base
    {
        public CharacterSubClass subClass {get; set;}
        public Dice hitDie { get; set; }
        public Skill martialArts {get;set;}
        public Skill sneakAttack {get;set;}
        public List<Dice> savingThrows {get;set;}
        public List<CharacterProficiency> proficiencies {get;set;} 
        public List<CharacterClassFeature> classFeatures {get;set;}
        public int sorceryPoints {get;set;}
        public int rages {get;set;}
        public int rageDamage {get;set;}
        public int kiPoints {get;set;}
        public int unarmoredMovement {get;set;}
        public List<SpellSlot> spellSlots {get;set;}


    }
    public class Character : Base
    {   
        public CharacterRace race {get; set;}
        public CharacterClass characterClass {get; set;}
        public string background {get; set;}
    }
}