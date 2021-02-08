declare var Java: any;
import Block from './Block.js'
import BlockData from './data/BlockData.js'
import BrewerInventory from '../../../org/bukkit/inventory/BrewerInventory.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Container from './Container.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import World from '../../../org/bukkit/World.js'

export default interface BrewingStand extends Container {
	getBlock(): Block;
	getBlock(): Block;
	getBlockData(): BlockData;
	getBrewingTime(): number;
	getChunk(): Chunk;
	getCustomName(): string;
	getData(): MaterialData;
	getFuelLevel(): number;
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getLock(): string;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getSnapshotInventory(): Inventory;
	getSnapshotInventory(): BrewerInventory;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isLocked(): boolean;
	isPlaced(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBlockData(arg0: BlockData): void;
	setBrewingTime(arg0: number): void;
	setCustomName(arg0: string): void;
	setData(arg0: MaterialData): void;
	setFuelLevel(arg0: number): void;
	setLock(arg0: string): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setRawData(arg0: number): void;
	setType(arg0: Material): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
	public static $isInstance(obj: any): obj is BrewingStand {
		return obj instanceof BrewingStand.$javaClass;
	}

}

