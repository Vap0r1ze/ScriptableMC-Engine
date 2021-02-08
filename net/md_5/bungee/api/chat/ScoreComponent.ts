declare var Java: any;
import BaseComponent from './BaseComponent.js'
import Boolean from '../../../../../java/lang/Boolean.js'
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js'
import Class from '../../../../../java/lang/Class.js'
import ClickEvent from './ClickEvent.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'
import HoverEvent from './HoverEvent.js'
import List from '../../../../../java/util/List.js'
import Object from '../../../../../java/lang/Object.js'
import String from '../../../../../java/lang/String.js'

export default interface ScoreComponent extends BaseComponent {
	addExtra(text: string): void;
	addExtra(component: BaseComponent): void;
	copyFormatting(component: BaseComponent): void;
	copyFormatting(component: BaseComponent, replace: boolean): void;
	copyFormatting(component: BaseComponent, retention: ComponentBuilder$FormatRetention, replace: boolean): void;
	duplicate(): BaseComponent;
	duplicate(): ScoreComponent;
	duplicateWithoutFormatting(): BaseComponent;
	getClickEvent(): ClickEvent;
	getColor(): ChatColor;
	getColorRaw(): ChatColor;
	getExtra(): Array<BaseComponent>;
	getFont(): string;
	getFontRaw(): string;
	getHoverEvent(): HoverEvent;
	getInsertion(): string;
	getName(): string;
	getObjective(): string;
	getValue(): string;
	hasFormatting(): boolean;
	isBold(): boolean;
	isBoldRaw(): boolean;
	isItalic(): boolean;
	isItalicRaw(): boolean;
	isObfuscated(): boolean;
	isObfuscatedRaw(): boolean;
	isStrikethrough(): boolean;
	isStrikethroughRaw(): boolean;
	isUnderlined(): boolean;
	isUnderlinedRaw(): boolean;
	retain(retention: ComponentBuilder$FormatRetention): void;
	setBold(bold: boolean): void;
	setClickEvent(clickEvent: ClickEvent): void;
	setColor(color: ChatColor): void;
	setExtra(components: Array<any>): void;
	setFont(font: string): void;
	setHoverEvent(hoverEvent: HoverEvent): void;
	setInsertion(insertion: string): void;
	setItalic(italic: boolean): void;
	setName(_name: string): void;
	setObfuscated(obfuscated: boolean): void;
	setObjective(objective: string): void;
	setStrikethrough(strikethrough: boolean): void;
	setUnderlined(underlined: boolean): void;
	setValue(value: string): void;
	toLegacyText(): string;
	toPlainText(): string;
}

export default class ScoreComponent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ScoreComponent');
	}
	public static $isInstance(obj: any): obj is ScoreComponent {
		return obj instanceof ScoreComponent.$javaClass;
	}

	constructor(original: ScoreComponent);
	constructor(_name: string, objective: string);
	constructor(_name: string, objective: string, value: string);
	constructor(...args: any[]) {
		return new ScoreComponent.$javaClass(...args);
	}

	public static toLegacyText(components: Array<BaseComponent>): string;
	public static toLegacyText(...args: any[]): any {
		return ScoreComponent.$javaClass.toLegacyText(...args);
	}

	public static toPlainText(components: Array<BaseComponent>): string;
	public static toPlainText(...args: any[]): any {
		return ScoreComponent.$javaClass.toPlainText(...args);
	}

}

