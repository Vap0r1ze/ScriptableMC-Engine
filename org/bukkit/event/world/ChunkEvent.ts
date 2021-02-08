declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface ChunkEvent extends WorldEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class ChunkEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkEvent');
	}
	public static $isInstance(obj: any): obj is ChunkEvent {
		return obj instanceof ChunkEvent.$javaClass;
	}

}

