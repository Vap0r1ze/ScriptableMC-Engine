declare var Java: any;
import Class from '../../java/lang/Class.js'
import Color from './Color.js'
import FireworkEffect from './FireworkEffect.js'
import FireworkEffect$Type from './FireworkEffect$Type.js'
import Iterable from '../../java/lang/Iterable.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface FireworkEffect$Builder extends Object {
	build(): FireworkEffect;
	flicker(flicker: boolean): FireworkEffect$Builder;
	trail(trail: boolean): FireworkEffect$Builder;
	with(type: FireworkEffect$Type): FireworkEffect$Builder;
	withColor(color: Color): FireworkEffect$Builder;
	withColor(colors: Iterable): FireworkEffect$Builder;
	withColor(colors: Array<Color>): FireworkEffect$Builder;
	withFade(color: Color): FireworkEffect$Builder;
	withFade(colors: Iterable): FireworkEffect$Builder;
	withFade(colors: Array<Color>): FireworkEffect$Builder;
	withFlicker(): FireworkEffect$Builder;
	withTrail(): FireworkEffect$Builder;
}

export default class FireworkEffect$Builder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Builder');
	}
	public static $isInstance(obj: any): obj is FireworkEffect$Builder {
		return obj instanceof FireworkEffect$Builder.$javaClass;
	}

}

