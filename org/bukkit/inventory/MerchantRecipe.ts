declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from './ItemStack.js'
import List from '../../../java/util/List.js'
import Object from '../../../java/lang/Object.js'
import Recipe from './Recipe.js'
import String from '../../../java/lang/String.js'

export default interface MerchantRecipe extends Object, Recipe {
	addIngredient(item: ItemStack): void;
	getIngredients(): Array<ItemStack>;
	getMaxUses(): number;
	getPriceMultiplier(): number;
	getResult(): ItemStack;
	getUses(): number;
	getVillagerExperience(): number;
	hasExperienceReward(): boolean;
	removeIngredient(index: number): void;
	setExperienceReward(flag: boolean): void;
	setIngredients(ingredients: Array<any>): void;
	setMaxUses(maxUses: number): void;
	setPriceMultiplier(priceMultiplier: number): void;
	setUses(uses: number): void;
	setVillagerExperience(villagerExperience: number): void;
}

export default class MerchantRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.MerchantRecipe');
	}
	public static $isInstance(obj: any): obj is MerchantRecipe {
		return obj instanceof MerchantRecipe.$javaClass;
	}

	constructor(result: ItemStack, maxUses: number);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean);
	constructor(result: ItemStack, uses: number, maxUses: number, experienceReward: boolean, villagerExperience: number, priceMultiplier: number);
	constructor(...args: any[]) {
		return new MerchantRecipe.$javaClass(...args);
	}

}

