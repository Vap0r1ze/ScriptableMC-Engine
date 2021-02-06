declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Levelled extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getLevel(): number;
	getMaterial(): Material;
	getMaximumLevel(): number;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setLevel(arg0: number): void;
}

export default class Levelled {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Levelled');
	}

}

