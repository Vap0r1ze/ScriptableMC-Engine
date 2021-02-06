declare var Java: any;
import Color from '../../../org/bukkit/Color.js'
import PotionEffect from './PotionEffect.js'

export default interface PotionEffectType {
	createEffect(duration: number, amplifier: number): PotionEffect;
	getColor(): Color;
	getDurationModifier(): number;
	getId(): number;
	getName(): string;
	isInstant(): boolean;
}

export default class PotionEffectType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.PotionEffectType');
	}

	public static get ABSORPTION(): PotionEffectType {
		return PotionEffectType.$javaClass.ABSORPTION;
	}

	public static get BAD_OMEN(): PotionEffectType {
		return PotionEffectType.$javaClass.BAD_OMEN;
	}

	public static get BLINDNESS(): PotionEffectType {
		return PotionEffectType.$javaClass.BLINDNESS;
	}

	public static get CONDUIT_POWER(): PotionEffectType {
		return PotionEffectType.$javaClass.CONDUIT_POWER;
	}

	public static get CONFUSION(): PotionEffectType {
		return PotionEffectType.$javaClass.CONFUSION;
	}

	public static get DAMAGE_RESISTANCE(): PotionEffectType {
		return PotionEffectType.$javaClass.DAMAGE_RESISTANCE;
	}

	public static get DOLPHINS_GRACE(): PotionEffectType {
		return PotionEffectType.$javaClass.DOLPHINS_GRACE;
	}

	public static get FAST_DIGGING(): PotionEffectType {
		return PotionEffectType.$javaClass.FAST_DIGGING;
	}

	public static get FIRE_RESISTANCE(): PotionEffectType {
		return PotionEffectType.$javaClass.FIRE_RESISTANCE;
	}

	public static get GLOWING(): PotionEffectType {
		return PotionEffectType.$javaClass.GLOWING;
	}

	public static get HARM(): PotionEffectType {
		return PotionEffectType.$javaClass.HARM;
	}

	public static get HEAL(): PotionEffectType {
		return PotionEffectType.$javaClass.HEAL;
	}

	public static get HEALTH_BOOST(): PotionEffectType {
		return PotionEffectType.$javaClass.HEALTH_BOOST;
	}

	public static get HERO_OF_THE_VILLAGE(): PotionEffectType {
		return PotionEffectType.$javaClass.HERO_OF_THE_VILLAGE;
	}

	public static get HUNGER(): PotionEffectType {
		return PotionEffectType.$javaClass.HUNGER;
	}

	public static get INCREASE_DAMAGE(): PotionEffectType {
		return PotionEffectType.$javaClass.INCREASE_DAMAGE;
	}

	public static get INVISIBILITY(): PotionEffectType {
		return PotionEffectType.$javaClass.INVISIBILITY;
	}

	public static get JUMP(): PotionEffectType {
		return PotionEffectType.$javaClass.JUMP;
	}

	public static get LEVITATION(): PotionEffectType {
		return PotionEffectType.$javaClass.LEVITATION;
	}

	public static get LUCK(): PotionEffectType {
		return PotionEffectType.$javaClass.LUCK;
	}

	public static get NIGHT_VISION(): PotionEffectType {
		return PotionEffectType.$javaClass.NIGHT_VISION;
	}

	public static get POISON(): PotionEffectType {
		return PotionEffectType.$javaClass.POISON;
	}

	public static get REGENERATION(): PotionEffectType {
		return PotionEffectType.$javaClass.REGENERATION;
	}

	public static get SATURATION(): PotionEffectType {
		return PotionEffectType.$javaClass.SATURATION;
	}

	public static get SLOW(): PotionEffectType {
		return PotionEffectType.$javaClass.SLOW;
	}

	public static get SLOW_DIGGING(): PotionEffectType {
		return PotionEffectType.$javaClass.SLOW_DIGGING;
	}

	public static get SLOW_FALLING(): PotionEffectType {
		return PotionEffectType.$javaClass.SLOW_FALLING;
	}

	public static get SPEED(): PotionEffectType {
		return PotionEffectType.$javaClass.SPEED;
	}

	public static get UNLUCK(): PotionEffectType {
		return PotionEffectType.$javaClass.UNLUCK;
	}

	public static get WATER_BREATHING(): PotionEffectType {
		return PotionEffectType.$javaClass.WATER_BREATHING;
	}

	public static get WEAKNESS(): PotionEffectType {
		return PotionEffectType.$javaClass.WEAKNESS;
	}

	public static get WITHER(): PotionEffectType {
		return PotionEffectType.$javaClass.WITHER;
	}

	public static getById(id: number): PotionEffectType;
	public static getById(...args: any[]): any {
		return PotionEffectType.$javaClass.getById(...args);
	}

	public static getByName(_name: string): PotionEffectType;
	public static getByName(...args: any[]): any {
		return PotionEffectType.$javaClass.getByName(...args);
	}

	public static registerPotionEffectType(type: PotionEffectType): void;
	public static registerPotionEffectType(...args: any[]): any {
		return PotionEffectType.$javaClass.registerPotionEffectType(...args);
	}

	public static stopAcceptingRegistrations(): void;
	public static stopAcceptingRegistrations(...args: any[]): any {
		return PotionEffectType.$javaClass.stopAcceptingRegistrations(...args);
	}

	public static values(): Array<PotionEffectType>;
	public static values(...args: any[]): any {
		return PotionEffectType.$javaClass.values(...args);
	}

}

