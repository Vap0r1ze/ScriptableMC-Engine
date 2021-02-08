declare var Java: any;
import Chunk from '../../../org/bukkit/Chunk.js'
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import Random from '../../../java/util/Random.js'
import String from '../../../java/lang/String.js'
import World from '../../../org/bukkit/World.js'

export default interface BlockPopulator extends Object {
	populate(arg0: World, arg1: Random, arg2: Chunk): void;
}

export default class BlockPopulator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.BlockPopulator');
	}
	public static $isInstance(obj: any): obj is BlockPopulator {
		return obj instanceof BlockPopulator.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new BlockPopulator.$javaClass(...args);
	}

}

