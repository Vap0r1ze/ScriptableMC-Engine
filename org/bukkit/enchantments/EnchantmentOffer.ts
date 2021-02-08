declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Enchantment from './Enchantment.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EnchantmentOffer extends Object {
	getCost(): number;
	getEnchantment(): Enchantment;
	getEnchantmentLevel(): number;
	setCost(cost: number): void;
	setEnchantment(enchantment: Enchantment): void;
	setEnchantmentLevel(enchantmentLevel: number): void;
}

export default class EnchantmentOffer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.enchantments.EnchantmentOffer');
	}
	public static $isInstance(obj: any): obj is EnchantmentOffer {
		return obj instanceof EnchantmentOffer.$javaClass;
	}

	constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
	constructor(...args: any[]) {
		return new EnchantmentOffer.$javaClass(...args);
	}

}

