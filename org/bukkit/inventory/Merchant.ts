declare var Java: any;
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import List from '../../../java/util/List.js'
import MerchantRecipe from './MerchantRecipe.js'

export default interface Merchant {
	getRecipe(arg0: number): MerchantRecipe;
	getRecipeCount(): number;
	getRecipes(): Array<MerchantRecipe>;
	getTrader(): HumanEntity;
	isTrading(): boolean;
	setRecipe(arg0: number, arg1: MerchantRecipe): void;
	setRecipes(arg0: Array<any>): void;
}

export default class Merchant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.Merchant');
	}
	public static $isInstance(obj: any): obj is Merchant {
		return obj instanceof Merchant.$javaClass;
	}

}

