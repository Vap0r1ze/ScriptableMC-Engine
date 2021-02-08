declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Class from '../../../../java/lang/Class.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../../org/bukkit/Material.js'
import Object from '../../../../java/lang/Object.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerBucketEvent from './PlayerBucketEvent.js'
import String from '../../../../java/lang/String.js'

export default interface PlayerBucketEmptyEvent extends PlayerBucketEvent {
	getBlock(): Block;
	getBlockClicked(): Block;
	getBlockFace(): BlockFace;
	getBucket(): Material;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItemStack(): ItemStack;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setItemStack(itemStack: ItemStack): void;
}

export default class PlayerBucketEmptyEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBucketEmptyEvent');
	}
	public static $isInstance(obj: any): obj is PlayerBucketEmptyEvent {
		return obj instanceof PlayerBucketEmptyEvent.$javaClass;
	}

	constructor(who: Player, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(who: Player, block: Block, blockClicked: Block, blockFace: BlockFace, bucket: Material, itemInHand: ItemStack);
	constructor(...args: any[]) {
		return new PlayerBucketEmptyEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerBucketEmptyEvent.$javaClass.getHandlerList(...args);
	}

}

