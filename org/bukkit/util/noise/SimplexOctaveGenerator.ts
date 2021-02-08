declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import NoiseGenerator from './NoiseGenerator.js'
import Object from '../../../../java/lang/Object.js'
import OctaveGenerator from './OctaveGenerator.js'
import Random from '../../../../java/util/Random.js'
import String from '../../../../java/lang/String.js'
import World from '../../../../org/bukkit/World.js'

export default interface SimplexOctaveGenerator extends OctaveGenerator {
	getOctaves(): Array<NoiseGenerator>;
	getWScale(): number;
	getXScale(): number;
	getYScale(): number;
	getZScale(): number;
	noise(x: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, frequency: number, amplitude: number): number;
	noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
	setScale(scale: number): void;
	setWScale(scale: number): void;
	setXScale(scale: number): void;
	setYScale(scale: number): void;
	setZScale(scale: number): void;
}

export default class SimplexOctaveGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.SimplexOctaveGenerator');
	}
	public static $isInstance(obj: any): obj is SimplexOctaveGenerator {
		return obj instanceof SimplexOctaveGenerator.$javaClass;
	}

	constructor(world: World, octaves: number);
	constructor(seed: number, octaves: number);
	constructor(rand: Random, octaves: number);
	constructor(...args: any[]) {
		return new SimplexOctaveGenerator.$javaClass(...args);
	}

}

