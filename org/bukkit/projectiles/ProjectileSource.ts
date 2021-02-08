declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Projectile from '../../../org/bukkit/entity/Projectile.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface ProjectileSource {
	launchProjectile(arg0: Class): Projectile;
	launchProjectile(arg0: Class, arg1: Vector): Projectile;
}

export default class ProjectileSource {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.projectiles.ProjectileSource');
	}
	public static $isInstance(obj: any): obj is ProjectileSource {
		return obj instanceof ProjectileSource.$javaClass;
	}

}

