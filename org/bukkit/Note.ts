declare var Java: any;
import Class from '../../java/lang/Class.js'
import Note$Tone from './Note$Tone.js'
import Object from '../../java/lang/Object.js'
import String from '../../java/lang/String.js'

export default interface Note extends Object {
	flattened(): Note;
	getId(): number;
	getOctave(): number;
	getTone(): Note$Tone;
	isSharped(): boolean;
	sharped(): Note;
}

export default class Note {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Note');
	}
	public static $isInstance(obj: any): obj is Note {
		return obj instanceof Note.$javaClass;
	}

	constructor(note: number);
	constructor(octave: number, tone: Note$Tone, sharped: boolean);
	constructor(...args: any[]) {
		return new Note.$javaClass(...args);
	}

	public static flat(octave: number, tone: Note$Tone): Note;
	public static flat(...args: any[]): any {
		return Note.$javaClass.flat(...args);
	}

	public static natural(octave: number, tone: Note$Tone): Note;
	public static natural(...args: any[]): any {
		return Note.$javaClass.natural(...args);
	}

	public static sharp(octave: number, tone: Note$Tone): Note;
	public static sharp(...args: any[]): any {
		return Note.$javaClass.sharp(...args);
	}

}

