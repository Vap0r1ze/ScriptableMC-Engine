declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface EulerAngle extends Object {
	add(x: number, y: number, z: number): EulerAngle;
	getX(): number;
	getY(): number;
	getZ(): number;
	setX(x: number): EulerAngle;
	setY(y: number): EulerAngle;
	setZ(z: number): EulerAngle;
	subtract(x: number, y: number, z: number): EulerAngle;
}

export default class EulerAngle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.EulerAngle');
	}
	public static $isInstance(obj: any): obj is EulerAngle {
		return obj instanceof EulerAngle.$javaClass;
	}

	constructor(x: number, y: number, z: number);
	constructor(...args: any[]) {
		return new EulerAngle.$javaClass(...args);
	}

	public static get ZERO(): EulerAngle {
		return EulerAngle.$javaClass.ZERO;
	}

}

