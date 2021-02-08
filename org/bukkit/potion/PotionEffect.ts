declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Color from '../../../org/bukkit/Color.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import PotionEffectType from './PotionEffectType.js'
import String from '../../../java/lang/String.js'

export default interface PotionEffect extends Object, ConfigurationSerializable {
	apply(entity: LivingEntity): boolean;
	getAmplifier(): number;
	getColor(): Color;
	getDuration(): number;
	getType(): PotionEffectType;
	hasIcon(): boolean;
	hasParticles(): boolean;
	isAmbient(): boolean;
	serialize(): Map;
}

export default class PotionEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffect');
	}
	public static $isInstance(obj: any): obj is PotionEffect {
		return obj instanceof PotionEffect.$javaClass;
	}

	constructor(map: Map);
	constructor(type: PotionEffectType, duration: number, amplifier: number);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
	constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
	constructor(...args: any[]) {
		return new PotionEffect.$javaClass(...args);
	}

}

