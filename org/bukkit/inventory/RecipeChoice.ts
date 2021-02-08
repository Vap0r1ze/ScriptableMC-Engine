declare var Java: any;
import ItemStack from './ItemStack.js'

export default interface RecipeChoice {
	and(arg0: any): any;
	clone(): any;
	clone(): RecipeChoice;
	getItemStack(): ItemStack;
	negate(): any;
	or(arg0: any): any;
	test(arg0: any): boolean;
	test(arg0: ItemStack): boolean;
}

export default class RecipeChoice {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.RecipeChoice');
	}
	public static $isInstance(obj: any): obj is RecipeChoice {
		return obj instanceof RecipeChoice.$javaClass;
	}

}

