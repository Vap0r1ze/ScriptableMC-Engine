declare var Java: any;
import Comparable from '../../../java/lang/Comparable.js'
import Consumer from '../../../java/util/function/Consumer.js'
import File from '../../../java/io/File.js'
import FileSystem from './FileSystem.js'
import Iterable from '../../../java/lang/Iterable.js'
import Iterator from '../../../java/util/Iterator.js'
import LinkOption from './LinkOption.js'
import Object from '../../../java/lang/Object.js'
import Spliterator from '../../../java/util/Spliterator.js'
import String from '../../../java/lang/String.js'
import WatchEvent$Kind from './WatchEvent$Kind.js'
import WatchEvent$Modifier from './WatchEvent$Modifier.js'
import WatchKey from './WatchKey.js'
import WatchService from './WatchService.js'
import Watchable from './Watchable.js'

export default interface Path extends Comparable, Iterable, Watchable {
	compareTo(arg0: Path): number;
	compareTo(arg0: Object): number;
	endsWith(arg0: string): boolean;
	endsWith(arg0: Path): boolean;
	forEach(arg0: Consumer): void;
	getFileName(): Path;
	getFileSystem(): FileSystem;
	getName(arg0: number): Path;
	getNameCount(): number;
	getParent(): Path;
	getRoot(): Path;
	isAbsolute(): boolean;
	iterator(): Iterator;
	normalize(): Path;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>): WatchKey;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>, arg2: Array<WatchEvent$Modifier>): WatchKey;
	relativize(arg0: Path): Path;
	resolve(arg0: Path): Path;
	resolve(arg0: string): Path;
	resolveSibling(arg0: Path): Path;
	resolveSibling(arg0: string): Path;
	spliterator(): Spliterator;
	startsWith(arg0: string): boolean;
	startsWith(arg0: Path): boolean;
	subpath(arg0: number, arg1: number): Path;
	toAbsolutePath(): Path;
	toFile(): File;
	toRealPath(arg0: Array<LinkOption>): Path;
	toUri(): any;
}

export default class Path {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.Path');
	}
	public static $isInstance(obj: any): obj is Path {
		return obj instanceof Path.$javaClass;
	}

}

