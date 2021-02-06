declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Powerable extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setPowered(arg0: boolean): void;
}

export default class Powerable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Powerable');
	}

}

