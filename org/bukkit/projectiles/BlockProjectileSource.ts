declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import Class from '../../../java/lang/Class.js'
import Projectile from '../../../org/bukkit/entity/Projectile.js'
import ProjectileSource from './ProjectileSource.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface BlockProjectileSource extends ProjectileSource {
	getBlock(): Block;
	launchProjectile(arg0: Class): Projectile;
	launchProjectile(arg0: Class, arg1: Vector): Projectile;
}

export default class BlockProjectileSource {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.projectiles.BlockProjectileSource');
	}
	public static $isInstance(obj: any): obj is BlockProjectileSource {
		return obj instanceof BlockProjectileSource.$javaClass;
	}

}

