declare var Java: any;
import Biome from '../../../org/bukkit/block/Biome.js'

export default interface ChunkGenerator$BiomeGrid {
	getBiome(arg0: number, arg1: number): Biome;
	getBiome(arg0: number, arg1: number, arg2: number): Biome;
	setBiome(arg0: number, arg1: number, arg2: Biome): void;
	setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void;
}

export default class ChunkGenerator$BiomeGrid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.ChunkGenerator$BiomeGrid');
	}
	public static $isInstance(obj: any): obj is ChunkGenerator$BiomeGrid {
		return obj instanceof ChunkGenerator$BiomeGrid.$javaClass;
	}

}

