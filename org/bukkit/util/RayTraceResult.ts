declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Class from '../../../java/lang/Class.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import Vector from './Vector.js'

export default interface RayTraceResult extends Object {
	getHitBlock(): Block;
	getHitBlockFace(): BlockFace;
	getHitEntity(): Entity;
	getHitPosition(): Vector;
}

export default class RayTraceResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.RayTraceResult');
	}
	public static $isInstance(obj: any): obj is RayTraceResult {
		return obj instanceof RayTraceResult.$javaClass;
	}

	constructor(hitPosition: Vector);
	constructor(hitPosition: Vector, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector, hitEntity: Entity);
	constructor(hitPosition: Vector, hitEntity: Entity, hitBlockFace: BlockFace);
	constructor(hitPosition: Vector, hitBlock: Block, hitBlockFace: BlockFace);
	constructor(...args: any[]) {
		return new RayTraceResult.$javaClass(...args);
	}

}

