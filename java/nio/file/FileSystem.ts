declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Closeable from '../../../java/io/Closeable.js'
import FileSystemProvider from './spi/FileSystemProvider.js'
import Iterable from '../../../java/lang/Iterable.js'
import Object from '../../../java/lang/Object.js'
import Path from './Path.js'
import PathMatcher from './PathMatcher.js'
import Set from '../../../java/util/Set.js'
import String from '../../../java/lang/String.js'
import UserPrincipalLookupService from './attribute/UserPrincipalLookupService.js'
import WatchService from './WatchService.js'

export default interface FileSystem extends Object, Closeable {
	close(): void;
	getFileStores(): Iterable;
	getPath(arg0: string, arg1: Array<string>): Path;
	getPathMatcher(arg0: string): PathMatcher;
	getRootDirectories(): Iterable;
	getSeparator(): string;
	getUserPrincipalLookupService(): UserPrincipalLookupService;
	isOpen(): boolean;
	isReadOnly(): boolean;
	newWatchService(): WatchService;
	provider(): FileSystemProvider;
	supportedFileAttributeViews(): Set;
}

export default class FileSystem {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.FileSystem');
	}
	public static $isInstance(obj: any): obj is FileSystem {
		return obj instanceof FileSystem.$javaClass;
	}

}

