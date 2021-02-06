declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Snowable extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	isSnowy(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setSnowy(arg0: boolean): void;
}

export default class Snowable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Snowable');
	}

}

