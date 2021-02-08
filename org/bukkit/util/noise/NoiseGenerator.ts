declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface NoiseGenerator extends Object {
	noise(x: number): number;
	noise(x: number, y: number): number;
	noise(arg0: number, arg1: number, arg2: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}

export default class NoiseGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.NoiseGenerator');
	}
	public static $isInstance(obj: any): obj is NoiseGenerator {
		return obj instanceof NoiseGenerator.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new NoiseGenerator.$javaClass(...args);
	}

	public static floor(x: number): number;
	public static floor(...args: any[]): any {
		return NoiseGenerator.$javaClass.floor(...args);
	}

}

