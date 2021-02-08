declare var Java: any;
import BaseComponent from '../../../../net/md_5/bungee/api/chat/BaseComponent.js'
import Class from '../../../../java/lang/Class.js'
import List from '../../../../java/util/List.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface BookMeta$Spigot extends Object {
	addPage(pages: Array<Array<BaseComponent>>): void;
	getPage(page: number): Array<BaseComponent>;
	getPages(): Array<Array<BaseComponent>>;
	setPage(page: number, data: Array<BaseComponent>): void;
	setPages(pages: Array<Array<BaseComponent>>): void;
	setPages(pages: Array<any>): void;
}

export default class BookMeta$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta$Spigot');
	}
	public static $isInstance(obj: any): obj is BookMeta$Spigot {
		return obj instanceof BookMeta$Spigot.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new BookMeta$Spigot.$javaClass(...args);
	}

}

