declare var Java: any;
import Chunk from '../../../../org/bukkit/Chunk.js'
import ChunkEvent from './ChunkEvent.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface ChunkPopulateEvent extends ChunkEvent {
	getChunk(): Chunk;
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class ChunkPopulateEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
	}
	public static $isInstance(obj: any): obj is ChunkPopulateEvent {
		return obj instanceof ChunkPopulateEvent.$javaClass;
	}

	constructor(chunk: Chunk);
	constructor(...args: any[]) {
		return new ChunkPopulateEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return ChunkPopulateEvent.$javaClass.getHandlerList(...args);
	}

}

