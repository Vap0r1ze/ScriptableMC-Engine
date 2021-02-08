declare var Java: any;
import BlockData from './BlockData.js'
import FaceAttachable$AttachedFace from './FaceAttachable$AttachedFace.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import String from '../../../../java/lang/String.js'

export default interface FaceAttachable extends BlockData {
	clone(): BlockData;
	clone(): Object;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAttachedFace(): FaceAttachable$AttachedFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttachedFace(arg0: FaceAttachable$AttachedFace): void;
}

export default class FaceAttachable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.FaceAttachable');
	}
	public static $isInstance(obj: any): obj is FaceAttachable {
		return obj instanceof FaceAttachable.$javaClass;
	}

}

