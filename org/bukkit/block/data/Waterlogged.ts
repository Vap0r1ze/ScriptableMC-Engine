declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Waterlogged extends BlockData {
	clone(): BlockData;
	clone(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setWaterlogged(arg0: boolean): void;
}

export default class Waterlogged {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Waterlogged');
	}

}

