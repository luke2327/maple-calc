import { UnionControl, UnionCard } from './union.model';
import { Weapon, Item } from './item.model';

export interface Stat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  STRPercent: number;
  DEXPercent: number;
  INTPercent: number;
  LUKPercent: number;
  STRFinal: number;
  DEXFinal: number;
  INTFinal: number;
  LUKFinal: number;
  maxHP: number;
  maxHPPercent: number;
  maxHPFinal: number;
  maxMP: number;
  maxMPPercent: number;

  weaponAttack: number;
  magicAttack: number;
  weaponAttackPercent: number;
  magicAttackPercent: number;

  mastery: number;
  damage: number;
  bossDamage: number;
  ignoreDefense: number;
  finalDamage: number;
  criticalRate: number;
  criticalDamage: number;

  defense: number;
  stance: number;

  cooldownReduce: number;
  cooldownReducePercent: number;

  summonPersist: number;
  buffPersist: number;

  dropRate: number;
  mesoGain: number;
  expGain: number;

  ccImmune: number;
  elementImmune: number;
}

export interface LevelStat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
}

export interface HyperStat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  DFTF: number;
  criticalRate: number;
  criticalDamage: number;
  ignoreDefense: number;
  damage: number;
  bossDamage: number;
  stance: number;
}

export interface Ability {
  type: keyof Stat;
  amount: number;
}

export type WARRIOR =
  | 'HERO'
  | 'PALADIN'
  | 'DARK_KNIGHT'
  | 'SOULMASTER'
  | 'MIHILE'
  | 'ARAN'
  | 'BLASTER'
  | 'DEMONSLAYER'
  | 'DEMONAVENGER'
  | 'KAISER'
  | 'ZERO';

export type MAGE =
  | 'ARCHMAGE_FIRE_POISON'
  | 'ARCHMAGE_ICE_LIGHTNING'
  | 'BISHOP'
  | 'FLAMEWIZARD'
  | 'EVEN'
  | 'LUMINOUS'
  | 'BATTLEMAGE'
  | 'KINESIS'
  | 'ILLIUM';

export type ARCHER =
  | 'BOWMASTER'
  | 'MARKSMAN'
  | 'WINDBREAKER'
  | 'MERCEDES'
  | 'WILDHUNTER';

export type ROGUE =
  | 'NIGHTLORD'
  | 'SHADOWER'
  | 'NIGHTWALKER'
  | 'PHANTOM'
  | 'CADENA'
  | 'XENON';

export type PIRATE =
  | 'VIPER'
  | 'CAPTAIN'
  | 'CANNONSHOOTER'
  | 'STRIKER'
  | 'EUNWOL'
  | 'MECHANIC'
  | 'ANGELICBUSTER'
  | 'ARK'
  | 'XENON';

export type JOB = WARRIOR | MAGE | ARCHER | ROGUE | PIRATE;

export interface Character {
  job: JOB;
  stat: Stat;
  hyperStat: HyperStat;
  abilities: Ability[];
  unionCards: UnionCard[];
  unionControl: UnionControl;
  items: {
    weapon: Weapon;
    subweapon: Item;
    emblem: Item;
    cap: Item;
    clothes: Item;
    pants: Item;
    overall: Item;
    shoes: Item;
    gloves: Item;
    cape: Item;
    ring1: Item;
    ring2: Item;
    ring3: Item;
    ring4: Item;
    pendant1: Item;
    pendant2: Item;
    forehead: Item;
    eyeacc: Item;
    shoulder: Item;
    earacc: Item;
    poket: Item;
    badge: Item;
    medal: Item;
    belt: Item;
    heart: Item;
  };
}