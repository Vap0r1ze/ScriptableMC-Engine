declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import NoiseGenerator from './NoiseGenerator.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface OctaveGenerator extends Object {
	getOctaves(): Array<NoiseGenerator>;
	getXScale(): number;
	getYScale(): number;
	getZScale(): number;
	noise(x: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, frequency: number, amplitude: number): number;
	noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
	setScale(scale: number): void;
	setXScale(scale: number): void;
	setYScale(scale: number): void;
	setZScale(scale: number): void;
}

export default class OctaveGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.OctaveGenerator');
	}
	public static $isInstance(obj: any): obj is OctaveGenerator {
		return obj instanceof OctaveGenerator.$javaClass;
	}

}

