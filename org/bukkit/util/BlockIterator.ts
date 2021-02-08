declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import Class from '../../../java/lang/Class.js'
import Consumer from '../../../java/util/function/Consumer.js'
import Iterator from '../../../java/util/Iterator.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import Location from '../../../org/bukkit/Location.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import Vector from './Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface BlockIterator extends Object, Iterator {
	forEachRemaining(arg0: Consumer): void;
	hasNext(): boolean;
	next(): Object;
	next(): Block;
	remove(): void;
}

export default class BlockIterator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockIterator');
	}
	public static $isInstance(obj: any): obj is BlockIterator {
		return obj instanceof BlockIterator.$javaClass;
	}

	constructor(loc: Location);
	constructor(entity: LivingEntity);
	constructor(entity: LivingEntity, maxDistance: number);
	constructor(loc: Location, yOffset: number);
	constructor(loc: Location, yOffset: number, maxDistance: number);
	constructor(world: World, start: Vector, direction: Vector, yOffset: number, maxDistance: number);
	constructor(...args: any[]) {
		return new BlockIterator.$javaClass(...args);
	}

}

