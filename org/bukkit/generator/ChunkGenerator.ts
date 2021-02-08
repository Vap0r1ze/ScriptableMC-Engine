declare var Java: any;
import BlockPopulator from './BlockPopulator.js'
import ChunkGenerator$BiomeGrid from './ChunkGenerator$BiomeGrid.js'
import ChunkGenerator$ChunkData from './ChunkGenerator$ChunkData.js'
import Class from '../../../java/lang/Class.js'
import List from '../../../java/util/List.js'
import Location from '../../../org/bukkit/Location.js'
import Object from '../../../java/lang/Object.js'
import Random from '../../../java/util/Random.js'
import String from '../../../java/lang/String.js'
import World from '../../../org/bukkit/World.js'

export default interface ChunkGenerator extends Object {
	canSpawn(world: World, x: number, z: number): boolean;
	generateChunkData(world: World, random: Random, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
	getDefaultPopulators(world: World): Array<BlockPopulator>;
	getFixedSpawnLocation(world: World, random: Random): Location;
	isParallelCapable(): boolean;
	shouldGenerateCaves(): boolean;
	shouldGenerateDecorations(): boolean;
	shouldGenerateMobs(): boolean;
	shouldGenerateStructures(): boolean;
}

export default class ChunkGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator');
	}
	public static $isInstance(obj: any): obj is ChunkGenerator {
		return obj instanceof ChunkGenerator.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new ChunkGenerator.$javaClass(...args);
	}

}

