declare var Java: any;
import BaseComponent from './BaseComponent.js'
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js'
import ClickEvent from './ClickEvent.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'
import HoverEvent from './HoverEvent.js'

export default interface TextComponent extends BaseComponent {
	addExtra(text: string): void;
	addExtra(component: BaseComponent): void;
	copyFormatting(component: BaseComponent): void;
	copyFormatting(component: BaseComponent, replace: boolean): void;
	copyFormatting(component: BaseComponent, retention: ComponentBuilder$FormatRetention, replace: boolean): void;
	duplicate(): BaseComponent;
	duplicate(): TextComponent;
	duplicateWithoutFormatting(): BaseComponent;
	getClickEvent(): ClickEvent;
	getColor(): ChatColor;
	getColorRaw(): ChatColor;
	getExtra(): Array<BaseComponent>;
	getFont(): string;
	getFontRaw(): string;
	getHoverEvent(): HoverEvent;
	getInsertion(): string;
	getText(): string;
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
	setObfuscated(obfuscated: boolean): void;
	setStrikethrough(strikethrough: boolean): void;
	setText(text: string): void;
	setUnderlined(underlined: boolean): void;
	toLegacyText(): string;
	toPlainText(): string;
}

export default class TextComponent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.TextComponent');
	}

	constructor();
	constructor(extras: Array<BaseComponent>);
	constructor(text: string);
	constructor(textComponent: TextComponent);
	constructor(...args: any[]) {
		return new TextComponent.$javaClass(...args);
	}

	public static fromLegacyText(message: string): Array<BaseComponent>;
	public static fromLegacyText(message: string, defaultColor: ChatColor): Array<BaseComponent>;
	public static fromLegacyText(...args: any[]): any {
		return TextComponent.$javaClass.fromLegacyText(...args);
	}

	public static toLegacyText(components: Array<BaseComponent>): string;
	public static toLegacyText(...args: any[]): any {
		return TextComponent.$javaClass.toLegacyText(...args);
	}

	public static toPlainText(components: Array<BaseComponent>): string;
	public static toPlainText(...args: any[]): any {
		return TextComponent.$javaClass.toPlainText(...args);
	}

}
